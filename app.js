const http = require('http');
const path = require('path');
const parse = require('url').parse;
const fs = require('fs');
const superagent = require('superagent');
const mime = require('mime');
let caches = {};
let root = __dirname;


/*
* 用来获取远端服务器的数据
*/
function getData(query){
    return new Promise((resolve,reject)=>{
        superagent.get('http://www.ivali.com/route.php?' + query)
            .end((err,data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data.text);
                }
            });
    });
}


/*
*用来返回浏览器请求的静态文件，请求的路径不包含后缀，则返回主页index，否则返回对应的文件。
*/
function static(req,res){
    let url = parse(req.url).pathname;
    if(url.indexOf('.') === -1){
        fs.readFile(root + '/dist/index.html', (err, data)=>{
            if(err){
                res.statusCode = 500;
                res.end('Server Error.');
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }else{
        fs.readFile(path.join(root, 'dist', url), (err, data)=>{
            if(err){
                res.statusCode = 404;
                res.end('Not Found.');
            }else{
                res.writeHead(200, {'Content-Type': mime.lookup(path.join(root, 'dist', url))});
                res.end(data);
            }
        });
    }
}


/*
* 如果是请求远程数据的路径，则获取远程数据并存在caches对象中作为缓存。否则提交静态文件请求。
*/
async function router(req, res){
    let url = parse(req.url);
    if(url.pathname === '/q'){
        let data = await getData(url.query);
        caches[req.url] = data;
        res.end(data);
    }else{
        static(req, res);
    }
}

/*
* 如果请求的路径已经被缓存，则直接返回缓存中的数据，顺便向远端请求数据更新下缓存。否则返回新的响应。
*/

function handler (req,res){
    if(caches[req.url]){
        res.end(caches[req.url]);
        router(req, res);// 在返回响应之后更新缓存操作。
    }else{
        router(req, res);
    }
}

const app = http.createServer(handler);
app.listen(3000);


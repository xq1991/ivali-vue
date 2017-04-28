<template>
    <div class="nav-wrap">
        <h1><router-link to="/" exact></router-link></h1>
        <ul>
            <li v-for="(nav, index) in navs" v-bind:key="index">
                <router-link v-bind:to="nav.url" v-bind:class="nav.className" exact>
                    <i></i> {{ nav.title }}
                </router-link>
            </li>
        </ul>
        <div class="nav-footer">
            <div class="stock">
                <p class="line">证劵代码：832638</p>
                <p>证劵名称：瓦力科技</p>
            </div>
            <a target="_blank" href="http://www.miitbeian.gov.cn">粤ICP备12043897号-3</a>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002000821" style="margin-top: 0;"><img src="http://www.999.com/cpic/bei.png">粤公网安备 44190002000821号</a>
            <p class="copy">&copy; Copyright 2017 瓦力科技</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data: function () {
        return {
            navs: [
                { title: '公司简介', url: '/', className: 'home' },
                { title: '企业文化', url: '/company', className: 'company' },
                { title: '公司动态', url: '/news', className: 'news' },
                { title: '公司产品', url: '/product', className: 'product' },
                { title: '加入我们', url: '/join', className: 'join' },
                { title: '联系我们', url: '/contact', className: 'contact' },
                { title: '投资者关系', url: '/notice', className: 'notice' }
            ]
        }
    }
}
</script>

<style scoped>
.nav-footer {
    position: absolute;
    bottom: 8px;
    width: 100%;
}

.stock {
    margin: 0 auto;
    width: 150px;
    border: 1px solid #626f7a;
    border-radius: 3px;
}

.stock p {
    margin: 0;
    padding-left: 10px;
    height: 28px;
    color: #ccc;
    line-height: 28px;
}

.stock .line {
    border-bottom: 1px solid #626f7a;
}

.nav-footer a {
    display: block;
    margin: 10px auto 0;
    color: #fff;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
}

.nav-footer a img {
    position: relative;
    margin-right: 3px;
    top: 4px;
}

.nav-footer .copy {
    margin: 0;
    text-align: center;
    font-size: 12px;
    color: #8a8a8a;
}

.nav-wrap {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 15%;
    background: rgba(55, 72, 91, .9);
    background: linear-gradient(-135deg, rgba(113, 141, 159, 0.8) 0%, rgba(43, 69, 89, 1) 100%);
}

h1 {
    margin: 30px 0 0;
    height: 130px;
    background: url('../assets/logo.png') no-repeat center center;
}

h1 a {
    display: block;
    height: 100%;
}

ul {
    margin: 0 auto;
    padding: 20px 0 0 0;
    width: 150px;
    list-style: none;
}

li {
    height: 60px;
}

li a {
    position: relative;
    display: block;
    padding-left: 42px;
    height: 100%;
    color: #fff;
    font-size: 20px;
    line-height: 60px;
    text-decoration: none;
}

li i {
    position: absolute;
    left: 0;
    top: 15px;
    width: 32px;
    height: 32px;
    background-image: url('../assets/menu_ico.png');
    background-repeat: no-repeat;
    background-position: 0 -32px;
    background-color: #2d2d2d;
    border-radius: 50%;
    transition: background 0.3s cubic-bezier(.17, .67, .88, 1.25), color 0.2s linear;
}

li:hover i {
    background-color: #ff5f03;
}

.router-link-active i {
    background-color: #ff5f03;
}

.home i {
    background-position: 0 0;
}

.router-link-active.home i {
    background-position: 0 -32px;
}

li:hover .home i {
    background-position: 0 -32px;
}

.company i {
    background-position: -32px 0;
}

.router-link-active.company i {
    background-position: -32px -32px;
}

li:hover .company i {
    background-position: -32px -32px;
}

.news i {
    background-position: -128px 0;
}

.router-link-active.news i {
    background-position: -128px -32px;
}

li:hover .news i {
    background-position: -128px -32px;
}

.product i {
    background-position: -191px 0;
}

.router-link-active.product i {
    background-position: -191px -32px;
}

li:hover .product i {
    background-position: -191px -32px;
}

.join i {
    background-position: -64px 0;
}

.router-link-active.join i {
    background-position: -64px -32px;
}

li:hover .join i {
    background-position: -64px -32px;
}

.contact i {
    background-position: -96px 0;
}

.router-link-active.contact i {
    background-position: -96px -32px;
}

li:hover .contact i {
    background-position: -96px -32px;
}

.notice i {
    background-position: -158px 0;
}

.router-link-active.notice i {
    background-position: -158px -32px;
}

li:hover .notice i {
    background-position: -158px -32px;
}
</style>
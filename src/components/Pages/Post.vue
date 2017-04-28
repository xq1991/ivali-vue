<template>
    <div class="post-wrap">
        <h2>
            {{ obj.title }}
        </h2>
        <div class="post-content" v-html="obj.body"></div>
        <div class="post-bottom">
            <span>
                {{ obj.pubtime }}
            </span>
        </div>
        <i class="back" v-on:click="back"></i>
    </div>
</template>

<script>
export default{
    name: 'post',
    data:function(){
        return {
            obj: false
        }
    },
    methods:{
        back:function(){
            window.history.go(-1);
        }
    },
    created:function(){
        this.$http.get('/q?ct=api&ac=doc&cid=' + this.$route.params.id)
            .then(res=>{
                this.obj = res.data;
            })
            .catch(err=>{
                console.error(err);
            });
    }   
}
</script>

<style>
.post-wrap{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 70px;
    margin: auto;
    width: 82%;
    height: 640px;
    background-color: rgba(255, 255, 255, .9);
}

.post-wrap h2{
    margin: 0;
    padding-top: 15px;
    height: 40px;
    color: #666;
    text-align: center;
    font-size: 24px;
}

.post-content{
    margin: 20px 120px;
    height: 480px;
    overflow: auto;
}
.post-bottom{
    margin: 20px 120px 0;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #ddd;
}
.post-content p{
    text-indent: 2em;
    margin: 0 0 10px;
}

.art-btn{
    position: relative;
    margin-top: 20px;
    height: 40px;
}

.art-btn a{
    position: absolute;
    display: block;
    right: 0;
    padding: 0 20px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    background-color: #ec661b;
}
.post-wrap .back{
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    background-image: url('../../assets/close_btn.png');
    background-color: #b3b3b3;
    background-position: left 0;
    cursor: pointer;
    transition: background 0.3s cubic-bezier(.17, .67, .88, 1.25), color 0.2s linear;
}
.post-wrap .back:hover{
    background-position: -30px 0;
    background-color: #ec661b;
}
</style>
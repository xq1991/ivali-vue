<template>
    <div class="slide-wrap">
        <ul>
            <transition name="fade" mode="out-in">
                <li v-for="(item,index) in list" v-bind:key="index" v-if="currentIndex === index">
                    <router-link to="/">
                        <img v-bind:src="item.thumb" v-bind:alt="item.title">
                    </router-link>
                </li>
            </transition>
        </ul>
        <p>
            {{ list[currentIndex].title }}
        </p>
        <div class="point">
            <i v-for="for(item,index) in list" v-bind:class="{cur: currentIndex === index}" v-on:mouseover="point(index)"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'item-slide',
    props: ['list'],
    data: function () {
        return {
            currentIndex: 0,
            timer: null
        }
    },
    methods: {
        point: function (id) {
            clearInterval(this.timer);
            this.currentIndex = id;
            this.timer = setInterval(this.slide, 5000);
        },
        slide: function () {
            if (this.currentIndex === this.$props.list.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        }
    },
    mounted: function () {
        this.timer = setInterval(this.slide, 5000);
    },
    beforeDestroy: function () {
        clearInterval(this.timer);
    }
}
</script>

<style scoped>
.fade-enter-active{
    transition: opacity .6s;
}

.fade-enter{
    opacity: 0;
}
.slide-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 550px;
    width: 450px;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 100%;
}

li {
    display: block;
    height: 100%;
}

a {
    display: block;
    height: 100%;
}

li img {
    width: 100%;
    height: 100%;
    border: none;
}

p {
    position: absolute;
    margin: 0;
    right: 0;
    bottom: 0;
    padding: 0 60px 0 20px;
    width: 320px;
    height: 38px;
    color: #fff;
    line-height: 38px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .7);
}

.point {
    position: absolute;
    right: 10px;
    bottom: 0;
    height: 38px;
    line-height: 38px;
}

i {
    display: inline-block;
    margin-left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a1a1a1;
}

.cur {
    background-color: #fff;
}
</style>
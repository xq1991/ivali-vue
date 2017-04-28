<template>
    <div id="app">
        <Navigation></Navigation>
        <div class="wrap">
            <keep-alive>
                <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" mode="out-in">
                    <router-view></router-view>
                </transition>
            </keep-alive>
            <div class="footer">
                <h2>合作伙伴</h2>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
    name: 'app',
    components: {
        Navigation
    }
}
</script>

<style>
img {
    border: none;
}

.footer h2 {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    height: 70px;
    width: 160px;
    text-align: center;
    font-size: 20px;
    line-height: 70px;
    font-weight: normal;
    background-color: #1b1b1b;
}

.footer h2::after {
    content: "";
    position: absolute;
    display: block;
    right: -10px;
    top: 30px;
    width: 0;
    height: 0;
    border-left: 10px solid #1b1b1b;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}

.footer div {
    margin: 0 0 0 160px;
    height: 70px;
    background: url('./assets/par_logo.png') no-repeat left center;
    cursor: pointer;
}

html {
    height: 100%;
}

body {
    margin: 0;
    height: 100%;
    color: #a1a1a1;
    font: 14px/1.7 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
}

#app {
    position: relative;
    height: 100%;
    min-width: 1200px;
    min-height: 760px;
    background: url('./assets/bg.jpg') no-repeat center center #8dc5d4;
}

.wrap {
    position: relative;
    margin-left: 15%;
    height: 100%;
    overflow: hidden;
}

.footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    background-color: #272727;
}
</style>

<template>
    <div class="item-wrap">
        <div class="spinner" v-if="!data">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        <div v-else>
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'item-wrap',
    props: ['data']
}
</script>

<style scoped>
.item-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 70px;
    margin: auto;
    width: 82%;
    height: 500px;
    background-color: rgba(255, 255, 255, .9);
}

.left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 400px;
}

.right {
    margin-left: 400px;
    padding: 30px 40px 0;
    height: 470px;
}

.spinner {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
}

.spinner>div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

.spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(0.4)
    }
    20% {
        -webkit-transform: scaleY(1.0)
    }
}

@keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
}
</style>
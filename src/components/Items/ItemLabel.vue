<template>
    <div>
        <input type="button" v-for="(item,index) in labels" v-bind:key="index" v-bind:value="item.title" v-bind:class="{cur:currentLabel === index}" v-on:click="getData(item.dataUrl,index)">
    </div>
</template>

<script>
export default {
    name: 'item-label',
    props: ['labels'],
    data: function () {
        return {
            currentLabel: 0
        }
    },
    methods: {
        getData: function (url, index) {
            this.$emit('getData', url);
            this.currentLabel = index;
        }
    }
}
</script>

<style scoped>
div {
    margin: 20px 0 -10px;
    height: 24px;
    overflow: hidden;
}

input {
    margin-right: 5px;
    padding: 0 20px;
    height: 24px;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 2px;
    line-height: 24px;
    background-color: #d2d2d2;
    cursor: pointer;
}

.cur {
    background-color: #ff5f03;
}
</style>
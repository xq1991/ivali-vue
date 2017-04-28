<template>
    <div>
        <input type="button" v-bind:class="{err:currentPage === 1}" v-on:click="prev" value="&lt;前一页">
        <span>{{ currentPage }}/{{ pages }}</span>
        <input type="button" v-bind:class="{err: currentPage === pages}" v-on:click="next" value="下一页&gt;">
    </div>
</template>

<script>
export default {
    name: 'item-button',
    props: ['pages'],
    data: function () {
        return {
            currentPage: 1
        }
    },
    methods: {
        prev: function () {
            if (this.currentPage === 1) {
                return false;
            }
            this.$emit('getList', this.currentPage - 1);
            this.currentPage--;
        },
        next: function () {
            if (this.currentPage === this.$props.pages) {
                return false;
            }
            this.$emit('getList', this.currentPage + 1);
            this.currentPage++;
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 20px;
    text-align: center;
    line-height: 28px;
}

input {
    width: 70px;
    height: 28px;
    padding: 0;
    color: #fff;
    text-align: center;
    background-color: #ff5f03;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}

input:focus {
    outline: none;
}

span {
    display: inline-block;
    margin: 0 5px;
    height: 28px;
    color: #666;
    font-size: 16px;
}

.err {
    pointer-events: none;
    background-color: #ccc;
}
</style>


<template>
    <div>
        <ItemTitle v-bind:titles="titles"></ItemTitle>
        <ItemLabel v-bind:labels="labels" v-on:getData="getData"></ItemLabel>
        <ItemList v-bind:list="list"></ItemList>
        <ItemButton v-if="totalPage > 1" v-bind:pages="totalPage" v-on:getList="getList"></ItemButton>
    </div>
</template>

<script>
import ItemTitle from './ItemTitle'
import ItemList from './ItemList'
import ItemButton from './ItemButton'
import ItemLabel from './ItemLabel'
export default {
    name: 'join-right',
    props: ['titles', 'obj'],
    components: {
        ItemTitle,
        ItemList,
        ItemButton,
        ItemLabel
    },
    data: function () {
        return {
            list: this.$props.obj.data,
            totalPage: this.$props.obj.total_page,
            currentDataUrl: 'ct=api&ac=category&cid=5&pagesize=8',
            labels: [
                {
                    title: '全部',
                    dataUrl: 'ct=api&ac=category&cid=5&pagesize=8'
                },
                {
                    title: '研发类',
                    dataUrl: 'ct=api&ac=category&cid=8&pagesize=8'
                },
                {
                    title: '管理类',
                    dataUrl: 'ct=api&ac=category&cid=16&pagesize=8'
                },
                {
                    title: '运营类',
                    dataUrl: 'ct=api&ac=category&cid=17&pagesize=8'
                },
                {
                    title: '证券类',
                    dataUrl: 'ct=api&ac=category&cid=19&pagesize=8'
                },
                {
                    title: '编辑类',
                    dataUrl: 'ct=api&ac=category&cid=9&pagesize=8'
                },
                {
                    title: '市场类',
                    dataUrl: 'ct=api&ac=category&cid=12&pagesize=8'
                }
            ]
        }
    },
    methods: {
        //处理label点击事件，获取对应列表数据。
        getData: function (url) {
            this.currentDataUrl = url;
            this.$http.get('/q?' + url)
                .then(res => {
                    this.list = res.data.data;
                    this.totalPage = res.data.total_page
                })
                .catch(err => {
                    console.error(err);
                });
        },

        //处理翻页点击事件，获取对应列表数据。
        getList: function (pageId) {
            this.$http.get('/q?' + this.currentDataUrl + '&pageno=' + pageId)
                .then(res => {
                    this.list = res.data.data;
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <ItemTitle v-bind:titles="titles"></ItemTitle>
        <keep-alive>
            <ItemList v-bind:list="list"></ItemList>
        </keep-alive>
        <ItemButton v-if="totalPage > 1" v-bind:pages="totalPage" v-on:getList="getList"></ItemButton>
    </div>
</template>

<script>
import ItemTitle from './ItemTitle'
import ItemList from './ItemList'
import ItemButton from './ItemButton'

export default {
    name: 'news-right',
    props: ['titles', 'obj'],
    components: {
        ItemTitle,
        ItemList,
        ItemButton
    },
    data: function () {
        return {
            list: this.$props.obj.data,
            totalPage: this.$props.obj.total_page
        }
    },
    methods: {
        getList(pageId) {
            this.$http.get('/q?ct=api&ac=category&cid=6&pagesize=9&pageno=' + pageId)
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
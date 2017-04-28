<template>
    <ItemWrap v-bind:data="obj">
        <NoticeLfet slot="left"></NoticeLfet>
        <NoticeRight slot="right" v-bind:titles="titles" v-bind:obj="obj"></NoticeRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'Notice',
    components: {
        ItemWrap: Item.ItemWrap,
        NoticeLfet: Item.NoticeLeft,
        NoticeRight: Item.NoticeRight
    },
    data: function () {
        return {
            titles: {
                title: '投资者关系',
                subTitle: 'Investors'
            },
            obj: false
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=category&cid=13&pagesize=8')
            .then(res => {
                this.obj = res.data;
            })
            .catch(err => {
                console.error(err);
            });
    }
}
</script>

<style>

</style>
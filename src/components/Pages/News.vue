<template>
    <ItemWrap v-bind:data="obj">
        <ItemSlide slot="left" v-bind:list="getSlideList"></ItemSlide>
        <NewsRight slot="right" v-bind:titles="titles" v-bind:obj="obj"></NewsRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'News',
    components: {
        ItemWrap: Item.ItemWrap,
        NewsRight: Item.NewsRight,
        ItemSlide: Item.ItemSlide
    },
    data: function () {
        return {
            titles: {
                title: '公司动态',
                subTitle: 'News'
            },
            obj: false
        }
    },
    computed: {
        getSlideList: function () {
            if (this.obj) {
                return this.obj.data.slice(0, 3);
            }
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=category&cid=6&pagesize=9')
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
<template>
    <ItemWrap v-bind:data="obj">
        <ItemSlide slot="left" v-bind:list="getSlideList"></ItemSlide>
        <ProductRight slot="right" v-bind:obj="obj" v-bind:titles="titles"></ProductRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'Product',
    components: {
        ItemWrap: Item.ItemWrap,
        ItemSlide: Item.ItemSlide,
        ProductRight: Item.ProductRight
    },
    data: function () {
        return {
            titles: {
                title: '公司产品',
                subTitle: 'Products'
            },
            obj: false
        }
    },
    computed: {
        getSlideList: function () {
            if (this.obj) {
                return this.obj.data.slice(3, 7);
            }
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=category&cid=2&pagesize=9')
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
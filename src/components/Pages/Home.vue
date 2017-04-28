<template>
    <ItemWrap v-bind:data="obj">
        <HomeLeft slot="left"></HomeLeft>
        <HomeRight slot="right" v-bind:titles="titles" v-bind:obj="obj"></HomeRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'Home',
    components: {
        ItemWrap: Item.ItemWrap,
        HomeLeft: Item.HomeLeft,
        HomeRight: Item.HomeRight
    },
    data: function () {
        return {
            titles: {
                title: '公司简介',
                subTitle: 'About us'
            },
            obj: false
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=catalog&cid=1')
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
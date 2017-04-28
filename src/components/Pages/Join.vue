<template>
    <ItemWrap v-bind:data="obj">
        <JoinLeft slot="left"></JoinLeft>
        <JoinRight slot="right" v-bind:titles="titles" v-bind:obj="obj"></JoinRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'Join',
    components: {
        ItemWrap: Item.ItemWrap,
        JoinLeft: Item.JoinLeft,
        JoinRight: Item.JoinRight
    },
    data: function () {
        return {
            titles: {
                title: '加入我们',
                subTitle: 'Recruitment'
            },
            obj: false
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=category&cid=5&pagesize=8')
            .then(res => {
                this.obj = res.data
            })
            .catch(err => {
                console.err(err);
            });
    }
}
</script>

<style>

</style>
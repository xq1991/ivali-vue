<template>
    <ItemWrap v-bind:data="obj">
        <CompanyLeft slot="left"></CompanyLeft>
        <CompanyRight slot="right" v-bind:titles="titles" v-bind:obj="obj">
        </CompanyRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'Company',
    components: {
        ItemWrap: Item.ItemWrap,
        CompanyLeft: Item.CompanyLeft,
        CompanyRight: Item.CompanyRight
    },
    data: function () {
        return {
            titles: {
                title: '企业文化',
                subTitle: 'Corporate Culture'
            },
            obj: false
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=category&cid=3&pagesize=9')
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
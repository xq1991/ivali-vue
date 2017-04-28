<template>
    <ItemWrap v-bind:data="obj">
        <ContactLeft slot="left"></ContactLeft>
        <ContactRight slot="right" v-bind:obj="obj" v-bind:titles="titles"></ContactRight>
    </ItemWrap>
</template>

<script>
import Item from '../Items'
export default {
    name: 'Contact',
    components: {
        ItemWrap: Item.ItemWrap,
        ContactLeft: Item.ContactLeft,
        ContactRight: Item.ContactRight
    },
    data: function () {
        return {
            titles: {
                title: '联系我们',
                subTitle: 'Contact Us'
            },
            obj: false
        }
    },
    created: function () {
        this.$http.get('/q?ct=api&ac=catalog&cid=4')
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
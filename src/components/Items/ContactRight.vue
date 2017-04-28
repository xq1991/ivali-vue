<template>
    <div>
        <ItemTitle v-bind:titles="titles"></ItemTitle>
        <div class="text" v-html="obj.content"></div>
    </div>
</template>

<script>
import ItemTitle from './ItemTitle'
export default {
    name: 'contact-right',
    props: ['titles', 'obj'],
    components: {
        ItemTitle
    }
}
</script>

<style>

</style>
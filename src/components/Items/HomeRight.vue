<template>
    <div>
        <ItemTitle v-bind:titles="titles"></ItemTitle>
        <div class="text" v-html="obj.content"></div>
    </div>
</template>

<script>
import ItemTitle from './ItemTitle'
export default {
    name: 'home-right',
    props: ['titles', 'obj'],
    components: {
        ItemTitle
    }
}
</script>

<style>
.text {
    margin-top: 20px;
    height: 380px;
    overflow: auto;
}

.text p {
    text-indent: 2em;
    margin: 0 0 15px;
}

.text a {
    color: #333;
    text-decoration: none;
}

.text a:hover {
    color: #FF8C00;
}

.text ul {
    list-style: none;
    margin: 0 0 15px 0;
    padding: 0;
}

.text ul .title {
    margin: 5px 0 10px;
    font-size: 18px;
    color: #666;
}

.text .extr {
    padding: 0 0 10px;
    color: #ff5f03;
    font-weight: bold;
}
</style>
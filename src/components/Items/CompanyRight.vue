<template>
    <div>
        <ItemTitle v-bind:titles="titles"></ItemTitle>
        <div class="company-list">
            <ul>
                <li v-for="(item, index) in obj.data" v-bind:key="index">
                    <router-link v-bind:to="'post/' + item.doc_id" exact>
                        <img v-bind:src="item.thumb" v-bind:alt="item.title">
                        <span>
                            {{ item.title }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ItemTitle from './ItemTitle'
export default {
    name: 'company-right',
    props: ['titles', 'obj'],
    components: {
        ItemTitle
    }
}
</script>

<style scoped>
.company-list {
    margin-top: 50px;
    height: 380px;
    overflow: hidden;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: auto;
}

li {
    float: left;
    width: 33.333%;
    height: 170px;
}

a {
    display: block;
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100%;
    text-align: center;
    color: #666;
}

a:hover {
    color: #ff5f03;
}

img {
    transition: all 1s;
}

a:hover img {
    transform: rotateY(360deg);
}

span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    font-size: 18px;
}
</style>
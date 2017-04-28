<template>
    <ul>
        <li v-for="(item,index) in list" v-bind:key="index">
            <a v-if="item.url" v-bind:href="item.url" target="_blank">
                                {{ item.title }}
                                <span v-if="item.add_title">
                                    [{{ item.add_title }}]
                                </span>
                            </a>
            <router-link v-else v-bind:to="'post/' + item.doc_id" exact>
                {{ item.title }}
                <span v-if="item.add_title">
                                    [{{ item.add_title }}]
                                </span>
            </router-link>
            <span class="time">
                                {{ item.pubtime }}
                            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'item-list',
    props: ['list']
}
</script>

<style scoped>
ul {
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
}

li {
    position: relative;
    height: 35px;
    font-size: 12px;
    line-height: 35px;
    border-bottom: 1px dashed #e0e0e0;
}

a {
    display: block;
    padding-right: 80px;
    height: 100%;
    color: #666;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
}

a:hover {
    color: #ff5f03;
}

a span {
    color: #ff5f03;
}

.time {
    position: absolute;
    right: 0;
    top: 0;
    height: 35px;
}
</style>
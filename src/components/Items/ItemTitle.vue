<template>
    <h2>
        {{ titles.title }}
        <i>
            {{ titles.subTitle }}
        </i>
    </h2>
</template>

<script>
export default {
    name: 'item-title',
    props: ['titles']
}
</script>

<style scoped>
h2 {
    position: relative;
    margin: 0;
    height: 40px;
    line-height: 40px;
    color: #5c5c5c;
    font-size: 36px;
    background: url('../../assets/title_line.png') no-repeat 150px bottom;
}

i {
    position: absolute;
    right: 0;
    height: 40px;
    padding-right: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 60px;
    color: #d1d1d1;
    background: url('../../assets/title_line.png') no-repeat right 23px;
}
</style>
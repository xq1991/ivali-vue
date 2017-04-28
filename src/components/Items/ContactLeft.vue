<template>
    <div id="map">
    </div>
</template>

<script>
export default {
    name: 'contact-left',
    mounted: function () {
        let map = new BMap.Map("map");
        let point = new BMap.Point(113.894763, 22.958744);
        map.centerAndZoom(point, 18);
    }
}
</script>

<style>
#map {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 400px;
    height: 500px;
}
</style>
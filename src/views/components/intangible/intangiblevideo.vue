<template>
    <div>
        <ul>
            <li class="item videoItem" v-for="(item,index) in data" :key="index">
                <div class="v-box">
                    <video :poster="item.thumbPic"></video>
                </div>
                <span class="play" @click="play(item.filePath)"></span>
                <div class="itemText" style>
                    <h3 class="videoTitle">{{item.name}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        play(url) {
            $('.video_Mask').show();
            $('#video_').attr("src", url);
            $('#video_').play;
        }
    }
}
</script>
<style scope>
#jp_video_0 {
    max-width: 500px;
    max-height: 300px !important;
}

.videoItem {
    width: 392px;
    height: 280px;
}

.v-box {
    width: 392px;
    height: 220px;
    text-align: center;
    line-height: 220px;
}

.videoItem video {
    max-height: 220px;
    max-width: 392px;
}

.videoWrap {
    width: 100%;
    height: auto;
}

.videoA {
    width: 392px;
    height: 220px;
}
</style>
<template>
    <div>
        <div class="exhibit-meeting-list">
            <ul id="list1" class="clear">
                <li v-for="(item,index) in data">
                    <router-link :to="{path:'newsDetail'}">
                        <div class="meeting-img"><img :src="item.thumbPic"></div>
                        <div class="meeting-infor">
                            <h3>{{item.name}}</h3>
                            <div v-html="data.content"></div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {}
    }
}
</script>
<style scoped>
.exhibit-meeting-list {
    width: 1200px;
    margin: 0 auto;
}

.exhibit-meeting-list ul li {
    margin-bottom: 40px;
    background: #e9e9e9;
    height:240px;
}

.exhibit-meeting-list ul li:hover {
    background: #ffffff;
    box-shadow: 0 40px 40px #e9e9e9;
}

.meeting-infor p {
    font-size: 16px;
    line-height: 30px;
    color: #666666;
    position: relative;
    max-height: 120px;
    overflow: hidden;
}

.exhibit-meeting-list ul li:hover .meeting-infor p::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}

.exhibit-meeting-list ul li a {
    display: block;
}

.meeting-img {
    float: left;
    width: 360px;
    height: 240px;
    line-height: 238px;
    text-align: center;
}

.meeting-img img {
    max-width: 360px;
    max-height: 240px;
}

.meeting-infor {
    float: left;
    width: 840px;
    height: 240px;
    box-sizing: border-box;
    padding: 25px 40px 0;
}

.meeting-infor h3 {
    font-size: 20px;
    color: #333333;
    line-height: 50px;
    width: 760px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.meeting-infor p::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #e9e9e9 55%);
    background: -o-linear-gradient(right, transparent, #e9e9e9 55%);
    background: -moz-linear-gradient(right, transparent, #e9e9e9 55%);
    background: linear-gradient(to right, transparent, #e9e9e9 55%);
}
</style>
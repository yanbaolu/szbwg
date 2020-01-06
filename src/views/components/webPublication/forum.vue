<template>
    <div>
        <div class="acade_content acade_border">
            <div class="acade_talk_infor" v-for="(item,index) in data" :key="index">
                <p>{{item.year}}</p>
                <div class="acade_talk clear">
                    <div class="acade_img">
                        <router-link :to="{path:'academicDetail'}">
                            <img :src="item.thumbPic" onerror="this.src='/static/img/bg-big.png'" alt="">
                        </router-link>
                    </div>
                    <div class="acade_infor">
                        <h3>{{item.name}}</h3>
                        <div class="acade_infor_detail deputy_text active" v-html="item.content">
                           
                        </div>
                        <router-link class="look_detail" :to="{path:'academicDetail'}">查看详情</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scope>
.acade_main {
    width: 100%;
    background: #fff;
    z-index: 2;
    position: relative;
    box-sizing: border-box;
    padding-top: 57px;
}

.acade_nav {
    width: 1200px;
    margin: 0 auto;
}

.acade_nav ul li {
    background: url(../../../assets/img/icons/title-icon.png) no-repeat left center;
    background-size: 14px 14px;
    padding: 0 40px;
    float: left;
}

.acade_nav ul li:not(:first-child) {
    padding-left: 54px;
}

.acade_nav ul li:first-child {
    background: none;
}

.acade_nav ul li a {
    display: block;
    height: 50px;
    line-height: 50px;
    border-bottom: 4px solid #fbfbfb;
    color: #999999;
    font-size: 26px;
}

.acade_nav ul li .acade_border {
    border-bottom: 4px solid #333333;
    color: #333333;
}

.acade_nav ul li a:hover {
    color: #333333;
    border-bottom: 4px solid #333333;
}

.acade_main_content>div {
    display: none;
}

.acade_main_content>div.acade_border {
    display: block;
}

.acade_content {
    width: 1200px;
    margin: 0 auto;
}

.acade_content .acade_talk_infor>p {
    margin-bottom: 26px;
    font-size: 26px;
    color: #666666;
    line-height: 26px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.acade_talk_infor {
    margin-top: 50px;
}

.acade_talk {
    width: 1200px;
    height: 390px;
    border-bottom: 4px solid #dddddd;
    margin-bottom: 40px;
}

.acade_talk_infor .acade_talk:first-child {
    margin-top: 0;
}

.acade_img {
    background: url(../../../assets/img/luntanbg.png) no-repeat left top;
    background-size: 600px 300px;
    float: left;
    width: 700px;
    height: 300px;
}

.acade_img a {
    display: block;
    width: 600px;
    height: 300px;
    margin: 40px 0 0 40px;
    position: relative;
    line-height: 296px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.acade_img a img {
    max-height: 300px;
    max-width: 600px;
}

.acade_infor {
    float: left;
    width: 500px;
    height: 300px;
    padding-top: 40px;
    position: relative;
}

.acade_infor h3 {
    font-size: 26px;
    color: #333333;
    line-height: 26px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 450px;
    overflow: hidden;
}

.acade_infor .acade_infor_detail {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid #dddddd;
    font-size: 16px;
}

.acade_infor .acade_infor_detail.active {
    font-size: 16px;
    line-height: 30px;
    color: #666666;
    position: relative;
    overflow: hidden;
    height: 152px;
}

.acade_infor .acade_infor_detail.active::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    color: #666666;
    bottom: 0;
    right: 0;
    padding: 0 0 1px 8px;
    background: rgba(255, 255, 255, 0.91) repeat-y;
    background-size: 20px 20px;
}

.look_detail {
    display: block;
    font-size: 16px;
    width: 66px;
    color: #333333;
    line-height: 30px;
    position: absolute;
    bottom: 18px;
    left: 0;
    border-bottom: 1px solid transparent;
}

.look_detail:hover {
    border-bottom: 1px solid #333333;
}
</style>
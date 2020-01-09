<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="news_main" style="margin-bottom:40px;">
            <div class="navPath_new" style="margin-bottom:44px;">
                <div class="navPath clear">
                    <p true="">
                        <i></i>
                        <a href="/activity" v-if="this.$route.query.type=='0'">活动</a>
                        <a href="/socialisation" v-if="this.$route.query.type=='1'">讲座</a>
                        <i></i>
                    </p>
                    <p class="clear"><i></i><a href="javascript:;">{{data.name}}</a><i></i></p>
                </div>
            </div>
            <div class="active_content clear">
                <div class="active_left">
                    <img :src="data.thumbPic">
                </div>
                <div class="active_right">
                    <h4>{{data.name}}</h4>
                    <p>活动时间：{{data.dateStr}}</p>
                    <p title="深圳博物馆历史民俗馆（市民中心A区）二楼专题展厅">活动地点：{{data.address}}</p>
                </div>
            </div>
            <div class="active_descript">
                <div class="active_title">
                    <h3>活动详情</h3>
                </div>
                <div class="deputy_text">
                    <p v-html="data.activeDetails"></p>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import activity from "../components/activity/activitylist";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            isPage: false,
            totlePage: 12,
            data:""
        };
    },
    mounted() { 
        this.totlePage <= 10 ? this.isPage = false : this.isPage = true; 
        this.getDetail()
    },
    computed: {},
    methods: {
        getDetail(){
            let data =this.$route.query;
            console.log(data)
            API.get2('active/get',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data;
                    console.log(res,44444)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
    }
};
</script>
<style scoped>
.active_content {
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
    background: #e9e9e9;
}

.active_content ul li a {
    display: block;
    height: 240px;
}

.active_left {
    float: left;
    width: 360px;
    height: 240px;
    line-height: 240px;
    text-align: center;
}

.active_left img {
    max-width: 360px;
    max-height: 240px;
}

.active_right {
    float: left;
    margin-left: 40px;
    width: 800px;
}

.active_right h3 {
    font-size: 20px;
    color: #333333;
    line-height: 20px;
    height: 20px;
    margin: 30px 0 0 -10px;
    font-weight: normal;

}

.active_right h4 {
    font-size: 18px;
    color: #333333;
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
    font-weight: normal;
    width: 800px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.active_right p {
    font-size: 16px;
    color: #666666;
    height: 16px;
    line-height: 16px;
    margin-top: 22px;
    width: 630px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.active_right p span {
    color: #4bac35;
    margin-right: 25px;
}

.active_right button {
    height: 30px;
    line-height: 30px;
    width: 120px;
    background: #666666;
    color: white;
    font-size: 16px !important;
    border: none;
    border-radius: 8px;
    margin-top: 30px;
    outline: none;
}

.active_descript {
    width: 1200px;
    margin: 60px auto;
}
</style>
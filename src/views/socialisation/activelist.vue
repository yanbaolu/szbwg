<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="news_main">
            <div class="navPath_new" style="margin-bottom:41px;">
                <div class="navPath clear">
                    <p class="clear"><i></i><a href="/">首页</a><i></i></p>
                    <p class="clear">
                      <i></i>
                        <a href="/ammouncer" v-if="this.$route.query.activiteType=='3'">小讲解员</a>
                        <a href="/volunteers" v-if="this.$route.query.activiteType=='4'">志愿者</a>
                      <i></i>
                    </p>
                </div>
            </div>
            <div class="news_message">
                <div class="news_title">
                </div>
                <div class="news_content">
                    <so-list v-if="list" :data="list"></so-list>
                </div>
            </div>
            <div class=" paginationWrap" style="z-index: 1001;position: relative;">
                <div class="pagination">
                    <div class="clear leavePage" id="pageContent"></div>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleNewsList from "../components/intangible/intangibleNewsList";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            isPage: false,
            isShow: true,
            totlePage: 11,
            list:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.activeList()
    },
    computed: {},
    methods: {
        //小讲解员活动列表
        activeList(){
            let url='active/commentatorOrVolunteer/page/'+this.$route.query.number
            let data ={
                lang:this.lang,
                pageNum:1,
                pageSize:30,
                platform:0,
                activiteType:this.$route.query.activiteType
            };
            API.get2(url,data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    console.log(this.list)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        "so-list": intangibleNewsList,

    }
};
</script>
<style scoped>
.mt50 {
    margin-top: 80px;
}
</style>
<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="navPath_new" style="margin-bottom:41px;margin-top:80px;">
            <div class="navPath clear">
                <p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
                <p class="clear"><i></i><a href="javascript:;">新闻资讯</a><i></i></p>
            </div>
        </div>
        <div class="news_message">
            <div class="news_title">
                新闻资讯</div>
        </div>
        <in-newslist :isPage='isPage' v-if="newsList" :data="newsList"></in-newslist>
        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="getNews(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getNews(item)">{{item}}</a> </p>
                        <span class="page-last" @click="getNews(pageNum+1)">下一页</span>
                    </div>
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
            lang:this.$store.getters.getlang,
            isBanner:false,
            isPage: false,
            totlePage: 20,
            news: [],
            toice: [],
            newsList:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        //获取新闻
        this.getNews(1)
    },
    computed: {},
    methods: {
        getNews(item){
            this.num=item-1;
            this.pageNum=item;
            let data ={
                lang:this.lang,
                pageNum:this.pageNum,
                pageSize:10,
                platform:0
            };
            API.get2('intangible/news/page/L0409',data).then(res=>{
                if (res.code==0) {
                    this.newsList=res.data.list;
                    this.dataAll=res.data;
                    //console.log(res.data,456789789)
                }
            }).catch(err => {

            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-newslist': intangibleNewsList,
    }
};
</script>
<style scoped>
.navPath {
    margin: 0 auto !important;
}
</style>
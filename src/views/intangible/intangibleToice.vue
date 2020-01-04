<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="navPath_new" style="margin-bottom:41px;margin-top:80px;">
            <div class="navPath clear">
                <p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
                <p class="clear"><i></i><a href="javascript:;">通知公告</a><i></i></p>
            </div>
        </div>
        <div class="news_message">
            <div class="news_title">
                通知公告</div>
        </div>
        <in-newslist :isPage='isPage' :data="feyigg" v-if="feyigg"></in-newslist>
        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="fegg(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="fegg(item)">{{item}}</a> </p>
                        <span class="page-last" @click="fegg(pageNum+1)">下一页</span>
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
            isBanner: false,
            isPage: false,
            totlePage: 20,
            news: [],
            toice: [],
            feyigg:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        this.fegg(1)
    },
    computed: {},
    methods: {
        //通知公公告
        fegg(item){
          this.num=item-1;
          this.pageNum=item;
           let data ={
                lang:this.lang,
                pageNum:this.pageNum,
                pageSize:10,
                platform:0
           };
           API.get2('intangible/notice/page/L0410',data).then(res=>{
               if (res.code==0) {
                   this.feyigg=res.data.list;
                   this.dataAll=res.data;
                   console.log(this.feyigg)
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
.news_main {
    margin-top: 0 !important;
}

.navPath {
    margin: 0 auto !important;
}
</style>
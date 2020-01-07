<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="navPath_new mb-48" style="margin-bottom:41px;margin-top:80px;">
            <div class="navPath clear">
                <p class="clear">
                    <i></i>
                    <router-link :to="{path:'/intangible'}">非遗</router-link><i></i>
                </p>
                <p true="">
                    <i></i>
                    <router-link :to="{path:'/intangibleInheritance'}">非遗代表性传承人</router-link>
                    <i></i>
                </p>
                <p class="clear"><i></i><a href="javascript:;"></a><i></i></p>
            </div>
        </div>
        <div class="news_message">
            <div class="news_title">非遗代表性传承人</div>
        </div>
        <div class="intang_picture wrap">
            <in-pic :isPage='isPage' v-if="list" :data="list"></in-pic>
        </div>
        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="getDetail(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getDetail(item)">{{item}}</a> </p>
                        <span class="page-last" @click="getDetail(pageNum+1)">下一页</span>
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
import intangiblePic from "../components/intangible/intangiblePic";
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
            list:"",
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        this.getDetail(1)
    },
    computed: {},
    methods: {
        getDetail(item){
            this.num=item-1;
            this.pageNum=item;
            let data ={
                 lang:this.lang,
                 pageNum:this.pageNum,
                 pageSize:16,
                 platform:0,
            };
            API.get2('intangible/inheritor/page/L0403',data).then(res=>{
                if (res.code==0) {
                    this.list=res.data.list;
                    this.dataAll=res.data;
                   // console.log(this.list)
                }
            }).catch(err => {

            }) 
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-pic': intangiblePic,
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

.intang_picture {
    margin-top: 30px;
}
</style>
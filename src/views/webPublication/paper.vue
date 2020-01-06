<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px"></header-top>
        <!--导航-->
        <div class="social_nav">
            <web-nav></web-nav>
        </div>
        <in-newslist :isPage='isPage' v-if="dataList" :data="dataList"></in-newslist>
        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="getList(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getList(item)">{{item}}</a> </p>
                        <span class="page-last" @click="getList(pageNum+1)">下一页</span>
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
import paperlist from "../components/webPublication/paperlist";
import socialisitionNav from "../components/webPublication/webPublicationnav";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 20,
            news: [],
            toice: [],
            lang:this.$store.getters.getlang,
            bandata:'',
            dataList:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        this.getBaner();
        this.getList()
    },
    computed: {},
    methods: {
        //获取banner
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('slidePic/page/L0605',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        getList(item){
            this.num=item-1;
            this.pageNum=item;
            let data ={
                lang:this.lang,
                pageNum:this.pageNum,
                pageSize:16,
                platform:0
            };
            API.get2('publication/page/L0603',data).then(res => {
                if (res.code == 0) {
                    this.dataList = res.data.list;
                    this.dataAll=res.data;
                    //console.log(this.dataList)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-newslist': paperlist,
        'web-nav': socialisitionNav,
    }
};
</script>
<style scoped>
.navPath {
    margin: 0 auto !important;
}
</style>
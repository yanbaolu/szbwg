<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <web-nav></web-nav>
            </div>
            <!--专著-->
            <div class="">
                <web-monographcon :isPage="isPage" v-if="dataList" :data="dataList.list"></web-monographcon>
            </div>
        </div>
        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="isPage">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="getForum(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getForum(item)">{{item}}</a> </p>
                        <span class="page-last" @click="getForum(pageNum+1)">下一页</span>
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
import socialisitionNav from "../components/webPublication/webPublicationnav";
import monographcon from "../components/webPublication/monographcon"
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: true,
            isPage: false,
            totlePage: 12,
            dataList:'',
            bandata:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getForum()
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
        //获取专著列表
        getForum(item){
            this.num=item-1;
            this.pageNum=item;
            let data ={
                lang:this.lang,
                pageNum:this.pageNum,
                pageSize:4,
                platform:0
            };
            API.get2('publication/page/L0602',data).then(res => {
                if (res.code == 0) {
                    this.dataList = res.data;
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
        'web-nav': socialisitionNav,
        'web-monographcon': monographcon,
    }
};
</script>
<style scoped>
</style>
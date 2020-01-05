<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" :bandata="bandata" v-if="bandata"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <so-nav></so-nav>
            </div>
            <!--讲座-->
            <div class="">
                <ac-list :isPage="isPage" v-if="list" :data="list" :type="1"></ac-list>
            </div>
            <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="dataAll.pages>1">
                <div class="pagination">
                    <div class="clear leavePage" id="pageContent">
                        <div class=" pagination comWidth ">
                            <span class="page-last" @click="getJlist(pageNum-1)" v-if="pageNum>1">上一页</span>
                            <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getJlist(item)">{{item}}</a> </p>
                            <span class="page-last" @click="getJlist(pageNum+1)">下一页</span>
                        </div>
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
import socialisitionNav from "../components/socialisation/socialisitionNav"
import activity from "../components/activity/activitylist";
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: true,
            isPage: false,
            totlePage: 1,
            bandata:'',
            list:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getJlist() 
    },
    computed: {},
    methods: {
        //获取banner 社交banner
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('slidePic/page/L0503',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        //获取讲座列表
        getJlist(item){
          this.num=item-1;
          this.pageNum=item;
            let data ={
                lang:this.lang,
                pageNum:this.pageNum,
                pageSize:4,
                platform:0
            };
            API.get2('active/page/L0502',data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    this.dataAll=res.data;
                    //console.log(res)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'so-nav': socialisitionNav,
        'ac-list': activity,
    }
};
</script>
<style scoped>
.mt50 {
    margin-top: 30px;
}

.activity {
    margin-top: 130px;
}

.social_banner {
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 80px;
}

.social_main {
    width: 100%;
    background: #fbfbfb;
    position: relative;
    z-index: 2;
    padding-top: 55px;
}
</style>
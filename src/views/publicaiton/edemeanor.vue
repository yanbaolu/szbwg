<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px;"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <pu-nav></pu-nav>
            </div>
            <div class="mt30">
                <e-list :isPage="isPage" v-if="list" :data="list"></e-list>
            </div>
            <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="dataAll.pages>1">
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
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import publicationnav from "../components/publicaiton/publicationnav";
import elist from "../components/publicaiton/elist";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 12,
            lang: this.$store.getters.getlang,
            bandata: '',
            list:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getList()
    },
    computed: {},
    methods: {
        //获取banner
        getBaner() {
            let data = {
                lang: this.lang,
                pageNo: 1,
                pageSize: 3,
                platform: 0
            };
            API.get2('slidePic/page/L0803', data).then(res => {
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
            let data = {
                lang: this.lang,
                pageNum:this.pageNum,
                pageSize:8,
                platform: 0
            };
            API.get2('product/news/page/L0804',data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    this.dataAll=res.data;
                    console.log(this.list)
                }
            }).catch(err => {

            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'pu-nav': publicationnav,
        'e-list': elist
    }
};
</script>
<style scoped>
.mt30 {
    margin-top: 30px;
}
</style>
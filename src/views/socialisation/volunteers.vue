<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" :bandata="bandata" v-if="bandata"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <so-nav></so-nav>
            </div>
            <!--志愿者-->
            <div class="little_ammouncer clearfix active">
                <div class="little_ammou_left">
                    <div class="news_title">
                        志愿者风采
                    </div>
                    <!--志愿者-->
                    <am-left :isPage="isPage" :isShow="isShow" v-if="vTeam" :vTeam="vTeam" :data="volunteerList"></am-left>
                </div>
                <div class="little_ammou_right">
                    <div class="news_title clearfix">
                        志愿者活动 <router-link :to="{name:'activelist',query:{activiteType:4,number:'L0514'}}">查看更多</router-link>
                    </div>
                    <am-right v-if="actList" :data="actList.list"></am-right>
                </div>
            </div>
        </div>
        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="dataAll.pages>1">
            <div class="pagination">
                <div class="clear leavePage" id="pageContent">
                    <div class=" pagination comWidth ">
                        <span class="page-last" @click="getVolunteer(pageNum-1)" v-if="pageNum>1">上一页</span>
                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getVolunteer(item)">{{item}}</a> </p>
                        <span class="page-last" @click="getVolunteer(pageNum+1)">下一页</span>
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
import ammouncerleft from "../components/socialisation/ammouncerleft"
import ammouncerright from "../components/socialisation/ammouncerright"
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            isShow: true,
            totlePage: 11,
            lang:this.$store.getters.getlang,
            bandata:'',
            num:0,
            dataAll:'',
            pageNum:1,
            data:'',
            dataList:'',
            vTeam:'',
            volunteerList:'',
            actList:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner(); 
      this.getTeam();
      this.getVolunteer();
      this.activeList()
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
      //志愿者团队
      getTeam(){
          let data ={
              lang:this.lang,
              platform:0
          };
          API.get2('about/get/L0508',data).then(res => {
              if (res.code == 0) {
                  this.vTeam = res.data;
                  //console.log(res)
              }
          }).catch(err => {
              
          })
      },
      //志愿者列表
      getVolunteer(item){
        this.num=item-1;
        this.pageNum=item;
          let data ={
              lang:this.lang,
              pageNum:this.pageNum,
              pageSize:14,
              platform:0
          };
          API.get2('volunteer/page/L0505',data).then(res => {
              if (res.code == 0) {
                  this.volunteerList = res.data.list;
                  this.dataAll=res.data;
                  //console.log(this.volunteerList)
              }
          }).catch(err => {
              
          })
      },
      //志愿者活动列表
      activeList(){
          let data ={
              lang:this.lang,
              pageNum:1,
              pageSize:'',
              platform:0,
              activiteType:4
          };
          API.get2('active/commentatorOrVolunteer/page/L0513',data).then(res => {
              if (res.code == 0) {
                  this.actList = res.data;
                  //console.log(this.actList)
              }
          }).catch(err => {
              
          })
      }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'so-nav': socialisitionNav,
        'am-left': ammouncerleft,
        'am-right': ammouncerright,

    }
};
</script>
<style scoped>
.mt50 {
    margin-top: 80px;
}
</style>
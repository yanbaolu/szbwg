<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" :bandata="bandata" v-if="bandata"></header-top>
        <div class="activity">
            <div class="social_nav">
                <ul class="clearfix">
                    <li><a href="/socialisation/index?type=socialisation&amp;curIndex=0" id="lmAct0" class="active">活动</a></li>
                </ul>
            </div>
            <ac-list :isPage="isPage" v-if="activeList" :data="activeList" :type="0"></ac-list>
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
import activity from "../components/activity/activitylist";
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner:true,
            isPage: false,
            totlePage: 12,
            bandata:'',
            activeList:'',
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
      //获取banner 临时的
      getBaner(){
          let data ={
              lang:this.lang,
              pageNo:1,
              pageSize:3,
              platform:0
          };
          API.get2('slidePic/page/L0301',data).then(res => {
              if (res.code == 0) {
                  this.bandata = res.data.list;
                  //console.log(this.bandata)
              }
          }).catch(err => {
              
          })
      },
      //活动列表
      getList(item){
          this.num=item-1;
          this.pageNum=item;
          let data ={
              lang:this.lang,
              pageNum:this.pageNum,
              pageSize:4,
              platform:0
          };
          API.get2('active/page/L0501',data).then(res => {
              if (res.code == 0) {
                  this.activeList = res.data.list;
                  this.dataAll=res.data;
                  //console.log(this.activeList)
              }
          }).catch(err => {
              
          })
      }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'ac-list': activity,
    }
};
</script>
<style scoped>
.activity {
    margin-top:30px;
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

.social_nav {
    width: 1200px;
    height: auto;
    margin: 0 auto;
}

.social_nav ul li {
    float: left;
}

.social_nav ul li {
    background: url(../../assets/img/icons/title-icon.png) no-repeat left center;
    background-size: 14px 14px;
    padding: 0 40px;

}

.social_nav ul li:not(:first-child) {
    padding-left: 54px;
}

.social_nav ul li a {
    display: block;
    height: 51px;
    line-height: 51px;
    font-size: 26px;
    color: #999999;
    border-bottom: 4px solid #fbfbfb;
    cursor: pointer;
}

.social_nav ul li:first-child {
    background: none;
}

.social_nav ul li a:hover {
    border-bottom: 4px solid #333333;
    color: #333333;
}

.social_nav ul li a.active {
    border-bottom: 4px solid #333333;
    color: #333333;
}
</style>
<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="social_main mt50">
        <!--导航-->
         <div class="social_nav">
           <so-nav></so-nav>
        </div>
        <!--讲解员-->
           <div class="little_ammouncer clearfix active">
                <div class="little_ammou_left">
                    <div class="news_title">
                       	小讲解员风采
                    </div>
                      <!--讲解员-->
                      <am-left :isPage="isPage"></am-left>
                </div>
                  <div class="little_ammou_right">
                    <div class="news_title clearfix">
                  小讲解员活动 <router-link :to="{path:'activelist'}">查看更多</router-link>
                    </div>
                    <am-right></am-right>
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
      isBanner:true,
      isPage: false,
      isShow:false,
      totlePage:1
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'so-nav':socialisitionNav,
    'am-left':ammouncerleft,
    'am-right':ammouncerright,
   
  }
};
</script>
<style scoped>
.mt50{margin-top: 80px;}
.big_img{margin-top: 30px;}
.news_title a {
    float: right;
    font-size: 15px;
    color: #767676;
}
.little_ammouncer{
    width: 1200px;
    margin: 40px auto 0;
    /* display:none; */
}
.activity{margin-top: 130px;}
.social_banner{
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 80px;
}
.social_main{
    width: 100%;
    background: #fbfbfb;
    position: relative;
    z-index:2;
    padding-top:55px;
}




</style>

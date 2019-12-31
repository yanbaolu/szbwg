<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
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
                      <am-left :isPage="isPage" :isShow="isShow"></am-left>
                </div>
          <div class="little_ammou_right">
                    <div class="news_title clearfix">
                    志愿者活动 <router-link :to="{path:'activelist'}">查看更多</router-link>
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
      isShow:true,
      totlePage:11
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






</style>

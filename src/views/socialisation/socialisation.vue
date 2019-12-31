<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <so-nav></so-nav>
        </div>
        <!--讲座-->
       <div class="">
            <ac-list :isPage="isPage"></ac-list>
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
      isBanner:true,
      isPage: false,
      totlePage: 1
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'so-nav':socialisitionNav,
    'ac-list':activity,
  }
};
</script>
<style scoped>
.mt50{margin-top: 80px;}
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

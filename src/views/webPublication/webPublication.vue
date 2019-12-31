<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <web-nav></web-nav>
        </div>
        <!--讲座-->
       <div class="">
            <web-forum :isPage="isPage"></web-forum>
       </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/webPublication/webPublicationnav";
import forum from "../components/webPublication/forum"   
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:true,
      isPage: false,
      totlePage: 12
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'web-nav':socialisitionNav,
    'web-forum':forum,
  }
};
</script>
<style scoped>

</style>

<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <!--导航-->
         <div class="social_nav">
           <web-nav></web-nav>
        </div>
<in-newslist :isPage='isPage'></in-newslist>
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
      news:[],
      toice:[],
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <=5 ? (this.isPage = false) : (this.isPage = true);
  
 
  },
  computed: {},
  methods: {
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'in-newslist':paperlist,
     'web-nav':socialisitionNav,
  }
};
</script>
<style scoped>

.navPath{margin: 0 auto!important;}



</style>

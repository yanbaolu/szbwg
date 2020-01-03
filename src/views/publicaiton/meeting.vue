<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <pu-nav></pu-nav>
        </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import publicationnav from "../components/publicaiton/publicationnav";
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
    'pu-nav':publicationnav,
  }
};
</script>
<style scoped>
.mt30{margin-top: 30px;}
</style>

<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <cu-nav></cu-nav>
        </div>
        <!--资质-->
       <div class="cultural_qualifica">
           <cu-qlist></cu-qlist>
       </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/cultural/culturalnav";
import qlist from "../components/cultural/qlist";
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
    'cu-nav':socialisitionNav,
    'cu-qlist':qlist
  }
};
</script>
<style scoped>
.cultural_qualifica {
    width: 1200px;
    margin: 33px auto 0;
}
</style>

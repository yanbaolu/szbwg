<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="news_main">
        <div class="navPath_new mb-48">
			<div class="navPath clear">
	        		<p class="clear"><i></i><a href="/document/cmsDocument?cultuIndex=1">文保</a><i></i>
	        		</p><p class="clear">
	        			<i></i>
	        			<a href="/document/cmsDocument?curIndex=2">案例</a><i></i>
	        		</p>
	        		<p class="clear"><i></i><a href="#">2015年馆藏纪念香港和澳门回归铜镀金龙保护修复</a><i></i></p></div>
	    	</div>
    	</div>
      <ca-detial></ca-detial>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import cadetial from "../components/cultural/cadetial";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:false,
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
    "ca-detial":cadetial
  }
};
</script>
<style scoped>


</style>

<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="navPath_new" style="margin-bottom:41px;">
					<div class="navPath clear">
						<p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
						<p class="clear"><i></i><a href="javascript:;">新闻资讯</a><i></i></p>
					</div>
		</div>
        <div class="news_message">
             <div class="news_title">
		新闻资讯</div>
        </div>
<in-newslist :isPage='isPage'></in-newslist>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleNewsList from "../components/intangible/intangibleNewsList";
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
    'in-newslist':intangibleNewsList,
  }
};
</script>
<style scoped>

.navPath{margin: 0 auto!important;}



</style>

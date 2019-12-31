<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
  <div class="news_main" style="margin-bottom:40px;">
     <div class="navPath_new clear" style="margin-bottom:33px;">
		<div class="navPath clear">
			<p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
			<p class="clear"><i></i><a href="javascript:;">非遗法规</a><i></i></p>
		</div>
  	 </div>
        <div class="news_message">
            <div class="intang_title">
                    <h3 class="clearfix">
                        <a href="#" target="_blank" class="title_a">国家级法规</a>
                        <router-link target="_blank" :to="{path:'intangibleLRList'}" class="more">查看更多</router-link>
                    </h3>
                  
            </div>
            <div class="news_content laws_content">
                  <in-lr></in-lr>
            </div>
            <div class="intang_title">
                    <h3 class="clearfix">
                        <a href="#" target="_blank" class="title_a">省级法规</a>
                        <router-link target="_blank" :to="{path:'intangibleLRList'}" class="more">查看更多</router-link>
                    </h3>
            </div>
            <div class="news_content laws_content">
                  <in-lr></in-lr>
            </div>
            <div class="intang_title">
                    <h3 class="clearfix">
                        <a href="#" target="_blank" class="title_a">市级法规</a>
                        <router-link target="_blank" :to="{path:'intangibleLRList'}" class="more">查看更多</router-link>
                    </h3>
            </div>
            <div class="news_content laws_content">
                 <in-lr></in-lr>
            </div>
        </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleLRinfo from "../components/intangible/intangibleLRinfo";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      isPage: false,
      isPageTopic: false,
      totlePageTopic: 1,
      totlePage: 1,
      news:[],
      toice:[],
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <= 10 ? (this.isPage = false) : (this.isPage = true);
 
  },
  computed: {},
  methods: {

       
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'in-lr':intangibleLRinfo,

  }
};
</script>
<style scoped>
/*法规内容*/
.laws_content{
    margin-bottom:40px !important;
    margin-left:25px;
}
.news_content{
    margin:10px 0;
}


</style>


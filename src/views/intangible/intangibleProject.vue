<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="navPath_new" style="margin-bottom:41px;">
					<div class="navPath clear">
						<p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
						<p class="clear"><i></i><a href="javascript:;">非遗代表性项目</a><i></i></p>
					</div>
		</div>
        <div class="news_message">
             <div class="news_title">
		非遗代表性项目</div>
        </div>
        <div class="intang_picture wrap">
              <in-pic :isPage ='isPage'></in-pic>
        </div>
      
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangiblePic from "../components/intangible/intangiblePic";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
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
    'in-pic':intangiblePic,
  }
};
</script>
<style scoped>
.news_main{margin-top: 0!important;}
.navPath{margin: 0 auto!important;}
.intang_picture{margin-top: 30px;}



</style>

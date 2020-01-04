<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <pu-nav></pu-nav>
        </div>
        <!--创意商品-->
       <div class="imgBox">
          <div class="bigImgBox">
	    		<a href="/publication/cmsPublication/detail?&amp;pLm=L08&amp;lmType=L0801&amp;resId=2cd32e4ed2304420b2f5551be1bb6e5b&amp;resType=CmsGoods&amp;lang=0&amp;menuId=L0801&amp;resSubType=">
	    				<img src="https://www.shenzhenmuseum.com/p/userfiles/c581bf9bfb904e70bf6fb271206e24d5/20191120/2019112011050871192973.png" onerror="this.src='/static/img/bg-big.png'" title="40周年改革展览T恤（21个城市）（汕头）" alt="40周年改革展览T恤（21个城市）（汕头）">
	    			</a>	
	    		</div>
            <p-list></p-list>
       </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import publicationnav from "../components/publicaiton/publicationnav";
import plist from "../components/publicaiton/plist";
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
    'p-list':plist,
  }
};
</script>
<style scoped>
.bigImgBox{height:660px;width: 100%;padding-top: 60px;}
.bigImgBox a{display:block;width: 1200px;height: 660px; margin:0 auto 40px;vertical-align: middle;text-align: center;line-height:600px;}
.bigImgBox a img{max-height:600px;max-width:1200px;}
</style>

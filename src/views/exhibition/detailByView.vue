<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="pt-10 pb-2">
      <div class="nav-path comWidth" style="padding-bottom:30px;"></div>
    </div>
    <div class="exhibit_cont mt50" style="padding-bottom:40px;">
          <!-- 展览照片 -->
<div class="exhibitsPicsWrap wrap" style="clear:both;width:1200px;margin:0 auto;">
	<div class="exhibitsPics comWidth">
	</div>	
		<div class="exhi-atlas">		
			<!-- <div class="swiper-exhi-atlas">
			    <div class="swiper-wrapper picShow">
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130021355392.jpg" >	</div>
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014342128.jpg" ></div>
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014350910.jpg"></div>
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014508309.jpg" >	</div>
          <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014508309.jpg" >	</div>
          <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014508309.jpg" >	</div>
				
					</div>
			  	
			  <a href="javascript:;" class="exhi-atlas-next" ></a>	
				<a href="javascript:;" class="exhi-atlas-prev" ></a>
			</div>
		 -->
     <div class="swiper-exhi-atlas">
        <div class="swiper-wrapper picShow">
        	<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130021355392.jpg" >	</div>
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014342128.jpg" ></div>
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014350910.jpg"></div>
					<div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014508309.jpg" >	</div>
          <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014508309.jpg" >	</div>
          <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/30/20171130014508309.jpg" >	</div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
       <!-- 导航按钮 -->
        <div class="exhi-atlas-prev"></div>
        <div class="exhi-atlas-next"></div>
      </div>
       
		</div>

</div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import changshePic from "../components/exhidetial/changshePic";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      isPage: false,
      totlePage: 1,
      isVideo:true,//是否有视频
      isExhiNews:true,//是否有相关展览
      icurPic:2
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <= 10 ? (this.isPage = false) : (this.isPage = true);
    this.swiper(this.icurPic);
  },
  computed: {},
  methods: {
   swiper(n){
     var mySwiper = new Swiper('.swiper-exhi-atlas', {
       initialSlide:n,
       loop:true,
       // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderCustom: function (swiper, current, total) {
          return current + ' /' + total;
          }
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.exhi-atlas-next',
          prevEl: '.exhi-atlas-prev',
        },
      })
   }
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
    "ex-pic": changshePic
  }
};
</script>
<style scoped>
.mt50{margin-top: 50px;}
/*展览照片*/
.exhibitsPicsWrap{padding-bottom:40px;}
.exhi-atlas {position: relative;}
.exhi-atlas .picShow{width:800px;height: 600px;margin:0 auto;}
.exhi-atlas .picShow .swiper-slide{width:800px !important;height: 600px;text-align: center;line-height: 600px;}
.exhi-atlas .picShow .swiper-slide img{max-width: 800px;max-height:600px;}
.swiper-exhi-atlas{width:800px;height: 630px;margin:0 auto; overflow: hidden;}
.namePic{line-height: 36px;
    text-align:center;
    color: #666666;
    font-size: 16px;}
.exhibitsPicsWrap .swiper-pagination{bottom:-10px!important;}
.exhibitsPicsWrap .exhi-atlas-next,.exhibitsPicsWrap .exhi-atlas-prev{width:54px;height: 96px;position: absolute;top:50%;margin-top:-26px;}
.exhibitsPicsWrap .exhi-atlas-prev{background: url(../../assets/img/icons/index-prev.png) no-repeat left center;left:2px;}
.exhibitsPicsWrap .exhi-atlas-next{background: url(../../assets/img/icons/index-next.png) no-repeat right center;right:2px;}
.exhibitsPicsWrap .exhi-atlas-prev:hover{background: url(../../assets/img/icons/index-prev-active.png) no-repeat left center;left:2px;}
.exhibitsPicsWrap .exhi-atlas-next:hover{background: url(../../assets/img/icons/index-next-active.png) no-repeat right center;right:2px;}

.exhi-atlas .desc{font-size:16px; color: #666666;line-height: 22px;text-align: left;margin:0 auto;width:800px;}
.exhi-atlas .pages{font-size:16px;text-align:center;line-height: 34px;color:#333333;}
</style>

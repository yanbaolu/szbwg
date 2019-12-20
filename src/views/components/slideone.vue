<template>
	<div class="slide_one">
		<div class="swiper-container swiper_one">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide">
		    	<dl>
		    		<dt><img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/09/23/20170923113549307.jpg" alt=""></dt>
		    		<dd>
		    			<h4 class="info_t1">世界野生动物标本展</h4>
		    			<h5 class="info_t2">历史民俗馆</h5>
		    			<p>贝林先生在世界各地收集和制作了很多动物标本，并无偿捐赠给国内外多所博物馆。在此展出的是贝林先生贝林先生在世界各地收集和制作了很多动物标本贝林先生在世界各地收集和制作了很多动物标本 </p>
		    		</dd>
		    	</dl>
		    </div>
		    <div class="swiper-slide">
		    	<dl>
		    		<dt><img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/10/30/20171030020008453.jpg" alt=""></dt>
		    		<dd></dd>
		    	</dl>
		    </div>
		    <div class="swiper-slide"></div>
		    <div class="swiper-slide"></div>
		    <div class="swiper-slide"></div>
		  </div>
		  <div class="swiper-pagination swiper-p1"></div>
		</div>	
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper_one', {
	    		slidesPerView: 'auto', //重要 可以去swiper搜索
	    		centeredSlides: true,   //重要
	    		loop : true,
				autoplay:false,//可选选项，自动滑动
				slidesOffsetBefore:35,
				pagination: {
			    el: '.swiper-p1',
			    type: 'progressbar',
			  },
			})
		}
	}
</script>
<style scoped>
	.swiper-container{margin-top:30px;height:683px;}
	.swiper-slide{width:500px!important;height:550px!important;background:#fff;margin-right:70px;cursor:pointer;box-shadow: 0 0.0625em 0.1875em 0 rgba(0, 0, 0, 0.1), 0 0.5em 0 -0.25em #f25e43, 0 0.5em 0.1875em -0.25em rgba(0, 0, 0, 0.1), 0 1em 0 -0.5em #e5593f, 0 1em 0.1875em -0.5em rgba(0, 0, 0, 0.1);border:none;border-radius:10px;}
	.swiper-container-horizontal>.swiper-pagination-progressbar, .swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{bottom:50px!important;top:auto!important;width: 60%!important;left:50%;margin-left:-30%;}
	.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:rgba(254,114,16,1)!important;}
	.swiper-slide dl dt{height:375px;background:#ccc;border-radius:10px 10px 0px 0px;}
	.swiper-slide dl dt img{width:100%;height:100%;object-fit:contain;}
	.swiper-slide dl dd{height:175px;padding-left:29px;}
	.swiper-slide dl h4{height:50px;color:#333333;font-size:24px;line-height:50px;text-shadow:4px 7px 4px rgba(158,158,158,0.3);position:relative;margin-top:10px;}
	.swiper-slide dl h4:after{content:"";width:30px;height:2px;background:rgba(233,233,233,1);position:absolute;bottom:0;left:0;}
	.swiper-slide dl h5{font-size:14px;font-family:Microsoft YaHei;font-weight:400;color:rgba(254,114,16,1);line-height:30px;display:inline-block;position: relative;margin:5px 0 5px 15px;}
	.swiper-slide dl h5:after{content:"";width:130%;height:16px;background:rgba(254,114,16,1);opacity:0.1;border-radius:50%;position: absolute;bottom:4px;left:-13px;}
	.swiper-slide dl dd p{font-size:16px;color:#666;width:421px;line-height:28px;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow: hidden;}
</style>
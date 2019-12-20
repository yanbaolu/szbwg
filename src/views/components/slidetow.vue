<template>
    <div class="slide_tow">
        <div class="data_list">日历组件</div>
        <div class="swiper-container swiper_tow">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                	<img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
					<div class="active_title">吴昌硕书画篆刻艺术展</div>
					<span>历 史 民 俗 馆</span>
					<i class="round">1</i>
                </div>
                <div class="swiper-slide">
                	<img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                	<div class="active_title">深圳博物馆参</div>
                	<span>历 史 民 俗 馆</span>
                	<i class="round">2</i>
                </div>
                <div class="swiper-slide">
                	<img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                	<div class="active_title">深圳博物馆参</div>
                	<span>历 史 民 俗 馆</span>
                	<i class="round">3</i>
                </div>
                <div class="swiper-slide">
                	<img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                	<div class="active_title">篆刻艺术展</div>
                	<span>历 史 民 俗 馆</span>
                	<i class="round">4</i>
                </div>
                <div class="swiper-slide">
                	<img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191202172635.jpg" alt="">
                	<div class="active_title">硕书画篆刻艺术展</div>
                	<span>历 史 民 俗 馆</span>
                	<i class="round">5</i>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-p2"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
    	var swiper = new Swiper('.swiper_tow', {
    	      slidesPerView:2.3,
    		  centeredSlides : true,
    		  spaceBetween :-25,
    		  loop: true,
    	      pagination: {
    	        el: '.swiper-p2',
    	        type:'fraction'
    	      },
    	});
    }
}
</script>
<style scoped>
.slide_tow {color: #ccc;}
.slide_tow .data_list {width: 1200px;height: 70px;background: #ccc;margin: 0 auto;margin-top: 20px;border-radius:20px;text-align:center;line-height:70px;color:#000;}
.swiper-container{width: 100%;height:440px;margin-top:60px;}
.swiper-slide {transform: scale(0.8);height:366px!important;background:#fff;border-radius:10px;position:relative;bottom:0!important;}
.swiper-slide img{border-radius:10px;width:100%;height:100%;object-fit: cover;}
.swiper-slide .active_title{width:100%;height:60px;line-height:60px;background:rgba(0,0,0,1);text-indent:22px;position:absolute;bottom:0;border-radius:0px 0px 10px 10px;opacity:0.5;font-size:26px;display:none;}
.swiper-slide span{position: absolute;width:35px;background:rgba(103,184,178,1);right:10px;top:-5px;text-align:center;padding:10px 5px;color:#fff;border-radius:5px;}
.swiper-slide .round{position:absolute;width:82px;height:82px;background:rgba(218,218,218,1);border-radius:50%;left:10px;bottom:10px;text-align:center;line-height:82px;color:#67B8B2;font-size:16px;}
.swiper-slide-active,.swiper-slide-duplicate-active{transform: scale(0.95);border-radius:10px;cursor:pointer;position:relative;}
.swiper-slide,.swiper-slide-active .active_title{display:block!important;}
.swiper-slide,.swiper-slide-active .round{bottom:80px;}
.swiper-slide,.swiper-slide-active span{background:#659CBA!important;}
.swiper-slide-active,.swiper-slide-duplicate-active img{border-radius:10px;cursor:pointer;}
</style>
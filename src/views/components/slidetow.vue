<template>
    <div class="slide_tow">
        <div class="data_list">
			<div class="buttonBox">
				<div class="yearBtnBox">
					<div class="yearbtn">2015</div>
					<div class="yearlist"></div>
				</div>
				<div class="mouthBtnBox">
					<div class="mouthBtn">11</div>
					<div class="mouthList"></div>
				</div>
			</div>
			<ul class="dataList">
				<span class="leftBtn"><<</span>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<span class="rightBtn">>></span>
			</ul>
		</div>
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
.slide_tow .data_list {width: 1200px;height:68px;background: #ccc;margin: 0 auto;margin-top: 20px;border-radius:20px;text-align:center;line-height:70px;color:#000;}
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
.data_list{display:flex;}
.buttonBox{display:flex;}
.yearBtnBox {display:flex;}
.yearBtnBox .yearbtn{width:150px;height:68px;background:#fff;border-radius:20px;line-height:68px;text-align:
left;text-indent:20px;font-size:26px;color:#666;margin-right:40px;cursor:pointer;}
.mouthBtnBox .mouthBtn{width:150px;height:68px;background:#fff;border-radius:20px;line-height:68px;text-align:
left;text-indent:20px;font-size:26px;color:#666;cursor:pointer;}
.dataList{display:flex;margin-left:50px;}
.dataList li{width:72px;height:72px;background:#fff;box-shadow:5px 9px 15px 3px rgba(51,51,51,0.08);border-radius:50%;margin-right:30px;cursor:pointer;}
.dataList .leftBtn,.rightBtn{width:30px;font-size:20px;display:block;margin-right:30px;cursor:pointer;}
</style>
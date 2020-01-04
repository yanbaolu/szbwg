<template>
    <div>
       <div class="case_detail deputy_text">
        <h1 style="height: 39px;line-height: 39px;">2015年馆藏纪念香港和澳门回归铜镀金龙保护修复</h1>
        <h4 style="text-align:center;font-size:20px;color:#333333;line-height:30px;"></h4>
    </div>
    <div class="case_detail_img">
    	<div class="case_img_iframe">
           <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/15/20171115034927329.JPG" alt=""></div>
                    <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/15/20171115035008273.JPG" alt=""></div>
                    <div class="swiper-slide"><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/15/20171115035028421.jpg" alt=""></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
        </div>
        <div class="deputy_text" style="width:1200px;margin:0 auto;"><p></p><p style="text-align: left; text-indent: 2em; margin-top: 5px;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;"></span></p><p style="text-align: left; text-indent: 2em; margin-top: 5px;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;"><br></span></p><p style="text-align: left; text-indent: 2em; margin-top: 5px;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">2015</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">年</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">11</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">月</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">10</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">日至</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">13</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">日，深圳博物馆文物保护部对馆藏纪念香港和澳门回归铜镀金龙计</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">2</span><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px; line-height: 24px; text-indent: 28px;">件文物进行了抢救保护处理。保护处理前对其保存状况和病害情况进行了详细检查和无损检测分析。根据分析检测结果和保存现状，制订抢救保护处理方案，并在局部实验的基础上，有针对性地实施了表面清洁和局部除锈、防锈等保护技术处理。处理后纪念龙形态和性质稳定，色泽协调，达到了预期的效果。</span><br></p><p style="text-align: left; text-indent: 2em;"><br></p><p></p></div>
        </div>
    </div>
</template>
<script>
export default {
    props:[],
    data(){
        return{}
    },
    mounted(){
        this.swiper()
    },
    methods:{
        swiper(){
            var mySwiper="";
            mySwiper = new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    ' /' +
                    '<span class="' + totalClass + '"></span>';
            },
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            })
        }
    }
}
</script>
<style scope> 
.case_detail {
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 60px;
}

.case_detail h1 {
    height: 80px;
    line-height: 80px;
    font-size: 26px;
    color: #333333;
    text-align: center;
    width:100%;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.case_detail center{
	font-size:16px !important;
	color:#999999;
}
.case_detail p {
    line-height: 30px;
    font-size: 15px;
    color: #747474;
}

.case_detail p:first-of-type {
    text-align: center;
    line-height: 40px;
    margin: 20px 0;
}

.case_detail p:nth-of-type(2) {
    height: 30px;
}

/*鍥剧墖閮ㄥ垎*/
.case_detail_img {
    width: 1200px;
    margin:30px auto 40px;
    position: relative;
}

.case_img_iframe {
    width: 850px;
    height: 652px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 26px 25px;
    background: url(../../../assets/img/icons/bg_frame.jpg) no-repeat center center;
}

.case_img_iframe .swiper-container {
    margin: 0 auto;
      width: 800px;
    height: 650px;
}
.case_img_iframe .swiper-container .swiper-slide{
			width:800px !important;
			line-height:600px;
			text-align:center;
	}
.case_img_iframe .swiper-container .swiper-slide img{
	max-width:800px;
	max-height:600px;
}
.swiper-button-prev {
    position: absolute;
    left: 0;
    top: 50%;
    width: 45px;
    height: 80px;
    background: url(../../../assets/img/icons/index-prev.png) no-repeat center center;
}

.swiper-button-prev:hover {
    background: url(../../../assets/img/icons/index-prev-active.png) no-repeat center center;
    background-size: 45px 80px;
}

.swiper-button-next {
    position: absolute;
    right: 0;
    top: 50%;
    width: 44px;
    height: 80px;
    background: url(../../../assets/img/icons/index-next.png) no-repeat center center;
}

.swiper-button-next:hover {
    background: url(../../../assets/img/icons/index-next-active.png) no-repeat center center;
    background-size: 44px 80px;
}

.swiper-pagination {
    /* left: 48%; */
    font-size: 16px;
}

.case_detail_img p {
    line-height: 36px;
    text-align:center;
    color: #666666;
    font-size: 16px;
}

/*鐩稿叧鍥剧墖*/
.related_message {
    width: 1200px;
    margin: 30px auto;
}

.case_related_img {
    float: left;
    width: 270px;
    height: 270px;
    margin: 30px 30px 30px 0;
    position: relative;
}
.case_related_img img{
    width: 100%;
    height: 100%;
}
.case_related_img p {
    width: 100%;
    line-height:48px;
    position: absolute;
    background:rgba(0,0,0,0.4);
    bottom: 0;
    color:white;
    font-size:16px;
    text-indent: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.case_related_video{
    float: left;
    width: 270px;
    height: 280px;
    margin: 30px 30px 30px 0;
    position: relative;
}
.case_related_video video{
    width: 270px;
    height: 220px;
}
.case_related_video p{
    height:60px;
    width:100%;
    white-space: nowrap;
    line-height:60px;
    color:#999999;
    background:#e9e9e9;
    font-size:16px;
    text-indent: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
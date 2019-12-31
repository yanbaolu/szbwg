<template>
    <div class="footrWarp">
        <footer class="footer">
            <div class="footer_box">
                <a href="http://bszs.conac.cn/sitename?method=show&id=1A44BA4ABBE6345AE053012819AC317C" class="sb_footer_img"><img alt="" src="../../assets/img/icons/timg.png"></a>
                <p class="bottomLinks"><a target="_black" href="#">网站地图</a><a target="_black" href="#">友情链接</a><a href="#">隐私政策</a><a href="#">版权声明</a><a href="i#">展厅地图</a><a href="#">联系我们</a></p>
                <p>深圳博物馆 版权所有 <a href="http://www.miitbeian.gov.cn" style="color:#fff;" target="_blank">粤ICP备13006341号-1</a></p>
                <p>Copyright © 2008-<span id="getYear"></span> shenzhenmuseum.com Corporation,All Rights Reserved</p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {  
      	
var footerHeight = 0,

footerTop = 0,

$footer = $(".footer");

positionFooter();
//定义position Footer function

function positionFooter() {

//取到div.footer高度

footerHeight = $footer.height();

//div#footer离屏幕顶部的距离

footerTop = ( $(window).scrollTop()+$(window).height()-footerHeight)+"px";
if (($(document.body).height()+footerHeight)<$(window).height()) {
	$footer.css({position: "absolute",paddingTop:"0"}).stop().animate({"top":footerTop});
	$footer.find("p").eq(0).css("marginTop","20px");
} else {
$footer.css({
position:"static"});
$footer.find("p").eq(0).css({"marginTop":"0"});
$footer.css({"paddingTop":"20px","marginTop":"30px"});
}

}
 //window.addEventListener("scroll", this.positionFooter, true);  	
$(window).scroll(positionFooter).resize(positionFooter);
  }
}
</script>
<style scoped>
	
</style>
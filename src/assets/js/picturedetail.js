/**
 * Created by lixin on 2017/8/2.
 */

$(".picture_img").thumbnailImg({
    small_elem: ".small_frame",
    large_elem: ".picture_frame",
    left_btn: ".small_btn_left",
    right_btn: ".small_btn_right",
    state: "active",
    speed: "normal",
    vis: 3,
    Img: function Img(i) {
    	$(".img_page span").text(i+1);
        $(large_elem).find("ul li").eq(i).fadeIn().siblings().hide();
    }
});
$(".small_picture").thumbnailImg({
	small_elem: ".small_frame",
    large_elem: ".picture_frame",
    left_btn: ".bto_left",
    right_btn: ".bto_right",
    state: "active",
    speed: "normal",
    vis: 1,
    Img: function Img(i) {
    	$(".img_page span").text(i+1);
        $(large_elem).find("ul li").eq(i).fadeIn().siblings().hide();
    }

});
$(".intang_picture_title p").on("click",function(){
    $(".intang_picture_title p").addClass("active");
    $(".intang_picture_title p").siblings().removeClass("active");
})
$(".picture_type_list ul li a").on("click",function(){
    $(".intang_picture_title p").addClass("active");
    $(".intang_picture_title p").parent().siblings().children("a").removeClass("active");
})
$(document).ready(function(){
    $('.slider11').bxSlider({
        infiniteLoop: false,
        slideWidth: 250,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        startSlide: 0,
    });

});

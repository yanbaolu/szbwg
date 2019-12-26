(function($) {
    var defaluts = {
        large_elem: "large_elem",
        small_elem: "small_elem",
        left_btn: "left_btn",
        right_btn: "right_btn",
        state: "on",
        speed: "normal",
        vis: 6
    };
    $.fn.extend({
        "thumbnailImg": function(options) {
            var opts = $.extend({},
            defaluts, options);
            return this.each(function() {
                var $this = $(this);
                $(opts.large_elem).find("ul li").eq(0).show();
                $(opts.small_elem).find("ul li").eq(0).addClass(opts.state);
                var l = $(opts.small_elem).find("ul li").length;
                var l_mean;
                var timer = null;
                var onOff=true;
                if (l < opts.vis) {
                    l_mean = 0;
                } else {
                    l_mean = ((parseInt(l / opts.vis) - 1) * opts.vis) + (l % opts.vis);
                }
                var w = $(opts.small_elem).find("ul li").outerWidth(true);
                $(opts.small_elem).find("ul").css("width", l * w + "px");
                $(opts.small_elem).find("ul li").click(function() {
                    $(this).addClass(opts.state).siblings().removeClass(opts.state);
                    Img($(this).index());
                });
                //2016/10/28  mengxiaoyan
                //当鼠标移入小缩略图时，显示当前的大图并且停止切换，移开的时候继续切换
                // $(opts.small_elem).find("ul li").hover(function(){

                //     $(this).addClass(opts.state).siblings().removeClass(opts.state);
                //     Img($(this).index());
                //     clearInterval(timer);
                // },function(){
                //      timer = setInterval(function(){
                //         lazyGoImg();
                //    },3000);
                // });
                 //当鼠标移入大图时，停止切换，移开的时候继续切换
                // $(opts.large_elem).find("ul li").hover(function(){
                //     if (onOff)
                //      clearInterval(timer);
                // },function(){
                //     if(onOff)
                //      timer = setInterval(function(){
                //         lazyGoImg();
                //    },3000);
                // });
               
                
                $(opts.left_btn).click(function() {
                    var i;
                    $(opts.small_elem).find("ul li").each(function(index) {
                        if ($(this).hasClass(opts.state)) {
                            i = index;
                        }
                    });
                    i--;
                    if (i < 0) {
                        i = l - 1;
                    }
                    $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                    var ml = i * w;
                    if (ml <= l_mean * w) {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -ml + "px"
                        },
                        opts.speed);
                    } else {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -(l_mean * w) + "px"
                        },
                        opts.speed);
                    }
                    Img(i);
                });
                $(opts.right_btn).click(function() {
                    var i;
                    $(opts.small_elem).find("ul li").each(function(index) {
                        if ($(this).hasClass(opts.state)) {
                            i = index;
                        }
                    });
                    i++;
                    if (i > l - 1) {
                        i = 0;
                    }
                    $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                    var ml = i * w;
                    if (ml <= l_mean * w) {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -ml + "px"
                        },
                        opts.speed);
                    } else {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -(l_mean * w) + "px"
                        },
                        opts.speed);
                    }
                    Img(i);
                });
                function Img(i) {
                	$(".img_page span").text(i+1);
                    $(opts.large_elem).find("ul li").eq(i).fadeIn().siblings().hide();
                }
                function lazyGoImg(){
               	  var i;
                    $(opts.small_elem).find("ul li").each(function(index) {
                        if ($(this).hasClass(opts.state)) {
                            i = index
                        }
                    });
                    i++;
                    if (i > l - 1) {
                        i = 0
                    }
                    $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                    var ml = i * w;
                    if (ml <= l_mean * w) {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -ml + "px"
                        },
                        opts.speed);
                    } else {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -(l_mean * w) + "px"
                        },
                        opts.speed);
                    }
                    Img(i);
               }
               //$(document).everyTime(2000,lazyGoImg);

               // timer = setInterval(function(){
               // 	 lazyGoImg();
               // },3000);
            });
        }
    });
})(jQuery);

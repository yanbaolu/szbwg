<template>
    <div class="timewarp" id="timeLine">
        <div class="time_line">
            <ul id="yearList">
                <li class="year-active">1995<i class="year-dot"></i></li>
                <li>1996<i class="year-dot"></i></li>
                <li>1997<i class="year-dot"></i></li>
                <li>1998<i class="year-dot"></i></li>
                <li>1999<i class="year-dot"></i></li>
                <li>2000<i class="year-dot"></i></li>
                <li>2001<i class="year-dot"></i></li>
                <li>2002<i class="year-dot"></i></li>
                <li>2003<i class="year-dot"></i></li>
                <li>2004<i class="year-dot"></i></li>
                <li>2005<i class="year-dot"></i></li>
                <li>2000<i class="year-dot"></i></li>
                <li>2001<i class="year-dot"></i></li>
                <li>2002<i class="year-dot"></i></li>
                <li>2003<i class="year-dot"></i></li>
                <li>2004<i class="year-dot"></i></li>
                <li>2005<i class="year-dot"></i></li>
            </ul>
            <div class="dotted-line"></div>
            <div class="center"></div>
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
        var mySwiper = new Swiper('.swiper_three', {
            centeredSlides: true,   //重要
            autoplay:false,//可选选项，自动滑动
        })
        $(function(){
            $("#timeLine").timeLine({
                w:850  //每一个li的宽度
    //          btnPrev:"#btnLeft",      //上一个按钮
    //          btnNext: "#btnRight",  //下一个按钮
    //          dateBox:"#yearList", //日期的ul盒子
    //          dateArr: "#yearList li", //保存每一个日期的数组
    //          conBox:"#cUl",  //保存切换内容的ul盒子
    //          conArr:"#cUl li" //保存每一个内容的数
            });
        });
    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped>
.time_line {width: 1200px;height:200px;margin: 0 auto;overflow: hidden;}
*{margin: 0;padding: 0;}
#timeLine{width: 1000px;margin:50px auto;overflow:hidden;}
#yearList{width:10000px;list-style: none;position: relative;margin-left: 457px;}
#yearList:after,.container-li:after{content: "";display: table;clear: both;}
#yearList li{float: left;cursor: pointer;text-align: center;font-size: 21px;padding: 10px 20px;width:84px;height:44px;margin-left:50px;background:#fff;border-radius:10px;}
.dotted-line{border-bottom: dashed 2px  #7b7d7b;position: relative;top: -22px;z-index: -1;}
#cList{width: 100%;position: relative;}
#btnLeft{width: 50px; height: 130px;display: inline-block;position: absolute;left: 0;top: 180px;text-decoration: none;color: #fff;font-size: 30px;text-align: center;line-height: 120px;background: rgba(0,0,0,0.3);}
#btnRight{width: 50px; height: 130px;display: inline-block;position: absolute;right: 0;top: 180px;text-decoration: none;color: #fff;font-size: 30px;text-align: center;line-height: 120px;background: rgba(0,0,0,0.3);}
#btnLeft:hover,#btnRight:hover{background: rgba(0,0,0,0.5);}
#cUl{width: 850px;list-style: none;height: 400px;margin: 0 auto;position: relative;left: 0px;}
#cUl li{width: 850px;position: absolute;  left: 0;}
.li-tit{display:inline-block;color: #fff;background-color: #002f21;padding: 10px 20px;margin: 30px auto 10px;}
.container-li{width: 100%;padding: 20px 50px;box-sizing: border-box;-webkit-box-sizing: border-box;border: solid 1px #434343;}
.c-li-left{width: 40%;float: left;}
.c-li-right{width: 60%;float: right;}
.year-active{color: red;}
.year-active i{background-color: red;}
.center{width:10px;height:10px;background:red;position: absolute;left:50%;margin-left:-5px;}
</style>
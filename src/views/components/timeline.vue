<template>
    <div class="timewarp" id="timeLine">
        <div class="time_line">
            <div class="bgline"></div>
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
                <li >2005<i class="year-dot"></i></li>
            </ul>
            <div id="btnLeft"></div>
            <div id="btnRight"></div>
            </div>
            <!-- <div class="center"></div> -->
          <div class="timecon">
              <ul id="cUl">
              <li>
                  <div class="clear ycon">
                      <div class="fl yconLeft">
                              <dl>
                                <dt><p>历史民俗馆</p></dt>
                                <dd></dd>    
                              </dl>  
                      </div>
                      <div class="yline"></div>
                      <div class="yconRight">
                          <dl class="clear">
                              <dt>展览名称：</dt>
                              <dd>吴昌硕书画篆刻艺术展</dd>
                          </dl>
                          <dl class="clear">
                              <dt>时 间：</dt>
                              <dd>2019.09.20-2019.11.17</dd>
                          </dl>
                          <dl class="clear">
                              <dt>地 点：</dt>
                              <dd>吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展</dd>
                          </dl>
                      </div>
                  </div>
                  
                  
                    <div class="clear ycon">
                      <div class="fl yconLeft">
                              <dl>
                                <dt><p>历史民俗馆</p></dt>
                                <dd><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191114151456.jpg" alt="" width="440" height="230"></dd>    
                              </dl>  
                      </div>
                      <div class="yline"></div>
                      <div class="yconRight">
                          <dl class="clear">
                              <dt>展览名称：</dt>
                              <dd>吴昌硕书画篆刻艺术展</dd>
                          </dl>
                          <dl class="clear">
                              <dt>时 间：</dt>
                              <dd>2019.09.20-2019.11.17</dd>
                          </dl>
                          <dl class="clear">
                              <dt>地 点：</dt>
                              <dd>吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展</dd>
                          </dl>
                      </div>
                  </div>
              </li>
              <li> 
                     <div class="clear ycon">
                      <div class="fl yconLeft">
                              <dl>
                                <dt><p>历史民俗馆</p></dt>
                                <dd></dd>    
                              </dl>  
                      </div>
                      <div class="yline"></div>
                      <div class="yconRight">
                          <dl class="clear">
                              <dt>展览名称：</dt>
                              <dd>吴昌硕书画篆刻艺术展</dd>
                          </dl>
                          <dl class="clear">
                              <dt>时 间：</dt>
                              <dd>2019.09.20-2019.11.17</dd>
                          </dl>
                          <dl class="clear">
                              <dt>地 点：</dt>
                              <dd>吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展吴昌硕书画篆刻艺术展</dd>
                          </dl>
                      </div>
                  </div>
              </li>
              <li> <div class="clear">
                      <div class="fl yconLeft">333333</div>
                      <div class="yline"></div>
                      <div class="yconRight"></div>
                  </div></li>
             <li> 
                 <div class="clear">
                      <div class="fl yconLeft">4444444 </div>
                      <div class="yline"></div>
                      <div class="yconRight"></div>
                  </div>
             </li>
              <li>55555</li>
              <li>66666</li>
              <li>77777</li>
              <li>88888</li>
              <li>99999</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
          </ul>
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
             w:1100,//每一个li的宽度
             btnPrev:"#btnLeft",      //上一个按钮
             btnNext: "#btnRight",//下一个按钮
             dateBox:"#yearList", //日期的ul盒子
             dateArr: "#yearList li", //保存每一个日期的数组
             conBox:"#cUl",  //保存切换内容的ul盒子
             conArr:"#cUl li" //保存每一个内容的数
            });
        });
        let lih = $('#cUl li').height();
        $('#cUl').css({
            height:lih +'px'
        })
    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped>
.time_line {width: 1100px;height:160px;margin: 0 auto;overflow: hidden;}
.timecon{width: 1100px;margin: 0 auto;overflow: hidden;padding:0 0 30px 0;}
.bgline{width: 1100px; height: 8px; background:url(../../assets/img/linebg.png) repeat-x; position: absolute; top: 54px;}
*{margin: 0;padding: 0;}
#timeLine{width: 1200px;margin:0 auto; position: relative; min-height: 700px;}
#yearList{width:10000px;list-style: none;position: relative;margin-left:490px;margin-top:35px;}
#yearList:after,.container-li:after{content: "";display: table;clear: both;}
#yearList li{float: left;cursor: pointer;text-align: center;font-size: 21px;padding: 10px 20px;width:84px;height:44px;margin-left:50px;background:#fff;border-radius:10px;}
.dotted-line{border-bottom: dashed 2px  #7b7d7b;position: relative;top: -22px;z-index: -1;}
#cList{width: 100%;position: relative;}
#btnLeft{width: 30px; height: 110px;display: inline-block;position: absolute;left: 0;top:0px;background: url(../../assets/img/left.png) no-repeat center;cursor: pointer;}
#btnRight{width: 30px; height: 110px;display: inline-block;position: absolute;right: 0;top:0px;background: url(../../assets/img/right.png) no-repeat center; cursor: pointer;}
/* #btnLeft:hover,#btnRight:hover{background: rgba(0,0,0,0.5);} */
#cUl{width: 1100px;list-style: none;margin: 20px auto; position: relative;}
#cUl li{width:1100px;float: left; position: absolute;}
/* #cUl li.c_active{display: block;} */
.li-tit{display:inline-block;color: #fff;background-color: #002f21;padding: 10px 20px;margin: 30px auto 10px;}
.container-li{width: 100%;padding: 20px 50px;box-sizing: border-box;-webkit-box-sizing: border-box;border: solid 1px #434343;}
.c-li-left{width: 40%;float: left;}
.c-li-right{width: 60%;float: right;}
#yearList li.year-active{color: #fff;/*position:absolute;top:-40px;*/background:url(../../assets/img/y_active.png);margin-top: -40px; width: 156px; height: 165px; line-height: 165px;}
.year-active i{background-color: red;}
/* .year-active + li{margin-left:220px!important;} */
/* .center{width:10px;height:10px;background:red;position: absolute;left:50%;margin-left:-5px;} */
#cUl li .ycon{position: relative;height: 290px;}
.yconLeft{width: 440px;  height: 230px; position: absolute; left:95px;}
.yline{ width: 20px; height: 300px;position: absolute; left: 55.3%; background: url(../../assets/img/line.png) no-repeat;}
.yconRight{width: 415px;position:absolute; right: 0;}
.yconLeft dl{position: relative;width: 440px; height: 230px;margin-top:50px;
 box-shadow: 10px 5px 15px rgba(0,0,0,0.1);}
.yconLeft dd,.yconLeft dt{position: absolute;}
.yconLeft dd{width: 440px; height: 230px; left: 0; z-index: 1;}
.yconLeft dt{width:35px; height: 110px; background:url(../../assets/img/year_icon.png);right:10px ; top: -6px; z-index: 2;}
.yconLeft dt p{ width: 14px; color: #fff;font-size: 14px; line-height: 18px; margin:8px auto;}
.yconRight{margin-top:50px;}
.yconRight dl{width: 415px; font-size: 14px; line-height: 28px; }
.yconRight dt{float: left;width: 90px; text-align: justify; text-align-last: justify; vertical-align: top; height: 40px; color: #828282;}
.yconRight dd{float:left; width: 320px; color: #666;}
</style>
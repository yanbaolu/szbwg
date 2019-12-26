<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="pt-10 pb-2">
      <div class="nav-path comWidth" style="padding-bottom:30px;"></div>
    </div>

    <!-- 大图 -->
    <div id="pageContent">
      <div id="imgContainer">
        <img
          id="imageFullScreen"
          src="collectionDetail?lmType=L0302&amp;resId=0080c48d427042729862613dbffde8f6"
        />
      </div>
      <div class="close" id="scale-close" @click="closeImg()"></div>
    </div>

    <!--藏品详情-->
    <div class="collectionDetailWrap wrap mt170">
      <div class="mainCon clear">
        <div class="detailLeft fl">
          <div class="carousel">
            <div class="large_box">
              <ul id="dataList1">
                <li class="active">
                  <a href="javascript:;">
                    <img
                      src="https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20191224090342.jpg"
                      onerror="this.src='/static/img/bg-1-1.png'"
                    />
                  </a>
                </li>
				<li>
                  <a href="javascript:;">
                    <img
                      src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/10/30/20171030020008453.jpg"
                      onerror="this.src='/static/img/bg-1-1.png'"
                    />
                  </a>
                </li>
              </ul>

              <div class="collection-btns">
	                 	<a href="javascript:;" class="collection-scale">
		                		<span class="collection-scale-icons collection-icons" @click="bigImg()"></span>
		                		<span class="collection-scale-text collection-text">放大</span>
		                	</a>
	                	<a href="javascript:;" class="collection-voice" v-show="isAudio">
		                		<span class="collection-voice-icons collection-voice-icons-video collection-icons" id="cllection-audio-icon" @click="audioPlay()"></span>
		                		<span class="collection-voice-text collection-text">音频</span>
		                	</a>
	                	<!-- 放音频 -->
						<audio src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/10/10/20171010085556515.mp3" id="collection-audio" 
						style="display: none;">您的浏览器不支持 audio 标签。
						</audio>
	           </div>
            </div>
            <div class="small_box">
              <span class="btn left_btn"></span>
              <div class="small_list">
                <ul class="clear" id="dataList2" style="width: 108px;">
                  <li class="active">
                    <a
                      href="javascript:;"
                      _src="https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20191224090342.jpg"
                    >
                      <img
                        alt
                        src="https://www.shenzhenmuseum.com/p/userfiles/uploadPic/20191224090342.jpg"
                        onerror="this._src='/static/img/bg-1-1.png'"
                      />
                    </a>
                  </li>
				  <li>
                    <a
                      href="javascript:;"
                      _src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/10/30/20171030020008453.jpg"
                    >
                      <img
                        alt
                        src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles//pf//2017/10/30/20171030020008453.jpg"
                        onerror="this._src='/static/img/bg-1-1.png'"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <span class="btn right_btn"></span>
            </div>
          </div>
          <div class="exhibit_turn clear">
            <div class="up_exhit">上一展品：没有了</div>
            <div class="down_exhit">
              <a
                href="/webCollection/collectionDetail?resId=433aa508690945c692ad5a8e04936b75&amp;exId=a8dc5deffbe04cef90f27b6b975945ab"
              >下一展品：骑豹的丘比特</a>
            </div>
          </div>
        </div>
        <input type="hidden" id="shoucang" value="false" />
        <div class="detailRight fr descript_title" id="detailInfo">
          <h2 class="collection-title">红绘牛头形来通</h2>
          <p
            class="wshoucang mb-20"
            id="showcangp"
            style="width: 66px;"
            onclick="setShowCang('6cafe3e5d2284a179c6b3a6bf71d78d2');"
            data-value="false"
          >收藏</p>
          <p style="height:1px;background:#dddddd;margin-bottom:24px;margin-top:28px;"></p>
          <p class="collection-size collection-info clear">
            <span style="float:left;">藏品名称：</span>
            <span style="float:left;width:420px;">红绘牛头形来通</span>
          </p>
          <p class="collection-size collection-info">具体年代：公元前4世纪</p>
          <p class="collection-size collection-info">
            类
            <em style="display:inline-block;width:32px;"></em>别：展览作品
          </p>
          <p class="collection-size collection-info">
            质
            <em style="display:inline-block;width:32px;"></em>地：陶
          </p>
          <p class="collection-size collection-info clear">
            <span style="float:left;">具体尺寸：</span>
            <span style="float:left;width:420px;">高20厘米</span>
          </p>
          <div class="abstra_content" style="height: 200px;">
            <div class="astracts deputy_text" style="height: 200px;">
              <span>
                描
                <em style="display:inline-block;width:32px;"></em>述：
              </span>
              <p>作为古希腊人在各项仪式中常用的注酒器，来通早期被视为圣物。这件来通的造型为一头公牛头部，主体纹饰以红绘技法描绘了希腊神话中的一幕——变身为天鹅的宙斯（Zeus）正在诱惑绝世美女丽达的场景。公牛崇拜源于地中海东部与两河流域，在古希腊文明的前身米诺斯（Minoan）文化中尤为盛行，后来传播到意大利地区。</p>
            </div>
            <div class="arrow">
              <span class="arrowUp"></span>
              <span class="arrowDown"></span>
            </div>
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
import carousel from "../../assets/js/carousel";
import common from "../../assets/js/common";
import zoom from "../../assets/js/zoom";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      isPage: false,
      totlePage: 1,
	  isAudio:false,//是否有音频
      icurPic: 2
    };
  },
  mounted() {
    //页数显示与否
    this.totlePage <= 10 ? (this.isPage = false) : (this.isPage = true);

    $(function() {
      /* 商品轮播图（带缩略图的轮播效果） */
      $(".carousel").thumbnailImg({
        large_elem: ".large_box",
        small_elem: ".small_list",
        left_btn: ".left_btn",
        right_btn: ".right_btn",
        state: "active",
        speed: "normal",
        vis: 3
      });
    });
  },
  computed: {
    return() {}
  },
  methods: {
    bigImg() {
      $("#pageContent").show();
      // $('.mask').find('.load').show();
      var _src = $("#dataList2").find("li.active a") .attr("_src");
      var newImg = new Image();
      newImg.src = _src;
      newImg.onload = function() {
        // $('.mask').find('.load').hide();
        console.log(_src);
        $("#imageFullScreen").attr({ src: _src }).show();
        $("#imageFullScreen").smartZoom({
          containerClass: "zoomableContainer"
        });
      };
    },
    closeImg() {
      $(".zoomableContainer").remove();
      $("#imgContainer").html(
        $(
          '<img id="imageFullScreen" src=""/>'
        )
      );
      $("#pageContent").hide();
    },
	//播放音频
	audioPlay(){
		if($('.collection-voice-icons-video').hasClass('collection-voice-icons')){
			document.getElementById('collection-audio').play();
			$('.collection-voice-icons-video').removeClass('collection-voice-icons').addClass('collection-voice-icons-b')
		}else{
		
			document.getElementById('collection-audio').pause();
			$('.collection-voice-icons-video').removeClass('collection-voice-icons-b').addClass('collection-voice-icons');
		}
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
.mt170{margin-top: 170px;}
.collectionDetailWrap {
  background: #ffffff;
  margin-bottom: 40px;
}

/*导航样式*/
.wshoucang {
  width: 32px;
  height: 18px;
  padding-left: 26px;
  background-repeat: no-repeat;
  background-size: 16px 14px;
  background-position: 2px 2px;
  background-image: url(../../assets/img/icons/shoucang.png);
  font-size: 16px;
  color: black;
  line-height: 18px;
  cursor: pointer;
}

.mainCon {
  width: 1082px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.carousel {
  width: 480px;
  height: 630px;
}
.carousel .large_box {
  width: 478px;
  height: 478px;
  padding: 0px;
  border: 1px solid #c2c2c2;
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.carousel .large_box li.active {
  display: block;
}
.carousel .large_box li a {
  width: 478px;
  height: 478px;
  display: block;
  line-height: 478px;
  text-align: center;
}
.carousel .large_box li a.largeImg {
  width: 840px;
  height: 840px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
}
.carousel .large_box li img {
  max-width: 478px;
  max-height: 478px;
  vertical-align: middle;
}
.carousel .large_box li a.largeImg img {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 800px;
  max-width: 800px;
  display: block;
}
.carousel .small_box {
  width: 480px;
  height: 92px;
  position: relative;
  margin-top: 58px;
}
.carousel .small_box .left_btn {
  width: 28px;
  height: 90px;
  float: left;
  background: url(../../assets/img/icons/index-prev.png) left center no-repeat;
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}
.carousel .small_box .right_btn {
  width: 28px;
  height: 90px;
  float: right;
  background: url(../../assets/img/icons/index-next.png) right center no-repeat;
  background-size: 100%;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.carousel .small_box .right_btn:hover {
  background-image: url(../../assets/img/icons/index-next-active.png);
}
.carousel .small_box .left_btn:hover {
  background-image: url(../../assets/img/icons/index-prev-active.png);
}
.carousel .small_box .small_list {
  width: 306px;
  height: 92px;
  margin: 0 auto;
  overflow: hidden;
}
.carousel .small_box .small_list ul {
  width: 1200px;
  height: 100px;
}
.carousel .small_box .small_list li {
  width: 90px;
  height: 90px;
  margin-right: 18px;
  float: left;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.carousel .small_box .small_list a {
  width: 88px;
  height: 88px;
  line-height: 88px;
  text-align: center;
  display: block;
  background: #fff;
  position: relative;
}
.carousel .small_box .small_list a img {
  max-width: 88px;
  max-height: 88px;
}
.carousel .small_box .small_list li:hover,
.carousel .small_box .small_list li.active {
  border-color: #ebebeb;
}
.carousel .small_box .small_list li:hover a img,
.carousel .small_box .small_list li.active a img {
  -webkit-transform: scale(0.9);
  -o-transform: scale(0.9);
  -moz-transform: scale(0.9);
  transform: scale(0.9);
}

.detailRight {
  width: 508px;
}
.detailRight .collection-title {
  font-size: 24px;
  color: #333333;
  line-height: 40px;
  font-weight: normal;
  margin: -5px 0 20px 0;
}
.detailRight .collection-info {
  font-size: 16px;
  line-height: 30px;
  color: #666666;
  margin-bottom: 6px;
}
.detailRight .shoucang {
  width: 32px;
  height: 18px;
  padding-left: 26px;
  background-repeat: no-repeat;
  background-size: 16px 14px;
  background-position: left center;
  background-image: url(../../assets/img/icons/shoucang-b.png);
  font-size: 16px;
  color: #ff6900;
  line-height: 18px;
  cursor: pointer;
}
.detailRight .shoucang.active {
  background-image: url(../../assets/img/icons/shoucang-b.png);
}
.detailRight .wshoucang {
  width: 32px;
  height: 18px;
  padding-left: 26px;
  background-repeat: no-repeat;
  background-size: 16px 14px;
  background-position: left center;
  background-image: url(../../assets/img/icons/shoucang.png);
  font-size: 16px;
  color: #ff6900;
  line-height: 18px;
  cursor: pointer;
}

.detailRight .collection-intro {
  padding-top: 14px;
  padding-bottom: 18px;
  text-indent: 2em;
}
.detailRight .relatives-title {
  color: #333333;
  font-size: 18px;
  line-height: 48px;
  margin-top: 18px;
  font-weight: normal;
  color: #333333;
}
.detailRight .collection-rela {
  font-size: 15px;
  line-height: 36px;
  color: #666666;
}

.detailRight .collection-rela a {
  font-size: 15px;
  line-height: 36px;
  color: #666666;
}

.collection-btns {
  width: 80px;
  height: 186px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.collection-btns a {
  color: #ffffff;
  width: 80px;
  background-color: #293037;
  height: 38px;
  margin-bottom: 10px;
  display: block;
  border-radius: 6px 0 0 6px;
  position: relative;
  -webkit-transition: 200ms;
  -moz-transition: 200ms;
  -o-transition: 200ms;
  transition: 200ms;
  margin-left: 42px;
}
.collection-btns .collection-icons {
  display: block;
  width: 38px;
  height: 38px;
  position: absolute;
  right: 42px;
  top: 0;
}
.collection-btns .collection-scale-icons {
  background: url(../../assets/img/icons/scale.png) no-repeat center center;
  background-size: 24px;
}
.collection-btns .collection-voice-icons {
  background: url(../../assets/img/icons/voice.png) no-repeat center center;
  background-size: 16px 24px;
}
.collection-btns .collection-voice-icons-b {
  background: url(../../assets/img/icons/voice-pause.png) no-repeat center
    center;
  background-size: 16px 24px;
}
.collection-btns .collection-video-icons {
  background: url(../../assets/img/icons/video.png) no-repeat center center;
  background-size: 24px 24px;
}
.collection-btns .collection-3d-icons {
  background: url(../../assets/img/icons/d3.png) no-repeat center center;
  background-size: 24px 24px;
}
.collection-btns .collection-text {
  padding-left: 12px;
  font-size: 15px;
  line-height: 38px;
  height: 38px;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.collection-btns a:hover,
.collection-btns a.active {
  margin-left: 0px;
  background-color: #ff6900;
}
.collection-btns a:hover .collection-icons,
.collection-btns a.active .collection-icons {
  right: 0px;
}
.collection-btns a:hover .collection-text,
.collection-btns a.active .collection-text {
  display: block;
}
/** 放大图片 **/
#pageContent {
  /*width: 980px;
	height: 500px;*/
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1001;
  display: none;
}
.close {
  cursor: pointer;
  width: 38px;
  height: 38px;
  background: url(../../assets/img/icons/close.png) no-repeat center center;
  position: absolute;
  right: 16px;
  top: 40px;
}

.videoMask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1001;
  display: none;
  overflow-y: scroll;
}
.videoWrap {
  width: auto;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 10% auto;
  background: rgba(0, 0, 0, 0);
  text-align: center;
}
.videoWrap video {
  max-height: 100%;
  max-width: 100%;
}
/* չ��չƷ��ҳ */
.exhibit_turn {
  margin-top: 40px;
}
.exhibit_turn div {
  float: left;
}
.exhibit_turn div {
  font-size: 14px;
  color: #666666;
  height: 30px;
  line-height: 30px;
}
.down_exhit {
  margin-left: 120px;
}
.exhibit_turn div a {
  display: block;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.exhibit_turn div:hover a {
  color: #999999;
}
</style>

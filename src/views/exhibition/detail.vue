<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <!--全景展览海报图-->
    <div
      class="detail-poster"
      style="background:url(https://www.shenzhenmuseum.com/p/resize_1920x500/userfiles//pf//2017/11/22/20171122043824166.jpg)no-repeat center center;"
    >
    <!-- <div
      class="detail-poster"
      :style="{ 'background-image': 'url('+detailData.panoramaPic+ ')' }"
    > -->
      <a class="qjzl" href="https://www.shenzhenmuseum.com/v/gdsz/" style="display:block;">
        <img alt="全景展览" src="../../assets/img/panoramic.png" title="全景展览" />
        <span>全景展览</span>
      </a>
    </div>
    <div class="pt-10 pb-2">
      <div class="nav-path comWidth" style="padding-bottom:30px;"></div>
    </div>
    <div class="exhibit_cont" style="padding-bottom:40px;">
      <div class="detailWrap wrap">
        <input type="hidden" id="shoucang" value="false" />
        <h2 class="comWidth" id="comWidth">
          <span class="detailTitle">{{detailData.name}}</span>
        </h2>
        <div class="exhi-detail comWidth">
          <h3>
            <span class="comWidth"></span>
            <span
              class="wshoucang mb-20"
              id="showcangp"
              style="width: 66px;"
              onclick="setShowCang('a8d54f2e85fa4ae6b4c0b349b875d658');"
              data-value="false"
            >收藏</span>
          </h3>
          <p style="height:1px;background:#dddddd;margin-bottom:20px;"></p>
          <div class="exhi-place clear">
            <span class="exhi-key">展览地点：</span>
            <p class="exhi-value">{{detailData.exhibitLocate}}</p>
          </div>
          <div class="exhi-info clear">
            <span class="exhi-key">展览介绍：</span>
            <div class="exhi-article-wrap">
              <div class="exhi-article">
                <p class="exhi-paragraph">
                  {{detailData.exhibitIntroduce}}
                </p>
              </div>
              <div class="shandow">
                <a href="javascript:;" class="arrowdown"></a>
                <a href="javascript:;" class="arrowup"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 展览照片 -->
      <div class="exhibitsWrap wrap pt-14" style="clear:both;" v-show="isChangshe">
        <div class="exhibits comWidth">
          <div class="intang_title">
            <h3 class="clearfix">
              <a href="#" target="_blank" class="title_a">展览照片</a>
              <router-link :to="{path:'exhibitionMore'}" class="more">查看更多</router-link>
            </h3>
          </div>
          <ex-pic :isPage="isPage"></ex-pic>
        </div>
      </div>
      <!--专题展览照片-->
       <div class="exhibitsWrap wrap pt-14" style="clear:both;" v-show="isTopic">
        <div class="exhibits comWidth">
          <div class="intang_title">
            <h3 class="clearfix">
              <a href="#" target="_blank" class="title_a">展览照片</a>
              <router-link :to="{path:'topicExMore'}" class="more">查看更多</router-link>
            </h3>
          </div>
           <ex-topic :isPage="isPage"></ex-topic>
        </div>
      </div>
      <!-- 展览视频 -->
      <div class="exhibitsVedioWrap wrap" style="padding-bottom:0;" v-show="isVideo">
        <div class="exhibitsVedio comWidth">
          <div class="intang_title">
            <h3 class="clearfix">
              <a href target="_blank" class="title_a">展览视频</a>
              <a target="_blank" href="#" class="more">查看更多</a>
            </h3>
          </div>
          <ex-video></ex-video>
        </div>
      </div>
      <!-- 展览相关 -->
      <div class="exhibitsRelevantWrap wrap" style="margin-top:20px;" v-show="isExhiNews">
        <div class="exhibitsRelevant comWidth">
          <div class="titleBar">
            <div class="comTitle">
              <a href>
                <span class="titleIcon"></span>
                <strong class="titleName">展览相关</strong>
              </a>
            </div>
          </div>
          <ex-news></ex-news>
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
import changshevideo from "../components/exhidetial/changshevideo";
import changsheNews from "../components/exhidetial/changsheNews";
import topicPic from "../components/exhidetial/topicPic"
import * as API from "api/demo";

export default {
  data() {
    return {
      isChangshe:true,
      isTopic:true,
      isBanner: false,
      isPage: false,
      totlePage: 1,
      isVideo:false,//是否有视频
      isExhiNews:false,//是否有相关展览
      type:1,
      //detail数据
      detailData:''
    };
  },
  mounted() {
      this.type = this.$route.query.type;
      //console.log(this.$route.query,123456)
      if(this.type == 1){
        this.isTopic=true
        this.isChangshe = false
      }else{
          this.isTopic=false
          this.isChangshe = true
      }
      //页数显示与否
      this.totlePage <= 10 ? (this.isPage = false) : (this.isPage = true);
      // 展览介绍
      $(".arrowdown").click(function() {
          $(".exhi-article").css({ transition: "500ms", height: "auto" });
          $(this).hide();
          $(".arrowup").show();
          $(".exhi-article-wrap").css({ paddingBottom: "44px" });
      });
      $(".arrowup").click(function() {
          $(".exhi-article").css({ height: "156px", transition: "500ms" });
          $(this).hide();
          $(".arrowdown").show();
          $(".exhi-article-wrap").css({ paddingBottom: "34px" });
      });
      this.getData();
  },
  computed: {},
  methods: {
    //获取数据
    getData(){
        let data ={
            resId:this.$route.query.resId,
            className:this.$route.query.className
        };
        API.get2('exhibition/get',data).then(res => {
            if (res.code == 0) {
                this.detailData=res.data;
                console.log(this.detailData,456)
            }
        }).catch(err => {
            
        })
    }
  },
  components: {
    "header-top": header,
    "footer-bottom": footer,
    "ex-pic": changshePic,
    "ex-video":changshevideo,
    "ex-news":changsheNews,
    "ex-topic":topicPic
  }
};
</script>
<style scoped>
@media (min-width: 1400px) {
	.detail-poster{position:relative;height: 375px;width:100%;margin-top: 80px;background-size:cover !important;}
}
@media (min-width: 1440px) {
	.detail-poster{position:relative;height: 375px;width:100%;margin-top: 80px;background-size:cover !important;}
} 
@media (min-width: 1600px) {
	.detail-poster{position:relative;height: 417px;width:100%;margin-top: 80px;background-size:cover !important;}
}
@media (min-width: 1680px) {
	.detail-poster{position:relative;height: 438px;width:100%;margin-top: 80px;background-size:cover !important;}
} 
@media (min-width: 1920px){
	.detail-poster{position:relative;height: 500px;width:100%;margin-top: 80px;background-size:cover !important;}
} 
.comWidth {
  width: 1200px;
}
.qjzl {
  width: 90px;
  height: 90px;
  position: absolute;
  right: 38px;
  bottom: 38px;
  cursor: pointer;
}
.qjzl img {
  display: block;
  width: 66px;
  height: 55px;
  margin: 10px 10px;
}
.qjzl span {
  display: block;
  width: 82px;
  line-height: 20px;
  font-size: 20px;
  color: #fff;
  font-family: Arial, Helvetica, "PingFang SC", "Microsoft Yahei",
    "Microsoft Yahei" !important;
}
.detail-poster {
  position: relative;
  min-width: 1200px;
  min-height: 375px;
  margin-top: 80px;
  background-size: cover !important;
}

.detailWrap .detailTitle {
  font-size: 24px;
  font-weight: normal;
  color: #333333;
  padding-right: 40px;
}
.exhi-detail {
  font-size: 16px;
  color: #666666;
}
.exhi-detail h3 {
  padding-bottom: 24px;
  line-height: 30px;
}
.exhi-detail .exhi-time,
.exhi-detail .exhi-place {
  line-height: 30px;
  color: #666666;
}
.exhi-detail .exhi-paragraph {
  line-height: 30px;
  margin-bottom: 14px;
  white-space: pre-wrap;
}
.exhi-detail .exhi-key {
  float: left;
  height: 30px;
  line-height: 30px;
  width: 94px;
}
.exhi-detail .exhi-value {
  padding-left: 94px;
}
.exhi-info {
  color: #666666;
}
.exhi-info a,
span {
  color: #666666;
}
.exhi-article-wrap {
  color: #666666 !important;
  font-size: 16px !important;
}
.exhi-detail .shoucang {
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
.exhi-detail .shoucang.active {
  background-image: url(../../assets/img/icons/shoucang-b.png);
}
.exhi-detail .wshoucang {
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
.exhi_organize {
  color: #666666;
  line-height: 30px;
}

.exhi-detail .exhi-article-wrap {
  margin-left: 94px;
  position: relative;
  padding-bottom: 34px;
}
.exhi-detail .exhi-article {
  height: 156px;
  transition: 1s;
  overflow: hidden;
}
.exhi-article p {
  color: #666666;
}
.shandow {
  height: 64px;
  background: url(../../assets/img/icons/jianbian.png) repeat-x left top;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
.shandow .arrowdown,
.shandow .arrowup {
  width: 40px;
  height: 20px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -20px;
}
.shandow .arrowdown {
  display: block;
  background: url(../../assets/img/icons/arrowdown.png) no-repeat center center;
}
.shandow .arrowup {
  display: none;
  background: url(../../assets/img/icons/arrowup.png) no-repeat center center;
}

.exhibitsPicsWrap {
  padding-bottom: 40px;
}
.video_box_{
	margin-top:20px;
}
</style>

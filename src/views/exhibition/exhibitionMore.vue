<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="pt-10 pb-2">
      <div class="nav-path comWidth" style="padding-bottom:30px;"></div>
    </div>
    <div class="exhibit_cont mt50" style="padding-bottom:40px;">
      <!-- 展览照片 -->
      <div class="exhibitsWrap wrap pt-14" style="clear:both;">
        <div class="exhibits comWidth">
          <div class="intang_title">
            <h3 class="clearfix">
              <a href="javascript:;" target="_blank" class="title_a">展览照片</a>
            </h3>
          </div>
          <ex-pic :isPage="isPage"></ex-pic>
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
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      isPage: false,
      totlePage: 1,
      isVideo:true,//是否有视频
      isExhiNews:true//是否有相关展览
    };
  },
  mounted() {
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
  },
  computed: {},
  methods: {
    //收藏
    setShowCang(id) {
      var dataValue = $("#shoucang").val();
      var userid = "null";
      if (userid == null || userid == "null") {
        $(".loginWrap").show();
        return;
      }
      if (dataValue == "true") {
        //收藏-》取消收藏
        $.ajax({
          url:
            "/personal-center/cancelCollect?userid=" +
            userid +
            "&id=" +
            id +
            "&resType=CmsExhibition&lang=0",
          type: "GET",
          beforeSend: function(XMLHttpRequest) {},
          success: function(data) {
            console.log(data);
            if (data.error) {
              alertx("收藏失败");
            } else {
              $("#shoucang").val("false");
              $("#showcangp")
                .removeClass("shoucang")
                .addClass("wshoucang");
              $("#showcangp").html("收藏");
            }
          },
          error: function(XMLHttpRequest) {}
        });
      } else {
        //未收藏-》收藏
        $.ajax({
          url:
            "/personal-center/collect?userid=" +
            userid +
            "&id=" +
            id +
            "&resType=CmsExhibition&lang=0",
          type: "GET",
          beforeSend: function(XMLHttpRequest) {},
          success: function(data) {
            console.log(data);
            if (data.error) {
              alertx("收藏失败");
            } else {
              $("#shoucang").val("true");
              $("#showcangp")
                .removeClass("wshoucang")
                .addClass("shoucang");
              $("#showcangp").html("已收藏");
            }
          },
          error: function(XMLHttpRequest) {}
        });
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
.mt50{margin-top: 50px;}
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

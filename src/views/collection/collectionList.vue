<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
    <div class="wrap" style="margin-top:100px;">
      <div class="collectionWrap mb30">
        <div class="collection comWidth" style="padding-top:10px;">
          <div class="titleBar mb-8 bb-e9e9e9">
				<div class="comTitle">
					<a href="javascript:;"><span class="titleIcon"></span><strong class="titleName">改革开放史</strong></a>
					</div>
			</div>
      <!-- 筛选框 -->
      <div class="selectBox">
				<ul class="select-tabs" id="ul1">
          <li v-for="(item,index) in tabtitle" :key="index" @click="num = index" :class="{active:num ==index}">{{item}}</li>
        </ul>
			</div>
         <div class="mt50" v-for="(item,index) in tabtitle" :key="index" v-show="num ==index">{{item}}------此处文字是为了显示切换效果可删除
            <collection-list :isPage="isPage"></collection-list>
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
import collection from "../components/collection/collectionCount";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner: false,
      isPage: false,
      totlePage: 1,
      tabtitle:['全部','文件','实物'],
      num:0
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    "collection-list": collection
  }
};
</script>
<style scoped>
.mb30{margin-bottom: 30px;}
.mt50{margin-top: 50px;}

.collectionDetailWrap{background:#ffffff;min-height: 100%;}

.collect_c{opacity:0.6;}

.mainCon{width:1082px; margin: 0 auto; overflow: hidden;height: 632px;    position: relative;
    z-index: 10;}

.carousel{width:480px; height: 630px;}
.carousel .large_box{width:478px; height: 478px;padding:0px; border:1px solid #c2c2c2; overflow: hidden; position: relative;z-index: 2;}
.carousel .large_box li{width:460px; height: 460px; display: none;position: relative;}
.carousel .large_box li.active{display: block;}
.carousel .large_box li a{width:460px; height: 460px;display:block;line-height: 456px;text-align:center;}
.carousel .large_box li a.largeImg{width:840px; height:840px; background:rgba(0,0,0,0.5);position: absolute;left:0;top:0;}
.carousel .large_box li img{max-width:478px; max-height: 478px;vertical-align: middle;}
.carousel .large_box li a.largeImg img{position: absolute;left:0;top:0;right: 0;bottom:0; max-height: 800px; max-width:800px;display: block;}
.carousel .small_box{width:480px;height: 92px;position: relative; margin-top:58px;}
.carousel .small_box .left_btn{width:28px; height: 90px;float:left; background: url(../../assets/img/icons/index-prev.png) left center no-repeat;background-size:100%;position: absolute;left:0; top:0; cursor: pointer;}
.carousel .small_box .right_btn{width:28px; height: 90px;float:right ;background: url(../../assets/img/icons/index-next.png) right center no-repeat;background-size:100%;position: absolute;right:0; top:0;cursor: pointer;}
.carousel .small_box .right_btn:hover{background-image: url(../../assets/img/icons/index-next-active.png);}
.carousel .small_box .left_btn:hover{background-image: url(../../assets/img/icons/index-prev-active.png);}
.carousel .small_box .small_list{width:306px; height: 92px;  margin: 0 auto;overflow: hidden;}
.carousel .small_box .small_list ul{width:1200px;height: 100px;}
.carousel .small_box .small_list li{width:90px;height: 90px;margin-right: 18px; float:left;border:1px solid transparent;box-sizing: border-box;}
.carousel .small_box .small_list a{width:100%; height: 100%; line-height: 90px; text-align: center; display: block; background:#FFFFFF; position: relative;}

.carousel .small_box .small_list li:hover ,.carousel .small_box .small_list li.active {padding:4px;border-color:#ebebeb;}

.detailRight{width:474px;height: 612px;overflow: hidden;}
.detailRight .collection-title{font-size: 24px; color: #333333; height: 88px;line-height:88px;font-weight: normal;margin-top:-32px;}
.detailRight .collection-info{font-size:15px;line-height: 30px;color:#666666;}
.detailRight .collection-intro{padding-top:14px;padding-bottom:18px;text-indent: 2em;}
.detailRight .relatives-title{color:#333333;font-size:18px;line-height: 48px;margin-top:18px;}
.detailRight .collection-rela{font-size:15px;line-height: 36px;color:#666666;}

.collection-btns{width:80px;height: 186px;position: absolute;right:0;bottom:0;

}
.collection-btns a{color:#ffffff;width:80px;background-color:#242a31;height: 38px;margin-bottom:10px;display: block;border-radius: 6px 0 0 6px;position: relative;-webkit-transition:200ms;-moz-transition:200ms;-o-transition:200ms;transition: 200ms;margin-left:42px;}
.collection-btns .collection-icons{display: block;width:38px;height: 38px;position: absolute;right:42px;top:0;}
.collection-btns .collection-scale-icons{background:url(../../assets/img/icons/scale.png) no-repeat center center; background-size:24px;}
.collection-btns .collection-voice-icons{background:url(../../assets/img/icons/voice.png) no-repeat center center; background-size:16px 24px;}
.collection-btns .collection-video-icons{background:url(../../assets/img/icons/video.png) no-repeat center center; background-size:24px 24px;}
.collection-btns .collection-3d-icons{background:url(../../assets/img/icons/d3.png) no-repeat center center; background-size:24px 24px;}
.collection-btns .collection-text{padding-left:12px;font-size: 14px; line-height: 38px;height: 38px;position: absolute;left:0;top:0;display: none;}
.collection-btns a:hover,.collection-btns a.active{margin-left:0px;}
.collection-btns a:hover .collection-icons,.collection-btns a.active .collection-icons{right:0px;}
.collection-btns a:hover .collection-text,.collection-btns a.active .collection-text{display: block;}

.selectBox .select-tabs{}

.selectBox .select-tabs li{line-height: 54px;margin-left: 30px;display: inline-block;font-size: 0;font-size: 14px;color:#999999;line-height: 30px;border-bottom:1px solid transparent; cursor: pointer;}
.selectBox .select-tabs li.active,.selectBox .select-tabs li:hover{border-bottom-color:#333333;color:#333333;}
.select-tabs-item{background-color:#eeeeee;}
.select-tabs-item li{line-height: 60px;margin-left:30px;display:none;font-size: 0;}
.select-tabs-item li.active{display: block;}
.select-tabs-item a{font-size: 14px;color:#666666;line-height: 60px;margin-right: 30px;padding-bottom:10px;}
.select-tabs-item li a.active{color:#333333;}
.imgList6{display:none;}
.imgList6.active{display:block;}
.imgList6 ol{margin-bottom: 40px;}
.imgList_box ul{display:none;}
.imgList_box ul.active{display:block;}
</style>

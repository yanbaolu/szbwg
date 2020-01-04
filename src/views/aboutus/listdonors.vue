<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
   
     
    <div class="aboutUsTextWrap">
       <div class="social_main mt50">
     <!--导航-->
         <div class="social_nav">
           <ab-nav></ab-nav>
        </div>
      
        
    </div>
     <!--关于深博-->
           <div class="wrapbox">
              <div class="aboutUsTextTabs">
               <div class="aboutUsTextTab ">
                  <p class="series" style="color:#999999 !important;margin-bottom:12px;">以姓氏拼音为序</p>
                  <div id="div_donor" class="nameList">
					<div class="nameListItem"><p class="year" style="color:#333333 !important;margin-bottom:20px;">深圳博物馆自1981年成立以来，得到社会各界人士的踊跃捐赠，这些重要捐赠丰富了我馆馆藏，充实了展陈内容。感谢他们对我馆工作的大力支持。部分捐赠者名单（按姓氏拼音排序）如下：</p></div>
					<div id="donnor_con" class="deputy_text">
						<ul class="names clear"><li class="nameItem">陈炳林</li><li class="nameItem">陈有锐</li><li class="nameItem"><router-link :to="{path:'newsDetial'}" href="/view/aboutus/donorDetail?platform=0&amp;id=f0bb2299ebaf48458eaa59624f24e824">陈宗浩</router-link></li><li class="nameItem">崔海林</li><li class="nameItem">方苞</li><li class="nameItem">关柏春</li><li class="nameItem">谷牧</li><li class="nameItem"><router-link :to="{path:'newsDetial'}">江式高</router-link></li><li class="nameItem">廖永鉴</li><li class="nameItem">林源昌</li><li class="nameItem">李铁映</li><li class="nameItem">刘杰</li><li class="nameItem">骆锦星</li><li class="nameItem">罗君东</li><li class="nameItem">马福元</li><li class="nameItem">盛纪明</li><li class="nameItem">滕文金</li><li class="nameItem">韦洪兴</li><li class="nameItem">翁纯贤</li><li class="nameItem">伍秀琼</li><li class="nameItem">杨光元</li><li class="nameItem">禹国刚</li><li class="nameItem">曾锦棠</li><li class="nameItem">张勋甫</li><li class="nameItem">赵善荣</li><li class="nameItem">赵顺超</li><li class="nameItem">郑元亨</li><li class="nameItem">祝日升</li><li class="nameItem">朱振辉</li></ul>
						</div>
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
import aboutnav from "../components/aboutus/aboutnav";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:true,
      isPage: false,
      totlePage: 12,
      num:0,
      titleNav:['集体荣誉','个人荣誉']
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'ab-nav':aboutnav,
  }
};
</script>
<style scoped>
.aboutUsTextTabs{padding: 2px 30px 60px 30px;}
.wrapbox{width: 1200px; margin: 30px auto;border-top: 1px solid #e9e9e9; padding-top: 30px;}
.aboutText{width: 1140px; margin: 0 auto;}
.aboutUsTextWrap{padding:60px 0;position: relative;background: #f3f3f3;}
.aboutUsText {  width: 1200px;margin: 0 auto;}
.aboutUsTextTab-1-tabs{margin-bottom:24px;}
.aboutUsTextTab-1-tabs li{line-height: 54px;color:#999999;font-size:14px;padding:16px;display: inline; cursor: pointer;}
.aboutUsTextTab-1-tabs li:first-child{padding-left:10px;}
.aboutUsTextTab-1-tabs li:hover,.aboutUsTextTab-1-tabs li.active{color:#333333; display: inline;}
.aboutUsTextTab-1-tabs-text{display: none;font-size:16px;color:#333333;line-height: 30px;}
.aboutUsTextTab-1-tabs-text.active{display: block;}
.names{overflow: hidden;}
.nameList {font-size:15px; color:#333333;line-height: 30px;overflow:hidden;margin-bottom:-1px;}
#div_donor{margin-bottom:20px;}
.nameList .year{font-size:16px; color:#333333;line-height: 30px;}
.nameList  .nameItem{ margin-bottom: 0px;font-size: 16px; color:#333333;line-height:38px;width:150px;float:left;height: 38px;text-align: left;}
.names a{ color:#0066cc;}
.series{color: #666666;font-size: 16px;
    line-height: 40px;
    margin-top: 13px;}
</style>

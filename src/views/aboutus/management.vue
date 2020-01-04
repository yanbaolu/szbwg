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
                   <ul class="classIndexP aboutUsTextTab-1-tabs">
                       <li  v-for="(item,index) in titleNav" :key="index" @click="num = index" :class="{active:num ==index}">{{item}}</li>
                   </ul>
                <div class="mannger_content" >
                   <div v-for="(item,index) in titleNav" :key="index" @click="num = index" :class="{active:num ==index}">
                       {{item}}-----查看效果，文字要删除
						<mage-list :isPage="isPage"></mage-list>
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
import magelist from "../components/aboutus/magelist";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:true,
      isPage: false,
      totlePage: 12,
      num:0,
      titleNav:['党群建设','后勤管理','场馆建设']
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'ab-nav':aboutnav,
    'mage-list':magelist
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
.mannger_content>div{
	margin-top:30px;
	display:none;
}

.mannger_content>div.active{
	display:block;
}
</style>

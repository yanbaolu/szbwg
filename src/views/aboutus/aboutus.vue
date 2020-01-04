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
                <div class="aboutText">
                    <div v-show="num ==0">
                        <ab-one></ab-one>
                    </div>
                    <div v-show="num ==1">馆长致辞</div>
                    <div v-show="num ==2">
                        <ab-three></ab-three>
                    </div>
                    <div v-show="num ==3">
                      <ab-four :isPage='isPage'></ab-four>
                    </div>
                    <div v-show="num ==4">
                      <ab-five></ab-five>
                    </div>
                    <div v-show="num ==5">
                      <ab-six></ab-six>
                    </div>
                    <div v-show="num ==6">
                      <ab-seven></ab-seven>
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
import aboutone from "../components/aboutus/aboutone";
import aboutthree from "../components/aboutus/aboutthree";
import aboutfour from "../components/aboutus/aboutfour";
import aboutfive from "../components/aboutus/aboutfive";
import aboutsix from "../components/aboutus/aboutsix";
import aboutseven from "../components/aboutus/aboutseven";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:true,
      isPage: false,
      totlePage: 12,
      num:0,
      titleNav:['深博概况','馆长致辞','理事会','深博章程','组织架构','专家团队','深博记事']
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    'ab-nav':aboutnav,
    'ab-one':aboutone,
    'ab-three':aboutthree,
    'ab-four':aboutfour,
    'ab-five':aboutfive,
    'ab-six':aboutsix,
    'ab-seven':aboutseven
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
/*.aboutUsTextTab-1-tabs-lists .aboutUsTextTab-1-tabs-text:nth-child(4){display: block;}*/
</style>

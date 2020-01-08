<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata"></header-top>
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
                            <li v-for="(item,index) in titleNav" :key="index" @click="num = index" :class="{active:num ==index}">{{item}}</li>
                        </ul>
                        <div class="aboutText">
                            <div v-show="num ==0">
                                <ab-one v-if="gaikuang" :data="gaikuang"></ab-one>
                            </div>
                            <div v-show="num ==1">馆长qqqq</div>
                            <div v-show="num ==2">
                                <ab-three v-if="lShui" :data="lShui"></ab-three>
                            </div>
                            <div v-show="num ==3">
                                <ab-four :isPage='isPage' :data="sbZceng" v-if="sbZceng"></ab-four>
                            </div>
                            <div v-show="num ==4">
                                <ab-five></ab-five>
                            </div>
                            <div v-show="num ==5">
                                <ab-six v-if="zhuanjt" :data="zhuanjt"></ab-six>
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
            lang:this.$store.getters.getlang,
            bandata:'',
            isBanner: true,
            isPage: false,
            totlePage: 12,
            num: 0,
            titleNav: ['深博概况', '馆长致辞', '理事会', '深博章程', '组织架构', '专家团队', '深博记事'],
            gaikuang:'',
            speak:'',
            lShui:'',
            sbZceng:'',
            zhuanjt:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getGk();
      this.zhuanTeam()
      //this.zgSpeak()
      this.lishihui()
      this.zhangceng()
    },
    computed: {},
    methods: {
      //获取banner 
      getBaner(){
          let data ={
              lang:this.lang,
              pageNo:1,
              pageSize:3,
              platform:0
          };
          API.get2('slidePic/page/L0902',data).then(res => {
              if (res.code == 0) {
                  this.bandata = res.data.list;
                  //console.log(this.bandata)
              }
          }).catch(err => {
              
          })
      },
      //深博概况
      getGk(){
          let data ={
              lang:this.lang,
              platform:0
          };
          API.get2('about/get/L090106',data).then(res => {
              if (res.code == 0) {
                  this.gaikuang = res.data;
                  //console.log( this.gaikuang,)
              }
          }).catch(err => {
              
          })
      },
      zgSpeak(){
          let data ={
              lang:this.lang,
              platform:0
          };
          API.get2('about/get/L090101',data).then(res => {
              if (res.code == 0) {
                  this.speak = res.data;
                  //console.log( this.speak,7899999999)
              }
          }).catch(err => {
              
          })
      },
      lishihui(){
          let data ={
              lang:this.lang,
              platform:0
          };
          API.get2('about/get/L090102',data).then(res => {
              if (res.code == 0) {
                  this.lShui = res.data;
                  //console.log( this.lShui,45545454545454454)
              }
          }).catch(err => {
              
          })
      },
      zhangceng(){
          let data ={
              lang:this.lang,
              pageNo:1,
              pageSize:16,
              platform:0
          };
          API.get2('about/page/L090110',data).then(res => {
              if (res.code == 0) {
                  this.sbZceng = res.data.list;
                  //console.log(this.sbZceng,123456789)
              }
          }).catch(err => {
              
          })
      },
      zhuanTeam(){
          let data ={
              lang:this.lang,
              pageNo:1,
              pageSize:999,
              platform:0
          };
          API.get2('about/expertTeam/page/L090104',data).then(res => {
              if (res.code == 0) {
                  this.zhuanjt = res.data.list;
                  //console.log(this.zhuanjt)
              }
          }).catch(err => {
              
          })
      }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'ab-nav': aboutnav,
        'ab-one': aboutone,
        'ab-three': aboutthree,
        'ab-four': aboutfour,
        'ab-five': aboutfive,
        'ab-six': aboutsix,
        'ab-seven': aboutseven
    }
};
</script>
<style scoped>
.aboutUsTextTabs {
    padding: 2px 30px 60px 30px;
}

.wrapbox {
    width: 1200px;
    margin: 30px auto;
    border-top: 1px solid #e9e9e9;
    padding-top: 30px;
}

.aboutText {
    width: 1140px;
    margin: 0 auto;
}

.aboutUsTextWrap {
    padding: 60px 0;
    position: relative;
    background: #f3f3f3;
}

.aboutUsText {
    width: 1200px;
    margin: 0 auto;
}

.aboutUsTextTab-1-tabs {
    margin-bottom: 24px;
}

.aboutUsTextTab-1-tabs li {
    line-height: 54px;
    color: #999999;
    font-size: 14px;
    padding: 16px;
    display: inline;
    cursor: pointer;
}

.aboutUsTextTab-1-tabs li:first-child {
    padding-left: 10px;
}

.aboutUsTextTab-1-tabs li:hover,
.aboutUsTextTab-1-tabs li.active {
    color: #333333;
    display: inline;
}

.aboutUsTextTab-1-tabs-text {
    display: none;
    font-size: 16px;
    color: #333333;
    line-height: 30px;
}

.aboutUsTextTab-1-tabs-text.active {
    display: block;
}

/*.aboutUsTextTab-1-tabs-lists .aboutUsTextTab-1-tabs-text:nth-child(4){display: block;}*/
</style>
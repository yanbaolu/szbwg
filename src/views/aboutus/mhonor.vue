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
                            <li v-for="(item,index) in titleNav" :key="index" @click="getM(index,item.type)" :class="{active:num ==index}">{{item.title}}</li>
                        </ul>
                        <div class="kudos_main">
                            <div v-for="(item,index) in titleNav" :key="index" :class="{active:num ==index}">
                                <mh-list v-if="data" :data="data"></mh-list>
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
import mhlist from "../components/aboutus/mhlist"
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 12,
            num: 0,
            titleNav: [{
              title:'集体荣誉',
              type:2

            },{
              title:'个人荣誉',
              type:1
            }],
            lang:this.$store.getters.getlang,
            bandata:'',
            data:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getM(0,2);
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
        getM(index,type){
          this.num=index;
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:999,
                platform:0,
                type:type
            };
            API.get2('about/event/page/L0903',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data.list;
                    console.log(this.data,123456789)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'ab-nav': aboutnav,
        'mh-list': mhlist
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

.kudos a.active {
    color: #333333;
}

.kudos_main>div {
    display: none;
}

.kudos_main>div.active {
    display: block;
}
</style>
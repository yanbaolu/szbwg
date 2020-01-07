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
                        <p class="series" style="color:#999999 !important;margin-bottom:12px;">以姓氏拼音为序</p>
                        <div id="div_donor" class="nameList">
                            <div class="nameListItem">
                                <p class="year" style="color:#333333 !important;margin-bottom:20px;">深圳博物馆自1981年成立以来，得到社会各界人士的踊跃捐赠，这些重要捐赠丰富了我馆馆藏，充实了展陈内容。感谢他们对我馆工作的大力支持。部分捐赠者名单（按姓氏拼音排序）如下：</p>
                            </div>
                            <div id="donnor_con" class="deputy_text">
                                <ul class="names clear">
                                    <li class="nameItem" v-if="donorList" v-for="(item,index) in donorList">
                                        <router-link :to="{name:'collection'}" v-if="item.hasDetails">{{item.name}}</router-link>
                                        <span v-if="!item.hasDetails">{{item.name}}</span>
                                    </li>
                                </ul>
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
            isBanner: true,
            isPage: false,
            totlePage: 12,
            num: 0,
            titleNav: ['集体荣誉', '个人荣誉'],
            lang:this.$store.getters.getlang,
            bandata:'',
            donorList:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getDonor()
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
        //捐赠者名录
        getDonor(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:9999999,
                platform:0
            };
            API.get2('about/donor/page/L090402',data).then(res => {
                if (res.code == 0) {
                    this.donorList = res.data.list;
                    console.log(this.donorList,455454545)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'ab-nav': aboutnav,
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

.names {
    overflow: hidden;
}

.nameList {
    font-size: 15px;
    color: #333333;
    line-height: 30px;
    overflow: hidden;
    margin-bottom: -1px;
}

#div_donor {
    margin-bottom: 20px;
}

.nameList .year {
    font-size: 16px;
    color: #333333;
    line-height: 30px;
}

.nameList .nameItem {
    margin-bottom: 0px;
    font-size: 16px;
    color: #333333;
    line-height: 38px;
    width: 150px;
    float: left;
    height: 38px;
    text-align: left;
}

.names a {
    color: #0066cc;
}

.series {
    color: #666666;
    font-size: 16px;
    line-height: 40px;
    margin-top: 13px;
}
</style>
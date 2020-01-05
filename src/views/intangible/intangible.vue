<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" :bandata="bandata"></header-top>
        <div class="intang_main">
            <div class="intang_content clearfix">
                <div class="intang_left">
                    <div class="intang_title">
                        <h3 class="clearfix">
                            新闻资讯<router-link :to="{path:'intangibleNews'}">查看更多</router-link>
                        </h3>
                    </div>
                    <in-info :data="feiyiNews" v-if="feiyiNews"></in-info>
                </div>
                <div class="intang_right">
                    <div class="intang_title">
                        <h3 class="clearfix">
                            通知公告<router-link :to="{path:'intangibleToice'}">查看更多</router-link>
                        </h3>
                    </div>
                    <in-info :data="feyigg" v-if="feyigg"></in-info>
                </div>
                <div class="intang_icon">
                    <ol class="clearfix">
                        <li><a href="intangibleLaws">
                                <div></div>
                                <p>非遗法规</p>
                            </a></li>
                        <li>
                            <router-link :to="{name:'intangibleProject'}">
                                <div></div>
                                <p>非遗代表性项目</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'intangibleInheritance'}">
                                <div></div>
                                <p>非遗代表性传承人</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'intangibleRegulat'}">
                                <div></div>
                                <p>申报指南</p>
                            </router-link>
                        </li>
                    </ol>
                </div>
                <div class="intang_title">
                    <h3 class="clear">
                        视频库 <router-link :to="{path:'/videoAll'}">查看更多</router-link>
                    </h3>
                </div>
                <div class="video_content videoList" style="margin-top:15px;">
                    <in-video :data="videoList" v-if="videoList"></in-video>
                </div>
                <div class="intang_title" style="margin-top:34px;">
                    <h3 class="clearfix">
                        图片库
                        <router-link :to="{path:'/pictureAll'}">查看更多</router-link>
                    </h3>
                </div>
                <div class="intang_picture">
                    <in-pic v-if="imgList" :data="imgList"></in-pic>
                </div>
            </div>
        </div>
        <div class="video_Mask">
            <div class="video_Wrap">
                <video src="index" poster="index" id="video_" controls="" autoplay="autoplay"></video>
            </div>
            <div class="close" id="video-close" @click="videoClose()"></div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangible from "../components/intangible/intangibleInfo";
import intangiblevideo from "../components/intangible/intangiblevideo";
import intangiblePic from "../components/intangible/intangiblePic";
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: true,
            isPage: false,
            isPageTopic: false,
            totlePageTopic: 1,
            totlePage: 1,
            news: [],
            toice: [],
            bandata:'',
            feiyiNews:'',
            feyigg:'',
            videoList:'',
            imgList:''
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 10 ? (this.isPage = false) : (this.isPage = true);
        this.totlePageTopic <= 10 ?
            (this.isPageTopic = false) :
            (this.isPageTopic = true);
        this.getBaner();
        this.Intangible()
        this.fegg()
        this.getVideo()
        this.getImg()
    },
    computed: {},
    methods: {
        videoClose() {
            //console.log(1111)
            $('.video_Mask').hide();
            $('#video_').get(0).pause();
        },
        //获取banner
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('slidePic/page/L0301',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        //非遗新闻
        Intangible(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('intangible/news/page/L0409',data).then(res=>{
                if (res.code==0) {
                    this.feiyiNews=res.data.list.slice(0,4) 
                    //console.log(this.feiyiNews)
                }
            }).catch(err => {

            })
        },
        //非遗公告
        fegg(){
           let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
           };
           API.get2('intangible/notice/page/L0410',data).then(res=>{
               if (res.code==0) {
                   this.feyigg=res.data.list.slice(0,4) ;
                   //console.log(this.feyigg)
               }
           }).catch(err => {

           }) 
        },
        //视频库
        getVideo(){
            let data ={
                 lang:this.lang,
                 pageNo:1,
                 pageSize:3,
                 master:'',
                 platform:0
            };
            API.get2('intangible/video/page/L0405',data).then(res=>{
                if (res.code==0) {
                    this.videoList=res.data.list
                    //console.log(this.videoList,444444444)
                }
            }).catch(err => {

            }) 
        },
        getImg(){
            let data ={
                 lang:this.lang,
                 classifyCode:'C06',
                 platform:0,
                 pageNo:1,
                 pageSize:4
            };
            API.get2('intangible/picset/master/lmCode/L0406',data).then(res=>{
                if (res.code==0) {
                    //console.log(res,44444444484888)
                    this.imgList=res.data.list.slice(0,4)
                    //console.log(this.imgList,444444444)
                }
            }).catch(err => {

            }) 
        },
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        "in-info": intangible,
        "in-video": intangiblevideo,
        'in-pic': intangiblePic
    }
};
</script>
<style scoped>
/*资讯 公告*/
.itangible {
    z-index: 2;
}

.intang_main {
    width: 100%;
    background: #fbfbfb;
    z-index: 2;
    position: relative;
    padding-top: 35px;
}

.intang_content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}

.itemImg {
    width: 100%;
    height: 100%;
    position: relative;
}

.itemText {
    font-size: 16px;
    height: 60px;
    line-height: 60px;
    background: #e9e9e9;
    position: absolute;
    top: 220px;
    width: 100%;
}

.videoWrap {
    width: 100%;
    height: auto;
}

.videoA {
    width: 392px;
    height: 220px;
}

.intang_content div ul li a {
    font-size: 16px;
}

/*新闻左边部分*/
.intang_left {
    float: left;
    width: 555px;
}

.intang_left ul {
    margin-left: 10px;
    margin-top: 5px;
}

/*新闻右边部分*/
.intang_right {
    float: right;
    width: 555px;
    padding: 0 18px;
}

.intang_right ul {
    margin-left: 10px;
    margin-top: 5px;
}

.intang_title {
    padding-left: 35px;
    height: 56px;
    line-height: 56px;
    text-indent: 0;
    background: url(../../assets/img/icons/title-icon.png) no-repeat left center;
    margin-left: 10px;
}

.intang_title h3 {
    font-size: 26px;
    color: #333333;
}

.intang_title h3 a {
    float: right;
    color: #333333;
    font-size: 14px;
    vertical-align: text-top;
}

.intang_content div ul li a:hover h3 {
    color: #999999;
}

.intang_content div ul li a:hover span {
    color: #999999;
}

/*图标部分*/
.intang_icon {
    clear: both;
    white-space: nowrap;
    height: 100%;
    width: 1200px;
    padding: 40px 0;
}

.intang_icon ol {
    height: 140px;
    width: 1100px;
    margin: 0 auto;
}

.intang_icon ol li {
    float: left;
    margin: 0 65px;
}

.intang_icon ol li a {
    display: block;
    width: 145px;
    height: 145px;
}

.intang_icon ol li a div {
    width: 100px;
    height: 100px;
    background-size: 100% 100%;
    margin: 0 auto;
}

.intang_icon ol li:first-child a div {
    background: url(../../assets/img/icons/feiyifagui.png) no-repeat center center;
}

.intang_icon ol li:first-child a:hover div {
    background: url(../../assets/img/icons/law_regular.png) no-repeat center center;
}

.intang_icon ol li:nth-child(2) a div {
    background: url(../../assets/img/icons/project.png) no-repeat center center;
}

.intang_icon ol li:nth-child(2) a:hover div {
    background: url(../../assets/img/icons/feiyixiangmu.png) no-repeat center center;
}

.intang_icon ol li:nth-child(3) a div {
    background: url(../../assets/img/icons/chuancherngren.png) no-repeat center center;
}

.intang_icon ol li:nth-child(3) a:hover div {
    background: url(../../assets/img/icons/inheri_bg.png) no-repeat center center;
}

.intang_icon ol li:last-child a div {
    background: url(../../assets/img/icons/zhinan.png) no-repeat center center;
}

.intang_icon ol li:last-child a:hover div {
    background: url(../../assets/img/icons/declare.png) no-repeat center center;
}

.intang_icon ol li a p {
    text-align: center;
    font-size: 17px;
    color: #333333;
    margin-top: 20px;
    width: 100%;
    white-space: pre-wrap;
}


/*导航样式*/
.intang_c {
    opacity: 0.6;
}

#jp_container_1 {
    display: none;
    position: fixed;
    top: 90px;
    left: 30%;
    background: rgba(0, 0, 0, .3);
    z-index: 1000;
    margin: 0 auto;
    width: 500px !important;
    height: 300px !important;
}
</style>
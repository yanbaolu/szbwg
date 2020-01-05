<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div id="goTop" v-show="gotop" @click="toTop">
            <p>回到顶部</p>
        </div>
        <div class="news_main">
            <div class="navPath_new" style="margin-bottom:43px;">
                <div class="navPath clear">
                    <p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
                    <p class="clear"><i></i><a href="javascript:;" class="active">图片库</a><i></i></p>
                </div>
            </div>
            <div class="news_message">
                <!--非遗图片库  -->
                <div class="news_title"> 图片库 </div>
                <div class="intang_picture mt30">
                    <in-pic v-if="imgList" :data="imgList"></in-pic>
                </div>
                <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="dataAll.pages>1">
                    <div class="pagination">
                        <div class="clear leavePage" id="pageContent">
                            <div class=" pagination comWidth ">
                                <span class="page-last" @click="getImg(pageNum-1)" v-if="pageNum>1">上一页</span>
                                <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:num==index}" href="javascript:;" @click="getImg(item)">{{item}}</a> </p>
                                <span class="page-last" @click="getImg(pageNum+1)">下一页</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video_Mask">
                <div class="video_Wrap">
                    <video src="index" poster="index" id="video_" controls="" autoplay="autoplay"></video>
                </div>
                <div class="close" id="video-close" @click="videoClose()"></div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangiblePic from "../components/intangible/intangiblePic";
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: false,
            gotop: false,
            isPage: false,
            totlePage: 20,
            news: [],
            toice: [],
            imgList:'',
            num:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        window.addEventListener("scroll", this.handleScroll, true);
        this.getImg()
    },
    computed: {},
    methods: {
        handleScroll() {

            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;

            scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    clearInterval(timeTop);
                }
            }, 10);
        },
        getImg(item){
          this.num=item-1;
          this.pageNum=item;
            let data ={
                 lang:this.lang,
                 classifyCode:'C06',
                 platform:0,
                 pageNo:1,
                 pageSize:16
            };
            API.get2('intangible/picset/master/lmCode/L0406',data).then(res=>{
                if (res.code==0) {
                    //console.log(res,44444444484888)
                    this.imgList=res.data.list;
                    this.dataAll=res.data;
                    //console.log(this.imgList,444444444)
                }
            }).catch(err => {

            }) 
        },
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-pic': intangiblePic,
    }
};
</script>
<style scoped>
.mt30 {
    margin-top: 30px;
}

/*非遗视频*/
/*---*/

.video_content ul {
    width: 1200px;
    overflow: visible;
    box-sizing: border-box;
    padding-bottom: 40px;
    display: none;
}

.video_content ul.active {
    display: block;
}

.video_content ul .item {
    float: left;
    background: #e9e9e9;
    width: 370px;
    height: 260px;
    position: relative;
    margin: 40px 0 0 22px;
}

.video_content ul li a {
    display: block;
    font-size: 0;
    width: 370px;
    height: 260px;
    position: relative;
    color: #575757;
}

.video_content ul li:hover {
    background: #fff;
    color: #494949;
}

.video_content ul li:hover .itemText {
    background: #fff;
    box-shadow: 0 20px 18px 0 rgba(0, 0, 0, 0.07);
}

.video_content ul li a video {
    width: 370px;
    height: 208px;
}

.video_content ul li .itemImg {
    width: 370px;
    height: 260px;
}

.video_content ul li .videoWrap {
    box-shadow: 0 -20px 12px 0 rgba(0, 0, 0, 0.02);
}

.video_content ul li a:hover {
    box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.07);
}

.video_content ul li a p {
    width: 100%;
    height: 52px;
    line-height: 52px;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    text-indent: 40px;
}

.video_nav {
    border-top: 1px solid #e9e9e9;
    margin-top: 23px;
}

.video_nav ul li {
    float: left;
    margin-left: 30px;
    margin-top: 7px;
}

.video_nav ul li a {
    display: block;
    font-size: 14px;
    line-height: 34px;
    color: #666666;
    border-bottom: 1px solid #ffffff;
}

.video_nav ul li a.active {
    color: #333333;
    border-bottom: 1px solid #333333;
}

.videoList .itemImg a .videoWrap {
    width: 370px;
    height: 208px;
    line-height: 208px;
    text-align: center;
}

.videoList .itemImg a .videoWrap video {
    max-width: 370px;
    max-height: 208px;
}
</style>
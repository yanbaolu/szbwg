<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div id="goTop" v-show="gotop" @click="toTop">
            <p>回到顶部</p>
        </div>
        <div class="news_main" style="margin-bottom:60px;">
            <div class="navPath_new mb-48">
                <div class="navPath clear">
                    <p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
                    <p class="clear"><i></i><a href="/intangible/intangibleNews?lmType=L0409&amp;lx=1">新闻资讯</a><i></i></p>
                    <p class="" clear=""><i></i><a href="javascript:;">{{data.title}}</a><i></i></p>
                </div>
            </div>
            <div class="news_detail_main deputy_text">
                <h1>
                    <center>{{data.title}}</center>
                </h1>
                <h4 style="text-align:center;font-size:20px;color:#333333;line-height:30px;"></h4>
                <!-- 附加信息 -->
                <div class="new_sub">
                    <span class="subtitle">{{data.subTitle}}</span>
                    <span class="dataTime">{{data.dateStr}}</span>
                    <span></span>
                </div>
                <p v-html="data.content"></p>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleNewsList from "../components/intangible/intangibleNewsList";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            gotop: false,
            isPage: false,
            totlePage: 20,
            news: [],
            toice: [],
            data:'',
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        window.addEventListener("scroll", this.handleScroll, true);
        this.getDetail();
    },
    computed: {},
    methods: {
        getDetail(){
            let data =this.$route.query;
            //console.log(data)
            API.get2('news/get',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data;
                    //console.log(this.data.dateStr)
                    console.log(res,44444)
                }
            }).catch(err => {
                
            })
        },
        handleScroll() {

            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log(scrolltop)
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
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-newslist': intangibleNewsList,
    }
};
</script>
<style scoped>
.news_detail_main {
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 60px;
}

.news_detail_main h1 {
    text-align: center;
    font-size: 26px;
    color: #333333;
}

.news_detail_main>p {
    line-height: 30px;
    /*margin:20px 0;*/
    font-size: 16px;
    color: #666666;
}

.news_detail_content {
    width: 800px;
    height: 100%;
    margin: 0 auto 30px;

}

/*甯﹀浘鐗囬儴鍒�*/
.news_detail_content p {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #989898;
}

.news_detail-img {
    width: 100%;
    height: 531px;
    margin: 0 auto;
}

.news_detail-img img {
    width: 100%;
    height: 100%;
}

/*椤佃剼閮ㄥ垎*/
.news_footer {
    margin-bottom: 30px;
}

.news_footer h3 {
    height: 38px;
    line-height: 38px;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
}

.news_footer p {
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    color: #666666;
}

table,
td {
    border: 1px solid #333333;
}
</style>
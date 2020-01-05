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
                    <p class="" clear=""><i></i><a href="javascript:;">首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</a><i></i></p>
                </div>
            </div>
            <div class="news_detail_main deputy_text">
                <h1>
                    <center>首届非物质文化遗产创意作品展在深圳中心书城拉开帷幕</center>
                </h1>
                <h4 style="text-align:center;font-size:20px;color:#333333;line-height:30px;"></h4>
                <!-- 附加信息 -->
                <div class="new_sub">
                    <span class="subtitle">供稿：深职院 图片:王斯远 黄自策 刘芳菲 蔡馥回 编辑：贾莉莎 邱莉斯</span>
                    <span class="dataTime">2019-12-20</span>
                    <span></span>
                </div>
                <p>　　12月18日至25日，为庆祝中华人民共和国成立70周年与深圳建市40周年，结合深圳建设中国特色社会主义先行示范区以及粤港澳大湾区建设，鼓励非物质文化遗产传承人以非物质文化遗产技艺为创作手段，讲好深圳故事、讴歌伟大祖国，我的深圳·我的祖国首届非物质文化遗产创意作品展在深圳中心书城展出。70件（组）由非遗传承人制作的创意作品，多角度呈现指尖上的非遗作品。</p>
                <p style="text-align: center;">&nbsp;<img src="https://www.shenzhenmuseum.com/szbwg-cms/userfiles/ueditor/jsp/upload/image/20191220/1576833413444056349.jpg" title="1576833413444056349.jpg" alt="01嘉宾为作品展启幕.jpg"></p>
                <p style="text-align: center;">嘉宾为作品展启幕</p>
                <p>　　开幕式上，深圳出版集团有限公司党委委员、副总经理丘干颁发本次作品展作品入选证书，深圳市文物管理办公室(非遗办)主任乔永清颁发合作伙伴单位证书；深圳博物馆副馆长、市非遗保护中心副主任蔡惠尧颁发深圳职业技术学院2019年武术类非遗传承人群研培班优秀学员证书。本次作品展由深圳职业技术学院、深圳出版集团有限公司资产运营分公司主办，广东省非物质文化遗产深职院研究基地、深职院非物质文化遗产协同创新与研究中心承办，多家文化创意单位协办。是深圳市第15届创意十二月重点项目。</p>
                <p style="text-align: center;">&nbsp;<img src="https://www.shenzhenmuseum.com/szbwg-cms/userfiles/ueditor/jsp/upload/image/20191220/1576833413444056349.jpg" title="1576833437963051196.jpg" alt="02丘干副总经理为作者颁发本次作品展作品入选证书.jpg"></p>
                <p style="text-align: center;">丘干副总经理为作者颁发本次作品展作品入选证书</p>
                <p style="text-align: center;">&nbsp;</p>
                <p style="text-align: center;">&nbsp;<img src="https://www.shenzhenmuseum.com/szbwg-cms/userfiles/ueditor/jsp/upload/image/20191220/1576833413444056349.jpg" title="1576833445946004378.jpg" alt="03乔永清主任为合作企业颁发合作伙伴单位证书.jpg"></p>
                <p style="text-align: center;">乔永清主任为合作企业颁发合作伙伴单位证书</p>
                <p style="text-align: center;">&nbsp;</p>
                <p style="text-align: center;">&nbsp;<img src="https://www.shenzhenmuseum.com/szbwg-cms/userfiles/ueditor/jsp/upload/image/20191220/1576833413444056349.jpg" title="1576833454100037113.jpg" alt="04蔡惠尧副馆长颁发2019年武术类非遗传承人群研培班优秀学员证书.jpg"></p>
                <p style="text-align: center;">蔡惠尧副馆长颁发2019年武术类非遗传承人群研培班优秀学员证书</p>
                <p>&nbsp;</p>
                <p>　　开幕展现场，14幅由国家级非物质文化遗产传承人宁雷制作的鱼皮画吸引了不少市民的眼光。作品展览期间，共展出内画、瓷板画、鱼皮画、水拓画、麦金画、篆刻画、皮雕、潮绣、珠绣、水书、剪纸、剪影、潮汕嵌瓷、棉塑等非遗项目传承人创作的精彩作品，为市民送上一份创意文化大餐。</p>
                <p style="text-align: center;">&nbsp;<img src="https://www.shenzhenmuseum.com/szbwg-cms/userfiles/ueditor/jsp/upload/image/20191220/1576833413444056349.jpg" title="1576833474871033836.jpg" alt="05作品展示.jpg"></p>
                <p style="text-align: center;">部分作品展示</p>
                <p><br></p>
                <p></p>
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
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        window.addEventListener("scroll", this.handleScroll, true);
    },
    computed: {},
    methods: {
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
<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata"></header-top>
        <div class="collection-reservation-tab-wrap mt120">
            <div class="collection-reservation-tab comWidth">
                <ul class="clear">
                    <li class="col">
                        <router-link :to="{path:'collectExhibit'}" class="active">我的收藏</router-link>
                        <div class="sec-nav">
                            <span v-for="(item,index) in sctitle" :key="index" :class="{active:num ==index}" @click="num = index">
                                {{item}}
                            </span>
                        </div>
                    </li>
                    <li class="line"></li>
                    <li class="res">
                        <router-link :to="{path:'reservation'}" class="">我的预约</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mainWrap">
            <!-- 我的收藏 -->
            <!-- 展览 -->
            <div class="exhibiton-collection items" v-show="num ==0">
                <div class="comWidth">
                    <div class="titleBar mt-40 mb-10">
                        <div class="comTitle">
                            <a href=""><span class="titleIcon"></span><strong class="titleName">常设展览</strong></a>
                        </div>
                    </div>
                    <div class="imgList4">
                        <ul class="clear">
                            <li class="item">
                                <a href="/exhibition/detail?resType=CmsExhibition&amp;resSubType=1&amp;resId=530ec1a00cf54b1d92b30d5e6c885a17">
                                    <div class="itemImg">
                                        <img alt="" src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/11/21/20171121060610577.jpg" onerror="this.src='/static/img/bg-4-3.png'">
                                        <div class="itemText">
                                            <h3>近代深圳</h3>
                                            <p>鸦片战争是中国近代史的开端。1839年，发生在深圳地区新安海域的九龙海战，是鸦片战争的前哨战，在这里打响了近代反侵略的第一仗。鸦片战争失败后，中国向外国侵略者屈辱求和，签订了近代第一个不平等条约——《南京条约》，独立的中国走上了半殖民地半封建的苦难道路。
                                                近代深圳是近代中国历史的缩影。从深港民众抵抗英国侵占香港，到孙中山发动三洲田起义、打响推翻清王朝的第一枪；从宝安县党组织领导农民运动反对军阀列强，到省港大罢工的前沿阵地；从八年艰苦抗战，到四年解放战争……在一个多世纪的抗争中，深圳人民表现出了不畏强敌的英勇和顽强。
                                                鸦片战争以后，中国开放通商口岸，西方资本主义文明陆续输入。仍然做着“天朝大国”美梦的东方睡狮被惊醒，从此“放眼看世界”，踏上了曲折的近代化道路。深圳毗邻香港，便于吸纳西方先进的科学技术和思想文化，在中国近代化的历程中扮演着重要角色。下面让我们穿越时空，领略深圳的百年沧桑，感受历史的风云多变，把握现实，启迪未来。</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="comWidth">
                    <div class="titleBar mt-40 mb-10">
                        <div class="comTitle">
                            <a href=""><span class="titleIcon"></span><strong class="titleName">专题展览</strong></a>
                        </div>
                    </div>
                    <div class="imgList5" style="margin:0">
                        <ul class="clear">
                            <li class="item">
                                <a href="/exhibition/detail?resType=CmsExhibition&amp;resSubType=2&amp;resId=bf7b7740f34c4fcdaa7d46fbc3167d2e">
                                    <div class="itemImg">
                                        <img alt="" src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190920101651.jpg" onerror="this.src='/static/img/bg-4-3.png'">
                                        <div class="item_title">
                                            <h3>吴昌硕书画篆刻艺术展</h3>
                                            <p>2019.09.20-11.17</p>
                                            <p>深圳博物馆历史民俗馆一楼专题展览厅</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="item">
                                <a href="/exhibition/detail?resType=CmsExhibition&amp;resSubType=2&amp;resId=8588bcf5736c4ec5aa72254401bbb3ad">
                                    <div class="itemImg">
                                        <img alt="" src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191205163426.jpg" onerror="this.src='/static/img/bg-4-3.png'">
                                        <div class="item_title">
                                            <h3>天宝物语——深圳博物馆自然标本征集汇报展</h3>
                                            <p>2019.12.06-02.05</p>
                                            <p>深圳博物馆历史民俗馆一楼大厅（市民中心A区）</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 典藏 -->
            <div class="collections-collection items" v-show="num ==1">
                <div class="imgList7">
                    <ul class="clear" id="dcData">
                        <li class="item"><a href="/webCollection/collectionDetail?resId=03e3297fe3a04672b07119ce19524883">
                                <div class="itemImg "><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/25/20170925092517784.jpg">
                                    <div class="itemText">
                                        <h3>褐彩牡丹双系小口陶瓶</h3>
                                    </div>
                                </div>
                            </a></li>
                        <li class="item"><a href="/webCollection/collectionDetail?resId=fde4c9f886264341b3f1f5bf1a32e70a">
                                <div class="itemImg "><img src="https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191205142658.jpg">
                                    <div class="itemText">
                                        <h3>狮虎兽（Panthera leo × tigris）</h3>
                                    </div>
                                </div>
                            </a></li>
                        <li class="item"><a href="/webCollection/collectionDetail?resId=ec843753f9d94f8fb9426b849aea0d29">
                                <div class="itemImg "><img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/23/20170923113549307.jpg">
                                    <div class="itemText">
                                        <h3>1987年深圳土地有偿使用拍卖槌</h3>
                                    </div>
                                </div>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/socialisation/socialisitionNav"
import ammouncerleft from "../components/socialisation/ammouncerleft"
import ammouncerright from "../components/socialisation/ammouncerright"
import * as API from "api/demo";
export default {
    data() {
        return {
            lang: this.$store.getters.getlang,
            isBanner: false,
            isPage: false,
            isShow: false,
            totlePage: 1,
            bandata: '',
            volunteerList: '',
            actList: '',
            sctitle: ['展览', '典藏'],
            num: 0,
        };
    },
    mounted() {
        this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
        this.getBaner();
    },
    computed: {},
    methods: {
        //获取banner 社交banner
        getBaner() {
            let data = {
                lang: this.lang,
                pageNo: 1,
                pageSize: 3,
                platform: 0
            };
            API.get2('slidePic/page/L0503', data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {

            })
        },


    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'so-nav': socialisitionNav,
    }
};
</script>
<style scoped>
.mt120 {
    margin-top: 120px;
    min-height: 160px;
}

.collection-reservation-tab {
    text-align: center;
    border-bottom: 1px solid #e9e9e9;
}

.collection-reservation-tab ul {
    display: inline-block;
    font-size: 0;
}

.collection-reservation-tab ul li {
    display: inline-block;
    background-size: 14px 14px;
    padding: 0 98px;
    height: 100px;
    line-height: 100px;
    position: relative;
}

.collection-reservation-tab a {
    font-size: 26px;
    color: #999999;
    border-bottom: 4px solid #fff;
    line-height: 46px;
    display: inline-block;
    padding-left: 34px;
}

.collection-reservation-tab li.line {
    width: 1px;
    height: 26px;
    background: #e9e9e9;
    overflow: hidden;
    padding: 0;
}

.collection-reservation-tab li.col>a {
    background: url(../../assets/base/img/collection.png) no-repeat 0 center;
}

.collection-reservation-tab li.col>a:hover,
.collection-reservation-tab li.col a.active {
    background: url(../../assets/base/img/collection-bg.png) no-repeat 0 center;
}

.collection-reservation-tab li.res>a {
    background: url(../../assets/base/img/reservation.png) no-repeat 0 center;
}

.collection-reservation-tab li.res>a:hover,
.collection-reservation-tab li.res a.active {
    background: url(../../assets/base/img/reservation-active.png) no-repeat 0 center;
}

.collection-reservation-tab ul a:hover,
.collection-reservation-tab ul a.active {
    border-bottom: 4px solid #333333;
    color: #333333;
}

.colletion-main {
    padding-top: 40px;
}

.collection-reservation-tab .sec-nav {
    height: 60px;
    background: #fff;
    position: absolute;
    top: 101px;
    left: 0;
    width: 420px;
    font-size: 0;
}

.collection-reservation-tab .sec-nav span {
    background: none;
    float: left;
    margin-right: 70px;
    margin-top: 30px;
    cursor: pointer;
}

.collection-reservation-tab .sec-nav span {
    font-size: 15px;
    color: #333333;
    line-height: 30px;
    display: inline-block;
    border-bottom: 1px solid transparent;
    background: none;
    padding-left: 0;
}

.collection-reservation-tab .sec-nav span:hover,
.collection-reservation-tab .sec-nav span.active {
    border-bottom: 1px solid #000;
    background: none;
}

.collection-reservation-tab .sec-nav {}

.collections-collection {
    margin-top: 50px;
}
</style>
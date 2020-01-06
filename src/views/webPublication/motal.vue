<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px"></header-top>
        <!--导航-->
        <div class="social_nav">
            <web-nav></web-nav>
        </div>
        <ul class="motal_nav clear">
            <li v-for="(item,index) in motalnav" :key="index" @click="getLit(item.code,index)" :class="{active:num ==index}">{{item.name}}</li>
        </ul>
        <div class="mt50" v-for="(item,index) in motalnav" :key="index" v-show="num ==index">
            <in-newslist :isPage='isPage' v-if="list" :data="list"></in-newslist>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import paperlist from "../components/intangible/intangibleNewsList";
import socialisitionNav from "../components/webPublication/webPublicationnav";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 20,
            news: [],
            toice: [],
            num: 3,
            motalnav: ['古代深圳', '近代深圳', '改革开放', '民俗文化', '非遗传承', '自然历史'],
            lang:this.$store.getters.getlang,
            bandata:'',
            list:'',
            code:'C0304'
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 5 ? (this.isPage = false) : (this.isPage = true);
        this.getBaner();
        this.getMster();
        this.getLit('C0304',3);
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
            API.get2('slidePic/page/L0605',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        //获取分类
        getMster(){
            let data ={
                
            };
            API.get2('master/code/C03',data).then(res => {
                if (res.code == 0) {
                    this.motalnav = res.data.childs;
                    //console.log(this.motalnav,456789)
                }
            }).catch(err => {
                
            })
        },
        //获取列表
        getLit(code,index){
          //console.log(code)
          this.num=index;
            if(code){
                this.code=code;
            }
            let data ={
                lang:this.lang,
                pageNum:1,
                pageSize:999,
                platform:0,
                master:this.code
            };
            API.get2('learning/news/page/L0606',data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    //console.log(this.list,456789)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-newslist': paperlist,
        'web-nav': socialisitionNav,
    }
};
</script>
<style scoped>
.navPath {
    margin: 0 auto !important;
}

.motal_nav {
    width: 1200px;
    margin: 20px auto 0;
    box-sizing: border-box;
    padding: 0 40px;
    border-top: 1px solid #dddddd;
}

.motal_nav li {
    float: left;
    margin-left: 30px;
    margin-top: 10px;
}

.motal_nav li:first-child {
    margin-left: 0;
}

.motal_nav li {
    font-size: 14px;
    color: #999999;
    cursor: pointer;
}

.motal_nav li.active,
.motal_nav li:hover {
    color: #333333;
}

.motal_content {
    margin: 26px auto 23px;
}

.motal_content {
    box-sizing: border-box;
    padding: 0 30px;
}

.motal_content ul {
    display: none;
}

.motal_content ul.active {
    display: block;
}
</style>
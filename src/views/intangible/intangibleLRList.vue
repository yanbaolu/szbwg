<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="news_main" style="margin-bottom:40px;">
            <div class="navPath_new clear" style="margin-bottom:33px;">
                <div class="navPath clear">
                    <p class="clear"><i></i><a href="/intangible">非遗</a><i></i></p>
                    <p class="clear"><i></i><a href="javascript:;">非遗法规</a><i></i></p>
                </div>
            </div>
            <div class="news_message">
                <div class="intang_title">
                    <h3 class="clearfix">
                        <a href="#" target="_blank" class="title_a">{{this.$route.query.title}}</a>
                    </h3>
                </div>
                <div class="news_content laws_content">
                    <in-lr v-if="lawer" :data="lawer"></in-lr>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import intangibleLRinfo from "../components/intangible/intangibleLRinfo";
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: false,
            isPage: false,
            isPageTopic: false,
            totlePageTopic: 1,
            totlePage: 1,
            news: [],
            toice: [],
            lawer:''
        };
    },
    mounted() {
        //页数显示与否
        this.totlePage <= 10 ? (this.isPage = false) : (this.isPage = true);
        this.getLawer()
    },
    computed: {},
    methods: {
      getLawer(){
            let data ={
                 lang:this.lang,
                 pageNo:1,
                 pageSize:8,
                 platform:0,
                 master:this.$route.query.type
            };
            API.get2('intangible/regulat/page/L0401',data).then(res=>{
                if (res.code==0) {
                    this.lawer=res.data.list;
                    console.log(res)
                }
            }).catch(err => {

            }) 
        },
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'in-lr': intangibleLRinfo,

    }
};
</script>
<style scoped>
/*法规内容*/
.laws_content {
    margin-bottom: 40px !important;
    margin-left: 25px;
}

.news_content {
    margin: 10px 0;
}
</style>
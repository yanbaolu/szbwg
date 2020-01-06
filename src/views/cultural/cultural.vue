<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px;"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <web-nav></web-nav>
            </div>
            <cu-nav></cu-nav>
            <!--讲座-->
            <div class="">
                <cu-eq v-if="list" :data="list"></cu-eq>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/webPublication/webPublicationnav";
import equipment from "../components/cultural/equipment";
import socialisition from "../components/cultural/culturalnav";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 12,
            lang: this.$store.getters.getlang,
            bandata: '',
            list:''
        };
    },
    mounted() {
        this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
        this.getBaner();
        this.getList()
    },
    computed: {},
    methods: {
        //获取banner
        getBaner() {
            let data = {
                lang: this.lang,
                pageNo: 1,
                pageSize: 3,
                platform: 0
            };
            API.get2('slidePic/page/L0605', data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {

            })
        },
        //设备列表
        getList(){
            let data = {
                lang: this.lang,
                pageNo: 1,
                pageSize:16,
                platform: 0
            };
            API.get2('document/page/L0703', data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    //console.log(this.list)
                }
            }).catch(err => {

            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'web-nav': socialisitionNav,
        'cu-nav': socialisition,
        'cu-eq': equipment
    }
};
</script>
<style scoped>

</style>
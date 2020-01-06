<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px;"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <pu-nav></pu-nav>
            </div>
            <!--创意商品-->
            <div class="imgBox">
                <div class="bigImgBox">
                    <a href="#">
                        <img :src="fUrl.thumbPic1" title="40周年改革展览T恤（21个城市）（汕头）" alt="40周年改革展览T恤（21个城市）（汕头）">
                    </a>
                </div>
                <p-list v-if="list" :data="list"></p-list>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import publicationnav from "../components/publicaiton/publicationnav";
import plist from "../components/publicaiton/plist";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 12,
            lang: this.$store.getters.getlang,
            bandata: '',
            list:'',
            fUrl:''
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
            API.get2('slidePic/page/L0803', data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {

            })
        },
        getList(){
            let data = {
                lang: this.lang,
                pageNo: 1,
                pageSize:999,
                platform: 0
            };
            API.get2('product/goods/page/L0801',data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    this.fUrl=res.data.list[1];
                    console.log(this.fUrl)
                }
            }).catch(err => {

            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'pu-nav': publicationnav,
        'p-list': plist,
    }
};
</script>
<style scoped>
.bigImgBox {
    height: 660px;
    width: 100%;
    padding-top: 60px;
}

.bigImgBox a {
    display: block;
    width: 1200px;
    height: 660px;
    margin: 0 auto 40px;
    vertical-align: middle;
    text-align: center;
    line-height: 600px;
}

.bigImgBox a img {
    max-height: 600px;
    max-width: 1200px;
}
</style>
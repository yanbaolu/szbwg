<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px;"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <pu-nav></pu-nav>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import publicationnav from "../components/publicaiton/publicationnav";
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
      this.getBaner()
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
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'pu-nav': publicationnav,
    }
};
</script>
<style scoped>
.mt30 {
    margin-top: 30px;
}
</style>
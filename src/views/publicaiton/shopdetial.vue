<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <p-detial v-if="data" :data="data"></p-detial>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import pshopdetial from "../components/publicaiton/pshopdetial"
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            isPage: false,
            totlePage: 12,
            data:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getDetai()
    },
    computed: {
        
    },
    methods: {
        getDetai(){
            let data = this.$route.query;
            API.get2('product/goods/get',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data;
                    console.log(res,4444444)
                }
            }).catch(err => {

            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        "p-detial": pshopdetial
    }
};
</script>
<style scoped>
</style>
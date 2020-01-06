<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <m-detial></m-detial>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/webPublication/webPublicationnav";
import mpdetial from "../components/webPublication/mpdetial"
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            isPage: false,
            totlePage: 12
        };
    },
    mounted() { this.totlePage <= 10 ? this.isPage = false : this.isPage = true; },
    computed: {},
    methods: {

    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'web-nav': socialisitionNav,
        "m-detial": mpdetial
    }
};
</script>
<style scoped>
</style>
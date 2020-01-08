<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner"></header-top>
        <div class="social_main mt50">
            <!--专家底层-->
            <a-detial></a-detial>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import apdetial from "../components/aboutus/apdetial";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: false,
            isPage: false,
            totlePage: 12,
        };
    },
    mounted() { this.totlePage <= 10 ? this.isPage = false : this.isPage = true; },
    computed: {},
    methods: {},
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'a-detial': apdetial
    }
};
</script>
<style scoped>
.aboutUsTextWrap {
    padding-top: 60px;
    position: relative;
}

.aboutUsText {
    width: 1200px;
    margin: 0 auto;
}

.aboutUsTextTab-1-tabs {
    margin-bottom: 24px;
}

.aboutUsTextTab-1-tabs li {
    line-height: 54px;
    color: #999999;
    font-size: 14px;
    padding: 16px;
    display: inline;
    cursor: pointer;
}

.aboutUsTextTab-1-tabs li:first-child {
    padding-left: 10px;
}

.aboutUsTextTab-1-tabs li:hover,
.aboutUsTextTab-1-tabs li.active {
    color: #333333;
    display: inline;
}

.aboutUsTextTab-1-tabs-text {
    display: none;
    font-size: 16px;
    color: #333333;
    line-height: 30px;
}

.aboutUsTextTab-1-tabs-text.active {
    display: block;
}

/*.aboutUsTextTab-1-tabs-lists .aboutUsTextTab-1-tabs-text:nth-child(4){display: block;}*/
</style>
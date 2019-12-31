<template>
  <div class="roomContent">
    <header-top :isBanner="isBanner"></header-top>
  <c-detial></c-detial>
    <footer-bottom></footer-bottom>
  </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import cdetial from "../components/cultural/cdetial";
import * as API from "api/demo";
export default {
  data() {
    return {
      isBanner:false,
      isPage: false,
      totlePage: 12
    };
  },
  mounted() {this.totlePage<=10?this.isPage = false :this.isPage =true;},
  computed: {},
  methods: {},
  components: {
    "header-top": header,
    "footer-bottom": footer,
    "c-detial":cdetial
  }
};
</script>
<style scoped>


</style>

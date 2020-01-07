<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata" style="margin-bottom:30px;"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <pu-nav></pu-nav>
            </div>
            <div class="meeting-traning">
                <ul id="list2" class="clear">
                    <li v-if="list" v-for="(item,index) in list" :key="index">
                         <router-link :to="{path:'newsDetail'}">
                            <p>{{item.name}}</p><span>{{item.dateStr}}</span>
                          </router-link>
                    </li>
                </ul>
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
            list: ''
        };
    },
    mounted() {
        this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
        this.getBaner();
        this.getList();
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
                pageNum:1,
                pageSize:888,
                platform: 0
            };
            API.get2('product/news/page/L0806',data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    console.log(this.list)
                }
            }).catch(err => {

            })
        }
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
  .meeting-traning{
      width: 1200px;
      margin: 0 auto;
  }
  .meeting-traning ul li{
    border-bottom: 1px solid #dddddd;
  }
  .meeting-traning ul li a{
      display: block;
      height: 48px;
      line-height: 48px;
      text-indent: 10px;
      font-size: 14px;
      background: url(../../assets/base/img/li_pre.png) no-repeat left center;
      background-size: 2px 2px;
      color: #333333;
  }
  .meeting-traning ul li a:hover p{
      color:#999999;
  }
  .meeting-traning ul li a:hover span{
      color:#999999;
  }
  .meeting-traning ul li a p{
      float:left;
      font-size:14px;
      color:#333333;
      white-space: nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
      width:950px;
  }
  .meeting-traning ul li a span{
      font-size:14px;
      color:#666666;
      float:right;
  }
</style>
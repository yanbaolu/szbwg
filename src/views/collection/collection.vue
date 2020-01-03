<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" :bandata="bandata"></header-top>
        <div class="collect_count">
            <p>
                <a href="/index/to?path=web/collection/collect_count">深圳博物馆藏品总目</a>
            </p>
        </div>
        <div class="wrap">
            <div class="collectionWrap">
                <div class="collection comWidth" style="padding-top:10px;">
                    <div class="titleBar pb-10">
                        <div class="comTitle">
                            <a href="#">
                                <span class="titleIcon"></span>
                                <strong class="titleName">改革开放史</strong>
                            </a>
                        </div>
                        <router-link :to="{path:'/collectionList'}" class="more">查看更多</router-link>
                    </div>
                    <collection-list v-if="Ggkfs" :data="Ggkfs"></collection-list>
                </div>
            </div>
            <div class="collectionWrap">
                <div class="collection comWidth" style="padding-top:10px;">
                    <div class="titleBar pb-10">
                        <div class="comTitle">
                            <a href="#">
                                <span class="titleIcon"></span>
                                <strong class="titleName">古代艺术</strong>
                            </a>
                        </div>
                        <a href="#" class="more">查看更多</a>
                    </div>
                    <collection-list v-if="Gdys" :data="Gdys"></collection-list>
                </div>
            </div>
            <div class="collectionWrap">
                <div class="collection comWidth" style="padding-top:10px;">
                    <div class="titleBar pb-10">
                        <div class="comTitle">
                            <a href="#">
                                <span class="titleIcon"></span>
                                <strong class="titleName">深圳历史文化</strong>
                            </a>
                        </div>
                        <a href="#" class="more">查看更多</a>
                    </div>
                    <collection-list v-if="Szwhs" :data="Szwhs"></collection-list>
                </div>
            </div>
            <div class="collectionWrap" v-if="Zrbb">
                <div class="collection comWidth" style="padding-top:10px;">
                    <div class="titleBar pb-10">
                        <div class="comTitle">
                            <a href="#">
                                <span class="titleIcon"></span>
                                <strong class="titleName">自然标本</strong>
                            </a>
                        </div>
                        <a href="#" class="more">查看更多</a>
                    </div>
                    <collection-list v-if="Zrbb" :data="Zrbb"></collection-list>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import collection from "../components/collection/collectionCount";
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: true,
            isPage: false,
            totlePage: 1,
            bandata:'',
            Gdys:'',
            Ggkfs:'',
            Zrbb:'',
            Szwhs:''
        };
    },
    mounted() {
        this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
        //获取banner
        this.getBaner()
        //古典艺术
        this.gdys()
        //改革开放
        this.ggkfs()
        //深圳历史文化
        this.szwhs()
        //自然标本
        this.zrbb()
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
          API.get2('slidePic/page/L0301',data).then(res => {
              if (res.code == 0) {
                  this.bandata = res.data.list;
                  //console.log(this.bandata)
              }
          }).catch(err => {
              
          })
      },
      //典藏-古典艺术
      gdys(){
        let data ={
            lang:this.lang,
            pageNo:1,
            pageSize:4,
            platform:0,
            master:''
        };
        API.get2('collection/page/L0303',data).then(res => {
            if (res.code == 0) {
                this.Gdys = res.data.list;
                //console.log(this.Gdys,'古典艺术')
            }
        }).catch(err => {
            
        })
      },
      //典藏改革开放史
      ggkfs(){
        let data ={
            lang:this.lang,
            pageNo:1,
            pageSize:4,
            platform:0,
            master:''
        };
        API.get2('collection/page/L0302',data).then(res => {
            if (res.code == 0) {
                this.Ggkfs = res.data.list;
                //console.log(this.Gdys,'典藏改革开放史')
            }
        }).catch(err => {
            
        })
      },
      //典藏-深圳历史文化
      szwhs(){
        let data ={
            lang:this.lang,
            pageNo:1,
            pageSize:4,
            platform:0,
            master:''
        };
        API.get2('collection/page/L0304',data).then(res => {
            if (res.code == 0) {
                this.Szwhs = res.data.list;
                //console.log(this.Gdys,'深圳历史文化')
            }
        }).catch(err => {
            
        })
      },
      zrbb(){
        let data ={
            lang:this.lang,
            pageNo:1,
            pageSize:4,
            platform:0,
            master:''
        };
        API.get2('specimen/page/L0305',data).then(res => {
            if (res.code == 0) {
                this.Zrbb = res.data.list;
                console.log(this.Zrbb,'自然标本')
            }
        }).catch(err => {
            
        })
      }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        "collection-list": collection
    }
};
</script>
<style scoped>
.collectionWrap {
    background-color: #ffffff;
    position: relative;
    z-index: 2;
}

.collect_count {
    width: 1200px;
    margin: 40px auto 10px;
    border-bottom: 1px solid #bdbdbd;
}

.collect_count p {
    line-height: 20px;
    margin-bottom: 22px;
}

.collect_count p a {
    font-size: 20px;
    color: #333333;
}

.collect_count p:hover a {
    color: #666666;
}

.collect_c {
    opacity: 0.6;
}

.wrap .collectionWrap:nth-child(4) {
    margin-bottom: 40px;
}
</style>
<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata"></header-top>
        <div class="social_main mt50">
            <!--导航-->
            <div class="social_nav">
                <so-nav></so-nav>
            </div>
            <!--讲解员-->
            <div class="little_ammouncer clearfix active">
                <div class="little_ammou_left">
                    <div class="news_title">
                        小讲解员风采
                    </div>
                    <!--讲解员-->
                    <am-left :isPage="isPage" v-if="volunteerList" :data="volunteerList"></am-left>
                </div>
                <div class="little_ammou_right">
                    <div class="news_title clearfix">
                        小讲解员活动 <router-link :to="{name:'activelist',query:{activiteType:3,number:'L0513'}}">查看更多</router-link>
                    </div>
                    <am-right v-if="actList" :data="actList.list"></am-right>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import socialisitionNav from "../components/socialisation/socialisitionNav"
import ammouncerleft from "../components/socialisation/ammouncerleft"
import ammouncerright from "../components/socialisation/ammouncerright"
import * as API from "api/demo";
export default {
    data() {
        return {
            lang:this.$store.getters.getlang,
            isBanner: true,
            isPage: false,
            isShow: false,
            totlePage: 1,
            bandata:'',
            volunteerList:'',
            actList:''
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner();
      this.getVolunteer();
      this.activeList() 
    },
    computed: {},
    methods: {
        //获取banner 社交banner
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('slidePic/page/L0503',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        //小讲解员列表
        getVolunteer(){
            let data ={
                lang:this.lang,
                pageNum:1,
                pageSize:99999,
                platform:0
            };
            API.get2('volunteer/page/L0504',data).then(res => {
                if (res.code == 0) {
                    this.volunteerList = res.data.list;
                    //console.log(this.volunteerList)
                }
            }).catch(err => {
                
            })
        },
        //小讲解员活动列表
        activeList(){
            let data ={
                lang:this.lang,
                pageNum:1,
                pageSize:'',
                platform:0,
                activiteType:3
            };
            API.get2('active/commentatorOrVolunteer/page/L0513',data).then(res => {
                if (res.code == 0) {
                    this.actList = res.data;
                    //console.log(this.actList)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'so-nav': socialisitionNav,
        'am-left': ammouncerleft,
        'am-right': ammouncerright,
    }
};
</script>
<style scoped>
.mt50 {
    margin-top: 80px;
}

.big_img {
    margin-top: 30px;
}

.news_title a {
    float: right;
    font-size: 15px;
    color: #767676;
}

.little_ammouncer {
    width: 1200px;
    margin: 40px auto 0;
    /* display:none; */
}

.activity {
    margin-top: 130px;
}

.social_banner {
    height: 500px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 80px;
}

.social_main {
    width: 100%;
    background: #fbfbfb;
    position: relative;
    z-index: 2;
    padding-top: 55px;
}
</style>
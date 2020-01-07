<template>
    <div class="roomContent">
        <header-top :isBanner="isBanner" v-if="bandata" :bandata="bandata"></header-top>
        <div class="aboutUsTextWrap">
            <div class="social_main mt50">
                <!--导航-->
                <div class="social_nav">
                    <ab-nav></ab-nav>
                </div>
            </div>
            <!--关于深博-->
            <div class="wrapbox">
                <div class="aboutUsTextTabs">
                    <div class="aboutUsTextTab ">
                        <ul class="classIndexP aboutUsTextTab-1-tabs">
                            <li v-for="(item,index) in titleNav" :key="index" @click="getList(index,'')" :class="{active:num ==index}">{{item.title}}</li>
                        </ul>
                        <div class="mannger_content">
                            <div v-for="(item,index) in titleNav" :key="index" :class="{active:num==index}">
                                <mage-list :isPage="isPage" v-if="list" :data="list"></mage-list>
                            </div>
                        </div>
                        <div class="paginationWrap" style="z-index: 1001;position: relative;" v-if="dataAll.pages>1">
                            <div class="pagination">
                                <div class="clear leavePage" id="pageContent">
                                    <div class=" pagination comWidth ">
                                        <span class="page-last" @click="getList('',pageNum-1)" v-if="pageNum>1">上一页</span>
                                        <p class="pages" v-for="(item,index) in dataAll.navigatepageNums"><a :class="{active:nums==index}" href="javascript:;" @click="getList('',item)">{{item}}</a> </p>
                                        <span class="page-last" @click="getList('',pageNum+1)">下一页</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from "../components/header";
import footer from "../components/footer";
import aboutnav from "../components/aboutus/aboutnav";
import magelist from "../components/aboutus/magelist";
import * as API from "api/demo";
export default {
    data() {
        return {
            isBanner: true,
            isPage: false,
            totlePage: 12,
            num: 0,
            num1:0,
            titleNav:[{
                title:'党群建设',
                url:'about/news/page/L090107'
            },{
                title:'后勤管理',
                url:'about/news/page/L090108'
            },{
                title:'场馆建设',
                url:'about/news/page/L090109'
            }],
            lang:this.$store.getters.getlang,
            bandata:'',
            list:'',
            nums:0,
            dataAll:'',
            pageNum:1
        };
    },
    mounted() { 
      this.totlePage <= 10 ? this.isPage = false : this.isPage = true;
      this.getBaner()
      this.getList(0,0)
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
            API.get2('slidePic/page/L0902',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                    //console.log(this.bandata)
                }
            }).catch(err => {
                
            })
        },
        getList(index,item){
            this.num=index;
            this.num1=index;
            this.nums=item-1;
            this.pageNum=item;
            if(index==0){
                var url='about/news/page/L090107'
            }else if(index==1){
                var url='about/news/page/L090108'
            }else {
                var url='about/news/page/L090109'
            }
            let data ={
                lang:this.lang,
                pageNum:this.pageNum,
                pageSize:16,
                platform:0
            };
            API.get2(url,data).then(res => {
                if (res.code == 0) {
                    this.list = res.data.list;
                    this.dataAll=res.data;
                    console.log(this.list,456789)
                }
            }).catch(err => {
                
            })
        }
    },
    components: {
        "header-top": header,
        "footer-bottom": footer,
        'ab-nav': aboutnav,
        'mage-list': magelist
    }
};
</script>
<style scoped>
.aboutUsTextTabs {
    padding: 2px 30px 60px 30px;
}

.wrapbox {
    width: 1200px;
    margin: 30px auto;
    border-top: 1px solid #e9e9e9;
    padding-top: 30px;
}

.aboutText {
    width: 1140px;
    margin: 0 auto;
}

.aboutUsTextWrap {
    padding: 60px 0;
    position: relative;
    background: #f3f3f3;
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

.mannger_content>div {
    margin-top: 30px;
    display: none;
}

.mannger_content>div.active {
    display: block;
}
</style>
<template>
    <div class="warp">
        <header-top :isBanner="isBanner" :bandata="bandata" v-if="bandata"></header-top>
        <div class="mine">
            <ul class="e_list">
                <li v-for="(item,index) in listd" :key="index">
                    <div class="content">
                        <h2 class="title">{{item.name}}</h2>
                        <div class="content_text">{{item.descr}}</div>
                        <a href="/roomdetail"> <div class="detaiBtn">查看展览</div></a>
                    </div>
                </li>
            </ul>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
import header from '../components/header'
import footer from '../components/footer'
import * as API from 'api/demo';
export default {
    data(){
        return{
            isBanner:true,
            //展馆banner
            bandata:'',
            //展馆列表
            listd:''
        }
    },
    mounted() {
        this.getBaner();
        this.getList()
    },
    methods: {
        //获取banner
        getBaner(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:6,
                platform:0
            };
            API.get2('slidePic/page/L1901',data).then(res => {
                if (res.code == 0) {
                    this.bandata = res.data.list;
                }
            }).catch(err => {
                
            })
        },
        //获取展馆列表
        getList(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:6,
                platform:0
            };
            API.get2('exhibition/hall/page/L1701',data).then(res => {
                if (res.code == 200) {
                    this.listd = res.data.list;
                    //console.log(this.listd,123456)
                }
            }).catch(err => {
                
            })
        }
    },
    components:{
    	'header-top':header,
    	'footer-bottom':footer
    }
}
</script>
<style lang="scss" scoped>
    .mine{width:1200px;margin: 0 auto;margin-top:80px;margin-bottom:100px;}
    .mine .e_list{width: 100%;height: 100%;display:flex;flex-wrap:wrap;}
    .e_list li{width:300px;height:500px;position:relative;cursor: pointer;}
    .e_list li:after{content:"";width:1px;height:240px;background:#ccc;position: absolute;top:110px;}
    .e_list li:nth-child(4n+1):after{height:0;width:0;}
    .e_list li .content{margin-top:110px;color:#333333;margin-left:40px;}
    .e_list li .content h2{position:relative;width:209px;font-size:20px;color:#242424;line-height:25px;}
    .e_list li .content h2:after{content:"";position:absolute;width:42px;height:3px;background:rgba(37,37,37,1);bottom:-18px;left:0;}
    .e_list li:hover{background:#66B8B2;border-radius:100px 0 100px 0;}
    .e_list li:hover .content h2{color:#fff;}
    .e_list li .content .content_text{width:209px;position:absolute;top:249px;color:#999999;font-size:16px;line-height:25px;}
    .e_list li:hover .content .content_text{color:#fff;}
    .e_list li:hover .content h2:after{background:#fff;}
    .e_list li .content .detaiBtn{width: 142px;height: 42px;color:#669CB8;text-align:center;background:rgba(255,255,255,1);border-radius:20px;line-height:42px;margin: 0 auto;position:absolute;bottom:80px;margin-left:-71px;left:50%;font-size:16px;display:none;}
    .e_list li .content .detaiBtn a{color:#669CB8;}
    .e_list li:hover .content .detaiBtn{display:block;}
    .e_list li:hover:after{display:none;}
    .e_list li:hover + li:after{display:none;}
</style>
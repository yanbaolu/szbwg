<template>
    <div>
        <div class="news_main" style="margin-bottom:40px;">
            <div class="navPath_new mb-48">
                <div class="navPath">
                    <p class="clear"><i></i><a href="/webPublication">学术</a><i></i></p>
                    <p class="clear"><i></i><a href="/monograph">专著</a><i></i></p>
                    <p class="clear"><i></i><a href="javascript:;">{{data.name}}</a><i></i></p>
                </div>
            </div>
            <div class="academic_detail clear">
                <div class="academic_delail_left">
                    <img :src="data.thumbPic">
                </div>
                <div class="academic_delail_right">
                    <h1 style="font-weight:normal;">{{data.name}}</h1>
                    <p><a style="" :href="readUrl" target="_black  " class="read_online">在线阅读</a></p>
                    <p class="clear" style="line-height:30px;"><span style="float:left;">作<em style="display:inline-block;width:32px;"></em>者：</span><span style="float:left;width:420px;">{{data.author}}</span></p>
                    <p>出<em style="display:inline-block;width:8px;"></em>版<em style="display:inline-block;width:8px;"></em>社： {{data.org}}</p>
                    <p>出版日期：
                        2016-09-01</p>
                    <p v-if="data.langName=='0'">语<em style="display:inline-block;width:32px;"></em>言：中文</p>
                    <p v-if="data.langName=='1'">语<em style="display:inline-block;width:32px;"></em>言：英文</p>
                    <div class="abstra_content">
                        <div class="astracts deputy_text">
                            <span>摘<em style="display:inline-block;width:32px;"></em>要：</span>
                            <p><span style="color: rgb(102, 102, 102); font-family: 微软雅黑; line-height: 30px; white-space: pre-wrap; font-size: 14px; background-color: rgb(255, 255, 255);">　　19世纪中期至20世纪中期的近百年间，中国传统文人审美的书画艺术经受了西方文化的直接挑战与冲击。黄宾虹正是中国近代社会与文艺激烈变革思潮下成就卓著的书画家，美术史学者。在时势与学术的砥砺前行中，黄宾虹完成了从科举体制下的儒生向现代学者、艺术家的身份转型，开启了重建中国传统艺术精神的思变之路。</span></p>
                        </div>
                        <div class="arrow" style="">
                            <span class="arrowUp" style="display: none;" @click="openup()"></span>
                            <span class="arrowDown" style="display: inline-block;" @click="closedown()"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as API from "api/demo";
export default {
    data() {
        return {
          lang:this.$store.getters.getlang,
          data:'',
          readUrl:''
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        openup() {
            $('.arrowDown').show();
            $('.arrowUp').hide();
            $('.abstra_content').css({
                height: '170px'
            })
            $('.deputy_text').css({
                height: '133px'
            })
            $('.arrow').css({
                bottom: '25px',
            })
        },
        closedown() {
            $('.arrowDown').hide();
            $('.arrowUp').css({
                display: 'block',
            });
            $('.arrow').css({
                bottom: '0',
            })
            $('.abstra_content').css({
                'height': 'auto'
            })
            $('.deputy_text').css({
                'height': 'auto'
            })
        },
        getData(){
            let data =this.$route.query;
            API.get2('publication/get',data).then(res => {
                if (res.code == 0) {
                    this.data = res.data;
                    if(this.$route.query.resType=='12'){
                        this.readUrl="https://www.shenzhenmuseum.com/webPublication/academicDetail?resId="+res.data.id+"&pubType=2&lmType=L0604&academic=3&pType=L06"
                    }else {
                        this.readUrl="https://www.shenzhenmuseum.com/webPublication/academicDetail?resId="+res.data.id+"&pubType=3&lmType=L0602&academic=1&pType=L06"
                    }
                   
                    console.log(this.data)
                }
            }).catch(err => {
                
            })
        }
    }
}
</script>
<style scope>
.astracts {
    height: 170px;
}

.arrowUp {
    margin: 30px auto;
}

.academic_detail {
    width: 1200px;
    margin: 0 auto 40px;
}

.academic_delail_left {
    float: left;
    width: 480px;
    height: 480px;
    text-align: center;
    line-height: 480px;
}

.academic_delail_left img {
    max-width: 480px;
    max-height: 480px;
}

.academic_delail_right {
    float: left;
    width: 520px;
    margin-left: 80px;
    box-sizing: border-box;
    padding-right: 16px;
}

.academic_delail_right h1 {
    text-align: left;
    line-height: 45px;
    font-weight: normal;
    font-size: 26px;
    color: #333333;
}

.academic_delail_right>p {
    font-size: 16px;
    color: #666666;
    line-height: 20px;
    margin: 18px 0;
}

/*鍦ㄧ嚎闃呰*/
.read_online {
    font-size: 14px;
    background: #333333;
    color: #fff;
    box-sizing: border-box;
    padding: 7px 20px;
    border-radius: 5px;
}

.publication_descri {
    width: 460px;

}

/* .read_online_content{
    width: 1200px;
    height:850px;
    margin: 0 auto;
} */
.read_online_content h1 {
    text-align: center;
    line-height: 45px;
    font-size: 26px;
    color: #333333;
    white-space: pre;
}

.turn_img {
    height: 720px;
    box-sizing: border-box;
    padding-top: 50px;
}

.read_online_content .address {
    text-indent: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #747474;
    margin-top: 10px;
}

.read_online_content .address a {
    display: inline-block;
    width: 100px;
    height: 18px;
    vertical-align: middle;
    margin-left: 40px;
    background: url(../../../assets/img/icons/cart.png) no-repeat right center;
}

.periodicalSec2 {
    left: 0;
}

/*椤佃剼*/
.academic_footer {
    width: 1200px;
    margin: 150px auto 80px;
    clear: both;
}

.academic_footer p {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #494949;
}
</style>
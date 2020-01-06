<template>
    <div>
        <div class="news_main" style="margin-bottom:40px;">
            <div class="navPath_new mb-48">
                <div class="navPath">
                    <p class="clear"><i></i><a href="/webPublication/index?academic=0">文创</a><i></i></p>
                    <p class="clear"><i></i><a href="/webPublication/index?academic=1">创意商品</a><i></i></p>
                    <p class="clear"><i></i><a href="javascript:;">{{data.name}}</a><i></i></p>
                </div>
            </div>
            <div class="academic_detail clear">
                <div class="academic_delail_left">
                    <img :src="data.thumbPic" onerror="this.src='/static/img/bg-4-3.png'" alt="">
                </div>
                <div class="academic_delail_right">
                    <h1 style="font-weight:normal;">{{data.name}}</h1>
                    <div class="a_h">
                        <div class="abstra_content">
                            <div class="astracts deputy_text">
                                <span>摘<em style="display:inline-block;width:32px;"></em>要：</span>
                                <div v-html="data.content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['data'],
    data() {
        return {}
    },
    mounted() {

    },
    methods: {

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
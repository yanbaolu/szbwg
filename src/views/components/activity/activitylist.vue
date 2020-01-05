<template>
    <div>
        <div class="social_main_content">
            <div class="social_active active">
                <ul class="social_ul">
                    <li class="clearfix" v-for="(item,index) in data" :key="index">
                        <router-link :to="{name:'activeDetail',query:{resId:item.resId,clazzName:item.clazzName,type:type}}">
                            <div class="social_img"><img :src="item.thumbPic" alt=""></div>
                        </router-link>
                        <div class="social_intro">
                            <router-link :to="{name:'activeDetail',query:{resId:item.resId,clazzName:item.clazzName,type:type}}">
                                <h4>{{item.name}}</h4>
                                <p>活动时间：{{item.dateStr}}</p>
                                <p class="activeP" v-if="item.isOver"><span>活动已结束</span></p>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isPage','data','type'],
    data() {
        return {}
    }
}
</script>
<style scoped>
.social_active {
    width: 1200px;
    margin: 46px auto 0;
}

.active_lecture {
    width: 1200px;
    margin: 46px auto 0;
}

.social_ul li {
    margin-bottom: 40px;
    background: #e9e9e9;
}

.social_ul li a {
    display: block;
}

.social_ul li:hover {
    background: #fff;
    box-shadow: 0 40px 40px #e9e9e9;
}

.social_ul li .social_img {
    height: 240px;
    width: 360px;
    float: left;
    font-size: 0;
    line-height: 240px;
    text-align: center;
}

.social_ul li .social_img img {
    max-width: 360px;
    max-height: 240px;
}

.social_ul li .social_intro {
    width: 800px;
    height: 240px;
    float: right;
    padding-left: 40px;
}

.social_ul li .social_intro h3 {
    font-size: 20px;
    height: 20px;
    line-height: 20px;
    color: #ff6900;
    margin: 30px 0 0 -10px;
    font-weight: normal;
}

.social_ul li .social_intro h4 {
    font-size: 18px;
    color: #464646;
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
    font-weight: normal;
}

.social_ul li .social_intro p {
    font-size: 15px;
    height: 15px;
    line-height: 15px;
    color: #717171;
    margin-top: 20px;
}

.social_ul li .social_intro p span {
    color: #4bac35;
    margin-right: 25px;
}

.social_ul li .social_intro p.activeP {
    width: 120px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
}

.social_ul li .social_intro p.activeP span {
    color: #999999;
    font-size: 16px;
    margin-right: 0;
}

.social_ul li:hover .social_intro p.activeP {
    background: #e9e9e9;
}

.social_ul li:hover .social_intro p.activeP span {
    color: #fff;
}

.social_ul li .social_intro button {
    height: 30px;
    line-height: 30px;
    width: 120px;
    background: #333333;
    color: white;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    margin-top: 30px;
    outline: none;
}

.social_page {
    width: 780px;
    height: 50px;
    line-height: 50px;
    margin: 50px auto 0;
}

.social_page ul li {
    float: left;
    margin: 0 25px;
}
</style>
<template>
    <div>
        <div class="big_img" v-if="isShow">
            <router-link :to="{path:'team'}">
                <img alt :src="vTeam.picPath" onerror="this.src='/static/img/bg-2-1.png'" />
                <p>{{vTeam.name}}</p>
            </router-link>
        </div>
        <ul class="clearfix">
            <li v-for="(item,index) in data" :key="index" >
                <router-link :to="{name:'volunteerDetail',query:{resId:item.resId,clazzName:item.clazzName}}">
                    <div class="little_child_img">
                        <img :src="item.photo" alt />
                    </div>
                    <div class="little_child_tittle">
                        <h3>{{item.name}}</h3>
                        <p>
                            男
                            <span>{{item.age}}</span>
                        </p>
                        <p></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["isPage", "isShow",'data','vTeam'],
    data() {
        return {};
    }
};
</script>
<style scope>
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

.little_ammou_left {
    float: left;
    width: 720px;
}

.little_ammou_left ul {
    margin-top: 40px;
}

.little_ammou_left ul li {
    float: left;
    margin-bottom: 40px;
}

.little_ammou_left ul li:nth-child(even) {
    margin-left: 40px;
}

.little_ammou_left ul li a {
    overflow: hidden;
    display: block;
    width: 338px;
    height: 198px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
}

.little_child_img {
    float: left;
    margin: 20px 0 0 20px;
    width: 120px;
    height: 160px;
    text-align: center;
    line-height: 160px;
}

.little_child_img img {
    max-width: 120px;
    max-height: 160px;
    border-radius: 5px;
}

.little_child_tittle {
    float: left;
    margin: 20px 0 0 40px;
}

.little_child_tittle h3 {
    font-size: 16px;
    color: #414141;
    height: 38px;
    line-height: 38px;
}

.little_child_tittle p {
    font-size: 14px;
    color: #666666;
    height: 34px;
    line-height: 34px;
}

.little_child_tittle p span {
    margin-left: 20px;
}

.little_ammou_right {
    float: left;
    width: 360px;
    margin-left: 120px;
}

.little_ammou_right ul li {
    margin-top: 40px;
}

.little_ammou_right ul li a {
    font-size: 14px;
    display: block;
    width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #414141;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
    padding-left: 20px;
}

.little_ammou_right ul li a img {
    max-width: 360px;
    max-height: 240px;
}

.little_ammou_right ul li a div {
    position: absolute;
    bottom: -2px;
    width: 100%;
    text-align: left;
    background: rgba(0, 0, 0, 0.6);
}

.little_child_talk p {
    font-size: 15px;
    text-indent: 30px;
    color: #fff;
    height: 30px;
    line-height: 30px;
}

/*大图*/
.big_img {
    margin-top: 30px;
}

.big_img a {
    display: block;
    width: 720px;
    height: 360px;
    text-align: center;
    line-height: 360px;
    position: relative;
}

.big_img a img {
    max-width: 720px;
    max-height: 360px;
}

.big_img a p {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    color: #fff;
    text-indent: 30px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>
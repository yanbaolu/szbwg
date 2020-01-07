<template>
    <div>
        <ul id="list1" class="expect_team clear">
            <li v-for="(item,index) in data" :key="index">
                <router-link :to="{path:'aboutpdetial'}">
                    <div class="expect_img"><img :src="item.thumbPic"></div>
                    <div class="expext_intro">
                        <p>姓<em style="display:inline-block;width:32px;"></em>名：{{item.name}}</p>
                        <p>职<em style="display:inline-block;width:32px;"></em>称：{{item.title}}</p>
                        <p><span style="float:left;">职<em style="display:inline-block;width:32px;"></em>务：</span><span style="float:left;width:250px;">{{item.post}}</span></p>
                        <p class="clear"><span style="float:left;">研究方向：</span><span style="float:left;width:250px;">{{item.research}}</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {}
    }
};
</script>
<style scoped>
.expect_team {
    width: 1200px;
}

.expect_team li {
    float: left;
    margin-bottom: 60px;
}

.expect_team li a {
    display: block;
    width: 530px;
    height: 205px;
    overflow: hidden;
}

.expect_team li:nth-child(even) {
    margin-left: 80px;
}

.expect_img {
    float: left;
    width: 148px;
    height: 198px;
    border: 1px solid #dddddd;
}

.expect_img img {
    width: 100%;
    height: 100%;
}

.expext_intro {
    float: left;
    width: 380px;
}

.expext_intro>p {
    line-height: 36px;
    width: 330px;
    font-size: 16px;
    text-indent: 0 !important;
    color: #666666;
    margin-left: 40px;
}
</style>
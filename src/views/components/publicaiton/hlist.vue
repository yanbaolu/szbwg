<template>
    <div>
        <div class="winer_honor">
            <ul id="list3" class="clear">
                <li v-for="(item,index) in data" :key="index">
                    <router-link :to="{path:'newsDetail'}">
                        <div class="honor_img"><img :src="item.thumbPic">
                            <p class="honor_title">{{item.name}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {}
    }
}
</script>
<style scoped>
.winer_honor {
    width: 1200px;
    margin: 0 auto;
}

.winer_honor ul li {
    float: left;
    margin-right: 40px;
    margin-bottom: 40px;
}

.winer_honor ul li:nth-child(4n) {
    margin-right: 0;
}

.winer_honor ul li a {
    display: block;
}

.winer_honor ul li a .honor_img {
    position: relative;
    height: 270px;
    width: 270px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}

.winer_honor ul li a img {
    max-width: 270px;
    max-height: 270px;
}

.winer_honor ul li a .honor_title {
    height: 48px;
    line-height: 48px;
    text-align: left;
    box-sizing: border-box;
    padding: 0 50px 0 30px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
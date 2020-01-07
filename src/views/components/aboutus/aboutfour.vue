<template>
    <div>
        <ul class="sb_zc" id="list5">
            <li v-for="(item,index) in data" :key="index">
                <router-link :to="{path:'newsDetail'}" class="clear">
                    <p>{{item.name}}</p><span>{{item.dateStr}}</span>
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
.sb_zc li {
    border-bottom: 1px solid #dddddd;
}

.sb_zc li a {
    display: block;
    color: #333333;
    height: 48px;
    line-height: 48px;
    text-indent: 10px;
    font-size: 14px;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
    color: #333333;
}

.sb_zc li a p {
    float: left;
    font-size: 14px;
    width: 950px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-indent: 10px;
}

.sb_zc li a span {
    float: right;
    color: #666666;
    font-size: 14px;
}

.pagination {
    background: #f3f3f3;
}
</style>
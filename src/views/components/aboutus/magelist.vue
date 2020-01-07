<template>
    <div>
        <ul class="magelist">
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
    props: ['isPage','data']
}
</script>
<style scoped>
.mannger_content>div ul {
    margin-bottom: 30px;
}

.mannger_content>div ul li {
    border-bottom: 1px solid #dddddd;
}

.mannger_content>div ul li a {
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

.mannger_content>div ul li a:hover {
    color: #999999;
}

.mannger_content>div ul li a:hover span {
    color: #999999;
}

.mannger_content>div ul li a p {
    float: left;
    font-size: 14px;
    width: 950px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.mannger_content>div ul li a span {
    float: right;
    color: #666666;
    font-size: 14px;
}
</style>
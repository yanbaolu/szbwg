<template>
    <div>
        <ul>
            <li v-for="(item,index) in data">
                <router-link :to="{path:'/lawsregulatDetail'}">
                    <h3>{{item.name}}</h3><span>2014-09-29</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['cnews', 'ctoice','data'],
    data() {
        return {

        }
    },
    mounted() {

    }
}
</script>
<style scoped>
.laws_content ul li {
    border-bottom: 1px solid #dddddd;
}

.laws_content ul li:last-child {
    border-bottom: none;
}

.laws_content ul li a {
    display: block;
    overflow: hidden;
    font-size: 15px;
    color: #333333;
    height: 48px;
    line-height: 48px;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
}

.laws_content ul li a:hover {
    color: #999999;
}

.laws_content ul li a:hover span {
    color: #999999;
}

.laws_content ul li a h3 {
    float: left;
    font-weight: normal;
    font-size: 15px;
    text-indent: 20px;
    width: 900px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.laws_content ul li a span {
    float: right;
    color: #666666;
    font-size: 14px;
}
</style>
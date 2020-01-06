<template>
    <div>
        <ul id="zzData">
            <li v-for="(item,index) in data">
                <router-link class="clear" :to="{path:'casedetial'}">
                    <p>{{item.name}}</p><span>{{item.dateStr}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>
<style scope>
.cultural_qualifica {
    width: 1200px;
    margin: 33px auto 0;
}

.cultural_qualifica ul {
    padding-left: 30px;
    margin-bottom: 40px;
}

.cultural_qualifica ul li {
    border-bottom: 1px solid #dddddd;
}

.cultural_qualifica ul li:last-child {
    border-bottom: none;
}

.cultural_qualifica li a {
    display: block;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #333333;
    text-indent: 10px;
    background: url(../../../assets/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
}

.cultural_qualifica ul li a:hover {
    color: #999999;
    font-size: 16px;
}

.cultural_qualifica ul li a p {
    float: left;
    white-space: nowrap;
    width: 900px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cultural_qualifica ul li a span {
    float: right;
    color: #666666;
}

.cultural_project_nav a:hover,
.cultural_project_nav a.active {
    border-bottom: 4px solid #333333;
    color: #333333;
}
</style>
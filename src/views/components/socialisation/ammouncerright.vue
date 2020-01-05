<template>
    <div>
        <ul>
            <li style="margin-top: 20px" v-for="(item,index) in data">
                <router-link :to="{name:'newsDetail'}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {}
    }
}
</script>
<style scope>
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
</style>
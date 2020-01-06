<template>
    <div>
        <ul class="motal_nav clear">
            <li v-for="(item,index) in data" :key="index" :class="{active:'/'+item.url==url}">
                <router-link :to="{path:item.url}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data:[{
                url:'cultural',
                name:'设备'
            },{
                url:'qualifications',
                name:'资质'
            },{
                url:'case',
                name:'案例'
            },{
                url:'project',
                name:'项目'
            }],
            url:this.$route.path,
        }
    },
    mounted(){
        //console.log(this.url)
    },
    methods: {

    }
}
</script>
<style scope>
.navPath {
    margin: 0 auto !important;
}

.motal_nav {
    width: 1200px;
    margin: 20px auto 0;
    box-sizing: border-box;
    padding: 0 40px;
    border-top: 1px solid #dddddd;
}

.motal_nav li {
    float: left;
    margin-left: 30px;
    margin-top: 10px;
}

.motal_nav li:first-child {
    margin-left: 0;
}

.motal_nav li a{
    font-size: 14px;
    color: #999999;
    cursor: pointer;
}

.motal_nav li.active,
.motal_nav li a:hover {
    color: #333333!important;
}
.motal_nav li.active a{color:#000!important;}
.motal_content {
    margin: 26px auto 23px;
}

.motal_content {
    box-sizing: border-box;
    padding: 0 30px;
}

.motal_content ul {
    display: none;
}

.motal_content ul.active {
    display: block;
}
</style>
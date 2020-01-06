<template>
    <div>
        <div class="news_main">
        <div class="news_message">
        <div class="news_content">
            <ul id="list1" class="clearfix">
                <li class="item" v-for="(item,index) in data" :key="index">
                    <router-link :to="{path:'monographdetail'}"><h3>{{item.name}}</h3><span>{{item.dateStr}}</span></router-link>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
import * as API from "api/demo";
export default {
    props:['isPage','data'],
    data(){
        return{

        }
    },
    mounted(){
            
    },
    methods:{
        
    }
}
</script>
<style scope>
.news_main{margin-top: 0!important;}
.news_content{
    margin:25px 0;
}
.news_content ul{
    margin-left:25px;
}
.news_content ul li{
    border-bottom:1px solid #dddddd;
    text-indent: 10px;
}
.news_content ul li:last-child{
    border-bottom: none;
}
.news_content ul li a{
    display:block;
    color:#333333;
    height:48px;
    line-height: 48px;
    font-size: 14px;
    background: url(../../../assets/base/img/li_pre.png) no-repeat left center;
    background-size: 2px 2px;
}
.news_content ul li:hover a h3{
    color:#999999;
}
.news_content ul li:hover a span{
    color:#999999;
}
.news_content ul li a h3{
    float:left;
    font-weight: normal;
    width:900px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#333333;
    font-size:14px;
}
.news_content ul li a span{
    float:right;
    color:#666666;
    font-size:12px;
}
</style>
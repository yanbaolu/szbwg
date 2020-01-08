<template>
    <div>
        <ol class="clear">
            <!--传承人和非遗项目用这个projectDetail底层页-->
            <li v-for="(item,index) in data" :key="index">
                <router-link :to="{path:'projectDetail',query:{resId:item.resId,clazzName:item.clazzName}}"> 
                    
                    <img :src="item.thumbPic">
                    <p>{{item.name}}
                    </p>
                </router-link>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {
            
        }
    },
    mounted() {

    },
    methods: {}
}
</script>
<style scope>
/*图片部分*/
.intang_picture {
    font-size: 0;
    padding: 15px 0 60px 0;
}

.intang_picture ol li {
    display: inline-block;
    margin-right:10px;
    margin-bottom:10px;
}

.intang_picture ol li a {
    height: 292px;
    width: 292px;
    display: block;
    position: relative;
    text-align: center;
    line-height: 292px;
}

.intang_picture ol li a img {
    max-width: 292px;
    max-height: 292px;
}
.intang_picture ol li:nth-child(4n){
    margin-right:0;
}
.intang_picture ol li:nth-child(4n) {
}

.intang_picture ol li a p {
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    text-align: left;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
}

.intang_picture ol li:nth-child(3) {
    margin-right: 10px;
}

.paginationWrap {
    margin-top: 30px;
}
</style>
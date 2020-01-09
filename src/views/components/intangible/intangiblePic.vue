<template>
    <div>
        <ol class="clear">
            <li v-for="(item,index) in data" :key="index">
                 <a href="javascript:;" @click="linkdetial(index)"> 
                    <img :src="item.thumbPic">
                    <p>{{item.name}}
                    </p>
                </a>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    props: ['isPage','data'],
    data() {
        return {
         type:'',
         query:{},
        }
    },
    mounted() {
       let typestr = this.$router.history.current.query.type;
       this.type = typestr;
    },
    methods: {
        
            linkdetial(i){
               if(this.type == 'inproject'){
                //    console.log(this.data[i].resId+'-----'+this.data[i].clazzName)
                   this.$router.push({
                    path:'/projectDetail',
                    query:{
                      resId:this.data[i].resId,
                      clazzName:this.data[i].clazzName
                     }
                    })
               }else if(this.type == 'inproson'){
                   this.$router.push({
                    path:'/inheritanceDetail',
                    query:{
                      resId:this.data[i].resId,
                      clazzName:this.data[i].clazzName
                     }
                    })
                   
               }else if(this.type == 'picall'){
                    this.$router.push({
                    path:'/pictureNewDetail',
                    query:{
                       master:this.data[i].code
                     }
                    })
               }

            }
    }
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
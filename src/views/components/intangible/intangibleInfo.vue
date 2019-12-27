<template>
  <div>
    <ul class="intang_up">
      <li>
        <a
          class="clear"
          href="newsDetail?pLm=L04&amp;resType=&amp;resId=15b6d56d4941485ea8f49d9902d2d522&amp;lmType=L0409&amp;lx=1"
        >
          <h3>2019深圳民间文化周暨深圳市第十三届客家文化节重磅来袭</h3>
          <span>2019-11-23</span>
        </a>
      </li>
      <li>
        <a
          class="clear"
          href="newsDetail?pLm=L04&amp;resType=&amp;resId=489f810f92af4df1bbf64ca608547d73&amp;lmType=L0409&amp;lx=1"
        >
          <h3>传古技艺 承记当下&mdash;&mdash;公益讲座&ldquo;手工剪纸的独特个性&rdquo;在深圳博物馆举行</h3>
          <span>2019-11-19</span>
        </a>
      </li>
      <li>
        <a
          class="clear"
          href="newsDetail?pLm=L04&amp;resType=&amp;resId=2b24e8b5c771467780960f8d6190df78&amp;lmType=L0409&amp;lx=1"
        >
          <h3>深圳市非遗项目参加&ldquo;2019年广东（佛山）非物质文化遗产周暨佛山秋色巡游活动&rdquo;</h3>
          <span>2019-11-04</span>
        </a>
      </li>
      <li>
        <a
          class="clear"
          href="newsDetail?pLm=L04&amp;resType=&amp;resId=da2fbedea32a462d9834f24855412fd7&amp;lmType=L0409&amp;lx=1"
        >
          <h3>东莞非遗墟市粤港澳大湾区城际联盟深圳专场受到市民欢迎</h3>
          <span>2019-10-28</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:['cnews','ctoice'],
    data() {
        return {
            
        }
    },
    mounted() {    		
    	
    }
}
</script>
<style scoped>
	.intang_up li a {
    display: block;
    height:34px;
    line-height: 34px;
    background:url(../../../assets/base/img/li_pre.png) no-repeat left center;
    background-size:2px 2px;
    font-size:14px;
    
}
.intang_up li a.active{
	background:url(../../../assets/base/img/topD.png) no-repeat left center;
	padding-left:20px;
}
.intang_up li a h3{
    float:left;
    font-weight: normal;
    width: 400px;
    color:#333333;
    font-size:14px;
    text-indent: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.intang_up li a span{
    float:right;
    color:#666666;
    font-size:12px;
}

</style>
<template>
  <div class="comWidth">
    <div class="imgList4">
      <ul class="clear">
        <li class="item" v-for="(item,index) in cList" :key="index">
          <router-link :to="{name:'exhibitiondetail',query:{type:'0',clazzName:item.clazzName,resId:item.resId}}">
            <div class="itemImg">
              <img :src="imgurl+item.thumbPic">
              <div class="itemText">
                <h3>{{item.name}}</h3>
                <p>
                  东江游击队指挥部旧址纪念馆坐落于罗湖区南庆街13号，是深圳博物馆分馆之一，为深圳市文物保护单位。纪念馆前身为兴建于民国时期的鸿安酒店，建筑坐西朝东，由一座面阔8.5米、进深10.29米的砖混结构的三层主楼及其西侧的面阔4.42米、进深12.05米的二层砖木结构副楼组成，占地面积约240平方米。
                  1938年10月，日寇进犯广东，华南抗战打响。11月底，新四军军长叶挺在中共广东省委的示下，接受国民党委任，于深圳镇鸿安酒店组建东路守备区总指挥部，负责进行深圳乃至东江地区的抗日斗争。在驻留深圳期间，叶挺统筹整合了各路抗日武装力量，对日军频频进行打击。他还亲自前往香港，动员海外华侨为抗战大业贡献力量。12月底，因形势发生变化，国民党当局下令撤销对叶挺的任命，中共中央推动叶挺重返新四军担任军长，该指挥部遂自行撤销。
                  叶挺在深圳地区驻留一个月开展的抗日活动，为深圳乃至华南地区抗日武装力量的整合与建立产生深远影响，鸿安酒店便是这段历史的见证。经过改造提升，2017年12月28日东江游击队指挥部旧址纪念馆重新开放，推出基本陈列《叶挺将军与深圳》，以反映这段鲜为人知的史实。展览分为&ldquo;北伐名将 抗战报国&rdquo;、&ldquo;临危受命 深圳树旗&rdquo;、&ldquo;抗战到底 影响深远&rdquo;三个单元，包括百余幅历史图片及若干历史文物复制件，勾勒出叶挺将军的戎马生涯和抗战期间他与深圳的不解之缘，以及深圳地区艰苦卓绝的抗战历史。叶挺将军在深圳鸿安酒店设立指挥部，收编队伍、整合武装，动员华侨支援抗战，加强抗日宣传，发动对日寇的军事进攻，在南粤抗战史上书写浓厚的一笔开端，昭示着中国军人和民众英勇不屈的抗争精神。鸿安酒店也因此而名垂史册，永远为世人所铭记！
                </p>
              </div>
            </div>
           </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cList"],
  data() {
    return {
        imgurl:this.$store.getters.getImgUrl,
    };
  },
  mounted() {
    //console.log(this.cList,789)
  }
};
</script>
<style scoped>
.imgList4 {
  width: 1200px;
  margin: 0 auto;
}
</style>
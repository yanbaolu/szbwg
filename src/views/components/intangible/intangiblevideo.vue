<template>
  <div>
  <ul>
    <li class="item videoItem">
      <div class="v-box">
        <video
          poster="https://www.shenzhenmuseum.com/p/userfiles/1/20180321/2018032111421967978962.jpg"
          onerror="this.poster='/static/img/bg-4-3.png'"
        ></video>
      </div>
      <span
        class="play"
        @click="play('https://www.shenzhenmuseum.com/p/userfiles/1/20180322/2018032217205819117405.mp4')"
      ></span>
      <div class="itemText" style>
        <h3 class="videoTitle">2018 深圳市第十届欢乐闹元宵</h3>
      </div>
    </li>
    <li class="item videoItem">
      <div class="v-box">
        <video
          poster="https://www.shenzhenmuseum.com/p/userfiles/pf/2017/11/06/20171106101912402.jpg"
          onerror="this.poster='/static/img/bg-4-3.png'"
        ></video>
      </div>
      <span
        class="play"
        @click="play('https://www.shenzhenmuseum.com/p/userfiles//pf//2017/10/12/20171012052649454.mp4')"
      ></span>
      <div class="itemText" style>
        <h3 class="videoTitle">应人石的传说</h3>
      </div>
    </li>
    <li class="item videoItem">
      <div class="v-box">
        <video
          poster="https://www.shenzhenmuseum.com/p/userfiles/pf/2017/11/03/20171103032721804.jpg"
          onerror="this.poster='/static/img/bg-4-3.png'"
        ></video>
      </div>
      <span  class="play" @click="play('https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/22/20170922055717910.mp4')"
      ></span>
      <div class="itemText" style>
        <h3 class="videoTitle">香云纱染整技艺</h3>
      </div>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {    		
    	
    },
    methods:{
         play(url) {
		    $('.video_Mask').show();
		    $('#video_').attr("src",url);
		    $('#video_').play;
        }
    }
}
</script>
<style scope>
	#jp_video_0{
		max-width:500px;
		max-height:300px !important;
	}
	.videoItem{
		width:392px;
		height:280px;
	}
	.v-box{
		width:392px;
		height:220px;
		text-align:center;
		line-height:220px;
	}
	.videoItem video{
		max-height:220px;
		max-width:392px;
	}
    .videoWrap{
	width: 100%;
    height: auto;
}

.videoA{
	width: 392px;
	height: 220px;	
}
</style>
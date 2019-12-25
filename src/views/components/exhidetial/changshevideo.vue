<template>
     <!-- 展览照片 -->
     <div>
     <div class="videoList video_box_">
            <ul>
              <li class="item">
                <div class="itemImg">
                  <a href="javascript:;" class="videoA">
                    <div class="videoWrap">
                      <video
                        poster="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/21/20170921103715163.jpg"
                        onerror="this.poster='/static/img/bg-4-3.png'"
                      ></video>
                      <div class="videoMask"></div>
                      <span
                        class="play"
                        onclick="play('https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/22/20170922055411165.mp4')"
                      ></span>
                    </div>
                  </a>
                  <div class="itemText">
                    <h3 class="videoTitle">深圳改革开放史宣传片</h3>
                  </div>
                </div>
              </li>
               <li class="item">
                <div class="itemImg">
                  <a href="javascript:;" class="videoA">
                    <div class="videoWrap">
                      <video
                        poster="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/21/20170921103715163.jpg"
                        onerror="this.poster='/static/img/bg-4-3.png'"
                      ></video>
                      <div class="videoMask"></div>
                      <span
                        class="play"
                        onclick="play('https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/22/20170922055411165.mp4')"
                      ></span>
                    </div>
                  </a>
                  <div class="itemText">
                    <h3 class="videoTitle">深圳改革开放史宣传片</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>

      </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
/**视频列表 392*280*3**/

.videoList{width:1200px;height:auto;}
.videoList .item{float:left;width:392px;height: 272px; margin-right: 12px; position: relative; }

.videoList .itemImg{ position: absolute;top:0;left:0;}
.videoList .itemImg a{display:block;width:392px; height: 260px;position: absolute;top:0;left:0;}
.videoList .itemImg a .videoWrap{width:392px;height: 220px;line-height:220px;text-align: center;}
.videoList .itemImg a .videoWrap video{max-width: 392px;max-height:220px;}
.videoList ul{width:1212px;}

.videoList .itemWrap{display: block;width:100%;height: 100%; position: relative;}
.videoList .videoMask{width:100%;height: 100%;background:rgba(0,0,0,0.3);position: absolute;left:0;top:0;}
/*修改后的样式*/
.visit_collect{
    height:50px;
}
.visit_collect>a{
    float:left;
}
.visit_collect>p{
    float:left;
    margin-top:3px;
}

</style>
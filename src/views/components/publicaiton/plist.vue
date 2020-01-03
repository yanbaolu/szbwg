<template>
    <div>
        <div class="imgList8">			
				<ul class="clear">
					<li class="item">
							<router-link :to="{path:'shopdetial'}">
								<div class="itemImg">
									<img src="https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191120110359.jpg" alt="" onerror="this.src='/static/img/bg-1-1.png'">
								</div>
								<div class="itemText">
									<h3>40周年改革展览T恤（21个城市）（广州）</h3>								
								</div>
							</router-link>
						</li>
			
					</ul>
			</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.imgList8{width:1198px;height: auto ;overflow: hidden; padding:0 20px;margin:40px auto 20px;}
.imgList8 li{float:left;width:292px;height: 352px;display:inline-block; margin-right: 10px;margin-bottom:40px;position: relative; background:#e9e9e9;}
.imgList8 li:hover{background:#ffffff;box-shadow: 0 0 20px #e8e8e8 ;}
.imgList8 li a{display:block;}
.imgList8 .itemImg{width:292px; height: 292px; position: relative;text-align:center;display:table-cell;vertical-align:middle;}
.imgList8 .itemImg img{max-width:292px;max-height:292px;}
.imgList8 ul{width:1280px;overflow: hidden;}
.imgList8 .itemText{position: absolute;bottom:0px;left:0;width:100%;height: 60px;}
.imgList8 h3{font-size:16px;line-height:60px;height:60px;color:#333333;width:250px;text-overflow: ellipsis;padding-left: 40px;
white-space: nowrap;
overflow: hidden}
</style>
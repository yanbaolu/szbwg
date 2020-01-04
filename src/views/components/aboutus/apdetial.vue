<template>
    <div>
         <div class="navPath_new mb-48">
		<div class="navPath">
			<p class="clear"><i></i><a href="/aboutus?type=about&amp;curIndex=0">关于深博</a><i></i></p>
			<p class="clear"><i></i><a href="/aboutus?type=about&amp;curIndex=0&amp;c=5">专家团队</a><i></i></p>
			<p class="clear"><i></i><a href="javascript:;">叶杨</a><i></i></p>
		</div>
	</div>
    <div class="expect_team_main">
        <div class="expect_team_img">
            <img src="https://www.shenzhenmuseum.com/p/userfiles//pf//2017/09/26/20170926111401107.jpg" onerror="this.src='/static/img/bg-3-4.png'" alt="">
        </div>
        <div class="person_intro">
        	<p>姓<em style="display:inline-block;width:32px;"></em>名：叶杨</p>
            <p>职<em style="display:inline-block;width:32px;"></em>称：研究馆员</p>
            <p>职<em style="width:1.382rem;display:inline-block;"></em>务：深圳博物馆馆长、深圳市非物质文化遗产保护中心主任</p>
            <p>研究方向：考古学、博物馆学、历史学、文物保护、博物馆建设及管理</p>
            <div class="deputy_text">
           	 	<p>学术简介及主要业绩成果：享受深圳市政府特殊津贴专家，深圳市高层次专业人才（地方级领军人才）。国内著名文博专家，国家考古发掘领队，曾主持深圳数十处重要遗址发掘、整理和研究，对深圳历史及考古学研究起到重要作用，咸头岭和屋背岭2处遗址被评为“全国十大考古新发现”。组织举办展览数百个，使国内外顶级文物艺术精品经常在深圳展出。主要参与深圳博物馆各常设展览大纲编写、修改和审定，2个展览获评“全国博物馆十大陈列展览精品奖”，1个展览获评“全国博物馆十大陈列展览精品特别奖”。在考古学、博物馆学等领域具较强的研究能力和较高的水平，出版多部专著和重要学术论文10多篇，主持开展多项课题研究并取得重要成果。主持深圳博物馆历史民俗馆、深圳改革开放展览馆、深圳自然博物馆等场馆建设和古代艺术馆维修改造，具有丰富的博物馆建设和管理经验。现兼任中国博物馆协会城市博物馆专业委员会主任、深圳市民间文艺家协会主席等。工作业绩突出，被评为“广东省文物系统先进工作者”“广东省优秀民间文艺家”“深圳市创建全国文明城市工作先进个人”等，并多次受到国家、省、市相关部门表彰。</p>
              </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    props:[],
    data(){
        return{}
    }
}
</script>
<style scoped>
p{
    line-height: 36px;
    font-size: 16px;
    color: #666666;
    white-space: pre-wrap;
}
.header {
    background: rgba(85,0,0,1);
}
.expect_team_main{
    width: 1200px;
    margin: 0 auto 40px;
}
.expect_team_img{
    width: 300px;
    height: 400px;
    margin: 0 auto 80px;
    border:1px solid #dddddd;
}
.expect_team_img img{
    width: 100%;
    height: 100%;
}
.person_intro{
	box-sizing:border-box;
	padding:0 60px;
}
.person_intro p {
    line-height: 36px;
    font-size: 16px;
    color: #666666;
    white-space:pre-wrap;
}
.navBar .aboutus_c{
    opacity:0.6;
}
</style>
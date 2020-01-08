<template>
    <div class="warp">
        <header-top :isBanner="isBanner"></header-top>
        <div class="swiper-main sw-main">
            <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!--首页开始-->
                    <div class="swiper-slide  sw-index bg_color">
                        <ul class="sw_indexbox">
                            <li class="" v-for="item in swiperImg" :style="{ 'background-image': 'url(' + imgurl+item.thumbPic+ ')' }">
                                <a href="#" class="sw_a"></a>
                            </li>
                        </ul>
                        <div class="navBox">
                            <ul class="clears navLi">
                                <li class="allIco action"></li>
                                <li class="allIco"></li>
                                <li class="allIco"></li>
                                <li class="allIco"></li>
                                <li class="allIco"></li>
                                <li class="allIco"></li>
                            </ul>
                        </div>
                        <p class="shubiao p_center">
                            <i class=""></i>
                            <span>滑动以翻页</span>
                        </p>
                        <div class="icon_nav">
                            <dl>
                                <dt>
                                    <a href="#">
                                        <p>下载app</p>
                                    </a>
                                </dt>
                                <dd class="appload">
                                    <div class="appIos">
                                        <img src="" alt="">
                                        <p>ios版"掌上深博"下载</p>
                                    </div>
                                    <div class="appAndroid">
                                        <img src="" alt="">
                                        <p>安卓版"掌上深博"下载</p>
                                    </div>
                                </dd>
                                <dt>
                                    <a href="#">
                                        <p>参观须知</p>
                                    </a>
                                </dt>
                                <dd></dd>
                                <dt>
                                    <a href="#">
                                        <p>手机官网</p>
                                    </a>
                                </dt>
                                <dd class="webapp">
                                    <div>
                                        <img src="" alt="">
                                    </div>
                                </dd>
                                <dt>
                                    <a href="#">
                                        <p>微信</p>
                                    </a>
                                </dt>
                                <dd class="wxapp">
                                    <div class="appIos">
                                        <img src="static/img/wx_qr.jpg" alt="">
                                        <p>微信公众号</p>
                                    </div>
                                    <div class="appAndroid">
                                        <img alt="" src="static/img/icons/xiaochengxu.jpg">
                                        <p>微信小程序</p>
                                    </div>
                                </dd>
                                <dt>
                                    <a href="http://weibo.com/shenzhenmuseum" target="_blank">
                                        <p>微博</p>
                                    </a>
                                </dt>
                                <dd></dd>
                                <dt style="">
                                    <a target="_blank" href="https://www.szggm.com"></a>
                                </dt>
                            </dl>
                        </div>
                    </div>
                    <!--推荐-->
                    <div class="swiper-slide sw-recommend">
                        <a href="#" class="leftBox">
                            <div class="bg bg_color">
                                <p class="ico_p">
                                    <i class="often_ico">
                                    </i>推荐
                                </p>
                                <dl class="tjlist" v-for="item in tuijian">
                                    <dt class="listImg"><img :src="imgurl+item.thumbPic" alt=""></dt>
                                    <dd class="imgTitle" v-show="item.name">{{item.name}}</dd>
                                </dl>
                            </div>
                        </a>
                        <div class="centerBox sw_odl">
                            <div class="content content_news" style="background:rgba(145,163,140,1);border-radius:0 20px 0 20px;">
                                <p class="title ">
                                    <i class="allIco ico" style="background-position:-9px -16px;"></i>
                                    <span class="maxTitle1">通知公告</span>
                                    <a href="#">更多</a>
                                </p>
                                <p class="ol" v-for="(item,index) in notice" :key="index">
                                    <a href="#">{{item.name}}</a>
                                    <span>{{item.dateStr}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="rightBox">
                            <div class="op" style="height:73%;">
                                <div class="content content_news" style="background:rgba(153,184,196,1);">
                                    <p class="title ">
                                        <i class="allIco ico"></i>
                                        <span class="maxTitle1">新闻资讯</span>
                                        <a href="#">更多</a>
                                    </p>
                                    <p class="ol" v-for="(item,index) in news" :key="index">
                                        <a href="#">{{item.name}}</a>
                                        <span>{{item.dateStr}}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="op" style="height:25.98%;">
                                <div class="content content_news" style="background:rgba(197,176,152,1);">
                                    <p class="title "><i class="allIco ico icos"></i><span class="maxTitle1">接待信息</span>
                                        <a href="intangible/intangibleNotice?pLm=L01&amp;lmType=L11&amp;lx=0">更多</a>
                                    </p>
                                    <p class="ol" v-for="(item,index) in reverse" :key="index">
                                        <a href="#" lx="0">关于进一步规范社会人士在深圳博物馆开展讲解、写生和教育活动的通知</a>
                                        <span>2015.12.6</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--活动和讲座-->
                    <div class="swiper-slide sw-activity">
                        <div class="activity-l">
                            <p class="title"><i class="often_ico"></i><i>活动和讲座</i></p>
                            <div class="list-box">
                                <a href="#" class="list"><img src="../../assets/new-web/images/yuyue-2.png" alt=""> <span>讲座预约</span></a>
                                <a href="#" class="list"><img src="../../assets/new-web/images/yuyue-3.png" alt=""><span>活动预约</span></a>
                                <a href="#" class="list"><img src="../../assets/new-web/images/quxiao.png" alt=""><span>取消预约</span></a>
                            </div>
                        </div>
                        <div class="activity-r">
                            <div class="title">
                                <i>活动</i> <a href="#">查看更多</a>
                            </div>
                            <ul class="list-box">
                                <li class="list" v-for="(item,index) in huodong" :key="index">
                                    <dl class="over">
                                        <dt><i v-show="item.isOver">已结束</i><span class="over"><a href="#">活动预告：{{item.name}}</a></span></dt>
                                        <dd class="t">活动时间：{{item.dateStr}}</dd>
                                        <dd class="a">活动地点：{{item.address}}</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <div class="activity-c"><i class="k k1"></i>
                            <i class="k k2"></i>
                            <ul class="list-box">
                                <li class="list" v-for="(item,index) in jiangzuo" :key="index">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl :class="{ over: item.isOver }">
                                            <dt class="bg" :style="{ 'background-image': 'url(' +imgurl+ item.thumbPic+ ')' }"></dt>
                                            <dd>
                                                <p class="n">讲座预告：{{item.name}}</p>
                                                <p class="t">活动时间：{{item.dateStr}}</p>
                                                <p class="t">活动地点：{{item.address}}</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--常设展览-->
                    <div class="swiper-slide sw-often  sw-oftenOne">
                        <div class="centerBox">
                            <div class="carouselBox">
                                <!--轮播图-->
                                <ul class="clears oul">
                                    <li class="bg_color" v-for="(item,index) in often" :style="{ 'background-image': 'url(' +imgurl+ item.thumbPic+ ')' }">
                                        <span class="texts" style="color:transparent;">{{item.name}}</span>
                                        <a class="sw_a" href=""></a>
                                    </li>
                                </ul>
                                <!--轮播导航-->
                                <div class="navBox">
                                    <ul class="clears navLi">
                                        <li class="allIco action"></li>
                                        <li class="allIco"></li>
                                        <li class="allIco"></li>
                                        <li class="allIco"></li>
                                        <li class="allIco"></li>
                                        <li class="allIco"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="banner">
                                <i class="often_ico">
                                </i>
                                <ul class="oli">
                                    <li class="action">
                                        <a href="#">常设展览</a>
                                    </li>
                                    <li>
                                        <a href="#" class="sw_links">{{often_name}}</a>
                                    </li>
                                </ul>
                                <!--查看全部-->
                                <a href="exhibition/index#permanent" class="allSee">
                                    查看<br />全部
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--专题展览为空处理-->
                    <!--专题展览-->
                    <div class="swiper-slide sw-often sw-special">
                        <div class="centerBox">
                            <div class="carouselBox">
                                <!--轮播图-->
                                <ul class="clears oul">
                                    <li class="bg_color" v-for="(item,index) in special" :style="{ 'background-image': 'url(' +imgurl+ item.thumbPic+ ')' }"></li>
                                </ul>
                                <!--轮播导航-->
                                <div class="navBox ">
                                    <ul class="clears navLi">
                                        <li class="allIco action"></li>
                                        <li class="allIco action"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="banner">
                                <i class="often_ico">
                                </i>
                                <ul class="oli">
                                    <li class="action">
                                        <a href="index/to?path=%252Fweb%252Fexhibition%252Fspecial-exhibition">专题展览</a>
                                    </li>
                                </ul>
                                <!--查看全部-->
                                <a href="index/to?path=%252Fweb%252Fexhibition%252Fspecial-exhibition" class="allSee">
                                    展览<br />回顾
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--虚拟展厅-->
                    <div class="swiper-slide sw-virtual clears" v-if="fictitious">
                        <a href="#" class="leftBox bg_color" :style="{ 'background-image': 'url(' +imgurl+fone[0].thumbPic+ ')' }" >
                        </a>
                        <div class="rightBox">
                            <div class="title clears">
                                <i class="often_ico"></i>
                                <p class="text">虚拟展厅</p>
                                <a href="index/to?path=%252Fweb%252Fv-exhibition%252Fv-exhibition-list">查看更多</a>
                            </div>
                            <div class="maxBox clears sw_odl">
                                <a href="v/cczdsbgj/index.html" class="max">
                                    <dl class="bg_color" :style="{ 'background-image': 'url(' +imgurl+ftow[0].thumbPic+')' }">
                                        <dt></dt>
                                        <dd>{{ftow[0].name}}</dd>
                                    </dl>
                                </a>
                                <a href="v/sgxz/tour.html" class="min">
                                    <dl class="bg_color" :style="{ 'background-image': 'url(' +imgurl+fthree[0].thumbPic+')' }">
                                        <dt></dt>
                                        <dd>{{fthree[0].name}}</dd>
                                    </dl>
                                </a>
                                <a href="v/dhhhh/tour.html" class="min">
                                    <dl class="bg_color" :style="{ 'background-image': 'url(' +imgurl+ffore[0].thumbPic+')' }">
                                        <dt></dt>
                                        <dd>{{ffore[0].name}}</dd>
                                    </dl>
                                </a>
                            </div>
                            <div class="minBox clears sw_odl">
                                <a href="v/nymh/index.html" class="min">
                                    <dl class="bg_color" :style="{ 'background-image': 'url(' +imgurl+ffive[0].thumbPic+')' }">
                                        <dt></dt>
                                        <dd>{{ffive[0].name}}</dd>
                                    </dl>
                                </a>
                                <a href="v/jjzs/index.html" class="min">
                                    <dl class="bg_color" :style="{ 'background-image': 'url(' +imgurl+fsix[0].thumbPic+')' }">
                                        <dt></dt>
                                        <dd>{{fsix[0].name}}</dd>
                                    </dl>
                                </a>
                                <a href="https://wszg.szggm.com/#/" class="min">
                                    <dl class="bg_color" :style="{ 'background-image': 'url(' +imgurl+fsevent[0].thumbPic+')' }">
                                        <dt></dt>
                                        <dd>{{fsevent[0].name}}</dd>
                                    </dl>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--非遗专区-->
                    <div class="swiper-slide sw-ruins">
                        <div class="leftBox box">
                            <a class="top bg_color" href="#" style="background-image: url('https://www.shenzhenmuseum.com/static/new-web/images/fei_v.png');">
                                <p class="p_center zan"><i class="p_center allIco"></i></p>
                                <p class="text_fl">视频库</p>
                            </a>
                            <div class="bot clears">
                                <a href="intangible/intangibleLaws" class="item_a">
                                    <dl class="p_center item fg">
                                        <dt class=""><i class="p_center allIco"></i></dt>
                                        <dd class="">非遗法规</dd>
                                    </dl>
                                </a>
                                <a href="#" class="item_a">
                                    <dl class="p_center item xm">
                                        <dt class=""><i class="p_center allIco"></i></dt>
                                        <dd class="">非遗代表性项目</dd>
                                    </dl>
                                </a>
                                <a href="#" class="item_a">
                                    <dl class="p_center item cc">
                                        <dt class=""><i class="p_center allIco"></i></dt>
                                        <dd class="">非遗代表性传承人</dd>
                                    </dl>
                                </a>
                                <a href="#" class="item_a">
                                    <dl class="p_center item zn">
                                        <dt class=""><i class="p_center allIco"></i></dt>
                                        <dd class="">申报指南</dd>
                                    </dl>
                                </a>
                            </div>
                        </div>
                        <div class="rightBox box">
                            <div class="top">
                                <div class="img-box">
                                    <a href="https://www.shenzhenmuseum.com/intangible" class="sw_a bg_color" :style="{ 'background-image': 'url(' +feiimg+ ')' }">
                                        <dl>
                                            <dt class="p_center">
                                                <i class="often_ico"></i>非遗
                                            </dt>
                                            <dd></dd>
                                        </dl>
                                    </a>
                                </div>
                                <div class="text-box">
                                    <div class="content content_news">
                                        <p class="title clears">
                                            <i class="allIco ico"></i>
                                            <span class="maxTitle1">新闻资讯</span>
                                            <a href="#">查看更多</a>
                                        </p>
                                        <p class="ol" v-for="(item,index) in feiyiNews">
                                            <a href="#">{{item.name}}</a>
                                        </p>
                                    </div>
                                    <div class="content content_news">
                                        <p class="title clears">
                                            <i class="allIco icos"></i>
                                            <span class="maxTitle1">通知通告</span>
                                            <a href="intangible/intangibleNotice?pLm=L04&amp;lmType=L0410&amp;lx=1">查看更多</a>
                                        </p>
                                        <p class="ol">
                                            <a href="#">文化和旅游部关于推荐申报第五批国家级非物质文化遗产代表性项目的通知</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a class="bot bg_color" href="intangible/pictureAll?pLm=L04&amp;lmType=L0406" :style="{ 'background-image': 'url(' +fei_pic+ ')' }">
                                <p class="text_fl">图片库</p>
                            </a>
                        </div>
                    </div>
                    <!--关于深博-->
                    <div class="swiper-slide sw-aboutus">
                        <div class="ulBox ultop">
                            <ul class="oul clears">
                                <li>
                                    <div class="item">
                                        <p class="title">关于深博</p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0">深博概况</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0&amp;c=1">馆长致辞</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0&amp;c=2">理事会</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0&amp;c=3">深博章程</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0&amp;c=4">组织架构</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0&amp;c=5">专家团队</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=0&amp;c=6">深博记事</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <p class="title">参观服务</p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=4&amp;build=0">参观须知</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=4&amp;c=1">历史民俗馆</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=4&amp;c=1">古代艺术馆（暂时闭馆）</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=4&amp;c=1">东江游击队指挥部旧址纪念馆</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=4&amp;c=1">深圳改革开放展览馆</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <p class="title">联系我们</p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">联系我们</a>
                                        </p>
                                        <p class="ot">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">微信：iszbwg</a>
                                        </p>
                                        <p class="ot">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">微博：weibo.com/shenzhenmuseum</a>
                                        </p>
                                        <p class="ot">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">邮箱：shenzhenmuseum@qq.com</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">团体预约讲解</a>
                                        </p>
                                        <p class="ot">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">1、20人以上团体可以通过发函方式向深圳博物馆申请团体讲解。</a>
                                        </p>
                                        <p class="ot">
                                            <a href="aboutus/index?type=about&amp;curIndex=5">2、合资格的团体可在参观前三天至一个月来...</a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="ulBox ulbot">
                            <ul class="oul clears">
                                <li>
                                    <div class="item">
                                        <p class="title">管理和建设</p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=1&amp;build=0">党群建设</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=1&amp;build=1">后勤管理</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=1&amp;build=2">场馆建设</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <p class="title">博物馆荣誉</p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=2">集体荣誉</a>
                                        </p>
                                        <p class="op">
                                            <a href="aboutus/index?type=about&amp;curIndex=2">个人荣誉</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="item">
                                        <p class="title">捐赠者名录</p>
                                        <p class="op ">
                                            <a href="aboutus/index?type=about&amp;curIndex=3">以姓氏拼音为序</a>
                                        </p>
                                        <p class="op op-m">
                                            <a href="aboutus/index?type=about&amp;curIndex=3">1981年建馆至今</a>
                                        </p>
                                        <div class="ot_">
                                            <a href="aboutus/index?type=about&amp;curIndex=3">
                                                <p>深圳博物馆自1981年成立以来，得到社会各界人士的踊跃捐赠，这些重要捐赠丰富了我馆馆藏，充实了展陈内容。感谢他们对我馆工作的大力支持。部...</p>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- footer -->
                <div class="swiper_footer">
                    <div class="swfooter_box p_center">
                        <p class="sw_m sw_ts sw_sizes" id="numbersw" style="margin-right:150px;display:inline-block;">网站浏览最低分辨率1280*1080</p>
                        <p class="sm_pageNum" id="pagb" style="border-right:none!important"></p>
                        <a href="http://bszs.conac.cn/sitename?method=show&amp;id=1A44BA4ABBE6345AE053012819AC317C" class="sw_footer_img"><img alt="" src="static/new-web/images/timg.png"></a>
                        <p class="sw_m">深圳博物馆 版权所有
                            <a href="http://www.miitbeian.gov.cn" style="color:#fff;" target="_blank">粤ICP备13006341号-1</a>
                        </p>
                        <p style="display: none;" id="banquan">Copyright © 2008-<span id="getYear">2018</span> shenzhenmuseum.com Corporation,All Rights Reserved</p>
                        <i class="allIco p_center sw_fotico sw_foticots" sid='1'></i>
                    </div>
                    <div class="sw_footerLink p_center">
                        <p class="bottomLink_sw">
                            <a class="sm_pageNum" style="display:inline-block;margin-right:-20px;border-right:none!important"></a>
                            <a target="_black" href="index/map">网站地图</a>
                            <a target="_black" href="index/yqlj">友情链接</a>
                            <a href="intangible/newsDetail?lmType=L0806&amp;pLm=:L08:L0801&amp;lx=3&amp;resId=&quot;+data.entitys[i].resId+&quot;">隐私政策</a>
                            <a href="index/bqsm">版权声明</a>
                            <a href="aboutus/index?type=about&amp;curIndex=4&amp;visIndex=1#exhibitMap">展厅地图</a>
                            <a href="aboutus/index?type=about&amp;curIndex=5" style="border-right:none!important">联系我们</a>
                            <i class="allIco p_center sw_fotico sw_foticot" sid='2'></i>
                        </p>
                    </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination sw_nav">
                <span class="swiper-pagination-bullet active"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
        </div>
    </div>
</template>
<script>
import header from '../components/header'
import * as API from 'api/demo';
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            imgurl:this.$store.getters.getImgUrl,
            //语言
            lang:this.$store.getters.getlang,
            //是否显示banner图 ==>类目的banner
            isBanner: false,
            //轮播的数据
            swiperImg: null,
            //推荐列表
            tuijian:null,
            qsjs:require('../../assets/new-web/images/qsjs.jpg'),
            //讲座列表
            jiangzuo:null,
            //活动列表
            huodong:null,
            //常设展览
            often:null,
            often_name:null,
            //专题展览
            special:null,
            //通知公告
            notice:null,
            //新闻列表
            news:null,
            //接待信息
            reverse:null,
            //虚拟展厅
            fictitious:'',
            fone:null,
            ftow:null,
            fthree:null,
            ffore:null,
            ffive:null,
            fsix:null,
            fsevent:null,
            //非遗
            feiyiNews:null,
            feiimg:require('../../assets/new-web/images/feiyi.png'),
            fei_pic:require('../../assets/new-web/images/fei_pic.png'),
            feyigg:null
        }
    },
    mounted() {
        //console.log(this.imgurl,123456)
        //侧边栏下载导航
        
        $(".icon_nav dl dt").hover(function() {
            $(this).next().show();
        }, function(event) {
            $(this).next().hide();
        });
        /*页面轮播*/
        var num = 0,
            mouse = 0,
            animate = true,
            n = 0;
        /*初始化新闻推荐页面适配*/
        function initRecom() {

            var h = $('.sw-recommend .rightBox .content').height() - 68;
            var getMe = Math.floor(h / 64)
            if (((h) % 64) > 50) {
                getMe++
            }
            /*新闻*/
            var ol = $('.sw-recommend .rightBox .content').eq(0).find('.ol');
            var ols = $('.sw-recommend .rightBox .content').eq(1).find('.ol');
            ol.css({ display: 'block' });;
            ols.css({ display: 'block' })
            for (var i = getMe; i < 6; i++) {
                ol.eq(i).css({ display: 'none' });
                ols.eq(i).css({ display: 'none' });
            }

        }
        /*初始化非遗*/
        function initRuins() {
            var h = $('.sw-ruins .rightBox .content').height() - 68;
            var getMe = Math.floor(h / 64);
            if (((h) % 64) > 50) {
                getMe++
            };
            var ol_ruins = $('.sw-ruins  .rightBox .content').eq(0).find('.ol');
            var ol_ruins2 = $('.sw-ruins  .rightBox .content').eq(1).find('.ol');
            ol_ruins.css({ display: 'block' });;
            ol_ruins2.css({ display: 'block' })
            for (var i = getMe; i < 2; i++) {
                ol_ruins.eq(i).css({ display: 'none' });
                ol_ruins2.eq(i).css({ display: 'none' });
            }
        }
        initRuins()
        initRecom()
        var sw_activity_start = false;
        /*判断页面轮播在哪一页*/
        function resizeChange() {
            if (num == 1) {
                /*新闻推荐*/
                initRecom()
            } else if (num == 6) {
                /*非遗*/
                initRuins()
            };
            if (num == 2 && !sw_activity_start) {
                //console.log(1212)
                sw_activity_start = true;
                sw_activity.start()
            }
        }

        $('.sw-nomousewhell').click(function() {
            $(this).hide();
        })
        $('.sw-nomousewhell').hide()
        if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) <= 9) {
            /*iE9开始*/
            /*屏幕大小变化*/
            $(window).on('resize', function() {
                $('.swiper-wrapper').css({
                    top: -num * $('.swiper-slide').height() + 'px'
                });
                resizeChange();
            })

            $('.swiper-container').stop().on('mousewheel', function(event, delta) {
                play(delta);
                resizeChange();
                return false;
            });
            $('.sw_nav').on('click', 'span', function() {
                num = $(this).index();
                sw();
            })
        } else {
            /*不是IE9开始*/

            $(window).on('resize', function() {
                resizeChange();
                //  console.log()
            });
            var swiper = new Swiper('.swiper-container', {
                on: {
                    transitionStart: function() {
                        $('.sw-heanav').css({ 'left': '-300px' })
                    },
                    transitionEnd: function() {
                        num = this.realIndex;
                        resizeChange();
                    }
                },
                direction: 'vertical',
                //loop: true,
                mousewheel: true,
                observer:true,
                observeParents:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }

        function sw() {
            navClose();
            animate = false;
            var height = $('.swiper-slide').height()

            $('.swiper-wrapper').stop().animate({
                top: '-' + height * num + 'px'
            }, function() {})
            setTimeout(function() {
                animate = true;
            }, 300)
            $('.sw_nav span').removeClass('active').eq(num).addClass('active')
        }
        /*页面导航点击*/
        //  
        /*轮播播放*/
        function play(delta) {
            var childrenL = $('.swiper-wrapper').children().length - 1;
            var sw_animate = $('.swiper-wrapper')
            if (!sw_animate.hasClass('swiper-wrappers')) {
                sw_animate.addClass('swiper-wrappers')
            }

            if (delta > 0) {
                if (num > 0 && animate) {
                    num--;
                    sw();
                }
            } else {
                if (num < childrenL && animate) {
                    num++;

                    sw();
                }
            }

        }


        /*常设下面的轮播*/

        var oftenTime1 = null,
            oftenNum1 = 0,
            oftenNuml1 = 0;
        oftenNuml1 = $('.sw-oftenOne .oul').children().length;
        $('.sw-oftenOne .navBox').on('click', 'li', function() {
            var _this = $(this);
            _this.addClass('action').siblings().removeClass('action');
            oftenNum1 = _this.index();
            $('.sw-oftenOne .oul li').css('display', 'none').eq(oftenNum1).css('display', 'block');
            var sw_li = $('.sw-oftenOne .oul li .texts').eq(oftenNum1);
            $('.sw-oftenOne .sw_links').text(sw_li.text());
        })

        function oftenFn() {
            oftenNum1++;
            if (oftenNum1 >= oftenNuml1) {
                oftenNum1 = 0;
            }
            $('.sw-oftenOne .oul li').css('display', 'none').eq(oftenNum1).css('display', 'block');
            $('.sw-oftenOne .navBox li').removeClass('action').eq(oftenNum1).addClass('action');
            var sw_li = $('.sw-oftenOne .oul li').eq(oftenNum1);
            $('.sw-oftenOne .sw_links').text(sw_li.attr('txt')).attr({ href: sw_li.attr('links') });

        }
        /*常设轮播开始*/
        if (oftenNuml1 > 1) {
            $('.sw-oftenOne .carouselBox').on({
                mouseover: function() {
                    clearInterval(oftenTime1)
                    oftenTime1 = null
                },
                mouseout: function() {
                    clearInterval(oftenTime1)
                    oftenTime1 = setInterval(oftenFn, 3000)


                }
            })
        }
        //专题下的展览
        var oftenTime = null,
            oftenNum = 0,
            oftenNuml = 0;
        oftenNuml = $('.sw-special .oul').children().length;
        $('.sw-special .navBox').on('click', 'li', function() {
            var _this = $(this);
            _this.addClass('action').siblings().removeClass('action');
            oftenNum = _this.index();
            $('.sw-special .oul li').css('display', 'none').eq(oftenNum).css('display', 'block');
        })

        function oftenFn2() {
            oftenNum++;
            if (oftenNum >= oftenNuml) {
                oftenNum = 0;
            }
            $('.sw-special .oul li').css('display', 'none').eq(oftenNum).css('display', 'block');
            $('.sw-special .navBox li').removeClass('action').eq(oftenNum).addClass('action');

        }
        if (oftenNuml > 1) {

            $('.sw-special .carouselBox').on({
                mouseover: function() {
                    clearInterval(oftenTime)
                    oftenTime = null
                },
                mouseout: function() {
                    clearInterval(oftenTime)
                    oftenTime = setInterval(oftenFn2, 3000)


                }
            })
        }

        function sw_swiper(json) {
            this.num = 0;
            this.numl = 0;
            this.time = null;
            this.changeTime = json.changeTime || 3000
            this.changeBox = json.changeBox;
            this.box = json.box;
            this.nav = json.nav;
            this.boxli = json.box.find('li');
            this.navli = json.nav.find('li');
            this.stops = json.stops || false;
            /*  this.initData=Object.assign({},json);*/
            this.init();
        }
        sw_swiper.prototype = {
            init: function() {
                var that = this;
                this.numl = this.box.children().length;
                this.nav.on('click', 'li', function() {
                    var _this = $(this);
                    _this.addClass('action').siblings().removeClass('action');
                    that.num = _this.index();
                    that.boxli.css('display', 'none').eq(that.num).css('display', 'block');
                });

                function oftenFn2() {
                    that.num++;
                    if (that.num >= that.numl) {
                        that.num = 0;
                    }
                    that.boxli.css('display', 'none').eq(that.num).css('display', 'block');
                    that.navli.removeClass('action').eq(that.num).addClass('action');



                }
                if (that.numl > 1) {
                    if (!that.stops) that.time = setInterval(oftenFn2, that.changeTime);
                    that.changeBox.on({
                        mouseover: function() {
                            clearInterval(that.time)
                            that.time = null
                        },
                        mouseout: function() {
                            clearInterval(that.time)
                            that.time = setInterval(oftenFn2, that.changeTime)


                        }
                    })
                }
            },
            start: function() {
                var that = this;

                function oftenFn2() {
                    that.num++;
                    if (that.num >= that.numl) {
                        that.num = 0;
                    }
                    that.boxli.css('display', 'none').eq(that.num).css('display', 'block');
                    that.navli.removeClass('action').eq(that.num).addClass('action');



                }
                this.time = setInterval(oftenFn2, this.changeTime)
            }
        }
        /*活动的轮播*/
        var sw_activity = new sw_swiper({
            box: $('.sw-activity .rightBox .top .oul'),
            nav: $('.sw-activity .rightBox .top .navBox'),
            changeBox: $('.sw-activity .rightBox .top'),
            changeTime: 3000,
            stops: true
        })
        /*首页的轮播*/
        var sw_index = new sw_swiper({
            box: $('.sw-index .sw_indexbox'),
            nav: $('.sw-index .navBox'),
            changeBox: $('.sw-index'),
            changeTime: 3000,
        })
    
        /*左边导航*/
        $('.sw-navico').on('click', function() {
            $('.sw-heanav').css({ left: '0px' })
        })

        function navClose() {
            $('.sw-heanav').css({ left: '-300px' })
        }
        $('.nav_close').on('click', function() {
            navClose()
        })

        $('.sw-heanav .left .oul li').hover(function() {
            var that = $(this)
            $(this).addClass('action').siblings().removeClass('action')
            $('.sw-heanav .right .oul').hide().eq(that.index()).show()
        })
        /*底部显示隐藏*/
        $('.sw_fotico').click(function() {
            var _this = $(this)
            //console.log(_this.attr('sid'))
            if (_this.attr('sid') == 1) {
                $('.sw_footerLink').css({ 'margin-bottom': '40px' })
                _this.css({ display: 'none' })
                $("#pagb").hide();
            } else {
                $('.sw_footerLink').css({ 'margin-bottom': '0px' })
                $('.sw_foticots').css({ display: 'block' })
                $("#pagb").show();
            }
        })
        /*活动展览里面跳转*/
        $('.sw-activity').on('click', '.oa', function() {
            window.location.href = $(this).attr('links');
        })

        //数据获取
        //轮播图
        this.swiperData();
        //推荐
        this.Tjian();
        //讲座
        this.Jzuo();
        //活动
        this.Huodong();
        //常设展览
        this.Cshe();
        //通知公告
        this.Tzgg();
        //新闻列表
        this.Newslist()
        //接待信息
        this.Jdai()
        //虚拟展厅
        this.Xnizt()
        //非遗
        this.Intangible()
        //专题
        this.Zuanti()
    },
    methods: {
        //轮播图
        swiperData() {
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:6,
                platform:0
            };
            API.get2('slidePic/page/L0101',data).then(res => {
                if (res.code == 0) {
                    this.swiperImg = res.data.list;
                }
            }).catch(err => {
                
            })
        },
        //推荐
        Tjian(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:3,
                platform:0
            };
            API.get2('recommend/page/L0102',data).then(res=>{
                if (res.code==0) {
                    this.tuijian=res.data;
                    //console.log(res,"45666666")
                }
            }).catch(err => {

            })
        },
        //讲座
        Jzuo(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('active/page/L0502',data).then(res=>{
                if (res.code==0) {
                    this.jiangzuo=res.data.list.slice(0,6);
                    //console.log(this.jiangzuo)
                }
            }).catch(err => {

            })
        },
        //活动
        Huodong(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('active/page/L0501',data).then(res=>{
                if (res.code==0) {
                    this.huodong=res.data.list.slice(0,5)
                    //console.log(this.huodong)
                }
            }).catch(err => {

            })
        },
        //常设展览
        Cshe(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('exhibition/page/L0202',data).then(res=>{
                if (res.code==0) {
                    this.often=res.data.list.slice(0,6)
                    //设置第一个名称
                    this.often_name=res.data.list[0].name;
                    //console.log(this.often)
                }
            }).catch(err => {

            })
        },
        //专题展览
        Zuanti(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('exhibition/page/L0203',data).then(res=>{
                //console.log(res)
                if (res.code==0) {
                    this.special=res.data.list.slice(0,6)
                }
            }).catch(err => {

            })
        },
        //通知公告
        Tzgg(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:11,
                platform:0
            };
            API.get2('news/page/L11',data).then(res=>{
                if (res.code==0) {
                    this.notice=res.data.list 
                    //console.log(this.notice)
                }
            }).catch(err => {

            })
        },
        //新闻列表
        Newslist(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('news/page/L10',data).then(res=>{
                if (res.code==0) {
                    this.news=res.data.list 
                    //console.log(this.news)
                }
            }).catch(err => {

            })
        },
        //接待消息
        Jdai(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('news/page/L16',data).then(res=>{
                if (res.code==0) {
                    this.reverse=res.data.list.slice(0,2) 
                    //console.log(res)
                }
            }).catch(err => {

            })
        },
        //虚拟展厅
        Xnizt(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('exhibition/vr/page/L0103',data).then(res=>{
                if (res.code==0) {
                    this.fictitious=res.data.list;
                    this.fone=res.data.list.slice(0,1);
                    this.ftow=res.data.list.slice(1,2);
                    this.fthree=res.data.list.slice(2,3);
                    this.ffore=res.data.list.slice(3,4);
                    this.ffive=res.data.list.slice(4,5);
                    this.fsix=res.data.list.slice(5,6);
                    this.fsevent=res.data.list.slice(6,7)
                    //console.log(this.fictitious)
                }
            }).catch(err => {

            })
        },
        //非遗
        Intangible(){
            let data ={
                lang:this.lang,
                pageNo:1,
                pageSize:8,
                platform:0
            };
            API.get2('intangible/news/page/L0409',data).then(res=>{
                if (res.code==0) {
                    this.feiyiNews=res.data.list.slice(0,2) 
                    //console.log(this.feiyiNews)
                }
            }).catch(err => {

            })
        },
        fegg(){
           let data ={
               lang:this.lang,
               pageNo:1,
                pageSize:8,
                platform:0
           };
           API.get2('intangible/notice/page/L0410',data).then(res=>{
               if (res.code==0) {
                   this.feyigg=res.data.list;
                   //console.log(res)
               }
           }).catch(err => {

           }) 
        }
    },
    components: {
        'header-top': header
    }
}
</script>
<style src="../../assets/new-web/css/index.css"></style>
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
                            <li class="" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_1920x1080/userfiles/uploadFile/20191205165230.jpg');">
                                <a href="exhibition/detail?resType=CmsExhibition&amp;resId=c317554ab3cc48a292100cdc2846f854" class="sw_a"></a>
                            </li>
                            <li class="" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_1920x1080/userfiles/uploadFile/20181031180631.jpg');">
                                <a href="exhibition/detail?resType=CmsExhibition&amp;resSubType=1&amp;resId=a422dee4c1304050abbd8bd31fc3857e" class="sw_a"></a>
                            </li>
                        </ul>
                        <div class="navBox ">
                            <ul class="clears navLi">
                                <li class="allIco action"></li>
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
                            <div class="bg bg_color" style="background-image: url('../../assets/new-web/images/qsjs.jpg');">
                                <p class="ico_p">
                                    <i class="often_ico">
                                    </i>推荐
                                </p>
                            </div>ze
                            <p class="title">深圳前世今生</p>
                        </a>
                        <div class="centerBox sw_odl">
                            <a href='#' class="item">
                                <dl style="background-image: url('p/userfiles/uploadFile/20181217144301.jpg');">
                                    <dt></dt>
                                    <dd>习近平在广东考察时强调 高举新时代改革开放旗帜 把改革开放不断推向深入</dd>
                                </dl>
                            </a>
                            <a href='#' class="item">
                                <dl style="background-image: url('p/userfiles/uploadFile/20190617164220.jpg');">
                                    <dt></dt>
                                    <dd>深圳改革开放藏品征集公告</dd>
                                </dl>
                            </a>
                            <a href='#' class="item">
                                <dl style="background-image: url('p/userfiles/uploadFile/20190329142231.jpg');">
                                    <dt></dt>
                                    <dd>深圳博物馆自然标本信息征集公告</dd>
                                </dl>
                            </a>
                        </div>
                        <div class="rightBox">
                            <div class="op">
                                <div class="content content_news">
                                    <p class="title ">
                                        <i class="allIco ico"></i>
                                        <span class="maxTitle1">新闻资讯</span>
                                        <a href="#">查看更多</a>
                                    </p>
                                    <p class="ol">
                                        <a href="#">习近平在广东考察时强调 高举新时代改革开放旗帜 把改革开放不断推向深入</a>
                                    </p>
                                    <p class="ol">
                                        <a href="#">&ldquo;大潮起珠江&mdash;&mdash;广东改革开放40周年展览&rdquo;荣获&ldquo;第十六届（2018年度）全国博物馆十大陈列展览精品特别奖&rdquo;</a>
                                    </p>
                                    <p class="ol">
                                        <a href="#">武警部队一行参观&ldquo;大潮起珠江&mdash;&mdash;广东改革开放40周年展览&rdquo;</a>
                                    </p>
                                    <p class="ol">
                                        <a href="#">我馆向先科原职员成功征集 823件（套）珍贵老物件</a>
                                    </p>
                                    <p class="ol">
                                        <a href="#">民俗与旅游&mdash;&mdash;广东民俗学术会议（2019） 在深圳召开</a>
                                    </p>
                                    <p class="ol">
                                        <a href="#">&ldquo;礼赞新中国&middot;奋进新时代&mdash;&mdash;第三届深圳民间工艺精品展&rdquo;在深圳博物馆开幕</a>
                                    </p>
                                </div>
                            </div>
                            <div class="op">
                                <div class="content content_news">
                                    <p class="title "><i class="allIco ico icos"></i><span class="maxTitle1">通知公告</span>
                                        <a href="intangible/intangibleNotice?pLm=L01&amp;lmType=L11&amp;lx=0">查看更多</a>
                                    </p>
                                    <p class="ol">
                                        <a href="intangible/newsDetail?resType=CmsInformation&amp;resId=de57acf65e234d65adca80ce595b2471&amp;pLm=L01&amp;lmType=L11&amp;lx=0">关于进一步规范社会人士在深圳博物馆开展讲解、写生和教育活动的通知</a>
                                    </p>
                                    <p class="ol">
                                        <a href="intangible/newsDetail?resType=CmsInformation&amp;resId=77ab33d90b724cb19a0fd4927c0d3c6d&amp;pLm=L01&amp;lmType=L11&amp;lx=0">深圳博物馆藏品总目</a>
                                    </p>
                                    <p class="ol">
                                        <a href="intangible/newsDetail?resType=CmsInformation&amp;resId=1ef5b00c08734f6dae8adfbcedb86256&amp;pLm=L01&amp;lmType=L11&amp;lx=0">&ldquo;北撤烟台&rdquo;东江纵队数字漫画制作及网络互动推广服务项目中标公告</a>
                                    </p>
                                    <p class="ol">
                                        <a href="intangible/newsDetail?resType=CmsInformation&amp;resId=200efa71c57f4a7288c09c342f5a8147&amp;pLm=L01&amp;lmType=L11&amp;lx=0">深圳博物馆2019年自然标本采购（水生动物标本）中标公告</a>
                                    </p>
                                    <p class="ol">
                                        <a href="intangible/newsDetail?resType=CmsInformation&amp;resId=c3e49b84022b411980913d8b6b4fb348&amp;pLm=L01&amp;lmType=L11&amp;lx=0">《北撤烟台&mdash;&mdash;东江纵队革命历史图片展》图录设计印刷项目中标公告</a>
                                    </p>
                                    <p class="ol">
                                        <a href="intangible/newsDetail?resType=CmsInformation&amp;resId=f21718a8ebd7495a809dfdafa40dc12b&amp;pLm=L01&amp;lmType=L11&amp;lx=0">&ldquo;北撤烟台&rdquo;东江纵队数字漫画制作及网络互动推广服务项目招标公告</a>
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
                                <li class="list">
                                    <dl class="over">
                                        <dt><i>已结束</i><span class="over"><a href="#">活动预告：《传承之道&mdash;&mdash;深圳博物馆藏史部古籍善本（上）》策展人导赏</a></span></dt>
                                        <dd class="t">活动时间：2019年11月17日(周日)下午15:30-16:30</dd>
                                        <dd class="a">活动地点：深圳博物馆历史民俗馆（市民中心A区）二楼专题展厅</dd>
                                    </dl>
                                </li>
                                <li class="list">
                                    <dl class="over">
                                        <dt><i>已结束</i><span class="over"><a href="#">清秋画扇（第四期）</a></span></dt>
                                        <dd class="t">活动时间：2019年11月9日（周六）14:30-16:30</dd>
                                        <dd class="a">活动地点：深圳博物馆历史民俗馆（市民中心A区）一楼活动中心</dd>
                                    </dl>
                                </li>
                                <li class="list">
                                    <dl class="over">
                                        <dt><i>已结束</i><span class="over"><a href="#">《传承之道&mdash;&mdash;深圳博物馆藏史部古籍善本（上）》策展人导赏</a></span></dt>
                                        <dd class="t">活动时间：2019年11月9日（周六）下午15:30-16:30</dd>
                                        <dd class="a">活动地点：深圳博物馆历史民俗馆（市民中心A区）二楼专题展厅</dd>
                                    </dl>
                                </li>
                                <li class="list">
                                    <dl class="over">
                                        <dt><i>已结束</i><span class="over"><a href="#">雕版印刷体验活动</a></span></dt>
                                        <dd class="t">活动时间：2019年11月2日（周六）下午14:30-16:30</dd>
                                        <dd class="a">活动地点：深圳博物馆历史民俗馆（市民中心A区）一楼活动中心</dd>
                                    </dl>
                                </li>
                                <li class="list">
                                    <dl class="over">
                                        <dt><i>已结束</i><span class="over"><a href="#">清秋画扇</a></span></dt>
                                        <dd class="t">活动时间：2019年11月3日（周日）下午14:30-16:30</dd>
                                        <dd class="a">活动地点：深圳博物馆历史民俗馆（市民中心A区）一楼活动中心</dd>
                                    </dl>
                                </li>
                                <li class="list">
                                    <dl class="over">
                                        <dt><i>已结束</i><span class="over"><a href="#">清秋画扇</a></span></dt>
                                        <dd class="t">活动时间：10月26日（周六）下午14:30-16:30</dd>
                                        <dd class="a">活动地点：深圳博物馆历史民俗馆（市民中心A区）一楼活动中心</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <div class="activity-c"><i class="k k1"></i>
                            <i class="k k2"></i>
                            <ul class="list-box">
                                <li class="list">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl class="over">
                                            <dt class="bg" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191203143210.jpg')"></dt>
                                            <dd>
                                                <p class="n">讲座预告：手工剪纸的独特个性</p>
                                                <p class="t">活动时间：2019年11月16日（星期六）上午10:00～11:30</p>
                                                <p class="t">活动地点：深圳博物馆历史民俗馆（市民中心A区）三楼报告厅</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                                <li class="list">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl class="over">
                                            <dt class="bg" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191113113810.jpg')"></dt>
                                            <dd>
                                                <p class="n">讲座预告：《浅尚古籍》</p>
                                                <p class="t">活动时间：2019年11月2日（周六） 上午 10:30&mdash;12:00</p>
                                                <p class="t">活动地点：深圳博物馆历史民俗馆（市民中心A区）一楼活动中心</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                                <li class="list">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl class="over">
                                            <dt class="bg" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191203143210.jpg')"></dt>
                                            <dd>
                                                <p class="n">讲座预告：展览是怎样炼成的？</p>
                                                <p class="t">活动时间：2019年10月27日（周日）下午 14:30-16:30</p>
                                                <p class="t">活动地点：深圳博物馆历史民俗馆（市民中心A区）三楼报告厅</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                                <li class="list">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl class="over">
                                            <dt class="bg" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191203143210.jpg')"></dt>
                                            <dd>
                                                <p class="n">讲座预告：吴昌硕的艺术世界</p>
                                                <p class="t">活动时间：2019年10月13日（周日） 10:30-12:30</p>
                                                <p class="t">活动地点：深圳博物馆历史民俗馆（市民中心A区）三楼报告厅</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                                <li class="list">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl class="over">
                                            <dt class="bg" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191113113810.jpg')"></dt>
                                            <dd>
                                                <p class="n">讲座预告：这么近，那么远&mdash;&mdash;你不知道的太阳 【&ldquo;聆听宇宙&rdquo;系列天文讲座】</p>
                                                <p class="t">活动时间：2019年9月1日（周日）下午 14:30-16:30</p>
                                                <p class="t">活动地点：深圳博物馆历史民俗馆（市民中心A区）三楼报告厅</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                                <li class="list">
                                    <a href="#" class="a">
                                        <i class="kk kk1"></i>
                                        <i class="kk kk2"></i>
                                        <dl class="over">
                                            <dt class="bg" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20191113113810.jpg')"></dt>
                                            <dd>
                                                <p class="n">讲座预告：月球探秘【&ldquo;聆听宇宙&rdquo;系列天文讲座】</p>
                                                <p class="t">活动时间：2019年9月15日（周日）下午 14:30-16:30</p>
                                                <p class="t">活动地点：深圳博物馆历史民俗馆（市民中心A区）三楼报告厅</p>
                                            </dd>
                                        </dl>
                                    </a>
                                </li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <!--常设展览-->
                    <div class="swiper-slide sw-often  sw-oftenOne">
                        <div class="centerBox">
                            <div class="carouselBox">
                                <!--轮播图-->
                                <ul class="clears oul">
                                    <li class="bg_color" style="background-image:url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190126095042.jpg')" txt="近代深圳" links="/exhibition/detail?resType=CmsExhibition&resSubType=1&resId=530ec1a00cf54b1d92b30d5e6c885a17"><a class="sw_a" href="exhibition/detail?resType=CmsExhibition&amp;resSubType=1&amp;resId=530ec1a00cf54b1d92b30d5e6c885a17"></a></li>
                                    <li class="bg_color" style="background-image:url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190126095022.jpg')" txt="古代深圳" links="/exhibition/detail?resType=CmsExhibition&resSubType=1&resId=1c131aeac07542cfb10de015a5a94e08"><a class="sw_a" href="exhibition/detail?resType=CmsExhibition&amp;resSubType=1&amp;resId=1c131aeac07542cfb10de015a5a94e08"></a></li>
                                    <li class="bg_color" style="background-image:url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190126095022.jpg')" txt="深圳改革开放史" links="/exhibition/detail?resType=CmsExhibition&resSubType=1&resId=e5bb2ed011be44ebb62624238f454c48"><a class="sw_a" href="exhibition/detail?resType=CmsExhibition&amp;resSubType=1&amp;resId=e5bb2ed011be44ebb62624238f454c48"></a></li>
                                </ul>
                                <!--轮播导航-->
                                <div class="navBox ">
                                    <ul class="clears navLi">
                                        <li class="allIco action"></li>
                                        <li class="allIco action"></li>
                                        <li class="allIco action"></li>
                                        <li class="allIco action"></li>
                                        <li class="allIco action"></li>
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
                                        <a href="exhibition/index#permanent">常设展览</a>
                                    </li>
                                    <li>
                                        <a href="intangible/newsDetail?lmType=L0806&amp;pLm=:L08:L0801&amp;lx=3&amp;resId=&quot;+data.entitys[i].resId+&quot;#" class="sw_links">近代深圳</a>
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
                                    <li class="bg_color" style="background-image:url('http://localhost:8888/p/userfiles/uploadFile/20191115171829.jpg')" txt="传承之道&mdash;&mdash;深圳博物馆藏史部古籍善本（上）" links="/exhibition/detail?resType=CmsExhibition&resId=c317554ab3cc48a292100cdc2846f854"><a class="sw_a" href="exhibition/detail?resType=CmsExhibition&amp;resId=c317554ab3cc48a292100cdc2846f854"></a></li>
                                     <li class="bg_color" style="background-image:url('http://localhost:8888/p/userfiles/uploadFile/20191115171829.jpg')" txt="传承之道&mdash;&mdash;深圳博物馆藏史部古籍善本（上）" links="/exhibition/detail?resType=CmsExhibition&resId=c317554ab3cc48a292100cdc2846f854"><a class="sw_a" href="exhibition/detail?resType=CmsExhibition&amp;resId=c317554ab3cc48a292100cdc2846f854"></a></li>
                                     <li class="bg_color" style="background-image:url('http://localhost:8888/p/userfiles/uploadFile/20191115171829.jpg')" txt="传承之道&mdash;&mdash;深圳博物馆藏史部古籍善本（上）" links="/exhibition/detail?resType=CmsExhibition&resId=c317554ab3cc48a292100cdc2846f854"><a class="sw_a" href="exhibition/detail?resType=CmsExhibition&amp;resId=c317554ab3cc48a292100cdc2846f854"></a></li>
                                </ul>
                                <!--轮播导航-->
                                <div class="navBox ">
                                    <ul class="clears navLi">
                                        <li class="allIco action"></li>
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
                    <div class="swiper-slide sw-virtual clears">
                        <a href="v/wcs/index.html" class="leftBox bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/userfiles/uploadFile/20190920101632.jpg');">
                        </a>
                        <div class="rightBox">
                            <div class="title clears">
                                <i class="often_ico"></i>
                                <p class="text">虚拟展厅</p>
                                <a href="index/to?path=%252Fweb%252Fv-exhibition%252Fv-exhibition-list">查看更多</a>
                            </div>
                            <div class="maxBox clears sw_odl">
                                <a href="v/cczdsbgj/index.html" class="max">
                                    <dl class="bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191115172622.jpg');">
                                        <dt></dt>
                                        <dd>传承之道&mdash;&mdash;深圳博物馆藏史部古籍善本（上）</dd>
                                    </dl>
                                </a>
                                <a href="v/sgxz/tour.html" class="min">
                                    <dl class="bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191115172622.jpg');">
                                        <dt></dt>
                                        <dd>识骨寻宗&mdash;&mdash;透过骨骼窥视生物演化</dd>
                                    </dl>
                                </a>
                                <a href="v/dhhhh/tour.html" class="min">
                                    <dl class="bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191115172622.jpg');">
                                        <dt></dt>
                                        <dd>大汉海昏候&mdash;&mdash;刘贺与他的时代</dd>
                                    </dl>
                                </a>
                            </div>
                            <div class="minBox clears sw_odl">
                                <a href="v/nymh/index.html" class="min">
                                    <dl class="bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191115172622.jpg');">
                                        <dt></dt>
                                        <dd>南粤墨话&mdash;&mdash;深圳博物馆藏清代广东书画展</dd>
                                    </dl>
                                </a>
                                <a href="v/jjzs/index.html" class="min">
                                    <dl class="bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191115172622.jpg');">
                                        <dt></dt>
                                        <dd>吉金铸史&mdash;&mdash;青铜器里的古代中国</dd>
                                    </dl>
                                </a>
                                <a href="https://wszg.szggm.com/#/" class="min">
                                    <dl class="bg_color" style="background-image: url('https://www.shenzhenmuseum.com/p/resize_500x500/userfiles/uploadFile/20191115172622.jpg');">
                                        <dt></dt>
                                        <dd>大潮起珠江&mdash;&mdash;广东改革开放40周年展览</dd>
                                    </dl>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--非遗专区-->
                    <div class="swiper-slide sw-ruins">
                        <div class="leftBox box">
                            <a class="top bg_color" href="intangible/videoAll?lmType=L0405&amp;vidIndex=0&amp;vidIndex=0" style="background-image: url('https://www.shenzhenmuseum.com/static/new-web/images/fei_v.png');">
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
                                <a href="intangible/intangibleProject?pLm=L04&amp;lmType=L0402" class="item_a">
                                    <dl class="p_center item xm">
                                        <dt class=""><i class="p_center allIco"></i></dt>
                                        <dd class="">非遗代表性项目</dd>
                                    </dl>
                                </a>
                                <a href="intangible/intangibleInheritance?pLm=L04&amp;lmType=L0403" class="item_a">
                                    <dl class="p_center item cc">
                                        <dt class=""><i class="p_center allIco"></i></dt>
                                        <dd class="">非遗代表性传承人</dd>
                                    </dl>
                                </a>
                                <a href="intangible/intangibleRegulat" class="item_a">
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
                                    <a href="https://www.shenzhenmuseum.com/intangible" class="sw_a bg_color" style="background-image: url('static/new-web/images/feiyi.png')">
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
                                            <a href="intangible/intangibleNews?pLm=L04&amp;lmType=L0409&amp;lang=0&amp;pageNo=1&amp;pageSize=10&amp;lx=1">查看更多</a>
                                        </p>
                                        <p class="ol">
                                            <a href="intangible/newsDetail?pLm=L04&amp;resType=&amp;resId=15b6d56d4941485ea8f49d9902d2d522&amp;lmType=L0409&amp;lx=1">2019深圳民间文化周暨深圳市第十三届客家文化节重磅来袭</a>
                                        </p>
                                        <p class="ol">
                                            <a href="intangible/newsDetail?pLm=L04&amp;resType=&amp;resId=489f810f92af4df1bbf64ca608547d73&amp;lmType=L0409&amp;lx=1">传古技艺 承记当下&mdash;&mdash;公益讲座&ldquo;手工剪纸的独特个性&rdquo;在深圳博物馆举行</a>
                                        </p>
                                    </div>
                                    <div class="content content_news">
                                        <p class="title clears">
                                            <i class="allIco icos"></i>
                                            <span class="maxTitle1">通知通告</span>
                                            <a href="intangible/intangibleNotice?pLm=L04&amp;lmType=L0410&amp;lx=1">查看更多</a>
                                        </p>
                                        <p class="ol">
                                            <a href="intangible/newsDetail?pLm=L04&amp;resType=&amp;resId=b9fab32540c7457c87910e2c7fe50a60&amp;lmType=L0410&amp;lx=1">文化和旅游部关于推荐申报第五批国家级非物质文化遗产代表性项目的通知</a>
                                        </p>
                                        <p class="ol">
                                            <a href="intangible/newsDetail?pLm=L04&amp;resType=&amp;resId=b92aa2cb2e404cfbbf78888a405841bd&amp;lmType=L0410&amp;lx=1">广东省人民政府关于批准并公布广东省第七批省级非物质文化遗产代表性项目名录的通知</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a class="bot bg_color" href="intangible/pictureAll?pLm=L04&amp;lmType=L0406" style="background-image: url('static/new-web/images/fei_pic.png');">
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
            </div>
        </div>
    </div>
</template>
<script>
import header from '../components/header'
import * as API from 'api/demo';
export default {
    data() {
        return {
            isBanner: false,
            swiper:null
        }
    },
    mounted() {
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
                console.log(1212)
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
                //      loop: true,
                mousewheel: true,
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
            var sw_li = $('.sw-oftenOne .oul li').eq(oftenNum1);
            $('.sw-oftenOne .sw_links').text(sw_li.attr('txt')).attr({ href: sw_li.attr('links') });
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
            changeTime: 3000
        })
        /*var oftenTimei=null,oftenNumi=0,oftenNumli=0;
        oftenNumli=$('.sw_indexbox').children().length;
        function oftenFni(){
            $('.sw_indexbox li').css('display','none').eq(oftenNumi).css('display','block');
            oftenNumi++;
            if(oftenNumi>=oftenNumli){
                oftenNumi=0;
            }
            
        };

        if(oftenNumli>1){
            oftenTimei=setInterval(oftenFni,3000);
            $('.sw-index').on({
                mouseover  : function(){
                        clearInterval(oftenTimei);
                        oftenTimei=null;
                } ,
                mouseout : function(){
                        clearInterval(oftenTimei);
                        oftenTimei=setInterval(oftenFni,3000);
            
                    
                } 
            })
        };*/
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
            console.log(_this.attr('sid'))
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
            
    },
    methods: {

    },
    components: {
        'header-top': header
    }
}
</script>
<style src="../../assets/new-web/css/index.css"></style>

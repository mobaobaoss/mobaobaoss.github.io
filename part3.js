/*
更新日志：
V1.0 2015.05.20
1.完成基础框架。
V1.1 2015.05.21
1.大量细节调整
*/
try{ //系统错误处理
prompt("我们的网站（包含脚本使用说明，使用本脚本前请务必阅读）：", "http://x01x012013.github.io/CN_Pages/Bili_Macro/");
//URL检查
if(document.URL === "https://account.bilibili.com/answer/promotion" || document.URL === "https://account.bilibili.com/answer/promotion/"){
//运行确认
if(confirm("Bilibili晋级考试 弹幕礼仪部分 答题脚本 V1.1（2015.05.21更新）\n点击确定运行（点击取消则不会运行）。")){
alert("题库题数：25（2015.05.23更新）\n若您为使用此脚本支付了任何费用，那么恭喜您，您被坑了。\n点击确定继续。");
//核心
var allQ = [];
$(".examLi").each(function(){
    allQ.push($(this).text());
});
var counter = 0;
for(var i = 1; i <= 20; i++){
    var thisQ = allQ[i].split(" ");
    var q = thisQ[64].substring(0, thisQ[64].length - 1); //问题
    //答案
    var a = [];
    for(var ii = 112; ii <= 172; ii += 20){
        a.push(thisQ[ii].substring(1, thisQ[ii].length - 1));
    }
    var rightA = getAns(q); //获取正确答案
    if(a.indexOf(rightA) > -1){
        $(".examLi").eq(i) //找到正确的题
            .find("li").eq(a.indexOf(rightA)) //找到正确的选项
                .addClass("currSolution"); //选择选项
    }else{
        counter += 1;
        if(rightA !== undefined){ //题库错误处理
            alert("题库错误！\n问题：\"" + q + "\"\n返回的答案：\"" + rightA + "\"\n捕获的答案列表：" + a);
        }
    }
}
alert("答题完成，有" + counter  +"道题没填写（题库中没有或返回的答案无效）。")
//题库函数
function getAns (q){
// 79 = 79
switch(q){
//群主提供 25题 2015.05.20
case "傅里叶级数是傅里叶在研究哪种物理现象时提出的？": return ".热传导";
case "以下哪种物质碱性最强": return ".RbOH";
case "以下哪个不是计算机常用的颜色模式？": return ".LBA模式";
case "USB3.0 的插口通常为何种颜色？": return ".蓝";
case "一战中最先使用毒气弹的战役是": return ".凡尔登战役";
case "薛定谔有一只什么宠物？": return ".猫";
case " 2013年E3游戏展中哪个发布会最先开始": return ".微软发布会";
case "薛定谔的猫是哪个国家物理学家提出的？": return ".奥地利";
case "下列哪一项不属于高分子材料": return ".陶瓷";
case "不是组成自然界的所有生命物体的三类物质是": return ".维生素";
case "在使用KMPlayer进行连续截图时,应该使用那一项功能?": return ".捕获>高级捕获";
case "以下哪一个不是冥王星的天然卫星": return ".阋神";
case "以下哪部游戏设备拥有裸眼3D功能？": return ".3DS";
case "相对论主要是由谁创立的？": return ".爱因斯坦";
case " 虐猫狂人___,电磁狂魔___": return ".薛定谔，特斯拉";
case "下列激素可以口服的是？": return ".甲状腺素";
case "丰臣秀吉的家纹俗称是什么？": return ".太阁桐";
case "计算机的运算采用？": return ".二进位制";
case "一般制作AMV或MAD使用的软件中哪一款是索尼的产品？": return ".VEGAS";
case "下列不属于基本粒子的是": return ".重子";
case "成年人及年长儿正常心胸比例不大于": return ".0.5";
case "下列选项内哪两种混合后会生成氯气？": return ".84消毒液和洁厕灵";
case "凹透镜可能对": return ".虚物成正立放大的实像";
case "以下答案中什么可以用于作制作酸奶？": return ".乳酸菌";
case "E3大展是什么意思？": return ".电子产品展销会";
case "以下哪个不是高级程序设计语言": return ".汇编语言";
case "希腊神话中的英仙座是哪位英雄？": return ".帕修斯";
case "海洋中最多的生物是？": return ".浮游生物";
case "动画《死亡笔记》中,死亡之眼有什么功能": return ".看见对方寿命和名字";
case "商纣王通过什么方式使得周文王不能成大业": return ".命他吃自己的儿子";
case "下列各项不属于电脑操作系统的是": return ".S60";
case "以下时间哪一个节气是地球公转速度最慢的时候": return ".夏至";
case "电子计算机技术在半个世纪中虽有很大进步， 但至今其运行仍遵循着一位科学 家提出的基本原理。他就是": return ".冯·诺依曼";
case "在组织液回流中，淋巴回流的主要功能是重吸收": return ".蛋白质";
case "汞的元素符号是？": return ".Hg";
case "以下电源制造商哪家的总部不在台湾": return ".Flextronics";
case " 第一宇宙速度是？km/s": return ".7.9";
case "大美利坚自由独立的第一枪在哪里打响": return ".莱克星顿";
case "下列哪个不是天启四骑士": return ".战神";
case "以下哪种属于纯净物": return ".冰水混合物";
case "已知世界上最古老的英雄史诗中的主角名字是？": return ".吉尔伽美什";
case "编程中的树的遍历分为哪三种？": return ".先序、中序、后序遍历";
case "以下物质中酸性最弱的是": return ".硅酸";
case "普朗克常量的物理符号是？": return ".h";
case "1 infinite loop是哪个公司总部的地址？": return ".苹果";
case "网页在不重载页面的情况下重绘部分页面的技术叫做啥？": return ".AJax";
case "元素周期表中，周期数等于": return ".电子层数";
case "以下哪些是成熟的植物细胞特有的结构？": return ".中央大液泡";
case "在Android系统中，内核(Kernel)被储存于设备的哪一个分区中？": return ".Boot";
case "格林尼治时间0点整相当于北京时间几点？": return ".八点";
case "晶体具有周期性排列的规则空间点系总共有多少种？": return ".230";
case "“公民的权利和义务是按照他们财产的多寡来决定的”这一评价是针对": return ".梭伦改革";
case "力的三要素是什么？": return ".力的大小、力的方向、力的作用点";
case "五岳，是中国五大名山的总称，以下那个选项不属于五岳？": return ".峨眉";
case "当PCl5 = PCl3 +Cl2的化学平衡常数Kc=1.8M时，在0.5L的容器中加入0.15molPCl5,求平衡后Cl2的浓度": return ".0.26M";
case "以下哪个游戏机的体积最小？": return ".GBM";
case "中央处理单元的英文缩写是什么": return ".CPU";
case "将浓硝酸与浓盐酸以体积比3:1的比例混合，得到的混合物叫做什么？": return ".逆王水";
case "“不能通过有限步骤将物体降温到0K”是__的表述": return ".热力学第三定律";
case "下列哪项与编程中循环的无关？": return ".return";
case "目前宇宙中已知的力被分为4种基本作用力，以下不属于4种基本力分类的是": return ".内应力";
case "一个完整的计算机系统应该包括": return ".硬件系统与软件系统";
case "成人体内必须氨基酸有多少种": return ".8";
case "一个物体从40m的高处自由下落，下落多少米后该物体的动能和重力势能相等？": return ".20";
case "目前世界上最强的酸是什么？": return ".氟锑酸";
case "世界上面积最大的岛屿是？": return ".格陵兰岛";
case "720P高清宽屏画质分辨率是多少？": return ".1280*720";
case "拿破仑在从厄尔巴岛逃回法国，到兵败滑铁卢再次流放，一共重返帝位多少天？": return ".101";
case "背斜成谷的原因是": return ".风力侵蚀、岩层受张力";
case "被称为“工业维生素”的是": return ".稀土";
case "以下哪一位数学家不是法国人？": return ".黎曼";
case "当PCl5 = PCl3 +Cl2的化学平衡常数Kc=1.8M时，在0.5L的容器中加入0.15molPCl5,求平衡后Cl2的浓度": return ".0.26M";
case "以下哪种颜色不属于色光三原色？": return ".黄";
case "iphone 4之后苹果推出的手机是": return ".iphone 4S";
case "c++的int类型通常占用几个字节？": return "4（byte）";
case "冥王星的公转周期?": return ".248地球年";
case "世界上用图像显示的第一个电子游戏是什么？": return ".Core War";
case "AIDS的全称是什么?": return ".获得性免疫缺陷综合征";
case "计算机编程中常见的if语句是？": return ".判断语句";
case "风靡一时的游戏主机“红白机”全名为？": return ".Family Computer";
case "当天空出现了鱼鳞云(透光高积云)，下列哪种天气现象会发生？": return ".降雨";
case "一直被拿去做实验从未被超越的动物是": return ".小白鼠";
case "以下作品中哪一个完全没有使用3D技术": return ".LOVELIVE TV版";
case "以下哪款耳机采用了特斯拉技术": return ".拜亚T1";
case "美国历史上第一位黑人总统是": return ".Barack Hussein Obama II";
case "以下哪种功率放大器效率最低？": return ".甲类";
case "RGBA中的A是指？": return ".Alpha";
case "“不学礼，无以立”。出于何处？": return ".《论语》";
case "静电场的高斯定理和环路定理说明静电场是个什么场？": return ".有源有旋场";
case "新生物性状产生的根本原因在于？": return ".基因重组";
case "一个农田的全部生物属于？": return ".群落";
case "北回归线没有从下列哪个省中穿过？": return ".福建";
case "什么是“DTS”": return ".数字家庭影院系统";
case "被誉为生命科学“登月”计划的是": return ".人类基因组计划";
case "下列有关电子显微镜的说法正确的是": return ".常用的有透射电镜和扫描电子镜";
case "天文学上，红移是指": return ".天体离我们远去";
case "传说中从天而降砸到牛顿的是": return ".苹果";
case "拿破仑在从厄尔巴岛逃回法国，到兵败滑铁卢再次流放，一共重返帝位多少天？": return ".101";
case "剧毒NaCN(氰化钠)的水解产物HCN是什么味道": return ".苦杏仁味";
case "金鱼的卵什么颜色的才能孵化": return ".淡青色";
case "C语言中，如果ar是个数组，那么表达式ar[i]与什么等价？": return ".*(ar+i)";
case "谁罪大滔天，搞到百姓怨声载道": return ".索尼";
case "春秋战国时期，哪家学说的主张是“兼爱”“非攻”": return ".墨家";
case "薛定谔的猫是薛定谔的一个著名实验，其不涉及的问题是": return ".量子的叠加态";
case "李靖的三儿子叫什么(三个字)": return ".李狗蛋";
case "NTSC制式的视频帧率是": return ".29.970fps";
case "日本剑圣宫本武藏的自创的武术是什么？": return ".二天一流";
case "造成温室效应最重要的气体是？": return ".二氧化碳";
case "纳米是一种？": return ".长度单位";
case "iphone 4之后苹果推出的手机是": return ".iphone 4S";
case "硝基盐酸为什么能溶解金？": return ".氧化";
case "“夜阑卧听风吹雨，铁马冰河入梦来”是谁的诗句？": return ".陆游";
case "IBM5100的CPU型号？": return ".P-III";
case "经过减数分裂的子细胞, 会有多少染色体": return ".一半";
case "游戏主机Wii U是哪家公司发售的": return ".任天堂";
case "不属于热的传递方式的是": return ".热运送";
case "以下哪种手机品牌由于质量过”硬“而获得了砖头的美誉？": return ".诺基亚";
case "以下哪种花卉最容易被从中间爆开？": return ".菊花";
case "电磁炮发射炮弹用到的原理是": return ".洛伦茨力";
case "“疑是地上霜”的上一句是？": return ".床前明月光";
case "量子力学的创始人是？": return ".普朗克";
case "将一批粗铜矿石由昆明运到上海精炼，运输路线哪条最经济？": return ".贵昆线—川黔线—长江航线";
case "AE中将要如何做出视频信号干扰以及画面抖动的效果？": return ".AE插件Twitch";
case "以下哪一个是北京地方时经纬坐标？": return ".N39°54',E116°23'";
case "以下那个Adobe的软件是用于剪辑视频的？": return ".Premiere";
case "赤道半径长为？": return ".6378km";
case "二战德国闪电战的创立者是谁？": return ".古德里安";
case "著名的狼群战术是谁提出来的？": return ".卡尔·邓尼茨";
case "光年为光在真空中一年内行经的距离，这里的一年为？": return ".365天5小时48分";
case "以下那种波不是电磁波？": return ".超声波";
case "孤岛危机又叫什么": return ".显卡危机";
case "用鼠标在电脑上绘图叫做什么？": return ".鼠绘";
case "我国4个直辖市中哪个面积最大？": return ".重庆";
case "以下哪种力不属于性质力？": return ".压力";
case "c语言中换行符是？": return ".\n";
case "世界上第一家第三方游戏开发公司叫什么？": return ".KONAMI";
case "截止于2012年为止，宇宙中已知的最大恒星是下列中的哪一个？": return ".VY红超巨星";
case "地球距离月球之间的距离为？": return ".384,400千米";
case "第六天魔王是？": return ".织田信长";
case "Android操作系统是以什么为基础开发的操作系统？": return ".Linux";
case "2003娘，或称2K3娘，是哪个公司公司推出的的拟人化萌娘。": return ".微软";
case "DMSO的中文名称是？": return ".二甲基亚砜";
case "下列哪一个检验是否具有人工智能的测试？": return ".图灵测试";
case "以下哪种化♂学物质是存在的": return ".正戊烷";
case "以下哪种花卉最容易被从中间爆开？": return ".菊花";
case "下列哪个不是Microsoft产品": return ".Android";
case "当一枚硬币加速到光速的8/9时,它": return ".质量比之前大";
case "美国历史上第一位黑人总统是": return ".Barack Hussein Obama II";
case "以下哪句不出自与“马嵬坡下黄土中，不见红颜空死处”同首诗？": return ".回眸一笑百媚生，此时无声胜有声";
case "以下哪一种细胞器附着在内质网上？": return ".高尔基体";
case "角色制作3D模组的免费软件“MMD”的全称是？": return ".MikuMikuDance";
case "出海远行的船，在视线中最后消失的是船的桅杆，既然水是平的，为什么会出现这种情况?": return ".海平面并不是平的，它和地球表面是平行的，是一个平滑的球面";
case "“月有阴晴圆缺”，用科学的观点看待这件事，原因是？": return ".地球绕太阳转动，月球绕地球转动，两者转速不一样，出现偏角，使地球掩住了月球的一部分";
case "你在一个地方先往南走10公里再往东走10公里，再往北走十公里，这时候你发现你回到了原处，这时候你看见了一只熊，请问这只熊是什么颜色的": return ".棕色";
case "双子座流星雨出现在每年的": return ".12月左右";
case "音MAD鬼畜作品原BGM多数选于DDR,jubeat,beatmania等音游，则该系列的制作团队名为？": return ".BEMANI";
case "由Nintendo公司发售的8位游戏机的名称缩写是什么？": return ".FC";
case "力的单位是什么？": return ".牛顿";
case "下列哪个不是PSP的按键？": return ".☆";
case "味精的主要成分是什么？": return ".谷氨酸钠";
case "世界上最大的无脊椎动物是什么？": return ".乌贼";
case "我国唯一一个具有五种地形的省区是哪里？": return ".四川省";
case "现在我们知道，光是一种电磁波，那么同时，它也是一种——": return ".横波";
case "微软最新家用机的名字是": return ".xboxone";
case "商纣王通过什么方式使得周文王不能成大业": return ".囚禁了他";
case "上海“老克勒”中的“克勒”一词是出自哪个外来词语？": return ".color";
case "二战时德国原子弹研发领导人是谁": return ".沃纳·海森堡";
case "在电脑上使用模拟器，在不改变游戏内核的情况下，使用工具辅助操作的游戏方式为？": return ".TAS";
case "3dmax中旋转视图按哪个键": return ".alt+鼠标中键";
case "当PCl5 = PCl3 +Cl2的化学平衡常数Kc=1.8M时，在0.5L的容器中加入0.15molPCl5,求平衡后Cl2的浓度": return ".0.26M";
case "JavaScript和ActionScript是基于什么标准的？": return ".ECMA标准";
case "可以无损做到的是哪一项": return ".混缩";
case "下列哪种物质每年致死人数最多？": return ".一氧化二氢";
case "气体理想方程是": return ".PV=nRT";
case "我國哪條高鐵線路被譽為世界最長的高鐵線路": return ".京廣高鐵";
case "不属于传说中四灵兽的是？": return ".麒麟";
case "索尼的第一部游戏主机PlayStation是在哪一年推出的？": return ".1994年";
case "哪种主机不是次世代主机": return ".GBA";
case "地理上区分我国南北方以____为分界线": return ".秦岭-淮河";
case "国际通用的标准音的频率是？": return ".440Hz";
case "夜盲症是缺哪种维生素导致的？": return ".维生素A";
case "下列不属于生物化学范畴的是": return ".药物与生物体的关系";
case "请问河内著名的____古街在哪个位置？": return ".三十六 市中心";
case "第一位俄罗斯沙皇是？": return ".伊凡雷帝";
case "宇宙第一速度的大小": return ".7.9km/s";
case "以纯粹优美的音乐来叙述表达作者的情感的音乐模式被称为": return ".纯音乐";
case "我国北京属于那种地形": return ".平原";
case "商鞅变法没有涉及哪一条？": return ".郡县制";
case "《命运石之门》中关于时间旅行悖论解释的基础理论是？": return ".世界线收束理论";
case "中国古代星名中的“参宿”念作什么？": return ".canxiu";
case "古老的蓝色染料亚铁氰化铁": return ".普鲁士蓝";
case "“草船借箭”故事里，借的是谁家的箭": return ".曹操";
case "路易斯莱恩从高空摔下，以每秒32英尺的初速度下降并加速度。超人马上俯冲向路易斯，并伸出两个钢铁般的手臂试图接住她，而此时的路易斯在以大约每小时120公里的速度下降，这时她碰到超人的手臂，结果会如何？": return ".路易斯立马被劈成三瓣";
case "以下哪个是微软的产品": return ".XBOX ONE";
case "大汶口文化遗址在我国的": return ".山东";
case "下面哪种药物不是局部麻醉药": return ".盐酸阿托品";
case "截面上内力的大小：": return ".与截面的尺寸有关，但与截面的形状无关";
case "以下不属于Web2.0产品的是？": return ".Windows Live";
case "F=ma 是出来哪一条物理学定律": return ".牛顿第二定律";
case "人之初，性本_。 ——《三字经》": return ".善";
case "磁带、硬盘和信用卡都利用了什么特性的物质来作储存数据？": return ".矩形磁滞特性的物质";
case "以下哪种视频容器格式可封装的轨道数最多？": return ".mkv";
case "下列不属于生物酶具有的特点是？": return ".单次性";
case "浦科特m5p固态硬盘采用的是什么主控芯片": return ".Marvell 88SS9187-BLD2";
case "在sony vegas中，将素材片段分离出来的操作叫什么？": return ".渲染";
case "一般认为，现代医学之父是": return ".希波克拉底";
case "下列哪道菜品是哈尔滨原创菜": return ".锅包肉";
case "虾壳的主要组成成分是什么？": return ".蛋白质";
case "6月22日，下列城市中正午太阳高度角最大的是？": return ".广州";
case "著名的视频编辑软件Premier、After Effects是由哪家公司出品的": return ".Adobe";
case "干冰是一种应用广泛的化合物，其化学式是？": return ".CO2";
case "世界第一支病毒载体的基因治疗抗肿瘤药物是由哪个公司研发生产的？": return ".美国Jennerex";
case "垂死病中惊坐起，_________。": return ".暗风吹雨入寒窗";
case "经常食用容易引起铅中毒的食物是": return ".松花蛋（皮蛋）";
case "甲烷在空气中爆炸最强烈是甲烷在空气中所占的体积比": return ".9.5%";
case "物理四大基本力是哪些？": return ".万有引力 弱相互作用力 强相互作用力 电磁力";
case "以下特性中，不属于计算机病毒特性的是": return ".授权性、可执行性";
case "随着生命科学和计算机科学的迅猛发展， 生命科学和计算机科学相结合形成 了一门新学科，这门学科称之为": return ".生物信息学";
case "豌豆杂交实验是谁的实验？": return ".孟德尔";
case "爱因斯坦通过以下哪项研究获得诺贝尔奖？": return ".光电效应";
case "第一次世界大战以谁的死亡为导火线？": return ".斐迪南大公";
case "上海动物园的新生猩猩叫什么名字？": return ".海弟";
case "电子计算机发明于哪一年？": return ".1946年";
case "科学区中经常被人玩坏的球的材料是": return ".镍";
case "一公斤铁和一公斤棉花哪一个重": return ".一样重";
case "江户时代划定的五街道不包含哪个？": return ".北陆道";
case "单摆的等时性是谁首先发现的？": return ".伽利略";
case "一个正常成年人有多少块骨头？": return ".206";
case "Adobe Audition中让音乐产生渐渐消失的效果的操作叫什么名字？": return ".淡出";
case "警察经常用来检验血液的试剂": return ".3-硝基邻苯二甲酰肼";
case "当电化学反应的两极反应分别在两个容器内进行时，两个容器之间需要有什么相连": return ".盐桥";
case "南极上空臭氧空洞的形成是因为？": return ".人类活动中排放大量氟化合物的缘故";
case "国际标准化组织ISO制定的OSI模型中，路由器工作在哪一层？": return ".网络层";
case "质能方程的公式？": return ".E=MC²";
case "天文单位缩写的标准符号为？": return ".AU";
case "人体安全电压是多少伏": return ".37伏以下";
case "以下哪个是常用数位板绘图软件？": return ".SAI";
case "下列哪种立体匹配算法不是全局匹配算法？": return ".SSD";
case "水分子的键角是？": return ".104.5";
case "“不学礼，无以立”。出于何处？": return ".《论语》";
case "生物自然选择学说是谁创立的？": return ".达尔文";
case "在1993年Windows 95的测试版中的开发版本号是哪一个？": return ".Chicago";
case "以下哪个不是描述气体的状态参量？": return ".ρ";
case "下列哪种说法是错误的": return ".将文件改为只读方式就不会感染病毒";
case "雪融化后会变成什么?": return ".水";
case "1电子伏特等于多少焦耳？": return ".1.602×10^-19";
case "被称之为达尔文的斗犬的是历史上哪一位人物？": return ".托马斯•赫胥黎";
case "以下哪一个选项指的是与其他三个不同的选项？": return ".布达佩斯";
case "QVGA 是指解像度為？": return ".240×320";
case "光的波动性是谁最先发现的？": return ".麦克斯韦";
case "我国大陆家庭电路的电压统一使用为多少伏？": return ".220";
case "制取氧气的几种方法中，无论是哪一种都不需要的是": return ".重铬酸钾";
case "正经的说，USB是指": return ".通用串行总线控制器";
case "下列高等植物器官中不具有双层膜结构的是": return ".液泡";
case "神话中，以下哪一位不是争夺金苹果的女神？": return ".厄里斯";
case "战国时期的名将李牧一生无败绩，他是哪国人？": return ".赵国";
case "日本哪个地方因亚洲表情新巨头而出名？": return ".兵库北";
case "以下哪家不是显卡厂商？": return ".KFC";
case "DOS的中文名是？": return ".磁盘操作系统";
case "下列元素中电负性最大的是？": return ".氧";
case "光的微粒说是谁提出？": return ".牛顿";
case "下列哪个不是最早的“讲卫生除四害”之中的“四害”": return ".蟑螂";
case "早进入青铜器时代的国家是？": return ".阿拉伯叙利亚";
case "地理信息系统指的是": return ".GIS";
case "以下哪位名人因are you ok而火？": return ".雷军";
case "动漫名Clannad的词根，比较公认的说法是那个国家（地区）的语言？": return ".巴伐利亚";
case "以下掌机中哪一种没有触屏功能？": return ".PSP";
case "珍珠港事件后，美国航母集群携什么轰炸机对日本本土进行了报复性轰炸？": return ".B-25“米切尔”";
case "下列元素电负性最大的是？": return ".F";
case "在水银泄漏时你该怎么办？": return ".在上面撒上硫磺粉末";
case "使用哪种仪器，可以获得三维图象": return ".透射电子显微镜";
case "GNU的初始人？": return ".Stallman";
case "iPhone, iPad上的应用是用哪个语言编写的": return ".Objective C";
case "物质波是由谁提出来的": return ".德布罗意";
case "烧红镍球放入水中会有什么现象": return ".无现象";
case "所谓的MNG格式是什么？": return ".Multiple image network graphics";
case "根据VB理论，苯分子中没有下列哪种键？": return ".碳碳单键";
case "一氧化二氢是什么？": return ".水";
case "以下字母哪个不是碱基的缩写": return ".B";
case " 以下人物中哪一位是矩阵力学的主要创立者？": return ".维尔纳·海森堡";
case "下列哪场战役发生在1942年？": return ".勒热夫-瑟乔夫卡战役";
case "饮用碳酸饮料最好用什么工具及原因？": return ".吸管（防止碳酸侵蚀牙齿）";
case "化学中，苦味酸是___": return ".三硝基苯酚";
case "科学常识，电流的磁效应和电磁感应分别由谁发现？": return ".奥斯特 法拉第";
case "王水是以下那两种物质的混合溶液": return ".盐酸和硝酸";
//
default: return undefined;
}} //结束switch和题库函数
} //结束运行确认
}else{ //URL检查
    alert("请在正确的页面上运行脚本！");
}
}catch(e){ //系统错误处理
    alert("系统错误！\n错误信息：\n" + e);
}

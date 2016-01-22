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
case "以下哪一个是北京地方时经纬坐标？": return ".北纬39.9°，东经116.3°";
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

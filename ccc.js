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

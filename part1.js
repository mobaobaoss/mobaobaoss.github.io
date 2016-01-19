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
if(document.URL === "https://account.bilibili.com/answer/base" || document.URL === "https://account.bilibili.com/answer/base/"){
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
// 25 = 25
switch(q){
//群主提供 25题 2015.05.20
case "下列哪一条不是剧透弹幕？": return ".我非常喜欢这个角色";
case "以下哪种弹幕不会被禁言？": return ".和谐吐槽";
case "播放一个视频后发现视频内容并不是自己所想的那样，怎么样做是正确的？": return ".关闭视频就好了";
case "当观看视频过程中，有人发无关视频的av号时应该？": return ".举报该弹幕";
case "当你知道新番中某角色会死亡的时候应该？": return ".安静观看并不透露她将要死亡";
case "下面哪条不是黑角色的弹幕？": return ".男主女主快去结婚";
case "当观看过程中有发现有恶意黑自己喜欢角色的弹幕时应该？": return ".举报该弹幕";
case "下列哪一条符合弹幕礼仪？": return ".合适的吐槽弹幕";
case "发吐槽弹幕的正确姿势？": return ".文明幽默";
case "看到自己喜欢的视频时以下哪种做法是正确的？": return ".收藏视频";
case "看到鬼畜视频，哪种弹幕是合适的？": return ".做的不错,支持一下";
case "在手机评测视频里，哪种弹幕是合适的？": return ".客观分析手机优缺点";
case "在科技区观看视频过程中应该？": return ".在评论区进行科普补充";
case "在观看游戏区视频时，那种符合弹幕礼仪？": return ".谈论技巧";
case "在视频里刷屏属于以下哪种？": return ".违规弹幕";
case "Tag的正确用途？": return ".用于搜索";
case "在视频中突然出现发神秘网站的弹幕哪个是正确的做法？": return ".举报该弹幕";
case "在评论区发现色情头像正确的做法？": return ".举报该评论并认真填写举报理由";
case "下面哪个不是无意义灌水评论？": return ".视频的相关补充信息";
case "填写举报理由时应当？": return ".正确填写对方违规的类型";
case "在观看新番时，遇到”今天台风来了停课啦”这样的弹幕是属于以下哪种？": return ".视频内容不相关弹幕";
case "如何举报弹幕？": return ".鼠标右键";
case "“xxx全家爆炸”是属于什么弹幕？": return ".违规弹幕";
case "在评论区看到与自己观点不同的评论，正确的做法？": return ".和谐讨论";
case "以下哪种评论比较适宜？": return ".文明回复";
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

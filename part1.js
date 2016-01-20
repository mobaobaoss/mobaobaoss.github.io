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
// 64 = 64
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
case "在观看视频中遇到过长弹幕遮挡屏幕时应该？": return ".进行举报";
case "在《不剧透的才是好孩子》中剧透一万次将会？": return ".被哈老乱守护一辈子";
case "当发现良心而且准确的科普弹幕时以下哪种做法是正确的？": return ".在心里默默给个赞";
case "视频卡住正确的处理姿势是？": return ".刷新页面";
case "在承包页面哪种弹幕是不合适的？": return ".阵亡者名单";
case "在观看综艺节目过程中下面那条弹幕比较合适？": return ".吐槽节目环节或内容";
case "喜欢某个up主的翻唱，发什么弹幕合适？": return ".以上弹幕都合适";
case "看到某系列视频更新了，以下哪种弹幕适合发送？": return ".文明吐槽";
case "使用高级弹幕应当？": return ".结合视频内容";
case "发弹幕时应当要注意不要发一些涉及私人信息的内容，以下哪种弹幕是不涉及私人信息的？": return ".哈哈哈";
case "在评论区遇到有人吵架应该？": return ".举报过激言论";
case "在二小姐的bgm《U.N.オーエンは彼女なのか？》中刷死亡华尔兹这样的行为是？": return ".引战";
case " 在观看番剧过程中，有角色领便当的时候以下行为适当的是？": return ".表示默哀";
case "在观看新番时，以下哪种弹幕比较适宜？": return ".233";
case "如果发现自己的账号被误封应该？": return ".联系客服进行反馈";
case "下面哪条弹幕是地域攻击？": return ".某某地方的都是坏淫";
case "作为一名有素质的原作党应该发哪种弹幕？": return ".设定上的一些科普说明";
case "发现视频有(画质,字幕,花屏等)问题时，下面哪种行为不合适？": return ".发弹幕评论辱骂";
case "看到评论区发神秘链接，下面哪个是合适的？": return ".举报评论";
case " 视频刚好没弹幕，下面哪种弹幕是合适的？": return ".合适地进行吐槽";
case "在观看动物区视频过程中哪种弹幕符合弹幕礼仪？": return ".好萌";
case "以下哪个是正确的举报理由？": return ".引战弹幕";
case "过长的弹幕会导致？": return ".遮挡住屏幕造成他人无法正常观看";
case "在多P视频中应该？": return ".以上做法都不合适";
case "用一些梗吐槽时应该？": return ".结合画面巧妙运用";
case "复制UP主签名并发送弹幕会造成怎样结果？": return ".会被系统禁言";
case "在番剧片尾，哪种弹幕合适？": return ".以上弹幕都合适";
case "弹幕上限的标准从哪里查询？": return ".网站下方全站使用说明";
case "在观看视频中遇到违规弹幕时应该？": return ".进行举报";
case "下列哪一条不是过长弹幕？": return ".233";
case "以下哪种评论符合评论礼仪？": return ".和大家愉快的讨论";
case "发违规评论会被怎么样？": return ".以上都有可能";
case "剧透神座下天使是（详见 http://www.bilibili.com/video/av1278409/）？": return ".哈老乱";
case "前排留名的评论是属于哪种类型的评论？": return ".无意义灌水评论";
case "在观看翻唱区视频时，哪种符合弹幕礼仪？": return ".以上都不符合";
case "遇到过于低俗空耳出现在视频中应该？": return ".以上做法都有误";
case "在观看视频中出现过多重复的弹幕时，正确的做法？": return ".添加屏蔽关键词";
case "如果想要删除自己发的不正确的评论可以？": return ".举报自己的评论并填写理由";
case "以下哪种弹幕用词会比较适宜，不会使人不愉快？": return ".2333";
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

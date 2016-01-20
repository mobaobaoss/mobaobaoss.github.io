var t = "\n\n欢迎您加入我们的群一起讨论并完善题库！\n一群：204524182\n二群：122214155";
var p = document.createElement("script");
p.setAttribute("src", "http://X01X012013.github.io/CN_Pages/Bili_Macro/release/macroBank.js");
p.setAttribute("charset", "utf-8");
document.getElementsByTagName("head")[0].appendChild(p);
if(r == "Google Chrome 40"){
  var g = 7;
}else if(r == "Internet Explorer 11"){
  var g = 6;
}else{
  alert("启动脚本变量错误，请到我们的网站获取最新的启动脚本：\nhttp://x01x012013.github.io/CN_Pages/Bili_Macro/");
  var g = prompt("请输入您浏览器\"L_0\"物体的innerHTML被\">\"split后第一个选项的index：", "7");
  g = parseInt(g);
  if(g === NaN){
    g = 7;
  }
}
var z = function(x, y){
  document.getElementById("rdo" + x + y).checked = "checked";
}
p.onload = function(){
  alert("Bilibili自动答题脚本 V3.2.3（2015.02.21更新）\n" + v + "\n脚本有可能需要一段时间才能完成执行，若您的浏览器提示脚本或网页长时间无响应请选择等待，请不要重复运行本脚本。" + t + "\n\n如果您为使用此脚本支付了任何费用，那么恭喜您，您被坑了。\n\n按确定开始执行。")
  var c = 0;
  var d = 0;
  var f = confirm("若有题没有找到答案或答案无效，是否自动填选第一个选项（A）？选择否将会留空。\n确定：是；取消：否。");
  try{
    for(i = 0; i < 100; i++ ){
      var l = document.getElementById("l_" + i).innerHTML.split(">");
      var n = l[3].split("<");
      n = n[0].substring(1, n[0].length - 8);
      var a = b(n);
      if(a !== undefined){
        for(j = 0; j < 5; j += 1){
          if(j === 4){
            alert("题库错误，若您使用的是" + r + "或更新的版本的浏览器：请截图这个弹窗，然后找到这个问题并将问题和其答案都复制发给我。如果您知道如何查看网页源码，请找到该题和其答案相对应的源码并复制发给我（建议使用QQ群的临时会话，否则有可能出现特殊字符失效等问题）。\n\n问题：\"" + n + "\"\n返回的答案：\"" + a + "\"\n最后一次判定调用：\"" + s + "\"\n缓存：\"" + l + "\"");
            if(f){
              z(i, 0);
            }
            d += 1;
            break;
          }
          var s = l[g + (j * 3)].split("<");
          s = s[0].substring(0, s[0].length - 9);
          if(s === a){
            z(i, j);
            break;
          }
        }
      }else{
        if(f){
          z(i, 0);
        }
        c += 1;
      }
    }
    alert("自动答题结束，有" + c + "道题没找到，有" + d + "道题返回无效（题库错误）。\n请您检查一遍并填写未找到的问题后提交。" + t);
  }catch(e){
    alert("发生错误，脚本将终止。\n若您在答题页面运行的这个脚本且您的浏览器是" + r + "或更新的版本，请截图并发给我。\n错误信息：\n" + e + "\n" + t);
  }
  alert("感谢这些人对我的大力支持（不分排名）：\n优子（*****5201）\nje（******4946） ");
}

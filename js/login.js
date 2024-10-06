// 输入框点击后文字消失
let userNameObj = document.getElementById('userName')
let pwdObj = document.getElementById('pwd')
  // 添加点击事件监听器
userNameObj.addEventListener('click', function(){
    this.removeAttribute('placeholder');
    userNameObj.style.width = '300px'
    userNameObj.style.backgroundColor='rgba(255,255,255)'
    userNameObj.style.color='#79A8AE'
});
pwdObj.addEventListener('click', function(){
    this.removeAttribute('placeholder');
    pwdObj.style.width = '300px'
    pwdObj.style.backgroundColor='rgba(255,255,255)'
    pwdObj.style.color='#79A8AE'
});
userNameObj.addEventListener('blur', function() {
    // 恢复 placeholder 文字
    this.setAttribute('placeholder', '帅气的网友');
    userNameObj.style.width = '250px'
    userNameObj.style.backgroundColor='rgba(255,255,255,0.2)'
    userNameObj.style.color='rgba(255,255,255)'
});
pwdObj.addEventListener('blur', function() {
    // 恢复 placeholder 文字
    this.setAttribute('placeholder', '密码');
    pwdObj.style.width = '250px'
    pwdObj.style.backgroundColor='rgba(255,255,255,0.2)'
    pwdObj.style.color='rgba(255,255,255)'
});

$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="宁紫涵" &&  pwd=="1203"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		requestFullScreen();
		setTimeout(function(){location.href="index1.html";},2000);
		//auto_link_html("index1.html");
	}
	else{
		alert("密码是你的生日哦!（密码为4位数）");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
 // 判断各种浏览器，找到正确的方法
 //alert(element.webkitRequestFullScreen);
 var requestMethod = element.requestFullScreen || //W3C
 element.webkitRequestFullScreen || //Chrome等
 element.mozRequestFullScreen || //FireFox
 element.msRequestFullScreen; //IE11
 if (requestMethod) {
  requestMethod.call(element);
 }
 else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript !== null) {
   wscript.SendKeys("{F11}");
  }
 }
}
function changeFrameHeight(){
    var ifm= document.getElementById("iframepage"); 
    ifm.height=document.documentElement.clientHeight;

}

window.onresize=function(){  
     changeFrameHeight();  

} 
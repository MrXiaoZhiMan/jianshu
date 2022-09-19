//因为放到了head里面，需要onlaod触发，以便能够获得DOM
addEvent(window,"load",function(){
	//获得DOM对象
	//txt1文本域
	var txt1=document.getElementById("txt1");
	//tips提示信息div#tips
	var tips=document.getElementById("tips");
	//input1发布按钮
	var input1=document.getElementById("input1");
	//txt1绑定keyup事件
	addEvent(txt1,"keyup",function(){
		//由于默认提示信息是隐藏的，所以输入完第一个字符提示信息显示
        tips.style.visibility="visible"; 
        //判断提示字数变色
        //大于2000时红色             
        if(txt1.value.length>2000){
        	tips.innerHTML='已超出<span></span> 字';
        	//this是txt1
        	//this.children[0]获取的是txt1子元素span
        	tips.children[0].className="color-warn";
        	//140-2000时橙色
        }else if(txt1.value.length>=140){
            tips.innerHTML='已输入<span></span> 字</div>';
            tips.children[0].className="color-change";
        }else{
        	tips.children[0].className="";
        }
        //当span显示出来，修改里面的字数
        tips.children[0].innerHTML=txt1.value.length;
        //当文字超过文本域的高度，出现滚动条，增加文本域高度
        if(this.scrollTop>0){
        	this.style.height=this.clientHeight-4+20+"px";
        }
	});
	//给发布按钮绑定点击事件
	addEvent(input1,"click",function(){
       //如果发布时，字数大于2000，那么背景闪烁1秒后，恢复白色背景
		if(txt1.value.length>2000){
			//背景色
			var i=100;//背景色起始，红色分量
          var sid=setInterval(function(){
          	//每隔20ms，红色分量加15
          	 txt1.style.backgroundColor="rgb("+(i)+",0,0)";
          	 i+=15;
          	 //如果i>255，分量值设置为100
          	 if(i>255){
          	 	i=100;
          	 }
          },20);
          //1000ms后清除定时器，恢复默认白色背景
          setTimeout(function(){
          	clearInterval(sid);
          	txt1.style.backgroundColor="#fff";
          },1000);
		}else{
			alert("成功发布");
		}
	});
});
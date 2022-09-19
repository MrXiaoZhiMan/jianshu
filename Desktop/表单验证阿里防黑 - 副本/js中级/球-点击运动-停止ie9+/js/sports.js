var sid;
addEvent(window,"load",function(){
	var div1=document.getElementById("div1");
	var flag=true;
	addEvent(div1,"click",function(){
	   if(flag){
	    sid=setInterval(function(){
	   	//因为setInterval是window方法，所以this由div1变成window,bind(this)功能是保持this指向div1
            this.style.left=this.offsetLeft+1+"px";
	     }.bind(this),30);
	    flag=false;
	    div1.innerHTML="点击暂停";
	   }else{
         clearInterval(sid);
         flag=true;
         div1.innerHTML="点击运动";
	   }
	});
});
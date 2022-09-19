addEvent(window,"load",function(){
	var div1=document.getElementById("div1");
    var flag=true;//球方向标志
	addEvent(div1,"click",function(){           
         setInterval(function(){
         	if(this.offsetLeft<=500 && flag==true){
         		this.style.left=this.offsetLeft+2+"px";
         		if(this.offsetLeft==500){//当球到达500px处，改变方向标识值
                       flag=false;
         		 }
         		}else{
         			this.style.left=this.offsetLeft-2+"px";
         			if(this.offsetLeft==8){//当球到达8px处，改变方向标识值
         				flag=true;
         			}
         		}
         		
         	}.bind(this),30);
         
	 });
});
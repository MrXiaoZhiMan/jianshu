function addEvent(elem,eventType,func){
	if(elem!=null && typeof elem=="object"){
		if(-[1,]){
			elem.addEventListener(eventType,func);
		}else{
			elem.attachEvent("on"+eventType,func);
		}
	}else{
		alert("不是对象或为null");
	}
}
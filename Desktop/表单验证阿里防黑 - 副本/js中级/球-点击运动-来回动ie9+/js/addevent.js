function addEvent(elem,eventType,func){
	try{
		if(elem!=null && typeof elem=="object"){
			if(window.addEventListener){
				//IE9+
				elem.addEventListener(eventType,func,false);
			}else{
				//IE6/7/8
				elem.attachEvent("on"+eventType,func);
			}
		}
	}catch(e){
		alert("不是对象或对象为null");
	}
}
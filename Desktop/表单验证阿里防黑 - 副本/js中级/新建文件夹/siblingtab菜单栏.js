function addEvent(elem, eventype, fun) {
    try {
        if (elem != null && typeof elem == "object") {
            if (window.addEventListener) {
                elem.addEventListener(eventype, fun);
            } else {
                elem.attachEvent("on" + eventype, fun)
            }
        } else {
            throw new Error("对象不能为空");
        }

    } catch (error) {
        alert("error.message");
    }

}
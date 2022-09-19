// 封装添加类
//domID为获取元素的DOM对象
//className为新添加的类属性，必须加双引号
let addClass = (domId, className) => {
    try {
        //判断形参的类型监控错误  domId.classList可以获得所有的类名
        if ((domId != null && typeof domId == "object") && domId.classList && (typeof className == "string")) {
            //添加类属性
            domId.className = `${className}`
            console.log(domId.className)
        } else {
            throw new Error("函数参数无效:提示函数第一个形参为获取元素的DOM对象,第二个形参加双引号")
        }
    }
    catch (error) {
        console.log(error)
    }
}
//封装删除类

let removeClass = (domId, className) => {
    try {
        //判断形参的类型监控错误
        if ((domId != null && typeof domId == "object") && domId.classList && (typeof className == "string")) {
            //添加类属性 split(''): 用于把一个字符串分割成字符串数组 通过空格的方式 里面的 '' 可以更改 
            let newClass = domId.className.split(className)
            domId.className = newClass.join()
        } else {
            throw new Error("函数参数无效:提示函数第一个形参为获取元素的DOM对象,第二个形参加双引号")
        }
    }
    catch (error) {
        console.log(error)
    }
}
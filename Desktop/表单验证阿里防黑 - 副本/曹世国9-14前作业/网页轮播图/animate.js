// 动画函数缓动效果 回调函数应用
function animate(obj, target,callback) {
    // console.log(callback);
  // 给不同的元素指定了不同的计时器
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 将步长值取整数
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      if(callback){
        callback()
      }
    } else {
      obj.style.left = obj.offsetLeft + step + "px";
    }
  }, 15);
}
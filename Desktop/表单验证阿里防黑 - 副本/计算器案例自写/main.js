window.onload=function(){
  // 使用id获取dom，然后.children是获取此dom下的子级 所有得a
let arrBtn = document.getElementById('bom-btn-id').children;
// 循环绑定事件 给所有得a按钮绑定 click事件
for(var i =0;i<arrBtn.length;i++){
  arrBtn[i].onclick = function(){
    // showPanel是一个构造器函数名 调用函数后 传值 传得值是 当前arrBtn【i】得原数上的值
   showPanel( this.innerHTML )
  }
}
// 构造器函数写在外面目的是让结构更清晰
   // html是形参接受到调用此函数时传过来的实参 当点击某个a时会获取到啊里面的原数值 存储到html中
// 用log打印html时点击几次就会显示几次
let fhArr = ['+','-','*','.','/','='];
function showPanel(html){
// 想要将点击的数值传到算数栏里 就要先获取到算数里面的原数值 在进行更改
let cur = document.getElementById('show-panel-box-id').innerHTML;
if(cur.length == 0&&fhArr.indexOf(html) !==-1){
  cur = '0';
}
// 处理可以多次写入点得bug  将顺序颠倒后 . 就跑到前面了 就可以拿到 点
let str =cur
.split('')
.reverse()
.join("")
// console.log(str);
let inDot=str.indexOf('.');
if(html =='.'&& inDot !==-1){
  let dru = cur.slice(cur.length-1-inDot,cur.length);
  console.log(dru);
let reg = new RegExp(/[\+\-\*/]/g)
if(reg.test(dru)){
  document.getElementById('show-panel-box-id').innerHTML = cur+html;
}
}else if(html == '='&& fhArr.indexOf(cur[cur.length-1]) ==-1){
  document.getElementById('show-panel-box-id').innerHTML = '';
  document.getElementById('show-ds-id').innerHTML = eval(cur);
}else{
//  对当重复点击算数符号时他也会将符号也重复传入进行判断 使其不会重复传入
// 因为要判断最后一个是不是符号 所以 创建了一个数组里面存上符号 进行查找组后一个元素是不是符号 
// 用indexOf 遍历cur最后一个元素看fhArr数组里面是否有这个元素 有的话就不等于 -1 没有就等于 -1
if(fhArr.indexOf(cur[cur.length-1]) !==-1){
  // 因为上面得if判断是末尾元素是符号的 所以下面的if因该进行判断他在下一个传过来的元素是不是符号
  // 如果是 不赋值 不是 在赋值 因为是 ==-1 里面没有这个元素才会等于-1 所以可以赋值
    if(fhArr.indexOf(html)==-1){
      //把表达式赋给算数 栏
      document.getElementById('show-panel-box-id').innerHTML = cur + html;
      // 把表达式得值赋值给得数栏 eval（）会把字符串转换为js代码执行
      document.getElementById('show-ds-id').innerHTML = eval(cur+html);
    }
} else {
  // 因为算数里面的值是算数里得当前得（初始值是空得点击后将html接收过来的下一个值传进去）
// 值加上html点击得下一个值 就是算术栏得值  因为将初始值给了cur 所以 将下一个值传在给算术栏的话
// 就需要在获取初始值 在加上html传过来得值  但是当重复点击算数符号时他也会将符号也重复传入
document.getElementById('show-panel-box-id').innerHTML = cur + html;
if(fhArr.indexOf(html) !==-1){
  document.getElementById('show-ds-id').innerHTML = eval(cur);
}else{
  document.getElementById('show-ds-id').innerHTML = eval(cur+html);
}
}
}
}

}
// 清空
function clearFunc(){
  document.getElementById('show-ds-id').innerHTML = '';
  document.getElementById('show-panel-box-id').innerHTML = '';
}
// 删除
let fharr = ['+','-','*','.','/','='];
function deleteFunc(){
  let cur = document.getElementById('show-panel-box-id').innerHTML;
  let newcur = cur.slice(0,cur.length-1);
  document.getElementById('show-panel-box-id').innerHTML = newcur;
  // 判断最后一个值是符号和不是符号得时候
  if(fharr.indexOf(newcur[newcur.length-1])!==-1){
    document.getElementById('show-ds-id').innerHTML = eval(
      newcur.slice(0,newcur.length-1));
  }else{
    document.getElementById('show-ds-id').innerHTML = eval(newcur)
  }

}
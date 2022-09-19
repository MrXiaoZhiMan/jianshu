window.onload=function(){
let arrBtn = document.getElementById('bom-btn-id').children;
for(var i =0;i<arrBtn.length;i++){
  arrBtn[i].onclick = function(){
   showPanel( this.innerHTML )
  }
}
let fhArr = ['+','-','*','.','/','='];
function showPanel(html){
let cur = document.getElementById('show-panel-box-id').innerHTML;
if(cur.length == 0&&fhArr.indexOf(html) !==-1){
  cur = '0';
}
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
if(fhArr.indexOf(cur[cur.length-1]) !==-1){
    if(fhArr.indexOf(html)==-1){
      document.getElementById('show-panel-box-id').innerHTML = cur + html;
      document.getElementById('show-ds-id').innerHTML = eval(cur+html);
    }
} else {
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
  if(fharr.indexOf(newcur[newcur.length-1])!==-1){
    document.getElementById('show-ds-id').innerHTML = eval(
      newcur.slice(0,newcur.length-1));
  }else{
    document.getElementById('show-ds-id').innerHTML = eval(newcur)
  }

}
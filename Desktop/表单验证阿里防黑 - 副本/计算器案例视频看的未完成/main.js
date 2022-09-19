window.onload=function (){
    // .children 是获取到这个id的子级 
    let arrbtn=document.getElementById("bom-btn-id").children;
    for(let i =0;i<arrbtn.length;i++){
        arrbtn[i].onclick=function(){
            // 显示面板
            showPanel(arrbtn[i].innerHTML)
        };
    }
};
let fharr = ['+','-','*','/','='];
function showPanel(html){
    console.log(html);
     let cur = document.getElementById("show-panel-box-id").innerHTML;
    //  当前算式最后一个值为符号
     if(fharr.indexOf(cur[cur.length-1])!==-1){
      if(fharr.indexOf(html)==-1){
        document.getElementById("show-panel-box-id").innerHTML = cur + html;
      }
     } else {
        document.getElementById("show-panel-box-id").innerHTML = cur+html;
     }
}
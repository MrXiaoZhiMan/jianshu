window.addEventListener('load',function(){
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.div1');
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
     for(var i=0;i<ul.children.length;i++){
        // 创建一个小li
        var li = document.createElement('li')
        li.setAttribute('index',i);
        // 把小li插入到ol中
        ol.appendChild(li)
        li.addEventListener('click',function(){
            for(var i =0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            this.className='current';
            // 点击li移动图片 ul
            var index = this.getAttribute('index')
            var focusWidth=focus.offsetWidth;
            console.log(focusWidth,index);
            animate(ul,-index*focusWidth)
        })
     }
    //  把ol里面的第一个小li添加一个class类
    ol.children[0].className='current'; 
    
})
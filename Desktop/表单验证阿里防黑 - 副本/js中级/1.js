let addClass=(el,className)=>{
    if(el.classList){
        el.classList.add(className)
    }else{
        let newClass=el.className.split(' ')
        newClass.push(className)
        el.className=newClass.join(' ')
    }
}
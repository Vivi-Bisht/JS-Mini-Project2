var a = document.querySelector("#container");
var love = document.querySelector("i");

var flag = 0;

a.addEventListener("dblclick",function(){

    if(flag==0){
    love.style.transform = "translate(-50%,-50%) scale(1.4)"
    love.style.transition = "all ease 0.3s"
    flag = 1;
}

    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)"
        
        if(flag==1){
            love.style.transition = "0s";
            flag = 0;
        }
    },1500)
    
})


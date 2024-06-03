var a = document.querySelector("h4")

var b = document.querySelector("#friend")
flag = 1
b.addEventListener("click",function(){
   if(flag==1){ 
    a.innerHTML="Friend"
    a.style.color="green"
    b.style.backgroundColor="#111"
    b.innerHTML="Remove Friend"
    flag=0
}
   else{
    a.innerHTML="Stranger"
    a.style.color="red"
    b.style.backgroundColor="aqua"
    b.innerHTML="Add Friend"
    flag=1
   }
})
const box1=document.querySelector(".box1")
const box2=document.querySelector(".box2")
const box3=document.querySelector(".box3")
const box4=document.querySelector(".box4")
const box5=document.querySelector(".box5")
const box6=document.querySelector(".box6")
const box7=document.querySelector(".box7")
const box8=document.querySelector(".box8")
const box9=document.querySelector(".box9")
const result=document.querySelector(".result")
let dic={b1:-1,b2:-1,b3:-1,b4:-1,b5:-1,b6:-1,b7:-1,b8:-1,b9:-1}
let k=0
let draw=0
let won=0

function fun1(){
    if(dic.b1==1 && dic.b2==1 && dic.b3==1){
        result.innerHTML='Red Won!'
        won=1
        return true    
    }
    if(dic.b1==1 && dic.b4==1 && dic.b7==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }
    if(dic.b1==1 && dic.b5==1 && dic.b9==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }
    if(dic.b2==1 && dic.b5==1 && dic.b8==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }
    if(dic.b3==1 && dic.b6==1 && dic.b9==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }
    if(dic.b3==1 && dic.b5==1 && dic.b7==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }
    if(dic.b4==1 && dic.b5==1 && dic.b6==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }
    if(dic.b7==1 && dic.b8==1 && dic.b9==1){
        result.innerHTML='Red Won!'
        won=1
        return true
    }

    if(dic.b1==0 && dic.b2==0 && dic.b3==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b1==0 && dic.b4==0 && dic.b7==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b1==0 && dic.b5==0 && dic.b9==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b2==0 && dic.b5==0 && dic.b8==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b3==0 && dic.b6==0 && dic.b9==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b3==0 && dic.b5==0 && dic.b7==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b4==0 && dic.b5==0 && dic.b6==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    if(dic.b7==0 && dic.b8==0 && dic.b9==0){
        result.innerHTML='Blue Won!'
        won=1
        return true
    }
    return false
    

}
box1.addEventListener('click',()=>{
    console.log("hi")
    if(dic.b1==-1 && won==0)
    {
        if(k==0){
            box1.style.backgroundColor="blue"
            k=1
            dic.b1=0
        }
        else{
            box1.style.backgroundColor="red"
            k=0
            dic.b1=1
        }
        draw++
        fun1()
        if(draw==9){
            result.innerHTML="Tie"
        }
    }
})
box2.addEventListener('click',()=>{
    if(dic.b2==-1 && won==0)
    {
        if(k==0){
            box2.style.backgroundColor="blue"
            k=1
            dic.b2=0
        }
        else{
            box2.style.backgroundColor="red"
            k=0
            dic.b2=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box3.addEventListener('click',()=>{
    if(dic.b3==-1 && won==0)
    {
        if(k==0){
            box3.style.backgroundColor="blue"
            k=1
            dic.b3=0
        }
        else{
            box3.style.backgroundColor="red"
            k=0
            dic.b3=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box4.addEventListener('click',()=>{
    if(dic.b4==-1 && won==0)
    {
        if(k==0){
            box4.style.backgroundColor="blue"
            k=1
            dic.b4=0
        }
        else{
            box4.style.backgroundColor="red"
            k=0
            dic.b4=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box5.addEventListener('click',()=>{
    if(dic.b5==-1 && won==0)
    {
        if(k==0){
            box5.style.backgroundColor="blue"
            k=1
            dic.b5=0
        }
        else{
            box5.style.backgroundColor="red"
            k=0
            dic.b5=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box6.addEventListener('click',()=>{
    if(dic.b6==-1 && won==0)
    {
        if(k==0){
            box6.style.backgroundColor="blue"
            k=1
            dic.b6=0
        }
        else{
            box6.style.backgroundColor="red"
            k=0
            dic.b6=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box7.addEventListener('click',()=>{
    if(dic.b7==-1 && won==0)
    {
        if(k==0){
            box7.style.backgroundColor="blue"
            k=1
            dic.b7=0
        }
        else{
            box7.style.backgroundColor="red"
            k=0
            dic.b7=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box8.addEventListener('click',()=>{
    if(dic.b8==-1 && won==0)
    {
        if(k==0){
            box8.style.backgroundColor="blue"
            k=1
            dic.b8=0
        }
        else{
            box8.style.backgroundColor="red"
            k=0
            dic.b8=1
        }
        draw++
        if(!fun1() && draw==9){
            result.innerHTML="Tie"
        }
    }
})
box9.addEventListener('click',()=>{
    if(dic.b9==-1 && won==0)
    {
    if(k==0){
        box9.style.backgroundColor="blue"
        k=1
        dic.b9=0
    }        
    else{
        box9.style.backgroundColor="red"
        k=0
        dic.b9=1
    }
    draw++
    if(!fun1() && draw==9){
        result.innerHTML="Tie"
    }
    }
})
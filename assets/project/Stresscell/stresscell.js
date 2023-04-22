const conditions = document.querySelectorAll("#condition");
const working1 = document.querySelector("#working1");
const working2 = document.querySelector("#working2");

working1.classList.add("notWorking");
working2.classList.add("notWorking");

conditions.forEach((el)=>{
    el.addEventListener("change",(e)=>{
        if(el.value == 1){
            working1.classList.remove("notWorking");
            working2.classList.add("notWorking");
        }else{
            working2.classList.remove("notWorking");
            working1.classList.add("notWorking");
        }
    })
})
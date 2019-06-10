// === 3개. 같으면
//const age = prompt("how old"); //alert랑 비슷
//console.log(age);

const title= document.querySelector("#title");
const base_color= "white";
const other_color ="#16a085";

function handleClick(){
    const current_color= title.style.color;
    if(current_color ===  base_color)
    {
        title.style.color= other_color;
    }
    else
    {
        title.style.color= base_color;
    }
}
//flatuicolors.com

function init(){
    title.style.color= base_color;
    title.addEventListener("click", handleClick);
    //mouseenter 마우스가 들어갈때마다 반응함
}
init();
const title= document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
 title.classList.toggle(CLICKED_CLASS);
}


function init(){
     title.addEventListener("click", handleClick);
    //mouseenter 마우스가 들어갈때마다 반응함
}
init();

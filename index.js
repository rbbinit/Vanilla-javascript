const title= document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass= title.className;
    const hasClass= title.classList.contains(CLICKED_CLASS);
    if(hasClass) {
        title.classList.remove(CLICKED_CLASS);
    }
    else
    {
        title.classList.add(CLICKED_CLASS);
    }


    //if(currentClass !== CLICKED_CLASS)
    //{
     //   title.className= CLICKED_CLASS;
    //} else {
     //   title.className= "";
    //}
}


function init(){
     title.addEventListener("click", handleClick);
    //mouseenter 마우스가 들어갈때마다 반응함
}
init();

function handleOffline(){
    console.log("lalala");
}

function handleOnline(){
    console.log("welcome  ");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
const clockContainer= document.querySelector(".js-clock");
const clockTitle= clockContainer.querySelector("h1");

function getRealTime(){
    const date= new Date();
     //date는 클래스. object다
    const minutes = date.getMinutes();
    const hours= date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText= ` ${hours <10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds <10 ? `0${seconds}` : seconds
    }`;
    //if seconds <10 ? `0${seconds} : ${seconds};
}

function init(){
 //우선 실제 시간 얻기
   getRealTime();
   setInterval(getRealTime, 1000);
}
//00 01 로 나오게 하려면?
// ternay operator 삼항연산자
init();
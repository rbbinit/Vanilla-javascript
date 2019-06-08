const bb = {
    name:"a",
    age :33,
    gender:"male",
    moives : ["hoho", "aa"],
    food : [ {name:"kimchi", fatty:false}, 
    {name:"bur", fatty:true}]
    }
//object안에 array가 있네
//rule
// , 를 빼먹지말기

console.log(bb.gender);
bb.age= 32; //change가능
console.log(bb);
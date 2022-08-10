let maryte = 5;
let jonukas = 5;

let bendriObuoliai = maryte + jonukas;
console.log(bendriObuoliai);  


bendriObuoliai += 10;
console.log(bendriObuoliai);
bendriObuoliai += 10;
console.log(bendriObuoliai);
bendriObuoliai -=5;
console.log(bendriObuoliai);
bendriObuoliai -=5;
console.log(bendriObuoliai);

if( maryte>jonukas){
    console.log("Maryte turi daugiau obuoliu negu Jonas")
}else if(jonukas>maryte){
    console.log("Jonas turi daugiau obuoliu negu Maryte")
}else if (jonukas = maryte){
    console.log("Atiduokim obuolius editai")
}
bendriObuoliai = 11;
console.log(bendriObuoliai);
switch(bendriObuoliai){
    case 10 :
        console.log("Jus turite " +bendriObuoliai +" obuoliu")
    break;
    default:
        console.log("Jus turite daugiau arba maziau nei 10 obuoliu");
}

vaisiai = ['Obuolys','Braske','Arbuzas','Vysnia','Silauoge','Slyva'];
console.log(vaisiai[2],vaisiai[4]);

for(let i = 0; i < vaisiai.length; i++){
    console.log(vaisiai[i])
}
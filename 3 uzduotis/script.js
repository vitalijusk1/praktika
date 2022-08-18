// pirma uzd

class Futbolistas {
    constructor(greitis, vardas, pavarde, ugis, amzius) {
      this.greitis = greitis;
      this.vardas = vardas;
      this.pavarde = pavarde;
      this.ugis = ugis;
      this.amzius = amzius;
      
    }
  }
  const fut1 = new Futbolistas(10, "Petras", "Petraitis", 186, 18);
  const fut2 = new Futbolistas(14, "Tomas", "Tomaitis", 179, 19);
  const fut3 = new Futbolistas(9, "Marius", "Maraitis", 188, 21);
  const array = [fut1, fut2, fut3]
  const greiciai = array.map(object =>{
    return object.greitis
  });
  const max = Math.max(...greiciai);
  console.log("Didziausias greitis: "+max);
  array.forEach((item) => {
    let p = document.createElement('p');
    str = JSON.stringify("Vardas: " + item.vardas + " Pavarde: " + item.pavarde
    + " Greitis: " + item.greitis + " Ugis: "+ item.ugis + " Amzius: "+item.amzius);
    p.textContent = str;
    document.body.appendChild(p);
    if(item.greitis == max){
      let b = document.createElement('p');
      b.textContent = "Greicausiai bega "+item.vardas+" , "+item.greitis+"km/h greiciu";
      document.body.appendChild(b);
    }
})







// antra uzd

// class Masina {
//     constructor(greitis, pavadinimas, kelias) {
//       this.greitis = greitis;
//       this.pavadinimas = pavadinimas;
//       this.kelias = kelias;
//     };
//   };
// let pavadinimas = document.getElementById("pavadinimas");
// let greitis = document.getElementById("greitis");
// let kelias = document.getElementById("nuvkelias");
// let mygtukas = document.getElementById("skaiciuoti");
// let paspaudimas = 0;
// let arr = [];

// mygtukas.addEventListener("click", function(){
//   console.log(paspaudimas);

//   if(paspaudimas == 0){
//     let car1 = new Masina(greitis.value, pavadinimas.value, kelias.value);
//     arr.push(car1);
//     console.log(car1);
//     console.log(car1.nuvkelias)
//     console.log(car1.greitis)
//   }
//   if(paspaudimas == 1){
//     let car2 = new Masina(greitis.value, pavadinimas.value, kelias.value);
//     arr.push(car2)
//     console.log(car2);
//   }
//   if(paspaudimas == 2){
//     let car3 = new Masina(greitis.value, pavadinimas.value, kelias.value);
//     arr.push(car3)
//     console.log(car3);
//   }
//   if(paspaudimas == 3){
//     let car4 = new Masina(greitis.value, pavadinimas.value, kelias.value);
//     arr.push(car4)
//     console.log(car4);
//   }
//   if(paspaudimas == 4){
//     let car5 = new Masina(greitis.value, pavadinimas.value, kelias.value);
//     arr.push(car5)
//     console.log(car5);
//     console.log(arr);
//     const greiciai = arr.map(object =>{
//       return object.greitis
//     });
//     const max = Math.max(...greiciai);
//     console.log("Didziausias greitis: "+max);
//     arr.forEach((item) => {
      
//       let p = document.createElement('p');
//       str = JSON.stringify("Pavadinimas: " + item.pavadinimas+"," + " Greitis: " + item.greitis+"km/h"+ " , " + " Nuvaziuotas kelias: "+ item.kelias +"km");
//       p.textContent = str;
//       document.body.appendChild(p);
//       if (item.greitis == max){
//         let maxGreitis = document.createElement('p')
//         maxGreitis.textContent = "Didziausia greiti pasiekia: "+item.pavadinimas+" Masina, ji vaziuoja "+item.greitis+"km/h greiciu ir nuvaziuos didziausia kelia"
//         document.body.appendChild(maxGreitis);
//       }
//     })
   
    
//   }
//   if(paspaudimas == 5){
//     paspaudimas = -1;
    
//   }
//   paspaudimas++;
//   document.getElementById("track").innerHTML = "Jau pasirinkta: "+paspaudimas+ "/5 masinu"

// })

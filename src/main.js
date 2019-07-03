const divImgs =document.getElementById("div-imgs");
// Traemos el contenedor
//let imagen=[]; //creamos un arreglo donde se van a guardar las imágenes
let parrafo=[]; // creamos un arreglo donde se van a guardar los nombres
//const allResults = data.obtainAllData(RICKANDMORTY);


const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");
let claseGeneral = document.getElementsByClassName("generalclass");
for (let i = 0; i < claseGeneral.length; i++);
let genderOneButton = document.getElementById("Female");
let clickFemale = genderOneButton.addEventListener('click', claseGeneral);
console.log(event.target);

//ejecutar filtrar por género femenino
const resultGender1 = data.filterDataGender(s1Data, "clickFemale");
data.viewData(resultGender1, divImgs);

//
// //ejecutar filtrar por temporada
// const allData = data.obtainAllData(RICKANDMORTY);
// const s1Data = data.filterDataSeason(allData, "season1");

// //ejecutar filtrar por status - vivo
// const resultStatus1 = data.filterDataStatus(s1Data, "Alive");
// data.viewData(resultStatus1, divImgs);


// //ejecutar filtrar por status - muerto
// const resultStatus11 = data.filterDataStatus(s1Data, "Dead");
// data.viewData(resultStatus11, divImgs);


// //ejecutar filtrar por origen - Tierra
// const resultOrigin1 = data.filterDataOrigin (s1Data, "Earth");
// data.viewData(resultOrigin1, divImgs);



// //ejecutar filtrar por origen - unknown

// const resultOrigin11 = data.filterDataOrigin (s1Data, "unknown");
// data.viewData(resultOrigin11, divImgs);


// let ordenar = () => {
//     let imprimir = document.getElementById("div-imgs");
//     imprimir.innerHTML = '';
//     let template ='';
//     for(let alldata of RICKANDMORTY.results){
//         template+=  `<div class="data-card">
//           <div class="card">
//            <div class="img">
//             <img class="character-img" src="${results.image}" />
//              </div>
//                 <div class="info">
//                     <p> class="character-name"> ${results.name} </p>
//                     <p> Especie: ${results.species}</p>
//                     <p> Origen: ${results.origin.name}</p>
//                   </div>
//               </div>
        
//        </div>`
//     }
//   imprimir.innerHTML= `<ul>${(template)}</ul>`
//  }
//  imprimir();




// const filterAction = event => {
//     let filterValue = event.target.value;
//     let splitFilter = filterValue.split('.');
//     let key = splitFilter[0];
//     let value = splitFilter[1];
//     console.log(filterValue);
//     let result = window.filterData(key,value);
//     allData.innerHTML = result;
// }

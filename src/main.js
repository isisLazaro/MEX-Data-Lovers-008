// // Traemos el contenedor
// //let imagen=[]; //creamos un arreglo donde se van a guardar las imágenes
// let parrafo=[]; // creamos un arreglo donde se van a guardar los nombres
//const allResults = data.obtainAllData(RICKANDMORTY);

//Llamando al contenedor
const divImgs = document.getElementById("div-imgs");
//Lllamando a toda la data de Rickandmorty.js
const allData = data.obtainAllData(RICKANDMORTY);
//Ejecutando función para ver toda la data por default
data.viewData(allData, divImgs);


// allCards = document.getElementById("all-cards");

// let divCard = [];
// let imgAvatar = [];
// let divCharacterInfo = [];
// let hName = [];
// let pStatus = [];
// let pSpecies = [];
// let pType = [];
// let pGender = [];
// let pOrigin = [];
// let pLocation = [];

// for (let i = 0; i < 16 ; i++) {
//     divCard[i] = document.createElement("div");
//     divCard[i].className = "card";
//     allCards.appendChild(divCard[i]);
//         imgAvatar[i] = document.createElement("img");
//         imgAvatar[i].src = allData[i].image;
//         divCard[i].appendChild(imgAvatar[i]);
//         divCharacterInfo[i] = document.createElement("div");
//         divCharacterInfo[i].className = "characterInfo";
//         divCard[i].appendChild(divCharacterInfo[i]);
//             hName[i] = document.createElement("h3");
//             hName[i].className = "nameCharacter"
//             hName[i].innerHTML = allData[i].name;
//             divCharacterInfo[i].appendChild(hName[i]);
//             pStatus[i] = document.createElement("p");
//             pStatus[i].innerHTML = "status: "+ allData[i].status;
//             divCharacterInfo[i].appendChild(pStatus[i]);
//             pSpecies[i] = document.createElement("p");
//             pSpecies[i].innerHTML = "species: "+ allData[i].species;
//             divCharacterInfo[i].appendChild(pSpecies[i]);
//             pType[i] = document.createElement("p");
//             pType[i].innerHTML = "type: "+ allData[i].type;
//             divCharacterInfo[i].appendChild(pType[i]);
//             pGender[i] = document.createElement("p");
//             pGender[i].innerHTML = "gender: "+ allData[i].gender;
//             divCharacterInfo[i].appendChild(pGender[i]);
//             pOrigin[i] = document.createElement("p");
//             pOrigin[i].innerHTML = "origin: "+ allData[i].origin.name;
//             divCharacterInfo[i].appendChild(pOrigin[i]);
//             pLocation[i] = document.createElement("p");
//             pLocation[i].innerHTML = "location: "+ allData[i].location.name;
//             divCharacterInfo[i].appendChild(pLocation[i]);
// }

//Ejecutando función para filtrar por género
const maleButton = document.getElementById("Male");
maleButton.addEventListener("click", event => {
   divImgs.innerHTML = '';
   const dataGender2 = data.filterDataGender(allData, "Male");
   data.viewData(dataGender2, divImgs);
});


const femaleButton = document.getElementById("Female");
femaleButton.addEventListener("click", event => {
    divImgs.innerHTML = '';
    const dataGender = data.filterDataGender(allData, "Female");
    data.viewData(dataGender, divImgs);
})

const season1Button = document.getElementById("season-1");
 season1Button.addEventListener("click", event => {
    divImgs.innerHTML = '';
    const s1Data = data.filterDataSeason(allData, "season1");
    data.viewData(s1Data, divImgs);
 })



const season2Button = document.getElementById("season-2");
season2Button.addEventListener("click", event => {
    divImgs.innerHTML = '';
    const s2Data = data.filterDataSeason(allData, "season2");
    data.viewData(s2Data, divImgs);

})

const season3Button = document.getElementById("season-3");
season3Button.addEventListener("click", event => {
    divImgs.innerHTML = '';
    const s3Data = data.filterDataSeason(allData, "season3");
    data.viewData(s3Data, divImgs);

})


const azButton = document.getElementById("A-Z");
azButton.addEventListener("click", () => {
    divImgs.innerHTML = '';
    data.sortData(allData, "name", "AZ");
    data.viewData(allData, divImgs);
});

const zaButton = document.getElementById("Z-A");
zaButton.addEventListener("click", () => {
    divImgs.innerHTML = '';
    data.sortData(allData, "name", "ZA");
    data.viewData(allData, divImgs);
});


// const zaButton = document.getElementById("Z-A");
// zaButton.addEventListener("click", event => {
//     divImgs.innerHTML = '';
//     const orderDesc = data.sortData.a.name.localeCompare(b.name)(s1Data, "name", "ZA");
//     data.viewData(orderDesc, divImgs);



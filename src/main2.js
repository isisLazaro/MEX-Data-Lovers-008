//ejecutar filtrar por temporada
const divImgs2 =document.getElementById("div-imgs2");
const allData = data.obtainAllData(RICKANDMORTY);
const s2Data = data.filterDataSeason(allData, "season2");

allCards = document.getElementById("all-cards");

let divCard = [];
let imgAvatar = [];
let divCharacterInfo = [];
let hName = [];
let pStatus = [];
let pSpecies = [];
let pType = [];
let pGender = [];
let pOrigin = [];
let pLocation = [];

for (let i = 0; i < 16 ; i++) {
    divCard[i] = document.createElement("div");
    divCard[i].className = "card";
    allCards.appendChild(divCard[i]);
        imgAvatar[i] = document.createElement("img");
        imgAvatar[i].src = s2Data[i].image;
        divCard[i].appendChild(imgAvatar[i]);
        divCharacterInfo[i] = document.createElement("div");
        divCharacterInfo[i].className = "characterInfo";
        divCard[i].appendChild(divCharacterInfo[i]);
            hName[i] = document.createElement("h3");
            hName[i].className = "nameCharacter"
            hName[i].innerHTML = s2Data[i].name;
            divCharacterInfo[i].appendChild(hName[i]);
            pStatus[i] = document.createElement("p");
            pStatus[i].innerHTML = "status: "+ s2Data[i].status;
            divCharacterInfo[i].appendChild(pStatus[i]);
            pSpecies[i] = document.createElement("p");
            pSpecies[i].innerHTML = "species: "+ s2Data[i].species;
            divCharacterInfo[i].appendChild(pSpecies[i]);
            pType[i] = document.createElement("p");
            pType[i].innerHTML = "type: "+ s2Data[i].type;
            divCharacterInfo[i].appendChild(pType[i]);
            pGender[i] = document.createElement("p");
            pGender[i].innerHTML = "gender: "+ s2Data[i].gender;
            divCharacterInfo[i].appendChild(pGender[i]);
            pOrigin[i] = document.createElement("p");
            pOrigin[i].innerHTML = "origin: "+ s2Data[i].origin.name;
            divCharacterInfo[i].appendChild(pOrigin[i]);
            pLocation[i] = document.createElement("p");
            pLocation[i].innerHTML = "location: "+ s2Data[i].location.name;
            divCharacterInfo[i].appendChild(pLocation[i]);
}


// //ejecutar filtrar por status - vivo
// const resultStatus2 = data.filterDataStatus(s2Data, "Alive");
// data.viewData(resultStatus2, divImgs2);


// //ejecutar filtrar por status - muerto
// const resultStatus22 = data.filterDataStatus(s2Data, "Dead");
// data.viewData(resultStatus22, divImgs2);


// //ejecutar filtrar por género femenino
// const resultGender2 = data.filterDataGender(s2Data, "Female");
// data.viewData(resultGender2, divImgs2);



// //ejecutar filtrar por género masculino
// const resultGender22 = data.filterDataGender(s2Data, "Male");
// data.viewData(resultGender22, divImgs2);

// //ejecutar filtrar por origen - Tierra
// const resultOrigin2 = data.filterDataOrigin (s2Data, "Earth");
// data.viewData(resultOrigin2, divImgs2);



// //ejecutar filtrar por origen - unknown

// const resultOrigin22 = data.filterDataOrigin (s2Data, "unknown");
// data.viewData(resultOrigin22, divImgs2);
//ejecutar filtrar por temporada
const divImgs3 =document.getElementById("div-imgs3");
const allData = data.obtainAllData(RICKANDMORTY);
const s3Data = data.filterDataSeason(allData, "season3");

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
        imgAvatar[i].src = s3Data[i].image;
        divCard[i].appendChild(imgAvatar[i]);
        divCharacterInfo[i] = document.createElement("div");
        divCharacterInfo[i].className = "characterInfo";
        divCard[i].appendChild(divCharacterInfo[i]);
            hName[i] = document.createElement("h3");
            hName[i].className = "nameCharacter"
            hName[i].innerHTML = s3Data[i].name;
            divCharacterInfo[i].appendChild(hName[i]);
            pStatus[i] = document.createElement("p");
            pStatus[i].innerHTML = "status: "+ s3Data[i].status;
            divCharacterInfo[i].appendChild(pStatus[i]);
            pSpecies[i] = document.createElement("p");
            pSpecies[i].innerHTML = "species: "+ s3Data[i].species;
            divCharacterInfo[i].appendChild(pSpecies[i]);
            pType[i] = document.createElement("p");
            pType[i].innerHTML = "type: "+ s3Data[i].type;
            divCharacterInfo[i].appendChild(pType[i]);
            pGender[i] = document.createElement("p");
            pGender[i].innerHTML = "gender: "+ s3Data[i].gender;
            divCharacterInfo[i].appendChild(pGender[i]);
            pOrigin[i] = document.createElement("p");
            pOrigin[i].innerHTML = "origin: "+ s3Data[i].origin.name;
            divCharacterInfo[i].appendChild(pOrigin[i]);
            pLocation[i] = document.createElement("p");
            pLocation[i].innerHTML = "location: "+ s3Data[i].location.name;
            divCharacterInfo[i].appendChild(pLocation[i]);
}




// //ejecutar filtrar por status - vivo
// const resultStatus3 = data.filterDataStatus(s3Data, "Alive");
// data.viewData(resultStatus3, divImgs3);


// //ejecutar filtrar por status - muerto
// const resultStatus33 = data.filterDataStatus(s3Data, "Dead");
// data.viewData(resultStatus33, divImgs3);


// //ejecutar filtrar por género femenino
// const resultGender3 = data.filterDataGender(s3Data, "Female");
// data.viewData(resultGender3, divImgs3);



// //ejecutar filtrar por género masculino
// const resultGender33 = data.filterDataGender(s3Data, "Male");
// data.viewData(resultGender33, divImgs3);

// //ejecutar filtrar por origen - Tierra
// const resultOrigin3 = data.filterDataOrigin (s3Data, "Earth");
// data.viewData(resultOrigin3, divImgs3);



// //ejecutar filtrar por origen - unknown

// const resultOrigin33 = data.filterDataOrigin (s3Data, "unknown");
// data.viewData(resultOrigin33, divImgs3);
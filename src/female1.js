const divImgs =document.getElementById("div-imgs");
const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");

//ejecutar filtrar por género femenino
const resultGender1 = data.filterDataGender(s1Data, "Female");
let genderOneButton = document.getElementById("female1-button");

data.viewData(resultGender1, divImgs);
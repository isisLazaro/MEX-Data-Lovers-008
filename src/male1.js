const divImgs =document.getElementById("div-imgs");
const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");

//ejecutar filtrar por género masculino
const resultGender11 = data.filterDataGender(s1Data, "Male");
data.viewData(resultGender11, divImgs);

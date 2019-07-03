const divImgs =document.getElementById("div-imgs");
const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");

//ejecutar filtrar por status - vivo
const resultStatus1 = data.filterDataStatus(s1Data, "Alive");
data.viewData(resultStatus1, divImgs);
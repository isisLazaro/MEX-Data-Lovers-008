const divImgs =document.getElementById("div-imgs");
const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");


//ejecutar filtrar por status - muerto
const resultStatus11 = data.filterDataStatus(s1Data, "Dead");
data.viewData(resultStatus11, divImgs);

const divImgs =document.getElementById("div-imgs");
const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");

//ejecutar filtrar por origen - unknown
const resultOrigin11 = data.filterDataOrigin (s1Data, "unknown");
data.viewData(resultOrigin11, divImgs);
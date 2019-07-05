const divImgs =document.getElementById("div-imgs");
const allData = data.obtainAllData(RICKANDMORTY);
const s1Data = data.filterDataSeason(allData, "season1");

//ejecutar filtrar por origen - Tierra
const resultOrigin1 = data.filterDataOrigin (s1Data, "Earth (Replacement Dimension)");
data.viewData(resultOrigin1, divImgs);
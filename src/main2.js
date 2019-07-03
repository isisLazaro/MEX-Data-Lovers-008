//ejecutar filtrar por temporada
const divImgs2 =document.getElementById("div-imgs2");
const allData = data.obtainAllData(RICKANDMORTY);
const s2Data = data.filterDataSeason(allData, "season2");

//ejecutar filtrar por status - vivo
const resultStatus2 = data.filterDataStatus(s2Data, "Alive");
data.viewData(resultStatus2, divImgs2);


//ejecutar filtrar por status - muerto
const resultStatus22 = data.filterDataStatus(s2Data, "Dead");
data.viewData(resultStatus22, divImgs2);


//ejecutar filtrar por género femenino
const resultGender2 = data.filterDataGender(s2Data, "Female");
data.viewData(resultGender2, divImgs2);



//ejecutar filtrar por género masculino
const resultGender22 = data.filterDataGender(s2Data, "Male");
data.viewData(resultGender22, divImgs2);

//ejecutar filtrar por origen - Tierra
const resultOrigin2 = data.filterDataOrigin (s2Data, "Earth");
data.viewData(resultOrigin2, divImgs2);



//ejecutar filtrar por origen - unknown

const resultOrigin22 = data.filterDataOrigin (s2Data, "unknown");
data.viewData(resultOrigin22, divImgs2);
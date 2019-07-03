//ejecutar filtrar por temporada
const divImgs3 =document.getElementById("div-imgs3");
const allData = data.obtainAllData(RICKANDMORTY);
const s3Data = data.filterDataSeason(allData, "season3");

//ejecutar filtrar por status - vivo
const resultStatus3 = data.filterDataStatus(s3Data, "Alive");
data.viewData(resultStatus3, divImgs3);


//ejecutar filtrar por status - muerto
const resultStatus33 = data.filterDataStatus(s3Data, "Dead");
data.viewData(resultStatus33, divImgs3);


//ejecutar filtrar por género femenino
const resultGender3 = data.filterDataGender(s3Data, "Female");
data.viewData(resultGender3, divImgs3);



//ejecutar filtrar por género masculino
const resultGender33 = data.filterDataGender(s3Data, "Male");
data.viewData(resultGender33, divImgs3);

//ejecutar filtrar por origen - Tierra
const resultOrigin3 = data.filterDataOrigin (s3Data, "Earth");
data.viewData(resultOrigin3, divImgs3);



//ejecutar filtrar por origen - unknown

const resultOrigin33 = data.filterDataOrigin (s3Data, "unknown");
data.viewData(resultOrigin33, divImgs3);
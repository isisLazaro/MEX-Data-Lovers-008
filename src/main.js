// // Traemos el contenedor
// //let imagen=[]; //creamos un arreglo donde se van a guardar las imágenes
// let parrafo=[]; // creamos un arreglo donde se van a guardar los nombres
//const allResults = data.obtainAllData(RICKANDMORTY);

// // //Llamando al contenedor
// const divImgs = document.getElementById("div-imgs");
// // //Lllamando a toda la data de Rickandmorty.js
// const allData = window.data.obtainAllData(window.RICKANDMORTY);
// //Ejecutando función para ver toda la data por default
//  const s1Data = window.data.filterDataSeason(allData, "season1");
//     window.data.viewData(s1Data, divImgs);


// // allCards = document.getElementById("all-cards");

// // let divCard = [];
// // let imgAvatar = [];
// // let divCharacterInfo = [];
// // let hName = [];
// // let pStatus = [];
// // let pSpecies = [];
// // let pType = [];
// // let pGender = [];
// // let pOrigin = [];
// // let pLocation = [];


// //Ejecutando función para filtrar por género
// const maleButton = document.getElementById("Male");
// maleButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const dataGender2 = window.data.filterData(s1Data, "gender", "Male");
//    window.data.viewData(dataGender2, divImgs);
// });


// const femaleButton = document.getElementById("Female");
// femaleButton.addEventListener("click", () => {
//     divImgs.innerHTML = '';
//     const dataGender = window.data.filterData(s1Data, "gender", "Female");
//     window.data.viewData(dataGender, divImgs);
// });

// const unknownGenderButton = document.getElementById("unknown");
//  unknownGenderButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const unknownGender = window.data.filterData(s1Data, "gender", "unknown");
//    window.data.viewData(unknownGender, divImgs);
// });

// const genderlessButton = document.getElementById("Genderless");
// genderlessButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const genderless = window.data.filterData(s1Data, "gender", "Genderless");
//    window.data.viewData(genderless, divImgs);
// });

// const earthC137Button = document.getElementById("Earth (C-137)");
// earthC137Button.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const earth137 = window.data.filterDataOrigin(s1Data, "Earth (C-137)" );
//  window.data.viewData(earth137, divImgs);
// });

// const earthReplacementButton = document.getElementById("Earth (Replacement Dimension)");
// earthReplacementButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const earthReplacement = window.data.filterDataOrigin(s1Data, "Earth (Replacement Dimension)" );
//    window.data.viewData(earthReplacement, divImgs);
// });


// const unknownOriginButton = document.getElementById("originUnknown");
// unknownOriginButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const unknownOrigin = window.data.filterDataOrigin(s1Data, "unknown" );
//    window.data.viewData(unknownOrigin, divImgs);
// });

// const aliveButton = document.getElementById("Alive");
// aliveButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const alive = window.data.filterData(s1Data, "status", "Alive");
//    window.data.viewData(alive, divImgs);
// });

// const deadButton = document.getElementById("Dead");
// deadButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const dead = window.data.filterData(s1Data, "status", "Dead");
//    window.data.viewData(dead, divImgs);
// });

// const unknownButton = document.getElementById("unknownStatus");
// unknownButton.addEventListener("click", () => {
//    divImgs.innerHTML = '';
//    const unknownStatus = window.data.filterData(s1Data, "status", "unknown");
//    window.data.viewData(unknownStatus, divImgs);
// });

// // const season1Button = document.getElementById("season-1");
// //  season1Button.addEventListener("click", event => {
// //     divImgs.innerHTML = '';
// //     const s1Data = data.filterDataSeason(allData, "season1");
// //     data.viewData(s1Data, divImgs);
// //  })



// // const season2Button = document.getElementById("season-2");
// // season2Button.addEventListener("click", event => {
// //     divImgs.innerHTML = '';
// //     const s2Data = data.filterDataSeason(allData, "season2");
// //     data.viewData(s2Data, divImgs);

// // })

// // const season3Button = document.getElementById("season-3");
// // season3Button.addEventListener("click", event => {
// //     divImgs.innerHTML = '';
// //     const s3Data = data.filterDataSeason(allData, "season3");
// //     data.viewData(s3Data, divImgs);

// // })

const rickandmorty = window.RICKANDMORTY.results; // all data

const seasonSelect  = document.getElementById("season-select");
const genderSelect  = document.getElementById("gender-select");
const statusSelect  = document.getElementById("status-select");
const orderSelect  = document.getElementById("order-select");
const dispInfo      = document.getElementById("disp-info");
const cardContainer = document.getElementById("card-container");

seasonSelect.selectedIndex = 0;
genderSelect.selectedIndex = 0;
statusSelect.selectedIndex = 0;
orderSelect.selectedIndex = 0;


const viewData = (data, idContenedor) => {
  let cardTemplate = "";
  data.forEach(element => {
    cardTemplate += `
      <div class="card">
          <img class = "imgCharacter" src=${element.image}>
          <div class="characterInfo">
              <h3 class="nameCharacter">${element.name}</h3>
              <p class="dataCharacter">status: ${element.status}</p>
              <p class="dataCharacter">species: ${element.species}</p>
              <p class="dataCharacter">type: ${element.type}</p>
              <p class="dataCharacter">gender: ${element.gender}</p>
              <p class="dataCharacter">origin: ${element.origin.name}</p>
              <p class="dataCharacter">location: ${element.location.name}</p>
          </div>
      </div>`;
  });
  idContenedor.innerHTML = cardTemplate;
};
const displayData = () => {
  let dataSet;
  cardContainer.innerHTML = '';

  if (seasonSelect.selectedIndex == 0) {
    dataSet = rickandmorty;
  } 
  else {
    dataSet = window.data.filterDataSeason(rickandmorty, seasonSelect.value);
  }

  if (genderSelect.selectedIndex != 0) {
    dataSet = window.data.filterData(dataSet, "gender", genderSelect.value);
  }
  if (statusSelect.selectedIndex != 0) {
    dataSet = window.data.filterData(dataSet, "status", statusSelect.value);
  }
  window.data.sortData(dataSet, orderSelect.value);
  viewData(dataSet, cardContainer);
  dispInfo.value = dataSet.length + " characters";
};

displayData();

seasonSelect.addEventListener('change', () => displayData());
genderSelect.addEventListener('change', () => displayData());
statusSelect.addEventListener('change', () => displayData());
orderSelect.addEventListener('change', () => displayData());

// const azButton = document.getElementById("A-Z");
// azButton.addEventListener("click", () => {
//     divImgs.innerHTML = '';
//     window.data.sortData(s1Data, "name", "AZ");
//     window.data.viewData(s1Data, divImgs);
// });

// const zaButton = document.getElementById("Z-A");
// zaButton.addEventListener("click", () => {
//     divImgs.innerHTML = '';
//     window.data.sortData(s1Data, "name", "ZA");
//     window.data.viewData(s1Data, divImgs);
// });


// const zaButton = document.getElementById("Z-A");
// zaButton.addEventListener("click", event => {
//     divImgs.innerHTML = '';
//     const orderDesc = data.sortData.a.name.localeCompare(b.name)(s1Data, "name", "ZA");
//     data.viewData(orderDesc, divImgs);



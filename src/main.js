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
  let text1, text2 = "", text3 = "", text4 = "", text5 ="";
  cardContainer.innerHTML = '';

  if (seasonSelect.selectedIndex == 0) {
    dataSet = rickandmorty;
    text1 = `All seasons`;
  } 
  else {
    dataSet = window.data.filterDataSeason(rickandmorty, seasonSelect.value);
    text1 = `${seasonSelect.value}`;
  }
  const population = dataSet.length;
  if (genderSelect.selectedIndex != 0) {
    dataSet = window.data.filterData(dataSet, "gender", genderSelect.value);
    text2 = genderSelect.value.toLowerCase();
    text4 = `${window.data.computeStats(dataSet.length, population).toFixed(2)}% ${text2} characters`;
  }
  if (statusSelect.selectedIndex != 0) {
    dataSet = window.data.filterData(dataSet, "status", statusSelect.value);
    text3 = `with ${statusSelect.value.toLowerCase()} status`;
    if (statusSelect.value == "Dead") {
      text5 = `Mortality rate: ${window.data.computeStats(dataSet.length, population).toFixed(2)}% `;
    }
  }
  dispInfo.value = `In ${text1}:
  ${dataSet.length} ${text2} characters ${text3}
  ${text4}
  ${text5}`;
  window.data.sortData(dataSet, orderSelect.value);
  viewData(dataSet, cardContainer);
};

displayData();

seasonSelect.addEventListener('change', () => displayData());
genderSelect.addEventListener('change', () => displayData());
statusSelect.addEventListener('change', () => displayData());
orderSelect.addEventListener('change', () => displayData());

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const toogleModal = () => modal.classList.toggle("show-modal");
trigger.addEventListener("click", toogleModal);
closeButton.addEventListener("click", toogleModal);
window.addEventListener("click", event => {
  if (event.target === modal) {
    toogleModal();
  }
});
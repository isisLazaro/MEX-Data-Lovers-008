window.data = {

  viewData : (data, idContenedor) => {
    let imagen = [];
    for (let i = 0; i < data.length; i++) {
      imagen[i] = document.createElement('img');
      imagen[i].src = data[i].image;
      // imagen[i].width = 250;
      idContenedor.appendChild(imagen[i]);
    }
  },

  obtainAllData : (data) => {
    // se obtiene de RICKANDMORTY.js TODOS los DATOS de TODOS los PERSONAJES 
    const valores = Object.values(data); // {info:{}, results:[{}]}
    characterData = valores[1]; // characterData[#] {id,name,status,species,type,gender,origin,location,image,episode,url,created"}
    //console.log(characterData);
    return characterData;
  },

  filterDataSeason : (data, season) => {
    // season - condition ("season1", "season2", "season3")
    let seasonNum = ""; // número de temporada del episodio
    let characterSeason = []; // personajes que salen en la temporada

    for (let i = 0; i < data.length; i++) { // todos los personajes a filtrar
      seasonNum = "";
      let episodios = Object.values(data[i])[9]; // todos los episodios en los que sale un personaje      

      for (let j = 0; j < episodios.length; j++){ // todos los episodios de ese personaje
        let numEpisodio = parseInt(episodios[j].slice(40)); //"https://rickandmortyapi.com/api/episode/" 
        
        if (season !== seasonNum) {
          if (numEpisodio <= 11){ //season1
            seasonNum  = "season1";
          }
          else if (numEpisodio > 11 && numEpisodio <= 21){ //season2
            seasonNum  = "season2";   
          }
          else if (numEpisodio > 21){ //season3
            seasonNum  = "season3";    
          }

          if(season === seasonNum ){
            characterSeason.push(data[i]);
          }  
        }    
      }
    }
    //console.log(characterSeason);
    return characterSeason; // regresa el índice de los personajes que salen en la temporada seleccionada    
  },

  filterDataGender: (data, gender) => {
    const genero = data.filter(personajes => personajes.gender === gender);
    return genero;
   },

  filterDataStatus : (data, status) => {
    const edo = data.filter(algo => algo.status === status);
    return edo;
  },

  filterDataOrigin : (data, name) => {
    const origen = data.filter(personajes => personajes.origin.name === name);
    return origen;
  },

  filterData : (key, value) => {
    // proxima iteración
  },

  sortData : (data, sortBy, sortOrder) => { 
    if (sortBy === "name" && sortOrder === "AZ" ) {
      // Ordenamiento por nombre, ascendente
      data.sort((a, b) => {return a.name.localeCompare(b.name);});
    }
    else if (sortBy === "name" && sortOrder === "ZA" ) {
      // Ordenamiento por nombre, descendente
      data.sort((a, b)=> {return b.name.localeCompare(a.name);});
    }
    if (sortBy === "status" && sortOrder === "AZ" ) {
      // Ordenamiento por nombre, ascendente
      data.sort((a, b) => {return a.status.localeCompare(b.status);});
    }
    else if (sortBy === "status" && sortOrder === "ZA" ) {
      // Ordenamiento por nombre, descendente
      data.sort((a, b)=> {return b.status.localeCompare(a.status);});
    }
    else 
      return 0;
  },

  computeStats : (data) => {
    const totalCharactersSeason = data.length;
    const aliveCharactersSeason = (data.filter(x => x.status === 'Alive')).length;
    const deadCharactersSeason = (data.filter(x => x.status === 'Dead')).length;
    const alive_100 = aliveCharactersSeason / totalCharactersSeason *100;
    const dead_100 = deadCharactersSeason / totalCharactersSeason *100;
    // console.log("Total personajes S1 = ", totalCharactersSeason);
    // console.log("personajes vivos S1 = ", aliveCharactersSeason, " personajes muertos S1 = ", deadCharactersSeason);
    // console.log("% personajes vivos S1 = ", alive_100, " % personajes muertos S1 = ", dead_100);
    // console.log(dead_100);
    return alive_100;
  }
};

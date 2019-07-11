window.data = {

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

  /* filterDataGender: (data, gender) => {
    return data.filter(personajes => personajes.gender === gender);  
   },
  filterDataStatus : (data, status) => {
    return data.filter(algo => algo.status === status);
  },*/
  filterDataOrigin : (data, name) => {
    return data.filter(personajes => personajes.origin.name === name);
  },
  
  filterData : (data, key, condition) => {
    return data.filter(element => element[key] === condition);
  },

  sortData : (data, sortOrder) => { 
    if (sortOrder == 'AZ') {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortOrder == 'ZA') {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (sortOrder == '0') {
      return data.sort((a, b) => a.id>(b.id));      
    }
  },

  computeStats : (data) => {
    const totalCharactersSeason = data.length;
    const aliveCharactersSeason = (data.filter(x => x.status === 'Alive')).length;
    //const deadCharactersSeason = (data.filter(x => x.status === 'Dead')).length;
    const alive_100 = aliveCharactersSeason / totalCharactersSeason *100;
    //const dead_100 = deadCharactersSeason / totalCharactersSeason *100;
    // console.log("Total personajes S1 = ", totalCharactersSeason);
    // console.log("personajes vivos S1 = ", aliveCharactersSeason, " personajes muertos S1 = ", deadCharactersSeason);
    // console.log("% personajes vivos S1 = ", alive_100, " % personajes muertos S1 = ", dead_100);
    // console.log(dead_100);
    return alive_100;
  }
};





// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
 // return 'example';
//};

//window.example = example;
window.data = {
obtainAllData : (RICKANDMORTY) => {
  // se obtiene de RICKANDMORTY.js TODOS los DATOS de TODOS los PERSONAJES
  const valores = Object.values(RICKANDMORTY); // {info:{}, results:[{}]}
  characterData = valores[1]; // characterData[#] {id,name,status,species,type,gender,origin,location,image,episode,url,created"}
  // console.log(characterData[0]);
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
  return characterSeason;// regresa el índice de los personajes que salen en la temporada seleccionada    
},
 
//filtrar por género
 filterDataGender: (data, gender) => {
  const genero = data.filter(personajes => personajes.gender === gender);
  return genero; 
 },

 //filtrar por estatus
 filterDataStatus: (data, status) => {
   const edo = data.filter(personajes => personajes.status === status);
   return edo;
 },

//filtrar por origen
filterDataOrigin: (data, name) => {
  // const origen = data.filter(personajes => personajes.origin.name === "Abadango");
  const origen = data.filter(personajes => personajes.origin.name === name);
  return origen;
  },

  // función para visualizar imágenes
viewData : (data, idContenedor) => {
  let imagen = [];
  for (let i = 0; i < data.length; i++) {
      imagen[i] = document.createElement('img');
      imagen[i].src = data[i].image;
    idContenedor.appendChild(imagen[i]);
   }
  },
 
  // filtrar ascendentemente 
  sortData : (data, sortBy, sortOrder) => { 
    console.log("hola");
    
    if (sortBy === "name" && sortOrder === "AZ" ) {
     //Ordenamiento por nombre, ascendente
      data.sort((a, b) => {return a.name.localeCompare(b.name);});
    }

    //filtrar descendentemente
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


  // sortData: (data, sortBy) => {
//   const orden = data.sort(ascendente(a,b){
//     return a.name.localCompare(b.name);
// });


// }
// sortData: (data, sortBy, sortOrder) => {
//   if (sortBy === 'name') {
//     if (sortOrder === true){
//       return data.slice().sort((a, b) => {
//         let x = a[sortBy].toLowerCase(a-z);
//         let y = b[sortBy].toLowerCase(a-z);
//         if (x < y) {
//             return -1;
//         } if (x > y) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
//   } else if (sortOrder == false){
//     return data.slice().sort((a, b) => {
//       let x = a[sortBy].toLowerCase();
//       let y = b[sortBy].toLowerCase();
//       if (x < y) {
//           return 1;
//       } if (x > y) {
//           return -1;
//       } else {
//           return 0;
//       }
//   });
// }
// }
// }
// 
};
require('../src/data.js');

const rmTestData = [
  { "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {"name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1"},
    "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
    "url": "https://rickandmortyapi.com/api/character/1", 
    "created": "2017-11-04T18:48:46.250Z"}, 
  { "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z"},
  { "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
    "origin": {"name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2"},
    "location": {"name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2"},
    "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/27"],
    "url": "https://rickandmortyapi.com/api/character/6",
    "created": "2017-11-04T19:50:28.250Z"},
  { "id": 32,
    "name": "Bearded Lady",
    "status": "Dead",
    "species": "Alien",
    "type": "Parasite",
    "gender": "Female",
    "origin": {"name": "unknown", "url": ""},
    "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/15"],
    "url": "https://rickandmortyapi.com/api/character/32",
    "created": "2017-11-05T09:18:04.184Z"},
  { "id": 71,
    "name": "Conroy",
    "status": "Dead",
    "species": "Robot",
    "type": "",
    "gender": "unknown",
    "origin": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
    "location": {"name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1"},
    "image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/22"],
    "url": "https://rickandmortyapi.com/api/character/71",
    "created": "2017-11-30T11:35:50.183Z"},
  { "id": 266,
    "name": "Piece of Toast",
    "status": "Alive",
    "species": "unknown",
    "type": "Bread",
    "gender": "Genderless",
    "origin": {"name": "unknown", "url": ""},
    "location": {"name": "Interdimensional Cable", "url": "https://rickandmortyapi.com/api/location/6"},
    "image": "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/17"],
    "url": "https://rickandmortyapi.com/api/character/266",
    "created": "2017-12-31T13:48:58.850Z"}
];

describe('data', () => {
  it('is an object', () => {
    expect(typeof window.data).toBe('object');
  });
});

describe('filterDataSeason', () => {
  it('is a function', () => {
    expect(typeof window.data.filterDataSeason).toBe('function');
  });
  it('Debería regresar 3 elementos que pertenecen a Season 1', () => {
    expect(window.data.filterDataSeason(rmTestData, 'season1')).toEqual([
      { "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {"name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1"},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/1", 
        "created": "2017-11-04T18:48:46.250Z"},  
      { "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"},
      { "id": 266,
        "name": "Piece of Toast",
        "status": "Alive",
        "species": "unknown",
        "type": "Bread",
        "gender": "Genderless",
        "origin": {"name": "unknown", "url": ""},
        "location": {"name": "Interdimensional Cable", "url": "https://rickandmortyapi.com/api/location/6"},
        "image": "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/17"],
        "url": "https://rickandmortyapi.com/api/character/266",
        "created": "2017-12-31T13:48:58.850Z"}
    ]);
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof window.data.filterData).toBe('function');
  });
  it('Debería regresar 3 elementos femeninos', () => {
    expect(window.data.filterData(rmTestData, 'gender', 'Female')).toEqual([
      { "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"},
      { "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "origin": {"name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2"},
        "location": {"name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2"},
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/27"],
        "url": "https://rickandmortyapi.com/api/character/6",
        "created": "2017-11-04T19:50:28.250Z"},
      { "id": 32,
        "name": "Bearded Lady",
        "status": "Dead",
        "species": "Alien",
        "type": "Parasite",
        "gender": "Female",
        "origin": {"name": "unknown", "url": ""},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/15"],
        "url": "https://rickandmortyapi.com/api/character/32",
        "created": "2017-11-05T09:18:04.184Z"}
    ]);
  });
  it('Debería regresar 2 elementos con status dead', () => {
    expect(window.data.filterData(rmTestData, 'status', 'Dead')).toEqual([
      { "id": 32,
        "name": "Bearded Lady",
        "status": "Dead",
        "species": "Alien",
        "type": "Parasite",
        "gender": "Female",
        "origin": {"name": "unknown", "url": ""},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/15"],
        "url": "https://rickandmortyapi.com/api/character/32",
        "created": "2017-11-05T09:18:04.184Z"},
      { "id": 71,
        "name": "Conroy",
        "status": "Dead",
        "species": "Robot",
        "type": "",
        "gender": "unknown",
        "origin": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "location": {"name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1"},
        "image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/22"],
        "url": "https://rickandmortyapi.com/api/character/71",
        "created": "2017-11-30T11:35:50.183Z"}
      ]);
    });
});

describe('filterDataOrigin', () => {
  it('is a function', () =>
    expect(typeof window.data.filterDataOrigin).toBe('function')
  );
  it('Debería regresar 1 elementos con origen Earth (C-137', () => {
    expect(window.data.filterDataOrigin(rmTestData, 'Earth (C-137)')).toEqual([
      { "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"},
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/1", 
        "created": "2017-11-04T18:48:46.250Z"}
      ]);
    }
  );
});

describe('sortData', () => {
  it('is a function', () => 
    expect(typeof window.data.sortData).toBe('function')
  );
  it('Debería regresar todos los elementos en orden alfabético descendente', () => {
    expect(window.data.sortData(rmTestData, "ZA")).toEqual([
      { "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": { "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"},
      { "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {"name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1"},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],
        "url": "https://rickandmortyapi.com/api/character/1", 
        "created": "2017-11-04T18:48:46.250Z"}, 
      { "id": 266,
        "name": "Piece of Toast",
        "status": "Alive",
        "species": "unknown",
        "type": "Bread",
        "gender": "Genderless",
        "origin": {"name": "unknown", "url": ""},
        "location": {"name": "Interdimensional Cable", "url": "https://rickandmortyapi.com/api/location/6"},
        "image": "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/17"],
        "url": "https://rickandmortyapi.com/api/character/266",
        "created": "2017-12-31T13:48:58.850Z"},
      { "id": 71,
        "name": "Conroy",
        "status": "Dead",
        "species": "Robot",
        "type": "",
        "gender": "unknown",
        "origin": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "location": {"name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1"},
        "image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/22"],
        "url": "https://rickandmortyapi.com/api/character/71",
        "created": "2017-11-30T11:35:50.183Z"},
      { "id": 32,
        "name": "Bearded Lady",
        "status": "Dead",
        "species": "Alien",
        "type": "Parasite",
        "gender": "Female",
        "origin": {"name": "unknown", "url": ""},
        "location": {"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"},
        "image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/15"],
        "url": "https://rickandmortyapi.com/api/character/32",
        "created": "2017-11-05T09:18:04.184Z"},
      { "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "origin": {"name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2"},
        "location": {"name": "Abadango", "url": "https://rickandmortyapi.com/api/location/2"},
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/27"],
        "url": "https://rickandmortyapi.com/api/character/6",
        "created": "2017-11-04T19:50:28.250Z"}
    ]);
  });
});
/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
}); */
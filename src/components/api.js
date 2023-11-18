import getRandomNum from "./hooks";

async function Api () {
  const promises = [];
  const pokemonData = [];

  for (let i = 0; i < 6; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNum(1000)}`).then(response => response.json()));
  }

  await Promise.all(promises)
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        pokemonData.push({id: result[i].id, name: result[i].name, sprite: result[i].sprites.front_default})
      }

    })
    .catch(error => {
      console.error(error);
    });

  return pokemonData
}

export default Api;
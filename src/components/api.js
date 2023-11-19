import getRandomNum from "./hooks";

async function Api () {
  const promises = [];
  const pokemonData = [];
  const index = [];

  while (index.length < 15) {
    const num = getRandomNum(1000);

    if (index.find((element) => element === num) === undefined) {
      index.push(num)
    }
  }

  for (let i = 0; i < 15; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${index[i]}`).then(response => response.json()));
  }

  await Promise.all(promises)
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        pokemonData.push({id: result[i].id, name: result[i].name, sprite: result[i].sprites.front_default, seen: false})
      }

    })
    .catch(error => {
      console.error(error);
    });

  return pokemonData
}

export default Api;
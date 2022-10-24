const pokeApi = {};

function convertDetailToPokemon(pokeDetail){
    const poke = new Pokemon();
    poke.name = pokeDetail.name;
    poke.number = pokeDetail.order;
    poke.photo = pokeDetail.sprites.other.dream_world.front_default;

    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name);
    const [type] = types;
    
    poke.type = type;
    poke.types = types;

    return poke
}

pokeApi.getPokemonDetail = (pokemon)=>{
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertDetailToPokemon)
}

pokeApi.getPokemon = (offset=0,limit=20) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemon) => pokemon.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetail) => pokemonDetail)
}

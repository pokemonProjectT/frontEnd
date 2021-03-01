import { ref } from 'vue';
const getPokemons= ()=>{
    const GENERATOR_BASE = '/api';
    const pokemonList = ref([]);

    const  getPokemonList = async()=> {
      const response = await fetch(`${GENERATOR_BASE}/pokemons`);
      pokemonList.value = await response.json();
    }

 return {pokemonList,getPokemonList}
}
export default getPokemons
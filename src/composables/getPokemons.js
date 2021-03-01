import { ref } from 'vue';
const getPokemons = () => {
    const GENERATOR_BASE = '/api';
    const pokemonList = ref([]);

    const getPokemonList = async() => {
        const response = await fetch(`${GENERATOR_BASE}/pokemons`);
        pokemonList.value = await response.json();
    }

    const addPokemonToDb = async() => {
        await fetch(`${GENERATOR_BASE}/pokemons/addAllPokemonsToDb`, {
            method: 'POST',
        });
    }

    return { pokemonList, getPokemonList, addPokemonToDb }
}
export default getPokemons
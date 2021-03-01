import { ref } from 'vue';
const getPokemon = (id) => {

    const GENERATOR_BASE = '/api';
    const pokemon = ref([]);

    const getPokemonById = async() => {
        const response = await fetch(`${GENERATOR_BASE}/pokemons/` + id);
        pokemon.value = await response.json();
    }

    return { pokemon, getPokemonById }
}
export default getPokemon
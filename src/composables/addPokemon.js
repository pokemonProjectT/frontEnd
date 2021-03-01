// import { ref } from 'vue';
const addPokemon = () => {
    const GENERATOR_BASE = '/api';
    // const pokemon = ref([]);

    const addNewPokemon = async(p) => {
        await fetch(`${GENERATOR_BASE}/pokemons/addPokemon`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)
        });

    }

    return { addNewPokemon }
}
export default addPokemon
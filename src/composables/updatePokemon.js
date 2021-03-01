const updatePokemon = () => {

    const GENERATOR_BASE = '/api';

    const updatePokemonById = async(id, p) => {

        const pokemon = await fetch(`${GENERATOR_BASE}/pokemons/` + id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)
        });
        const content = await pokemon.json();
        return content
    }

    return { updatePokemonById }
}
export default updatePokemon
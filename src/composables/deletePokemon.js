const deletePokemon = () => {

    const GENERATOR_BASE = '/api';

    const deletePokemonById = async(id) => {
        await fetch(`${GENERATOR_BASE}/pokemons/` + id, {
            method: 'DELETE',
        });

    }

    return { deletePokemonById }
}
export default deletePokemon
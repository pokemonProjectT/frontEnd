<template>
  <div class="home">
      <AddPokemon/>
   <PokemonList :pokemonList="pokemonList"/>
   
  </div>
</template>

<script>

import getPokemons from '../composables/getPokemons'
import PokemonList from '../components/pokemonList'
import AddPokemon from '../components/addPokemon'
export default {
  name: 'Home',
  components :{
PokemonList,
AddPokemon
  },
    setup() {
 const {pokemonList,getPokemonList} =  getPokemons()
 getPokemonList()
    return {
      pokemonList
    }
  }


 
}
</script>


<style scoped>

</style>

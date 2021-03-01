<template>
  <div class="Details">
   {{pokemon.name}}
<!-- <PokemonDetails />  -->
  </div>
</template>

<script>
import getPokemon from '../composables/getPokemon'
import { useRoute } from 'vue-router';
// import PokemonDetails from '../components/pokemonDetails'
export default {
name:"Details",
// components: {
//     PokemonDetails
// },
 setup() {
     const route = useRoute();
 const {pokemon,getPokemonById} =  getPokemon(route.params.id)
 getPokemonById()

    return {
      pokemon
    }
  }
}
</script>




<style>

</style>
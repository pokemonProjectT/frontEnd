<template>
  <div class="Details">
    <div class="card">
      <h1>pokemon details</h1>
  <div class="card-body">
  <div>
  <p> name:  {{pokemon.name}}</p>
  </div>

   <div>
 <p> url: {{pokemon.url}}</p> 
   </div>
 
  </div>
</div>
  
  </div>
</template>

<script>
import getPokemon from '../composables/getPokemon'
import { useRoute } from 'vue-router';

export default {
name:"Details",

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
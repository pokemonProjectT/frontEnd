<template>
  <div>
       <h1>pokemos list</h1>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">url</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="pokemon in pokemonList" :key="pokemon._id">
      <th scope="row">1</th>
      <td>{{ pokemon.name }}</td>
      <td>{{ pokemon.url }}</td>
      <td>
       <router-link :to="{ name: 'Details', params: {id: pokemon._id } }">details</router-link>
          <button type="button" class="btn btn-warning" >update</button>
         <button type="button" class="btn btn-danger" >delete</button>
         
         </td>
    
    </tr>
   
 
  </tbody>
</table>
 
  </div>
</template>

<script>

export default {
name:"PokemonList",
props: ["pokemonList"]
}
</script>

<style>

</style>
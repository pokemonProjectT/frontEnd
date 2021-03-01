<template >
  <div>
       <h1>pokemos list</h1>
       <div v-if="!pokemonList || !pokemonList.length">
         <button  type="button" class="btn btn-success" v-on:click="addToDb()">getPokemons</button>
       </div>
       <div v-if="pokemonList">
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
       <router-link :to="{ name: 'Details', params: {id: pokemon._id } }"> <button type="button" class="btn btn-primary" >details</button></router-link>
       <router-link :to="{ name: 'Update', params: {id: pokemon._id } }"> <button type="button" class="btn btn-warning" >update</button></router-link>
         <button type="button" class="btn btn-danger" v-on:click="deleteP(pokemon._id)" >delete</button>
         </td>
    
    </tr>
   
 
  </tbody>
</table>
       </div>
 
 
  </div>
</template>

<script>
import deletePokemon from '../composables/deletePokemon'
import getPokemons from '../composables/getPokemons'
export default {
name:"PokemonList",
props: ["pokemonList"],
setup(){
const {deletePokemonById} =  deletePokemon();
const {addPokemonToDb} =  getPokemons()
 const deleteP= (e)=> {
  deletePokemonById(e).then(()=>{
    alert("are you sure to delete")
    location.reload()
  })
    }
    const addToDb = ()=>{
      addPokemonToDb().then(()=>{
        location.reload()
      })
    }
 return {
deletePokemonById,
deleteP,
addPokemonToDb,
addToDb
 }
}
}
</script>

<style>

</style>
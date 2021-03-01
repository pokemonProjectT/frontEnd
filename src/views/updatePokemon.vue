<template>
    <div>
 <h1>Update Pokemon</h1>
 <div class="card col-md-6">
  <div class="card-body">
    <form id="app"
  @submit="checkForm">
  <div class="form-group">
    <label for="exampleInputEmail1">Pokemon Name</label>
    <input type="text" class="form-control"  v-model="pokemon.name"  placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">url</label>
    <input type="text" class="form-control" v-model="pokemon.url"  placeholder="url">
  </div>
  <button type="submit" class="btn btn-primary">update</button>
</form>
  </div>
</div>

    </div>
</template>
<script>
import UpdatePokemon from '../composables/updatePokemon'
import { useRoute } from 'vue-router';
 import router from "../router/index";
import getPokemon from '../composables/getPokemon'
export default {
name:"UpdatePokemon",

 setup() {
     const route = useRoute();
 const {updatePokemonById} =  UpdatePokemon()


  
const {pokemon,getPokemonById} =  getPokemon(route.params.id)
 getPokemonById()

const checkForm=  (e)=> {
      e.preventDefault();
      updatePokemonById(route.params.id,pokemon.value).then(()=>{
         
        alert('pokemon updated successfully')
         router.push({ path: '/' })
         })
  
    }
 return {
checkForm,
pokemon
 }
  }

  }

</script>



<style scoped>
.card{
 margin-left: 350px ;
}
</style>
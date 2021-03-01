<template>
    <div>
 <h1>Add Pokemon</h1>
 <div class="card col-md-6">
  <div class="card-body">
    <form id="app"
  @submit="checkForm"
  method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Pokemon Name</label>
    <input type="text" class="form-control"  v-model="initialState.name"  placeholder="Name">
    {{form.name}}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">url</label>
    <input type="text" class="form-control" v-model="initialState.url"  placeholder="url">
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
</form>
  </div>
</div>

    </div>
</template>

<script>
import addPokemon from '../composables/addPokemon'

import { reactive } from "vue";

export default {
name:"AddPokemon",

setup() {
   
  const  initialState = {
    name: "",
    url: ""
  }

 const form = reactive({ ...initialState });
const {addNewPokemon} =  addPokemon()
 function resetForm() {
      Object.assign(form, initialState);
    }
const checkForm=  (e)=> {
      e.preventDefault();
      addNewPokemon(initialState).then(()=>{
          console.log("poke");
         })
    
   
   console.log("finish");
    }
 return {
initialState,
checkForm,
form,
resetForm
 }
  }
}
</script>

<style scoped>
.card{
 margin-left: 350px ;
}
</style>
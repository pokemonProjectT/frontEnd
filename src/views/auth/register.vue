<template>
<div class="login">
<div class="card col-md-8">
  <div class="card-body">
   <h1>Register</h1>
  <form  id="app"
  @submit="checkForm"
  method="post">
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" v-model="initialState.name"  placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="initialState.email" placeholder="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="initialState.password" id="exampleInputPassword1" placeholder="Password">
  </div>
 
  <button type="submit" class="btn btn-primary">Register</button>
</form>
  </div>
</div>
</div>

</template>

<script>
import user from '../../composables/auth/user'

export default {
name:"Register",

setup() {
   
  const  initialState = {
    name: "",
    email: "",
    password:""
  }

const {addUser} =  user()

const checkForm=  (e)=> {
      e.preventDefault();
      addUser(initialState).then(()=>{
          console.log("poke");
         })
   console.log("finish");
    }
 return {
initialState,
checkForm
 }
  }
}
</script>

<style scoped>
.card{
    margin-left: 250px;
}
</style>
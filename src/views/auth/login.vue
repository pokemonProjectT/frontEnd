<template>
<div class="login">
<div class="card col-md-8">
  <div class="card-body">
   <h1>login</h1>
  <form  id="app"
  @submit="checkForm"
  method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="initialState.email"  placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="initialState.password"  id="exampleInputPassword1" placeholder="Password">
  </div>
 
  <button type="submit" class="btn btn-primary">Login</button>
</form>
  </div>
</div>
</div>

</template>

<script>
import user from '../../composables/auth/user'
import router from "../../router/index";
export default {
name:"Login",
setup() {
   
  const  initialState = {
    email: "",
    password:""
  }

const {login} =  user()

const checkForm=  (e)=> {
      e.preventDefault();
      login(initialState).then(res=>{
       
         localStorage.setItem('userConnected', JSON.stringify(res))
       router.push({ path: '/' })
         }).catch(err=>{
           alert('wrong email or password')
           router.push({ path: '/login' })
           console.log(err);
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
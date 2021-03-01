<template>
  <FormulateForm v-model="formValue" @submit="handleSubmit" >
      <FormulateInput name="name" label="name" validation="required" /> 
    <FormulateInput name="url" label="url" validation="required" /> 
  </FormulateForm>
</template>

<script>
export default {
    name:"Form",
setup(){
 const formValues = {}
 const handleSubmit=()=>{
     console.log(this.formValues);
 }
   return {
      formValues,
      handleSubmit
    }
}
}
</script>

<style>

</style>
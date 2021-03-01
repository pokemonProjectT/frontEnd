<template>
<div class="PokemonDetails">
  xxxxxxxxxxx
</div>

</template>

<script>
import { useRoute } from 'vue-router';

export default {
name:"PokemonDetails",

setup(){
    const route = useRoute();
    console.log(route.params.id);
}
}
</script>

<style>

</style>
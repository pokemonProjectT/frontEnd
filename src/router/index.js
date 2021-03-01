import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/PokemonDetails.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import UpdatePokemon from '../views/updatePokemon.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokemon/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/pokemon/update/:id',
        name: 'Update',
        component: UpdatePokemon
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
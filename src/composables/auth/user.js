// import { ref } from 'vue';
const user = () => {
    const GENERATOR_BASE = '/api';
    // const pokemon = ref([]);

    const addUser = async(user) => {
        await fetch(`${GENERATOR_BASE}/users/addUser`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

    }
    const login = async(user) => {

        const connectedUser = await fetch(`${GENERATOR_BASE}/users/auth/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const content = await connectedUser.json();
        return content
    }

    return { addUser, login }
}
export default user
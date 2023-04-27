<template>
    <div class="auth">
        <div class="login">
            <h1 class="text-center mb-3">Iniciar Sesión</h1>
            <form @submit.prevent="onLogin">
                <div class="mb-3">
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Ingrese Correo"
                        v-model="formData.email"
                        :class="{ error: formError.email }"
                    >
                </div>
    
                <div class="mb-3">
                    <input 
                        type="password"
                        class="form-control"
                        placeholder="Ingrese Contraseña"
                        v-model="formData.password"
                        :class="{ error: formError.password }"
                    >
                </div>
    
                <button
                    class="btn btn-success w-100 mb-3"
                >
                    Entrar
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import * as Yup from 'yup';
import { useUserStore } from '../stores/auth'

const storeUser = useUserStore()

const formData = {};

const formError = ref({});
const loading = ref(false)

const shemaForm = Yup.object().shape({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
});

const onLogin = async() => {
    loading.value = true;
    formError.value = {};

    try{

        await shemaForm.validate(formData, { abortEarly: false });

        try{
            const { email, password } = formData;
            await storeUser.login(email, password)
        } catch(error){
            console.log(error)
        }
    }catch(err){
        err.inner.forEach((error) => {
            formError.value[error.path] = error.message;
        })
    }finally{
        loading.value = false;
    }
    
 
}

</script>

<style scoped>
.auth{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(4, 78, 157);
    background: linear-gradient(
        0deg,
        rgba(4, 78, 157, 1) 0%,
        rgba(0, 174, 255, 1) 100%
    );
}

.login{
    background-color: #fff;
    padding: 30px;
    box-shadow: 0px 0px 38px -5px rgba(0,0,0,0.45);
    width: 400px;
    border-radius: 10px;
}

input.error{
    border-color: #faa;
    background-color: #ffeded;
}
</style>
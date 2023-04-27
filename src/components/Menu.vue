<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
        <div class="container">
            <span class="navbar-brand" to="/">
                <img src="../assets/icono_tym.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Trabajos 208
            </span>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <RouterLink to="/agregar" class="nav-link active" aria-current="page">Agregar Tarea</RouterLink>
                    </li>
                </ul>
                <span class="d-flex">
                    <button class="btn btn-dark" @click="cerrarSesion">Cerrar sesion</button>
                </span>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useUserStore } from '../stores/auth'

const storeUser = useUserStore()

const cerrarSesion = () => {
    storeUser.logout()
}
</script>
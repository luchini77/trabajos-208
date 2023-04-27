<template>
    <div class="mb-4 d-flex justify-content-center">
        <input 
            type="text"
            placeholder="Filtrar por Nivel"
            v-model="nivel"
            @keyup="filtrar()"
        >
    </div>
</template>

<script setup>
import { useTareaStore } from '../stores/tarea';
import { ref } from 'vue'

const storeTarea = useTareaStore()

const nivel = ref('')

const filtrar = () => {
    storeTarea.filtrarNombre(nivel.value)
}

</script>

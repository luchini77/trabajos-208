<template>
    <BasicLayout>
        <div class="container py-3">
            <h1 class="text-center py-3">Ingrese una Tarea</h1>
            <form @submit.prevent="guardarTarea">
                <TareaForm :datosFormulario="datosFormulario"/>
            </form>
        </div>
    </BasicLayout>
</template>

<script setup>
import BasicLayout from '../layouts/BasicLayout.vue';
import TareaForm from '../components/TareaForm.vue';
import { ref } from 'vue';
import { useTareaStore } from '../stores/tarea';

const storeTarea = useTareaStore()

const datosFormulario = ref({
    id: Date.now(),
    titulo: '',
    nivel:"",
    tarea: '',
    fechaCreacion: new Date()
})

const guardarTarea = () => {
    storeTarea.getTarea(datosFormulario.value)
}


</script>
<template>
    <BasicLayout>
        <div class="container py-3">
            <div class="d-flex justify-content-between d-flex align-items-center">
                <h1>Actualizar Tarea</h1>
                <RouterLink class="btn btn-success" to="/home">Volver</RouterLink>
            </div>
            <form @submit.prevent="editarTarea(datosFormulario)">
                <TareaForm :datosFormulario="datosFormulario"/>
            </form>
    </div>
    </BasicLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TareaForm from '../components/TareaForm.vue';
import BasicLayout from '../layouts/BasicLayout.vue';
import { useRoute } from 'vue-router';
import { useTareaStore } from '../stores/tarea';

const storeTarea = useTareaStore()

const datosFormulario = ref({
    titulo: '',
    nivel:"",
    tarea: '',
})

onMounted(async() => {
    const route = useRoute()
    const id = route.params.id
    await storeTarea.buscarTarea(id)

    datosFormulario.value.id = storeTarea.tarea.id
    datosFormulario.value.titulo = storeTarea.tarea.titulo
    datosFormulario.value.nivel = storeTarea.tarea.nivel
    datosFormulario.value.tarea = storeTarea.tarea.tarea
    datosFormulario.value.fechaCreacion = storeTarea.tarea.fechaCreacion
})

const editarTarea = () => {
    storeTarea.updateTarea(datosFormulario.value);
}

</script>
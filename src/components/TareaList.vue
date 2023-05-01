<template>
    <div class="container">
        <p v-if="tareas.length === 0">No hay tareas...</p>
        <div class="tarea" v-for="tarea in tareas" :key="tarea.id">
            <p class="tarea_titulo">{{ tarea.titulo }} - {{ tarea.nivel }}</p>
            <p class="tarea_text">{{ tarea.tarea }}</p>
            <span>{{ formatDate(tarea.fechaCreacion) }}</span>
            <div class="d-flex justify-content-end">
                <p><i id="edit" class="fa-solid fa-pen me-2" @click="editarTarea(tarea.id)"></i></p>
                <p><i class="fa-solid fa-circle-xmark" @click="eliminarTarea(tarea.id)"></i></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTareaStore } from '../stores/tarea';
import { computed } from 'vue';
import dayjs from 'dayjs'
import { onMounted } from 'vue';
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';

const storeTarea = useTareaStore()
const router = useRouter()

const formatDate = (fecha) => {
    return dayjs(fecha).format("DD/MM/YYYY")
}

const tareas = computed(() => {
    return storeTarea.tareasFiltradas.reverse()
})


onMounted(async() => {
    await storeTarea.cargarTareas()
})

const editarTarea = (id) => {
    storeTarea.buscarTarea(id)
    router.push(`/actualizar/${id}`)
}

const eliminarTarea = (id) => {
    Swal.fire({
        title: "Seguro que desea Eliminar?",
        text: "¿Esta Tarea?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
        .then(resultado => {
            if (resultado.value) {
                // Hicieron click en "Sí"
                storeTarea.eliminar(id)
            } else {
                // Dijeron que no
                console.log("sigue igual");
            }
        })

}

</script>

<style scoped>
.tarea {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p {
    margin: 0;
}

.tarea_titulo {
    position: absolute;
    top: -12px;
    left: 10px;
    background-color: #fff;
    padding: 0 10px;
    font-weight: bold;
}

.tarea_text {
    color: gray;
}

span {
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    background-color: #fff;
    padding: 0 20px;
    border: 1px solid #ccc;
}

i {
    width: 20px;
    height: 20px;
}

i:hover {
    cursor: pointer;
    color: #f00;
}

#edit:hover{
    cursor: pointer;
    color:  #FFC300;
}
</style>
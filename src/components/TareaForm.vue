<template>
    <div class="container">
        <div class="mb-2">
            <input class="form-control" type="text" placeholder="Titulo" v-model="datosFormulario.titulo">
        </div>
        <div class="mb-2">
            <select class="form-select" aria-label="Default select example" v-model="datosFormulario.nivel">
                <option disabled value>Elija un Nivel</option>
                <option value="UCL">UCL</option>
                <option value="PRODUCCION">PRODUCCIÓN</option>
                <option value="ACARREO">ACARREO</option>
                <option value="SNV">SNV</option>
            </select>
        </div>
        <div  class="mb-2">
            <textarea class="form-control" rows="3" placeholder="Escribe la Tarea" v-model="datosFormulario.tarea"></textarea>
        </div>
        <div  class="mb-2">
            <button class="btn btn-primary w-100" type="submit">Guardar Tarea</button>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    datosFormulario: Object
})

</script>

<style scoped></style>
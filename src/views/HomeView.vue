<template>
    <BasicLayout>
        <h1 class="text-center py-2">Lista de Tareas</h1>
        <FiltrarNombre />
        <TareaList />
    </BasicLayout>
</template>

<script setup>
import FiltrarNombre from '../components/FiltrarNombre.vue';
import TareaList from '../components/TareaList.vue';
import BasicLayout from '../layouts/BasicLayout.vue';



</script>

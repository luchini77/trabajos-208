<template>
    <div>
        <Menu />
        <div class="container">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
</script>
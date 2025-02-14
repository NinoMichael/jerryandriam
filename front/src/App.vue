<template>
    <div 
        :class="{'bg-gray-700 text-white': checked, 'bg-gray-100 text-black': !checked}" 
        class="relative transition-all duration-700"
    >
        <Header v-model:checked="checked" />

        <div class="fixed bottom-[10%] sm:bottom-0 sm:top-[45%] right-2">
            <SwitchTheme v-model:checked="checked"/>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Header from "./components/Layouts/Header.vue";
import SwitchTheme from "./components/SwitchTheme.vue";

/** THEME CONFIGURATION */
const checked = ref(localStorage.getItem("theme") === "dark");

// Appliquer le thème au chargement
onMounted(() => {
    if (checked.value) {
        document.body.classList.add("bg-gray-700", "text-white");
    } else {
        document.body.classList.add("bg-gray-100", "text-black");
    }
});

// Écouteur pour basculer le thème et sauvegarder la préférence
watch(checked, (newVal) => {
    localStorage.setItem("theme", newVal ? "dark" : "light");
});
</script>

<template>
    <div>
        <Select 
            v-model = "selectedLanguage" 
            :options = "languages" 
            optionLabel = "label"
            optionValue = "value"
            @change = "changeLanguage"
            overlayClass = "flex space-x-4 text-sm font-varela ps-2 pb-2"
            class = "w-20 text-sm flex items-center justify-center border border-none p-2 font-varela"
            :pt = "{
                root: checked ? 'bg-gray-500': 'bg-transparent', 
                label: checked ? 'text-white': 'text-black/80', 
                overlay: checked ? 'bg-gray-500 text-white' : 'bg-white text-black/80',
                option: checked ? 'bg-transparent text-white' : 'bg-transparent text-black/80',
            }"
        />
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import Select from 'primevue/select';

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);

const languages = ref([
    { label: "FR", value: "fr" },
    { label: "EN", value: "en" }
]);

const props = defineProps({
    checked: Boolean,
});

watchEffect(() => {
    selectedLanguage.value = locale.value;
});

const changeLanguage = () => {
    locale.value = selectedLanguage.value;
};
</script>

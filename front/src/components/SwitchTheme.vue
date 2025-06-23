<template>
    <div 
        class="relative z-50 flex flex-col justify-center items-center space-y-6 py-3 rounded-full borde shadow-md"
        :class="{'bg-gray-500 border-gray-500 text-white': checked, 
                'border-gray-200 bg-white/30 text-black/50': !checked
                }" 
    >
        <i class="pi pi-moon"></i>
        <ToggleSwitch 
            :modelValue="checked" 
            @update:modelValue="$emit('update:checked', $event)"
            class="-rotate-90" 
            :pt="computedPt"
        />  
        <i class="pi pi-sun"></i>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import ToggleSwitch from "primevue/toggleswitch";

const props = defineProps({
    checked: Boolean,
});

defineEmits(['update:checked']);

const computedPt = computed(() => ({
    slider: {
        class: props.checked ? 'bg-blue-400' : ''
    },
    handle: {
        class: 'top-1'
    }
}));
</script>

<template>
    <input 
        class="testimonials__bar" 
        type="range" 
        min="0" 
        max="8" 
        step="1" 
        v-model.number="barValue"
        @change="changeSlide()"
    >
</template>

<script>
    export default {
        name: 'progress-bar',
        data() {
            return {
                barValue: 0
            }
        },
        methods: {
            changeSlide() {
                this.$emit('changeIndex', this.barValue);
            }
        }
    }
</script>
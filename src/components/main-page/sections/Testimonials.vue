<template>
    <section class="testimonials">
        <div class="testimonials__container _container">
            <h2 class="testimonials__title">Testimonials</h2>
            
            <TestimonialCarusel :currentSlide="currentSlideIndex">
                <testimonials-item
                    v-for="item in TESTIMONIALS"
                    :key="item.name"
                    :testimonialData="item"
                ></testimonials-item>
            </TestimonialCarusel>
            
            <progress-bar
                @changeIndex="nextSlide"
            ></progress-bar>
            
            <button class="rectangle-button">leave feedback</button>
        </div>
    </section>
</template>

<script>
    import testimonialsItem from '../elements/testimonialsItem.vue';
    import TestimonialCarusel from '../elements/TestimonialCarusel.vue';
    import ProgressBar from '../elements/ProgressBar.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'testimonials',
        components: {testimonialsItem, TestimonialCarusel, ProgressBar},
        data() {
            return {
                currentSlideIndex: 0,
                isVisible: true
            }
        },
        computed: {
            ...mapGetters(['TESTIMONIALS'])
        },
        methods: {
            ...mapActions(['GET_TESTIMONIALS_FROM_API']),
            testimonialsFirst() {
                return this.TESTIMONIALS.slice(0, 4);
            },
            nextSlide(index) {
                this.currentSlideIndex = index;    
            }
        },
        mounted() {
            this.GET_TESTIMONIALS_FROM_API()
            .then((response) => {
            if (response.data) {
                 console.log('TESTIMONIALS received!');
            }
            });
            const vm = this;
            window.addEventListener('resize', function() {
                if (this.window.innerWidth < 901) {
                    vm.isVisible = false;
                } 
            });
        }
    }
</script>

<style>

</style>
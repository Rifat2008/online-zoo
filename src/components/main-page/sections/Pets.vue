<template>
    <section class="pets">
        <div class="pets__container">
            <div class="pets__body">
                <button class="pets__arrow" @click="prevSlide">
                    <img src="../../../assets/images/pictures/arrow-left.svg" alt="arrow-left">
                </button>

                <carusel :currentSlide="currentSlideIndex" >
                        <pet-card
                            v-for="pet in PETS"
                            :key="pet.name"
                            :PetData="pet"
                            ref="pet"
                        ></pet-card>
                </carusel>
                
                <carusel :currentSlide="currentSlideIndex">
                        <pet-card
                            v-for="pet in PETS"
                            :key="pet.name"
                            :PetData="pet"
                            ref="pet"
                        ></pet-card>
                </carusel>
                

                <button class="pets__arrow" @click="nextSlide">
                    <img src="../../../assets/images/pictures/arrow-right.svg" alt="arrow-right">
                </button>
                
            </div>
            <button class="section-button">choose your favorite</button>
            <img src="../../../assets/images/pictures/palm_foto.svg" alt="plant" class="pets__plant-left">
            <img src="../../../assets/images/pictures/strelitzia1.svg" alt="plant" class="pets__plant-right">
        </div>   
    </section>
</template>

<script>
    import PetCard from '../elements/PetCard.vue';
    import Carusel from '../elements/Carusel.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        components: { PetCard, Carusel },
        name: 'pets',
        data() {
            return {
                currentSlideIndex: 0
            }
        },
        computed: {
            ...mapGetters(['PETS'])
        },
        methods: {
            ...mapActions(['GET_PETS_FROM_API']),
            prevSlide() {
                if (this.currentSlideIndex > 0) {
                    this.currentSlideIndex--;
                }     
            },
            nextSlide() {
                if (this.currentSlideIndex <= this.PETS.length - 4) {
                    this.currentSlideIndex++;
                }    
            },
            getCardWidth() {
                if(this.$refs.pet == null) return 0;
                return this.$refs.pet[0].getClientWidth();
            }
        },
        mounted() {
            this.GET_PETS_FROM_API()
            .then((response) => {
            if (response.data) {
                console.log('PETS info received!');
            }
            }); 
        }
    }
</script>


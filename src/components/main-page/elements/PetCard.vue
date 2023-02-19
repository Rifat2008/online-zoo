<template>
    <div class="pets__card pets-item" ref="petCard">
        <img 
            :src=" require('../../../assets/images/pictures/pets/' + PetData.image) "
            :alt="PetData.name" 
            class="pets-item__img"
        >
        <div class="pets-item__text">
            <h3 class="pets-item__title">{{PetData.name}}</h3>
            <p class="pets-item__subtitle">{{PetData.native}}</p>
            <img 
                :src=" require('../../../assets/images/icons/' + PetData.feed_1) " 
                alt="image" 
                class="banana-icon"
            >
            <img 
                :src=" require('../../../assets/images/icons/' + PetData.feed_2) "
                alt="image" 
                class="bamboo-icon"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pet-card',
        props: {
            PetData: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            getClientWidth() {
                return this.$refs.petCard.clientWidth;
            }
        }
    }
</script>
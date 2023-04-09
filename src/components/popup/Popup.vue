<template>
    <div class="popup_wrapper" ref="popup-wrapper">
        <div class="popup">
            <span class="popup__close-icon" @click="closePopup">
                <img src="../../assets/images/icons/close-icon.svg" alt="close-icon">
            </span>
            <div class="testimonials__card testimonial">
                <div class="testimonial__header">
                    <img 
                        :src="require('../../assets/images/pictures/avatars/' + testimonialData.avatar)" 
                        alt="user-avatar" 
                        class="testimonial__user-avatar">
                    <div class="testimonial__user-info">
                        <p class="testimonial__user-name">{{ testimonialData.name }}</p>
                        <p class="testimonial__user-add">
                            Local {{ testimonialData.local }} &#183; {{ testimonialData.time }}
                        </p>
                    </div>
                </div>
                <p class="testimonial__text">{{ testimonialData.text }}</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            testimonialData: {
            type: Object,
            default() {
                return {}
            }
        }
        },
        methods: {
            closePopup() {
                this.$emit('closePopup');
            },
            action() {
                this.$emit('action');
            }
        },
        mounted() {
            let vm =this;
            document.addEventListener('click', function(item) {
                if (item.target === vm.$refs['popup-wrapper']) {
                    vm.closePopup();
                }
            });
        }
    }
</script>
<style lang="scss">
    .popup_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: .4);
        z-index: 1000;
    }
    .popup {
        position: relative;
    }
    .popup__close-icon {
        position: absolute;
        right: -20px;
        top: -7px;
        cursor: pointer;
    }
    .popup .testimonial {
        max-width: 268px;
        max-height: 391px;
        padding: 15px 15px 18px 16px;
    }
    .popup .testimonial__text {
        max-height: 309px;
        overflow: scroll;
    }

</style>
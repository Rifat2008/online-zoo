<template>

    <popup
        v-if="isPopupVisible"
        :testimonialData="testimonialData"
        @closePopup="closeInfoPopup"
    >
    </popup>

    <div class="testimonials__card testimonial" @click="showPopup()">
        <div class="testimonial__header">
            <img 
                :src="require('../../../assets/images/pictures/avatars/' + testimonialData.avatar)" 
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
</template>

<script>
import Popup from '@/components/popup/Popup.vue';

export default {
    name: 'testimonials-item',
    components: {Popup},
    props: {
        testimonialData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
      return {
        isPopupVisible: false
      }
    },
    methods: {
      showPopup() {
        this.isPopupVisible = true;
        document.body.classList.add("stop-scrolling");
        window.addEventListener("keydown", (e) => {
                if (e.keyCode === 27) {
                    this.isPopupVisible = false;
                    document.body.classList.remove("stop-scrolling");
                }
            });
      },
      closeInfoPopup() {
        this.isPopupVisible = false;
        document.body.classList.remove("stop-scrolling");
      }
    }
}

</script>
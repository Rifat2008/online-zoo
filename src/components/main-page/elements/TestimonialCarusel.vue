<template>
    <div class="test-carusel-wrapper">
        <div class="testimonials__cards test-carusel" :style="{ 'margin-left': '-' + (move * currentSlide) + 'px'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
  name: 'test-carusel',
  data() {
    return {
        move: 292
    }
  },
  props: {
    currentSlide: {
        type: Number,
        default() {
            return 0;
        }
    }
  }
}
</script>

<style>
    .test-carusel-wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1164px;
        overflow: hidden;
    }

    .test-carusel {
        transition: all ease 2s;
    }

    @media (max-width: 1250px) {
        .test-carusel-wrapper {
            max-width: 940px;
        } 
    }
</style>

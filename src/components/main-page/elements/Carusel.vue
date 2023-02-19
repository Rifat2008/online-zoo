<template>
    <div class="carusel-wrapper">
        <div class="pets__cards carusel" :style="{ 'margin-left': marginLeft }">
            <slot></slot>
        </div> 
    </div>
</template>

<script>

export default {
  name: 'carusel',
  data() {
    return {
        mr1: 32,
        mr2: 28,
        mr: 0
    }
  },
  props: {
    currentSlide: {
        type: Number,
        default() {
            return 0;
        }
    }
  },
  computed: {
        marginLeft() { 
            return '-' + ((this.petWidth() + this.mr) * this.currentSlide) + 'px';
        }        
  },
  methods: {
    petWidth() {
            return this.$parent.getCardWidth();
        } 
  },
  mounted() {
    const vm = this;
    window.addEventListener('resize', function() {
                if (this.window.innerWidth > 1359) {
                    vm.mr = 32;
                } else  vm.mr = 28;
            });
  }
}
</script>


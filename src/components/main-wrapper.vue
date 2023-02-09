<template>
    <div class="main-wrapper">
        <the-header></the-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <the-footer></the-footer>
    </div>    
</template>

<script>
  import TheHeader from './layouts/TheHeader.vue'
  import TheFooter from './layouts/TheFooter.vue';

  export default {
    name: 'main-wrapper',
    components: {TheHeader, TheFooter}
  }
</script>

<style>
    .main-wrapper {
        min-height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        
    }
</style>

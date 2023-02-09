<template>
    <main class="main">
        <watch></watch>
        <backstage></backstage>
        <pets></pets>
        <feed></feed>
        <testimonials></testimonials>
    </main>
</template>

<script>
    import Watch from './sections/Watch'
    import Backstage from './sections/Backstage.vue';
    import Pets from './sections/Pets.vue'
    import Feed from './sections/Feed.vue'
    import Testimonials from './sections/Testimonials.vue'

    export default {
        components: { Watch, Backstage, Pets, Feed, Testimonials },
        name: 'main-page',
    }
</script>

<style>

</style>
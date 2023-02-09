<template>
    <main class="main">
        <donate-watch></donate-watch>
        <donate-feed></donate-feed>
    </main>
</template>

<script>
    import donateWatch from './sections/donateWatch.vue';
    import donateFeed from './sections/donateFeed.vue'

    export default {
        components: { donateWatch, donateFeed },
        name: 'donate-page'
    }
</script>
<template>
    <main class="main">
        <donate-watch></donate-watch>
        <donate-feed></donate-feed>
    </main>
</template>

<script>
    import DonateWatch from './sections/DonateWatch.vue';
    import DonateFeed from './sections/DonateFeed.vue'

    export default {
        components: { DonateWatch, DonateFeed },
        name: 'donate-page'
    }
</script>
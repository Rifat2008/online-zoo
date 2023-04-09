<template>
    <main class="main">
        <donate-watch></donate-watch>
        <donate-feed></donate-feed>
    </main>
</template>

<script>
    import DonateWatch from './sections/donateWatch.vue';
    import DonateFeed from './sections/donateFeed.vue';

    export default {
        components: { DonateWatch, DonateFeed },
        name: 'donate-page'
    }
</script>
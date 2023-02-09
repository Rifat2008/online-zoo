<template>
    <header class="header">
        <div class="header__container _container">
                <a href="../main/index.html" class="header__logo">
                    <h1 class="header__logo-title">PetStory online</h1>
                    <img src="../../assets/images/icons/bamboo.png" alt="bamboo" class="header__logo-icon">
                </a>
                
                <nav class="header__menu menu">
                    <div class="menu__icon">
                        <span class="hamburger__line"></span>
                    </div>
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a href="../main/index.html" class="menu__link _active">about</a>
                        </li>
                        <li class="menu__item">
                            <a href="" class="menu__link">map</a>
                        </li>
                        <li class="menu__item">
                            <a href="" class="menu__link">zoos</a>
                        </li>
                        <li class="menu__item">
                            <a href="../donate/index.html" class="menu__link">donate</a>
                        </li>
                        <li class="menu__item">
                            <a href="" class="menu__link">contact us</a>
                        </li>
                    </ul>
                </nav>
                <a href="https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks" class="header__designed">Designed by <span>&copy;</span></a>
            </div>
    </header>
</template>

<script>
    //import { mapActions } from 'vuex';

    export default {
        name: 'the-header',
        props: {},
        data() {
            return {
               
            }
        },
        methods: {
            
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
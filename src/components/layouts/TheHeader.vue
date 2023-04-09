<template>
    <header class="header">
        <div class="header__container _container">
                <BurgerMenu 
                    v-if="isBurgerMenuVisible"
                    @closeBurgerMenu="closeMenu"
                />
                <div class="header__logo">
                    <router-link :to="{name: 'main'}">
                        <h1 class="header__logo-title">PetStory online</h1>
                        <img src="../../assets/images/icons/bamboo.png" alt="bamboo" class="header__logo-icon">
                    </router-link>
                </div>
                <nav class="header__menu menu">
                    <div class="menu__icon" @click="burgerMenuShow()">
                        <span class="hamburger__line"></span>
                    </div>
                    <ul class="menu__list">
                        <li class="menu__item">
                            <router-link :to="{name: 'main'}">
                                <span 
                                    class="menu__link"
                                    :class="{ _active: currentRouteName === 'main' }"
                                    >about
                                </span>
                            </router-link> 
                        </li>
                        <li class="menu__item">
                            <a href="" class="menu__link">map</a>
                        </li>
                        <li class="menu__item">
                            <a href="" class="menu__link">zoos</a>
                        </li>
                        <li class="menu__item">
                            <router-link :to="{name: 'donate'}">
                                <span 
                                    class="menu__link"
                                    :class="{ _active: currentRouteName === 'donate' }"
                                    >donate
                                </span>
                            </router-link>
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
    import BurgerMenu from '../main-page/elements/BurgerMenu.vue';

    export default {
        name: 'the-header',
        data() {
            return {
                isBurgerMenuVisible: false
            }
        },
        components: {BurgerMenu},
        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        },
        methods: {
            burgerMenuShow() {
                this.isBurgerMenuVisible = true;
                document.body.classList.add("stop-scrolling");
                window.addEventListener("keydown", (e) => {
                    if (e.keyCode === 27) {
                        this.isBurgerMenuVisible = false;
                        document.body.classList.remove("stop-scrolling");
                    }
                });
            },
            closeMenu() {
                this.isBurgerMenuVisible = false;
                document.body.classList.remove("stop-scrolling");
            }
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
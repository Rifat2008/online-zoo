<template>
    <div class="popup_wrapper" ref="popup-wrapper">
        <div class="burger-menu">
            <div class="burger-menu__logo">
                <router-link :to="{name: 'main'}" @click="closeBurgerMenu">
                    <h1 class="burger-menu__title">PetStory online</h1>
                    <img src="@/assets/images/icons/bamboo-orange.png" alt="bamboo" class="burger-menu__icon">
                </router-link>
            </div>
            <ul class="burger-menu__list">
                <li class="burger-menu__item">
                    <router-link :to="{name: 'main'}" class="burger-menu__link" @click="closeBurgerMenu">         
                        about
                    </router-link> 
                </li>
                <li class="burger-menu__item">
                    <router-link :to="{name: 'main'}" class="burger-menu__link" @click="closeBurgerMenu">         
                        map
                    </router-link> 
                </li>
                <li class="burger-menu__item">
                    <router-link :to="{name: 'main'}" class="burger-menu__link" @click="closeBurgerMenu">         
                        zoos
                    </router-link> 
                </li>
                <li class="burger-menu__item">
                    <router-link :to="{name: 'donate'}" class="burger-menu__link" @click="closeBurgerMenu">         
                        donate
                    </router-link> 
                </li>
                <li class="burger-menu__item">
                    <router-link :to="{name: 'main'}" class="burger-menu__link" @click="closeBurgerMenu">         
                        contact us
                    </router-link> 
                </li>
                <li class="burger-menu__item">
                    <a href="https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks" 
                        class="burger-menu__link"
                        @click="closeBurgerMenu"
                        >Designed by <span>&copy;</span>
                    </a>
                </li>
            </ul>
            <span class="burger-menu__close-icon" @click="closeBurgerMenu">
                <img src="@/assets/images/icons/close-icon.svg" alt="close-icon">
            </span>
        </div>
    </div>
</template>

<script>
export default {
        methods: {
            closeBurgerMenu() {
                    this.$emit('closeBurgerMenu');
                }
            },
        mounted() {
            let vm = this;
            document.addEventListener('click', function(item) {
                if (item.target === vm.$refs['popup-wrapper']) {
                    vm.closeBurgerMenu();
                }
            });
        }
    }
</script>

<style scoped>
    .burger-menu {
        width: 100%;
        height: 329px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
    }
    .burger-menu__logo {
        width: 65px;
        margin-bottom: 30px;
        position: relative;
        border: 1px solid #FE9013;
    }
    .burger-menu__title {
        font-weight: 400;
        font-size: px;
        line-height: 120%;
        text-align: center;
        color: #FE9013;;
    }
    .burger-menu__icon {
        position: absolute;
        left: 5.7px;
        top: 19px;
        z-index: 100;
    }
    .burger-menu__item:not(:last-child) {
        margin-bottom: 15px;
    }
    .burger-menu__link {
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #333B41;
        text-transform: capitalize;
    }
    .burger-menu__close-icon {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
    }
</style>


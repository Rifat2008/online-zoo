<template>
    <footer class="footer"> 
        <div class="footer__container _container">
            <div class="footer__left">
                
                <div href="" class="header__logo footer-logo">
                    <router-link :to="{name: 'main'}">
                        <h1 class="header__logo-title">PetStory online</h1>
                        <img src="../../assets/images/icons/bamboo.png" alt="bamboo" class="header__logo-icon">
                    </router-link>
                </div>
                <router-link :to="{name: 'donate'}">
                    <div class="rectangle-button">donate for volunteers</div>
                </router-link>
                
                <div class="footer__social social">
                    <a href="https://www.facebook.com/" class="social__link">
                        <div class="social__wrap-icon">
                            <img src="../../assets/images/icons/facebook-icon.svg" alt="facebook-icon" class="social__icon">
                        </div>
                        <p class="social__text">Facebook</p>
                    </a>
                    <a href="https://twitter.com/?lang=en" class="social__link">
                        <div class="social__wrap-icon">
                            <img src="../../assets/images/icons/twitter-icon.svg" alt="twitter-icon" class="social__icon">
                        </div>
                        <p class="social__text">Twitter</p>
                    </a>
                    <a href="https://www.instagram.com/" class="social__link">
                        <div class="social__wrap-icon">
                            <img src="../../assets/images/icons/instagram-icon.svg" alt="instagram-icon" class="social__icon">
                        </div>
                        <p class="social__text">Instagram</p>
                    </a>
                    <a href="https://www.youtube.com/?hl=ru" class="social__link">
                        <div class="social__wrap-icon">
                            <img src="../../assets/images/icons/youtube-icon.svg" alt="youtube-icon" class="social__icon">
                        </div>
                        <p class="social__text">YouTube</p>
                    </a>
                </div>
            </div>
            <div class="footer__center">
                <router-link :to="{name: 'main'}">
                    <span class="footer_links">About</span>
                </router-link>
                <a href="" class="footer_links">Map</a>
                <a href="" class="footer_links">Zoos</a>
                <a href="" class="footer_links">Contact us</a>
            </div>
            <div class="footer__right">
                <div class="footer__right-subscribe subscribe">
                    <h2 class="subscribe__title">Subscribe to our news</h2>
                    <form class="subscribe__body">
                        <input type="email" class="subscribe__input" placeholder="Enter your email" required />
                        <button class="subscribe__button">Submit</button>
                    </form>
                </div>
                <a href="https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks" class="footer__design design-link">
                    <p>Designed by Alisa Samborskaya</p>
                    <p>©RSSchool & ©Yem Digital 2021</p>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
    //import { mapActions } from 'vuex';

    export default {
        name: 'the-footer',
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
    

</style>
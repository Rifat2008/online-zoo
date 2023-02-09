<template>
    <section class="donate-feed">
        <div class="donate-feed__container _container">
            <div class="donate-feed__announce announce">
                <p class="announce__text-1">THE ZOO HAS OFFICIALLY REOPENED BUT WE STILL NEED YOUR HELP!</p>
                <p class="announce__text-2">Even though the Zoo has been able to reopen, we are at a greatly reduced capacity with educational programs and public and private events cancelled or postponed for additional months. We need you now more than ever to help ensure that we overcome these challenges. We have been actively raising funds in the community, and we are grateful for the generosity.  But much more support is still needed, and we need your help! Please consider a gift today – no matter what size – to help us sustain our mission.</p>
                <p class="announce__text-3">Donation Information</p>
            </div>
            <div class="donate-feed__body">
                <h2 class="donate-feed__title">Pick and feed a friend</h2>
                <p class="donate-feed__text-1">We know the animals bring you joy, and in these extraordinary times, we’re glad.</p>
                <div class="donate-feed__diet diet">
                    <div class="diet__quantity">
                        <p class="diet__num">4</p>
                        <p class="diet__num-subtitle">Panda diet for the day.</p>
                    </div>
                    <img src="../../../assets/images/icons/x_icon.png" alt="x_icon" class="x-icon">
                    <img src="../../../assets/images/pictures/panda-widget.png" alt="panda" class="diet__image">
                </div>
                <div class="donate-feed__amount">
                    <p class="donate-feed__amount-title">Amount</p>
                    <div class="donate-feed__bar">
                        <ul class="donate-feed__bar-line bar-line">
                            <li class="bar-line__circle"></li>
                            <li class="bar-line__circle"></li>
                            <li class="bar-line__circle">
                                <img src="../../../assets/images/icons/roller-icon.png" alt="roller-icon" class="bar-line__selected">
                            </li>
                            <li class="bar-line__circle"></li>
                            <li class="bar-line__circle"></li>
                            <li class="bar-line__circle"></li>
                            <li class="bar-line__circle"></li>
                            <li class="bar-line__circle"></li>
                        </ul>
                    </div>
                    <ul class="donate-feed__amount-values">
                        <li class="donate-feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">5000</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">2000</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">1000</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">500</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">250</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">100</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">50</p>
                        </li>
                        <li class="feed__amount-value value-item">
                            <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                            <p class="value-item__amount">25</p>
                        </li>
                    </ul>
                </div>
                <div class="donate-feed__input-wrap">
                    <input type="number" class="donate-feed__amount-input" placeholder="Another amount" min="0">
                    <img src="../../../assets/images/icons/usd-icon.png" alt="usd-icon" class="usd-icon">
                </div>
                <div class="donate-feed__input-radio">
                    <div class="form_radio">
                        <input id="monthly" type="radio" name="donate" value="monthly">
                        <label for="monthly">Monthly</label>
                    </div>
                    <div class="form_radio">
                        <input id="once" type="radio" name="donate" value="monthly" checked>
                        <label for="once">Once</label>
                    </div>
                </div>
                <a href="../donate/index.html" class="section-button">Feed a friend now</a>
                <p class="donate-feed__amount-subtitle">Share with your friends on social networks</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'donate-feed',
    }
</script>
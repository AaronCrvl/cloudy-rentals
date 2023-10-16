<template>
    <div id="home-wrapper"> 
        <Carrousel></Carrousel>
        <!-- Publicity -->
        <div id="publicity-wrapper">
            <div class="publicity-title">Best Prices</div>
            <div class="publicity-title">& Plans</div>
            <p id="publicity-text">
                We received the best car rental work group of 2023!
                We received the best car rental work group of 2023!
                We received the best car rental work group of 2023!
            </p>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const Carrousel = defineAsyncComponent(() => import ('../elements/ModelCarrousel.vue'));
export default {     
    name : 'HomePage',
    components : Carrousel
}
</script>

<style>
#home-wrapper {
    background-color: red;
    height: 100vh;
    margin-top: 360px;
}
#publicity-wrapper{
    width: max-content;
}
.publicity-title {
    font-size: xx-large;
    color:crimson;
}
#publicity-text {
    font-size: x-large;
    color: dimgray;
}
</style>
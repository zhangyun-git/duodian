<template>
    <div class='wrap'>
         <section>
             111
         <router-view></router-view>
            <ul class="uls">
                <router-link tag="li" to="/">水果</router-link>
                <router-link tag="li" to="/vegetables">蔬菜</router-link>
                <router-link tag="li" to="/foods">轻食</router-link>
                <router-link tag="li" to="/grain">粮油</router-link>
                <router-link tag="li" to="/dairy">乳品</router-link>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
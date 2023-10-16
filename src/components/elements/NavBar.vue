<template>
    <div id="NavBar">
        <ul id='navOptions-wrapper'>
            <li v-for="opt in options" v-bind:key="opt" v-bind:value="opt.displayName">
                <div @click="navigateToAbout(opt.route)">{{ opt.displayName }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    el: "#NavBar",
    name: "NavBar",
    data : function () {
        return {  
            options : [
                {
                    displayName : 'Home',
                    route : '/'
                }, 
                {
                    displayName : 'About',
                    route : '/about'
                }, 
            ]
        }
    },
    methods : {
        navigateToAbout : function(route) { 
            this.$router.push(route)
        }
    }
}
</script>

<style>
#NavBar {
    background-color: deepskyblue;
    height: min-content;
    width: 100%;
    position: fixed;
    top: 0;
    margin-bottom: 250px;
}
#navOptions-wrapper {
    padding: 10px;
    padding-top: 0px;
    display: flex;
    font-size: x-large;
    text-decoration: none;
}
li {
    padding: 0px;
    font-weight: bold;
    padding-left: 50px;
    list-style-type: none;    
}
li:hover {
    background-color: darkcyan;
    cursor: pointer;
}
</style>
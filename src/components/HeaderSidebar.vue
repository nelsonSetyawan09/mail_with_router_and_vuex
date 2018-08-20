<template lang="html">
    <aside class="header-sidebar">
        <ul>
            <router-link to="/" tag="li"> <a>ContentSidebar</a> </router-link>
            <router-link to="/inbox" tag="li"> <a>inbox</a> </router-link>
            <router-link to="/important" tag="li"> <a>important</a> </router-link>
            <router-link to="/sent" tag="li"> <a>sent</a> </router-link>
            <router-link to="/trash" tag="li"> <a>trash</a> </router-link>


        </ul>
    </aside>
</template>

<script>
    export default {

    }
</script>

<style lang="css" scoped>
</style>

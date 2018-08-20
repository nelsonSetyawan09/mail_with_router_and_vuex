<template>
    <div class="container" style="margin-top:45px;">
        <div class="main">
            <div class="medium-side">
                <app-header-sidebar></app-header-sidebar>
            </div>
            <div class="large-side">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderSidebar from './components/HeaderSidebar.vue';
    import ContentSidebar from './components/ContentSidebar.vue';
    export default {
        components:{
            'appHeaderSidebar': HeaderSidebar,
            'appContentSidebar': ContentSidebar
        },
        created(){
            // store.dispatch('actionA')
            this.$store.dispatch('initMessages');
        }

    }
</script>

<style scoped>
    .main{
        display: flex;
    }
    .medium-side{
        width: 30%;
        background-color: lightblue;
    }
    .large-side{
        width: 70%;
        background-color: lightgreen;
    }

</style>

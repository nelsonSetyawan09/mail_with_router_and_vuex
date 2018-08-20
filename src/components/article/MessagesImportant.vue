<template lang="html">
    <div class="">
        <ul>
            <li v-for="message in importantMessages">
                <h3>{{message.subject}}</h3>
                <router-link :to="'/important/' +message.id" tag="li"> <a>message ID: {{message.id}}</a> </router-link>
            <div style="width:90%; border-top:1px dashed black;"></div>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            importantMessages(){
                return this.$store.getters.important;
            }
        }

    }
</script>

<style lang="css">
</style>

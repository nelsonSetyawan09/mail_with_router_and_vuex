<template lang="html">
    <div class="">
        <ul>
            <li v-for="message in sentMessages">
                <h3>{{message.subject}}</h3>
                <router-link :to="'/sent/' +message.id" tag="li"> <a>message ID: {{message.id}}</a> </router-link>
            <div style="width:90%; border-top:1px dashed black;"></div>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            sentMessages(){
                return this.$store.getters.sent;
            }
        }

    }
</script>

<style lang="css">
</style>

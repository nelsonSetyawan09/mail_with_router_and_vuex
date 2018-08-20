<template lang="html">
    <div class="">
        <ul>
            <li v-for="message in trashMessages">
                <h3>{{message.subject}}</h3>
                <router-link :to="'/trash/' +message.id" tag="li"> <a>message ID: {{message.id}}</a> </router-link>
            <div style="width:90%; border-top:1px dashed black;"></div>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            trashMessages(){
                return this.$store.getters.trash;
            }
        }

    }
</script>

<style lang="css">
</style>

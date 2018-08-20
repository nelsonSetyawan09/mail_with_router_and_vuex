<template lang="html">
  <div class="message">
      <h1>Message</h1>
      <h3>{{message.id}}</h3>
      <hr>
      <h3>type: {{message.type}}</h3>
      <h3>subject: {{message.subject}}</h3>
        <div v-html="message.content"></div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                id: this.$route.params.id
            }
        },
        computed:{
            message(){
                let messageID = this.$store.getters.inbox.find(message =>{
                    return message.id == this.id
                });
                if(messageID){
                    // console.log(messageID);
                    return messageID
                }else{
                    'no message'
                }
            }
        }
    }
</script>

<style lang="css">
</style>

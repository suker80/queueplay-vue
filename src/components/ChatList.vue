<template>
  <div class="chat__body" id="chat__body" v-chat-scroll={always:true} >
      <chat-message
      v-for="(msg,index) in msgs"
      :username="username"
      :key="index"
      :msg="msg"
      :prev="[index ==0 ? null : msgs[index-1]]"
      ></chat-message>
  </div>

</template>

<script>
import ChatMessage from './ChatMessage.vue'
export default {
  components: { ChatMessage },
  props:["msgs","username"]
}
</script>

<style>
.chat__body{
    padding: 2rem;
    overflow: scroll;
    scroll-behavior: smooth;
    max-height: 800px;
    min-height: 800px;
}

</style>
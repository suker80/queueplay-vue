<template>
    <div>
        <div class="chat">
            <chat-list :msgs="msgData"></chat-list>
            <chat-form @submitMessage="sendMessage"></chat-form>
        </div>
    </div>
</template>

<script>
    import ChatForm from './ChatForm.vue'
    import ChatList from './ChatList.vue'
    import SockJS from 'sockjs-client'
    import Stomp from 'webstomp-client'
    export default {
        data() {
            return {userData: null, msgData: [], isMe: false, index: 0, msg: {},roomId : ''}
        },
        mounted() {
            console.log("tring to connect websocket")
            this.id = this.$route.params.id;
            var socket = new SockJS("http://localhost:8080/stomp/chat")
            this.stompClient = Stomp.over(socket)
            this
                .stompClient
                .connect({}, frame => {
                    this.connected = true;
                    console.log(frame)
                    this.stompClient
                        .subscribe("/excahnge/Queueplay.exchange." + this.id +"/lobby."+this.id ,function(content){
                          const paylodad = JSON.parse(content.body);
                          console.log(paylodad)


                        },{'auto-delete':true,'durable':false});

                }, error =>{
                  console.log(error)
                  
                })

        },
        components: {
            ChatList,
            ChatForm
        },
        methods: {
          
            sendMessage(msg) {
              var data = JSON.stringify({
                'username':'CallFromMe',
                'message':msg,
                
              })

              console.log(data)
              this.stompClient.send("/pub/Queueplay."+this.id,data,{})
            },    
        },
    }
</script>

<style>
    .chat {
        float: right;
        margin: 30px;
        width: 800px;
    }
</style>
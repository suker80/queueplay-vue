<template>
  <div class="form">
      <b-col sm="510">
      <b-form-textarea
        class="form_input"
        type="text"
        placeholder="Input Text"
        v-model.trim="msg"
        rows="1"
        no-resize
        @keyup.enter="submitMessage"/>
      </b-col>
    <div @click="submitMessage" 
    class="form_submit">
    </div>
  </div>



      

</template>

<script>
export default {
    data() {
        return {
            msg:""
        }
    },
    methods: {
        submitMessage(){
            if(this.msg){
                this.$emit("submitMessage",this.msg)
                this.msg = "";
         }
        return;}
    },

}
</script>

<style>
.form{
    padding: 20px;
    align-content: center;
    bottom: 0px;
    
}
.form_input{
    align-content: center;
}
</style>
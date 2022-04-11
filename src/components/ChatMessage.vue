<template>
    <div>
        <div v-if="isSame" class="my_message">
            <p class="my_message_p">{{msg.message}}</p>
        </div>
        <div v-else class="another_message">
            <div>
                <p class="another_message_name" v-if="!isSame">
                    {{msg.username}}
                </p>

                <p class="another_message_p">
                    {{msg.message}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "msg", "prev", "username"
        ],
        data() {
            return {isSame: false}
        },
        mounted() {
            this.isSame = this.isSamePerson(this.msg);

        },
        methods: {
            isSamePerson(msg) {
                return msg.username == this.username
            }
        }

    }
</script>

<style>
    .another_message {

        display: flex;
        justify-content: left;
        align-items: flex-start;
        margin: 0;
        min-height: 40px;
        line-break: anywhere;

    }
    .another_message_name {
        font-size: 14px;
        margin: 10px;
        align-items: flex-start;
        justify-content: left;

    }
    .another_message_p {
        margin: 0.4rem 0 0 1rem;
        border-radius: 0 10px 10px 10px;
        max-width: 180px;
        background-color: #e49fe4;
        color: #ffffff;
        padding: 0.8rem;
        font-size: 14px;
    }

    .my_message_p {
        margin: 0.4rem 0 0 1rem;
        border-radius: 10px 10px 0 10px;
        max-width: 180px;
        background-color: #bbc4ef;
        color: #ffffff;
        padding: 0.8rem;
        font-size: 14px;
    }
    .my_message {
        display: flex;
        justify-content: right;
        align-items: flex-end;
        margin: 0;
        min-height: 40px;
        line-break: anywhere;
    }
</style>
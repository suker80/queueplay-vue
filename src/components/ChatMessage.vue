<template>
    <div>
        <div v-if="msg.from.name === 'CallFromMe'">
            <p class="my_message_p">{{msg.msg}}</p>
        </div>
        <div v-else class="another_message">
            <div>
                <p class="another_message_name" v-if="!isSame">
                    {{msg.from.name}}
                </p>

                <div class="another_message_p">
                    <p class="another_message_p">
                        {{msg.msg}}
                    </p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    props: [
        "msg", "prev"
    ],
    data() {
        return {isSame: false}
    },
    methods: {
        isSamePerson(msg, prev) {
            if (prev == null) {
                return false
            } else if (
                prev[0]
                    ?.from.name == msg
                        ?.from.name
            ) {
                return true
            } else {
                return false
            }
        },
        created() {
            this.isSame = this.isSamePerson(this.msg, this.prev);

        }
    }

}
</script>

<style></style>
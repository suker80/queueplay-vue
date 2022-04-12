<template>
    <main class="form-signin">
        <div class="card">
            <div class="card-body">
                <form class="form" @submit.prevent="submitjoin">
                    <h2 class="h3 mb-3 fw-normal text-center">Please sign up</h2>

                    <div class="form-group">
                        <label>Email address</label>
                        <b-form-input
                            id="input-1"
                            v-model="email"
                            type="email"
                            placeholder="Enter email"
                            required="required"></b-form-input>

                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <b-form-input
                            id="input-2"
                            v-model="username"
                            placeholder="Enter name"
                            required="required"></b-form-input>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <b-form-input
                            id="input-3"
                            v-model="password"
                            placeholder="Enter password"
                            required="required"></b-form-input>
                    </div>

                    <button class="w-100 btn btn-lg btn-primary" type="submit" to="/signin">Sign up</button>
                </form>
            </div>
        </div>
        <p class="mt-3 mb-3 text-muted text-center">© 2020–2025</p>
    </main>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {email: '', password: '', username: ''}
        },
        methods: {
            submitjoin: function (event) {

                event.preventDefault();
                let self = this

                console.log(this.email, this.password,this.username);
                var data = {
                    email: this.email,
                    password: this.password,
                    username: this.username
                }
                axios
                    .post("/join", data)
                    .then(function (response) {
                        console.log(response)
                        if (response.status == 200) {
                            self
                                .$router
                                .push('/')
                        }
                    })
                    .catch(function (response) {
                        console.log(response)
                    })
                }

        }
    }
</script>

<style lang="css">
    body {
        padding-bottom: 60px;
        align-items: center;
    }
    .form-signin {
        width: 100%;
        max-width: 450px;
        margin: 100px auto auto;
    }
    label {
        font-weight: 600;
    }
</style>
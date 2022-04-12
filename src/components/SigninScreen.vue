<template>
    <main class="form-signin">
        <div class="card">
               <div class="card-body">
                    <form class="form" @submit.prevent="submitLogin"> 
                        <h2 class="h3 mb-3 fw-normal text-center">Please sign in</h2>

                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control form-control-lg" placeholder="Email address" v-model="email"/>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="password"/>
                        </div>

                        <div class="checkbox mb-3">
                             <label><input type="checkbox" value="remember-me"> Remember me</label>
                        </div>
                        <div class="form-group">
                        <button class="w-100 btn btn-lg btn-primary" type="submit" to="/signup">Sign in</button>
                        </div>
                        <div>
                            <a href="http://localhost:8080/oauth2/authorization/google">
                            <img src= '../assets/btn_google_signin_light_focus_web@2x.png'/>
                            </a> 
                        </div>
                        
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
            return {
                email:'',
                password:'',
                name:'',
                isLogin :false


            }
        },
        methods: {
            submitLogin: function(event){
                event.preventDefault();
                let self = this
                
                console.log(this.email,this.password);
                var data = {
                    email:this.email,
                    password:this.password
                }
                axios.post('/login',data)
                .then(function(response){
                    if (response.status == 200){
                        data.name = response.data.name;
                        data.isLogin = true
                        self.$emit('login',data)
                        self.$router.push('/')

                        console.log(response.headers)
                        var token = response.headers['authorization']
                        localStorage.setItem("token",token)

                        
                    }})
                

            }
            
        }
        ,

    }
</script>

<style lang="css">
    body {
        padding-bottom: 60px;        
        align-items: center;
    }
    .form-signin {
        padding-top: 120px;
        height: 100%;
        width: 100%;
        max-width: 450px;
        margin: auto;
    }
    label {
        font-weight: 600;
    }
</style>
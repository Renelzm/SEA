<template>
    <v-container class="flex-grow-1 min-height-vh">
        <div class="text-center">
            <v-dialog v-model="dialog" width="50%">


                <v-card class="pa-10"> <v-form ref="form" v-model="valid">
                        <v-card-title>
                            Por favor cambie su password
                        </v-card-title>
                        <v-card-item>

                            <v-col cols="12">
                                <v-text-field type="password" dense v-model="nuevoPassword" :counter="10" label="Password"
                                    :rules="passrule1" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field type="password" dense :rules="passrule" v-model="passwordConfirm"
                                    :counter="10" label="Confirmar password" required></v-text-field>
                            </v-col>
                            <v-btn color="primary" :disabled="!valid" block @click="renovarPassword">Enviar</v-btn>


                        </v-card-item>
                    </v-form></v-card>
            </v-dialog>
        </div>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{ page.title }} </div>

                </v-alert>



            </v-col>

            <v-col cols="12" md="6" sm="8" class="mt-10">
                <v-card elevation="4" align="center">

                    <v-card-subtitle>Bienvenido</v-card-subtitle>
                    <h3><strong>Iniciar Sesión</strong></h3>
                    <v-card-text>

                        <form>
                            <v-text-field label="Correo" v-model.trim="Correo" autocomplete="email"
                                prepend-inner-icon="mdi-email" placeholder=" " persistent-placeholder></v-text-field>
                            <v-text-field label="Contraseña" v-model.trim="Password" prepend-inner-icon="mdi-lock"
                                :type="hidden ? 'password' : 'text'" autocomplete="current-password"
                                :append-icon="hidden ? 'mdi-eye-off' : 'mdi-eye'" @click:append="hidden = !hidden"
                                placeholder=" " persistent-placeholder></v-text-field>
                        </form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn block @click="logIn">Entrar</v-btn>
                    </v-card-actions>
                </v-card>


            </v-col>

        </v-row>
    </v-container>
</template>
    
        
<script>
import axios from "axios";
import { mapState, mapActions } from 'vuex'
export default {
    name: 'log-in',
    data() {
        return {
            page: {
                color: 'blacl',
                title: 'Log-In',
                icon: 'mdi-cogs'
            },
            Correo: '',
            Password: '',
            hidden: true,
            loading: false,
            dialog: false,
            nuevoPassword: '',
            passwordConfirm: '',
            passrule1: [v => !!v || "Campo requerido"],
            passrule: [v => !!v || "Password requerido", v => v === this.nuevoPassword || 'Password debe coincidir'],
            valid: false,
        }

    },

    computed: {
        ...mapState(['usuario', 'URL'])
    },
    methods: {

        ...mapActions(['guardarUsuario']),

        logIn() {
            const _this = this;
            _this.loading = true;
            axios.post(`${this.$store.state.URL}/api/auth/login`, {
                Correo: this.Correo,
                Password: this.Password
            }).then(function (response) {
                if (response) {
                    console.log(response)

                    _this.guardarUsuario(response.data)
                    if (response.data.usuario.CheckPass === 0) {
                        _this.dialog = true
                    } else {
                        _this.userExist();
                    }

                } else {
                    console.log("Fallo no encuentra datos")
                    _this.$swal({ title: 'Oops...!', text: response.data.error, icon: 'error' });
                }
            }).catch(error => {
                console.log("Fallo en peticion"),
                    error
                _this.$swal({ title: 'Usuario y/o contraseña incorrectos', text: error.message, icon: 'error' });
            }).finally(() => _this.loading = false);
        },
        userExist() {
            
            if (this.usuario.status != false && this.usuario.data.Role == 'ADMIN' && this.usuario.data.CheckPass) {
                this.$router.push({ path: '/admin/superUser' })
            }
            
            if (this.usuario.status != false && this.usuario.data.Role == 'USER-INSTITUCION' && this.usuario.data.CheckPass) {
                this.$router.push({ path: '/admin/instituciones' }) 
                
            }
            console.log('admin pass')

        },
        patchedUser() {
          
            if (this.usuario.status != false && this.usuario.data.Role == 'ADMIN') {
                this.$router.push({ path: '/admin/superUser' })
            }
            if (this.usuario.status != false && this.usuario.data.Role == 'USER-INSTITUCION') {
                this.$router.push({ path: '/admin/instituciones' })
            }
        },
        renovarPassword() {
            const nuevoPassword =
            {
                nuevoPassword: this.nuevoPassword,
            }
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.patch(
                `${this.$store.state.URL}/api/institucion/newuser`, nuevoPassword,
                config
            )
                .then(res => {
                    _this.dialog = false,
                        _this.limpiarDatos();
                    _this.patchedUser();
                    _this.$swal({
                        title: 'Exito!',
                        text: "El password cambio con éxito",
                        icon: 'success'
                    });
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });

                });
        },
        limpiarDatos() {
            this.passwordConfirm = ''
            this.nuevoPassword = ''
        },

    },
    beforeMount() {
        this.userExist()
    },
    beforeCreate() {

    },
}

</script>
    
        
<style lang="scss" scoped>
.min-height-vh {
    min-height: 100vh;
}
</style>

    
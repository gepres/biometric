<template>
  <v-container class="pageContainer">
    <v-row class="pageContainer_row justify-center align-center">
      <v-col xs="12" sm="12" md="4" lg="4">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
           class="d-flex justify-center align-center flex-column"
        >
        <div class="d-flex flex-column align-start justify-start w-100">
          <label for="username">Usuario</label>
          <v-text-field
            id="username"
            v-model="user.email"
            :rules="nameRules"
            class="w-100"
            required
            placeholder="Escribe aquí"
            solo
            dense
            single-line
          ></v-text-field>
        </div>

        <div class="d-flex flex-column align-start justify-start w-100">
          <label for="username">Contraseña</label>
          <v-text-field
            v-model="user.password"
            :rules="PasswordRules"
            type="password"
            class="w-100"
            required
            placeholder="Escribe aquí"
            solo
            dense
            single-line
          ></v-text-field>
        </div>
          <v-btn
            color="blue_default"
            @click="validate"
            width="200"
          >
            Ingresar
            <v-progress-circular v-if="loadingLogin"  :size="20" indeterminate class="ml-2" color="grey" />
          </v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import { mapActions } from "vuex";
  export default {
    data(){
      return {
        valid: false,
        user:{
          email: '',
          password: ''
        },
        loadingLogin: false,
        nameRules: [
          v => !!v || 'Nombre es requerido.',
          v => (v && v.length <= 10) || 'debe tener más de 5 caracteres',
        ],
        PasswordRules: [
          v => !!v || 'Contraseña es requerido.',
          v => (v && v.length <= 10) || 'debe tener más de 5 caracteres',
        ]
      }
    },

    methods: {
      ...mapActions({
      signInUser: 'auth/signInUser'
      }),
      async validate () {
        this.$refs.form.validate()
        if(!this.valid) return
        this.loadingLogin = true
        const datos = {
          username:this.user.email,
          password:this.user.password
        }
        const {ok, message} = await this.signInUser(datos)
        if(!ok) alert(message)
        else this.$router.push({name: 'dashboard-home'})
        this.loadingLogin = false
        }
    },
  }
</script>

<style lang="scss" scoped>
.pageContainer{
  height: 100vh;
  &_row{
    height: 100vh;
  }
}
</style>
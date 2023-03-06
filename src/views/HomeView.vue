<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import FormInput from '@/components/FormInput.vue'
import FormCheckbox from '@/components/FormCheckbox.vue'
import FormButton from '@/components/FormButton.vue'
import NavBar from '@/components/NavBar.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import axios from 'axios'
import type { Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { reactive, ref, computed } from 'vue'
import router from '@/router'

const details = reactive({
  email: '',
  password: ''
})

let emailError: String | Ref<String>
let passwordError: String | Ref<String>

let error = ref('')

let token = ref('')

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required }
  }
})

const v$ = useVuelidate(rules, details)

function updateEmail(n: string) {
  details.email = n
}

function updatePassword(n: string) {
  details.password = n
}

function submit() {
  emailError = ''
  passwordError = ''
  error.value = ''
  localStorage.removeItem("token")
  v$.value.$validate()
  if (v$.value.email.$error) {
    emailError = v$.value.email.$errors[0].$message
  }
  if (v$.value.password.$error) {
    passwordError = v$.value.password.$errors[0].$message
  }
  console.log(v$.value)
  axios
    .post('https://hci-proj.onrender.com/api/v1/login/', {
      email: details.email,
      password: details.password
    })
    .catch((err: any) => {
      console.log(err.response)
      error.value = err.response.data
      details.password = ''
    })
    .then((res: any) => {
      console.log(res.data)
      token.value = res.data.tokens
      localStorage.setItem("token", token.value)
        ; (details.email = ''), (details.password = '')
      router.push(`/accounts/${"user"}/records_update`)
    })
}
</script>

<template>
  <header>
    <nav class="mx-10 my-5 flex justify-center font-bold">
      <NavBar />
    </nav>
  </header>

  <div class="view text-[#667085]">
    <PageTitle title="Log into your account" subtitle="Welcome back! Please enter your details" />
    <form action="records_update" @submit.prevent="submit">
      <FormInput title="Email" text="Enter your email" type="email" @update="updateEmail" :error="emailError"
        :value="details.email" />
      <FormInput title="Password" text="Enter your password" type="password" @update="updatePassword"
        :error="passwordError" :value="details.password" />
      <p v-if="error" class="flex flex-row items-center pb-2 text-[#FF3B3B]">
        <span class="mr-1">
          <ErrorIcon />
        </span>{{ error }}
      </p>
      <FormCheckbox />
      <FormButton text="Sign in" />
    </form>
  </div>
</template>

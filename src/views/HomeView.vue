<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import FormInput from '@/components/FormInput.vue';
import FormCheckbox from '@/components/FormCheckbox.vue';
import FormButton from '@/components/FormButton.vue';
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import axios from 'axios'
import type { Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators'
import { reactive, ref, computed } from 'vue';

const details = reactive({
  email: '',
  password: '',
})

let emailError: String | Ref<String>
let passwordError: String | Ref<String>

let error = ref('')

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  }
})

const v$ = useVuelidate(rules, details)

function updateEmail(n: string,) {
  details.email = n
}

function updatePassword(n: string,) {
  details.password = n
}

function submit() {
  error.value = ''
  v$.value.$validate()
  if (v$.value.email.$error) {
    emailError = v$.value.email.$errors[0].$message
  }
  if (v$.value.password.$error) {
    passwordError = v$.value.password.$errors[0].$message
  }
  console.log(v$.value)
  axios.post(
      'https://hci-proj.onrender.com/api/v1/login/',
      {
        'email': details.email,
        'password': details.password,
      }
    )
    .catch ((err: any) => {
    console.log(err.response)
    error.value = err.response.data
    })
    .then((res: any) => {
      console.log(res.data.dat)
      details.email = '',
      details.password = ''
    })

}

</script>

<template>
  <div class="text-[#667085]">
    <PageTitle title="Log into your account" subtitle="Welcome back! Please enter your details" />
    <form action="" @submit.prevent="submit">
      <FormInput title="Email" text="Enter your email" type="email" @Input="updateEmail" :error="emailError"
        :value="details.email" />
      <FormInput title="Password" text="Enter your password" type="password" @Input="updatePassword"
        :error="passwordError" :value="details.password" />
      <p v-if="error" class="text-[#FF3B3B] pb-2 flex flex-row items-center"><span class="mr-1">
          <ErrorIcon />
        </span>{{ error }}
      </p>
      <FormCheckbox />
      <FormButton text="Sign in" />
    </form>
  </div>
</template>

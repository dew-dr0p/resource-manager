<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import FormInput from '@/components/FormInput.vue';
import FormCheckbox from '@/components/FormCheckbox.vue';
import FormButton from '@/components/FormButton.vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators'
import { reactive } from 'vue';

const details = reactive({
  username: '',
  password: '',
})

const rules = {
  username: {required},
  password: {required},
}

const v$ = useVuelidate(rules, details)

function updateEmail(n: string, ) {
  details.username = n
  console.log(v$.value)
}

function updatePassword(n: string, ) {
  details.password = n
  console.log(v$.value.username.$error)
}

</script>

<template>
  <div class="text-[#667085]">
    <PageTitle />
    <form action="">
      <FormInput title="Username" text="Enter your username" type="text" @Input="updateEmail"/>
      <p>{{ details.username }}</p>
      <FormInput title="Password" text="Enter your password" type="password" @Input="updatePassword"/>
      <p>{{ details.password }}</p>
      <FormCheckbox />
      <FormButton />
    </form>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/FormInput.vue';
import FormCheckbox from '@/components/FormCheckbox.vue';
import FormButton from '@/components/FormButton.vue';

</script>

<template>
  <div class="text-[#667085]">
    <h1 class="font-bold text-3xl text-black w-full text-center px-5">Log into your account</h1>
    <h5 class="w-full text-center p-3">Welcome back! Please enter your details</h5>
    <form action="">
      <FormInput title="Username" text="Enter your username" type="text" />
      <FormInput title="Password" text="Enter your password" type="password" />
      <FormCheckbox />
      <FormButton />
    </form>
  </div>
</template>

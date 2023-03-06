<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue'
import FormButton from '@/components/FormButton.vue'
import PageTitle from '@/components/PageTitle.vue'
import FormInput from '@/components/FormInput.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
</script>

<template>
  <header>
    <nav class="flex items-center justify-between bg-[#41521F] p-4 font-bold text-white">
      <NavBar />
    </nav>
  </header>

  <div class="view text-[#667085]">
    <PageTitle
      title="Resource Collection"
      subtitle="Please enter the details of resource about to be returned"
    />
    <form action="" @submit.prevent="">
      <FormInput
        title="Student Registration Number"
        text="Enter registration number"
        type="number"
      />
      <FormInput title="Resource ID" text="Type in the identifier" type="number" />
      <p v-if="Error" class="flex flex-row items-center pb-2 text-[#FF3B3B]">
        <span class="mr-1">
          <ErrorIcon /> </span
        >{{}}
      </p>
      <FormButton text="Continue" />
    </form>
  </div>
</template>

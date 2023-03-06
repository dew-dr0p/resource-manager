<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue'
import PageTitle from '@/components/PageTitle.vue'
import FormButton from '@/components/FormButton.vue'
import FormInput from '@/components/FormInput.vue'
</script>

<template>
  <header>
    <nav class="flex items-center justify-between bg-[#41521F] p-4 font-bold text-white">
      <NavBar />
    </nav>
  </header>

  <div class="view text-[#667085]">
    <PageTitle
      title="Return Resource"
      subtitle="Please enter the details of resource to be returned"
    />
    <form action="">
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
      <FormButton text="Done" />
    </form>
  </div>
</template>

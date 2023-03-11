<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue'
import FormButton from '@/components/FormButton.vue'
import PageTitle from '@/components/PageTitle.vue'
import FormInput from '@/components/FormInput.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import axios from 'axios'
import type { Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, maxLength } from '@vuelidate/validators'
import { reactive, ref, computed } from 'vue'

const details = reactive({
  regNo: 0,
  id: '',
})

let regNoError: String | Ref<String>
let idError: String | Ref<String>

let error = ref('')

const rules = computed(() => {
  return {
    regNo: { required, numeric, maxLength: maxLength(8) },
    id: { required, maxLength: maxLength(35) },
  }
})

const v$ = useVuelidate(rules, details)

function updateRegNo(n: string) {
  details.regNo = parseInt(n)
}

function updateId(n: string) {
  details.id = n
}

function submit() {
  regNoError = ''
  idError = ''
  error.value = ''
  v$.value.$validate()
  if (v$.value.regNo.$error) {
    regNoError = v$.value.regNo.$errors[0].$message
  }
  if (v$.value.id.$error) {
    idError = v$.value.id.$errors[0].$message
  }
  console.log(v$.value)
  axios
    .post('https://hci-proj.onrender.com/api/v1/resource/', {
      resource_id: details.id,
      regNo: details.regNo,
    }, {
        headers: {
            'Authorization': `Token ${localStorage.getItem("token")}`
        }
    })
    .then(
      (res: any) => {
        console.log(res.data.data)
        details.id = ''
        details.regNo = 0
      },
      (err: any) => {
        console.log(err.response)
        error.value = err.response.data.detail
      }
    )
}
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
    <form action="" @submit.prevent="submit()" class="mt-10">
      <FormInput
        title="Student Registration Number"
        text="Enter registration number"
        type="number" 
        :error="regNoError" 
        :value="String(details.regNo)"
        @update="updateRegNo"
      />
      <FormInput 
        title="Resource ID" 
        text="Type in the identifier" 
        type="number" 
        :error="idError" 
        :value="details.id"
        @update="updateId"
        class="mb-20"
      />
      <button class="text-[#B7BBC1]"><span class="mr-3">+</span> Add Resource</button>
      <p v-if="error" class="flex flex-row items-center pb-2 text-[#FF3B3B]">
        <span class="mr-1">
          <ErrorIcon /> 
        </span
      >
        {{ error }}
      </p>
      <FormButton text="Continue" />
    </form>
  </div>
</template>

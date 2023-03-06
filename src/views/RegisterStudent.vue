<script setup lang="ts">
import FormButton from '@/components/FormButton.vue'
import FormInput from '@/components/FormInput.vue'
import PageTitle from '@/components/PageTitle.vue'
import NavBar from '@/components/NavBar.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import axios from 'axios'
import type { Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, numeric } from '@vuelidate/validators'
import { reactive, ref, computed } from 'vue'

const details = reactive({
  name: {
    firstName: '',
    surname: ''
  },
  department: '',
  regNo: ''
})

let firstNameError: String | Ref<String>
let surnameError: String | Ref<String>
let departmentError: String | Ref<String>
let regNoError: String | Ref<String>

let error = ref('')

const rules = computed(() => {
  return {
    name: {
      firstName: { required, maxLength: maxLength(20) },
      surname: { required, maxLength: maxLength(20) }
    },
    department: { required, maxLength: maxLength(25) },
    regNo: { required, numeric, maxLength: maxLength(8) }
  }
})

const v$ = useVuelidate(rules, details)

function updateFirstName(n: string) {
  details.name.firstName = n
}

function updateSurname(n: string) {
  details.name.surname = n
}

function updateDepartment(n: string) {
  details.department = n
}

function updateRegNo(n: string) {
  details.regNo = n
}

async function submit() {
  firstNameError = ''
  surnameError = ''
  departmentError = ''
  error.value = ''
  v$.value.$validate()
  if (v$.value.name.firstName.$error) {
    firstNameError = v$.value.name.firstName.$errors[0].$message
  }
  if (v$.value.name.surname.$error) {
    surnameError = v$.value.name.surname.$errors[0].$message
  }
  if (v$.value.department.$error) {
    departmentError = v$.value.department.$errors[0].$message
  }
  if (v$.value.regNo.$error) {
    regNoError = v$.value.regNo.$errors[0].$message
  }
  console.log(v$.value)
  try {
    const { data } = await axios.post('https://hci-proj.onrender.com/api/v1/student/', {
      firstname: details.name.firstName,
      lastname: details.name.surname,
      deparment: details.department,
      reg_no: details.regNo
    })
    console.log(data)
    return data
  } catch (err: any) {
    console.log(err.response)
    error.value = err.response.data
  } finally {
    ;(details.name.firstName = ''),
      (details.name.surname = ''),
      (details.department = ''),
      (details.regNo = '')
  }
}
</script>

<template>
  <header>
    <nav class="mx-10 my-5 flex justify-center font-bold">
      <NavBar />
    </nav>
  </header>

  <div class="view text-[#667085]">
    <PageTitle title="Register Student" subtitle="Please enter Student details" />
    <form action="" @submit.prevent="submit()">
      <div class="flex flex-row">
        <FormInput
          type="text"
          title="First Name"
          text="Firstname"
          class="mr-3"
          :error="firstNameError"
          :value="details.name.firstName"
          @update="updateFirstName"
        />
        <FormInput
          type="text"
          text="Surname"
          title="Surname"
          :error="surnameError"
          :value="details.name.surname"
          @update="updateSurname"
        />
      </div>
      <FormInput
        title="Department"
        type="text"
        text="Department"
        :error="departmentError"
        :value="details.department"
        @update="updateDepartment"
      />
      <FormInput
        title="Registration Number"
        type="number"
        text="Reg. No."
        :error="regNoError"
        :value="details.regNo"
        @update="updateRegNo"
      />
      <p v-if="error" class="flex flex-row items-center pb-2 text-[#FF3B3B]">
        <span class="mr-1">
          <ErrorIcon />
        </span>
        {{ error }}
      </p>
      <FormButton text="Register" />
    </form>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue'
import FormButton from '@/components/FormButton.vue'
import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'
import PageTitle from '@/components/PageTitle.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import axios from 'axios'
import type { Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, maxLength } from '@vuelidate/validators'
import { reactive, ref, computed } from 'vue'

const details = reactive({
  price: 0,
  id: '',
  title: '',
  location: '',
  author: ''
})

let priceError: String | Ref<String>
let idError: String | Ref<String>
let titleError: String | Ref<String>
let locationError: String | Ref<String>
let authorError: String | Ref<String>

let error = ref('')

const rules = computed(() => {
  return {
    price: { required, numeric },
    id: { required, maxLength: maxLength(35) },
    title: { required },
    location: { required },
    author: { required, maxLength: maxLength(35) }
  }
})

const v$ = useVuelidate(rules, details)

function updatePrice(n: string) {
  details.price = parseInt(n)
}

function updateId(n: string) {
  details.id = n
}

function updateTitle(n: string) {
  details.title = n
}

function updateLocation(n: string) {
  details.location = n
}

function updateAuthor(n: string) {
  details.author = n
}

function submit() {
  priceError = ''
  idError = ''
  titleError = ''
  locationError = ''
  authorError = ''
  error.value = ''
  v$.value.$validate()
  if (v$.value.price.$error) {
    priceError = v$.value.price.$errors[0].$message
  }
  if (v$.value.id.$error) {
    idError = v$.value.id.$errors[0].$message
  }
  if (v$.value.title.$error) {
    titleError = v$.value.title.$errors[0].$message
  }
  if (v$.value.location.$error) {
    locationError = v$.value.location.$errors[0].$message
  }
  if (v$.value.author.$error) {
    authorError = v$.value.author.$errors[0].$message
  }
  console.log(v$.value)
  axios
    .post('https://hci-proj.onrender.com/api/v1/resource/', {
      resource_id: details.id,
      title: details.title,
      location: details.location,
      price: details.price,
      author: details.author
    }, {
        headers: {
            'Authorization': `Token ${localStorage.getItem("token")}`
        }
    })
    .then(
      (res: any) => {
        console.log(res.data.data)
        details.id = ''
        details.title = ''
        details.location = ''
        details.price = 0
        details.author = ''
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
    <PageTitle title="Update Records" subtitle="Please enter the details of resource to be added" />
    <form action="" @submit.prevent="submit()">
      <table class="m-10 -mx-52 flex justify-center">
        <td class="border-r-2 border-[#667085] pr-10">
          <tr>
            <FormSelect title="Resource Type" class="w-80" />
          </tr>
          <tr>
            <FormInput
              title="Price"
              type="number"
              text="Price"
              :error="priceError"
              :value="String(details.price)"
              @update="updatePrice"
            />
          </tr>
          <tr>
            <FormInput
              title="Resource ID"
              type="text"
              text="ID"
              :error="idError"
              :value="details.id"
              @update="updateId"
            />
          </tr>
        </td>
        <td class="pl-10">
          <tr>
            <FormInput
              title="Title"
              type="text"
              text="Resource Title"
              class="w-80"
              :error="titleError"
              :value="details.title"
              @update="updateTitle"
            />
          </tr>
          <tr>
            <FormInput
              title="Location"
              type="text"
              text="Type in the resource location"
              :error="locationError"
              :value="details.location"
              @update="updateLocation"
            />
          </tr>
          <tr>
            <FormInput
              title="Author"
              type="text"
              text="Resource Author"
              :error="authorError"
              :value="details.author"
              @update="updateAuthor"
            />
          </tr>
        </td>
      </table>
      <p v-if="error" class="flex flex-row items-center pb-2 text-[#FF3B3B]">
        <span class="mr-1">
          <ErrorIcon /> </span
        >{{ error }}
      </p>
      <FormButton text="Update" />
    </form>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import FormButton from '@/components/FormButton.vue';
import FormInput from '@/components/FormInput.vue';
import ErrorIcon from '@/components/icons/ErrorIcon.vue';
import axios from 'axios'
import type { Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, ref, computed } from 'vue';

const details = reactive({
    name: {
        firstName: '',
        surname: '',
    },
    email: '',
    password: '',
    confirmPassword: '',
})

let firstNameError: String | Ref<String>
let surnameError: String | Ref<String>
let emailError: String | Ref<String>
let passwordError: String | Ref<String>
let confirmPasswordError: String | Ref<String>

let error = ref('')

const rules = computed(() => {
    return {
        name: {
            firstName: { required },
            surname: { required },
        },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAs: sameAs(details.password) }
    }
})

const v$ = useVuelidate(rules, details)

function updateFirstName(n: string,) {
    details.name.firstName = n
}

function updateSurname(n: string,) {
    details.name.surname = n
}

function updateEmail(n: string,) {
    details.email = n
}

function updatePassword(n: string,) {
    details.password = n
}

function updateConfirmPassword(n: string,) {
    details.confirmPassword = n
}

async function submit() {
    firstNameError = ''
    surnameError = ''
    emailError = ''
    passwordError = ''
    confirmPasswordError = ''
    v$.value.$validate()
    if (v$.value.name.firstName.$error) {
        firstNameError = v$.value.name.firstName.$errors[0].$message
    }
    if (v$.value.name.surname.$error) {
        surnameError = v$.value.name.surname.$errors[0].$message
    }
    if (v$.value.email.$error) {
        emailError = v$.value.email.$errors[0].$message
    }
    if (v$.value.password.$error) {
        passwordError = v$.value.password.$errors[0].$message
    }
    if (v$.value.confirmPassword.$error) {
        confirmPasswordError = v$.value.confirmPassword.$errors[0].$message
    }
    console.log(v$.value)
    try {
        const { data } = await axios.post(
            'https://hci-proj.onrender.com/api/v1/register/',
            {
                'firstname': details.name.firstName,
                'lastname': details.name.surname,
                'email': details.email,
                'password': details.password,
            }
        )
        console.log(data)
        return data
    } catch (err: any) {
        console.log(err.response)
        error.value = err.response.data
    } finally {
        details.name.firstName = '',
        details.name.surname = '',
        details.email = '',
        details.password = '',
        details.confirmPassword = ''
    }

}
</script>

<template>
    <div class="text-[#667085]">
        <PageTitle title="Create a Staff Account" subtitle="Please enter your details" />
        <form action="" @submit.prevent="submit()">
            <div class="flex flex-row">
                <FormInput 
                    type="text" 
                    title="First Name" 
                    text="Firstname" 
                    class="mr-3" 
                    :error="firstNameError" 
                    :value="details.name.firstName"
                    @Input="updateFirstName"    
                />
                <FormInput 
                    type="text" 
                    text="Surname" 
                    title="Surname" 
                    :error="surnameError" 
                    :value="details.name.surname" 
                    @Input="updateSurname"    
                />
            </div>
            <FormInput 
                title="Email" 
                type="email" 
                text="Enter your email" 
                :error="emailError" 
                :value="details.email" 
                @Input="updateEmail" 
            />
            <FormInput 
                title="Password" 
                type="password" 
                text="Create a password" 
                :error="passwordError" 
                :value="details.password" 
                @Input="updatePassword" 
            />
            <FormInput 
                title="Confirm Password" 
                type="password" 
                text="Retype your password" 
                :error="confirmPasswordError" 
                :value="details.confirmPassword" 
                @Input="updateConfirmPassword" 
            />
            <p v-if="error" class="text-[#FF3B3B] pb-2 flex flex-row items-center">
                <span class="mr-1">
                    <ErrorIcon />
                </span>
                {{ error }}
            </p>
            <FormButton text="Register" />
        </form>
    </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue';
import FormButton from '@/components/FormButton.vue';
import PageTitle from '@/components/PageTitle.vue';
import FormInput from '@/components/FormInput.vue';
import ErrorIcon from '@/components/icons/ErrorIcon.vue';
</script>

<template>
    <header>
        <Nav class="p-4 text-white font-bold justify-between flex bg-[#41521F] items-center">
            <NavBar />
        </Nav>
    </header>

    <div class="text-[#667085] view">
        <PageTitle title="Resource Collection" subtitle="Please enter the details of resource about to be returned" />
        <form action="" @submit.prevent="">
            <FormInput title="Student Registration Number" text="Enter registration number" type="number" />
            <FormInput title="Resource ID" text="Type in the identifier" type="number" />
            <p v-if="Error" class="text-[#FF3B3B] pb-2 flex flex-row items-center"><span class="mr-1">
                    <ErrorIcon />
                </span>{{  }}
            </p>
            <FormButton text="Continue" />
        </form>
    </div>
</template>
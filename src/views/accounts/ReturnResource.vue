<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue';
import PageTitle from '@/components/PageTitle.vue';
import FormButton from '@/components/FormButton.vue';
import FormInput from '@/components/FormInput.vue';

</script>

<template>
    <header>
        <Nav class="p-4 text-white font-bold justify-between flex bg-[#41521F] items-center">
            <NavBar />
        </Nav>
    </header>

    <div class="text-[#667085] view">
        <PageTitle title="Return Resource" subtitle="Please enter the details of resource to be returned" />
        <form action="">
            <FormInput title="Student Registration Number" text="Enter registration number" type="number" />
            <FormInput title="Resource ID" text="Type in the identifier" type="number" />
            <p v-if="Error" class="text-[#FF3B3B] pb-2 flex flex-row items-center"><span class="mr-1">
                    <ErrorIcon />
                </span>{{  }}
            </p>
            <FormButton text="Done" />
        </form>
    </div>
</template>
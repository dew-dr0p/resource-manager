<script setup lang="ts">
import NavBar from '@/components/accounts/NavBar.vue';
import FormButton from '@/components/FormButton.vue';
import FormInput from '@/components/FormInput.vue';
import PageTitle from '@/components/PageTitle.vue';

</script>

<template>
    <header>
        <Nav class="p-4 text-white font-bold justify-between flex bg-[#41521F] items-center">
            <NavBar />
        </Nav>
    </header>

    <div class="text-[#667085] view">
        <PageTitle title="Update Records" subtitle="Click an option to continue" />
        <form >
            <table class="m-10 -mx-52 justify-center flex">
                <td class="pr-10 border-r-2 border-[#667085]">
                    <tr><FormInput title="Resource Type" class="w-80" type="select" /></tr>
                    <tr><FormInput title="Price" type="number" text="Price" /></tr>
                    <tr><FormInput title="Resource ID" type="number" text="ID" /></tr>
                </td>
                <td class="pl-10">
                    <tr><FormInput title="Title" type="text" text="Resource Title" class="w-80" /></tr>
                    <tr><FormInput title="Location" type="text" text="Type in the resource location" /></tr>
                    <tr><FormInput title="Author" type="text" text="Resource Author" /></tr>
                </td>
            </table>
            <FormButton text="Update" />
        </form>
    </div>
</template>
<template>
    <div>
        <RouterLink to="records_update" class="mr-5 p-3">Records</RouterLink>
        <RouterLink to="resource_collection" class="mr-5 p-3">Resource Collection</RouterLink>
        <RouterLink to="return_resource" class="mr-5 p-3">Return Resource</RouterLink>
    </div>
    <img src="/assets/profile_icon.svg" alt="" class="rounded-full bg-[#98a382] w-8 h-8 p-1">
</template>

<style scoped>
.router-link-active, .router-link-exact-active {
  background: #758459;
  border-radius: .5rem;
}
</style>
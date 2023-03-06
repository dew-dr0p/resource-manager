<template>
  <div>
    <RouterLink to="records_update" class="mr-5 p-3 px-4">Records</RouterLink>
    <RouterLink to="resource_collection" class="mr-5 p-3 px-4">Resource Collection</RouterLink>
    <RouterLink to="return_resource" class="mr-5 p-3 px-4">Return Resource</RouterLink>
  </div>
  <img src="/assets/profile_icon.svg" alt="" class="h-8 w-8 rounded-full bg-[#98a382] p-1" />
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  background: #758459;
  border-radius: 0.5rem;
}
</style>

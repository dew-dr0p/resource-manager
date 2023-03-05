<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <header>
    <Nav class="mx-10 my-5 font-bold justify-center flex">
      <NavBar />
    </Nav>
  </header>

  <RouterView class="view" />

  <footer class="mt-12">
    <FooterBar />
  </footer>
</template>

<style scoped>
.view {
  margin: auto;
  /* margin-top: 4rem; */
  /* margin-top: auto;
  margin-bottom: auto; */
  padding: 0 2rem;
  width: max-content;
}
</style>

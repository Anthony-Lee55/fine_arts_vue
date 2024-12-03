<script setup>
import { AppState } from '@/AppState';
import Artwork from '@/components/globals/Artwork.vue';
import Page from '@/components/globals/Page.vue';
import { artService } from '@/services/ArtService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';


</script>

<template>
  <header>
    <h1 class="fw-bold fst-italic m-4">Institute of Art</h1>
  </header>
  <main class="container-fluid">
    <section class="row">
      <Page />
      <Artwork />
    </section>
  </main>
  <footer>
  </footer>
</template>

<style scoped lang="scss"></style>

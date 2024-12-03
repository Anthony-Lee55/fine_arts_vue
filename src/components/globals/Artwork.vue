<script setup>
import { AppState } from '@/AppState';
import { artService } from '@/services/ArtService';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const arts = computed(() => AppState.arts)

onMounted(() => {
  discoverArt()
})

async function discoverArt() {
  try {
    await artService.discoverArt()
  }
  catch (error) {
    Pop.toast('Could not get art', 'error')
    console.log(error)
  }
}
</script>


<template>
  <div class="d-flex flex-wrap col-md-9">
    <div v-for="art in arts" :key="art.id" class="col-md-4 p-2 justify-content-center">
      <img class="img-fluid" :src="art.imgUrls" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
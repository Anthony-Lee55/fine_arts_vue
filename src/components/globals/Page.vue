<script setup>
import { AppState } from '@/AppState';
import { artService } from '@/services/ArtService';
import Pop from '@/utils/Pop';
import { computed } from 'vue';


const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function getPage(pageNumber) {
  try {
    await artService.changePage(pageNumber)
  }
  catch (error) {
    Pop.toast('Could not get desired page', 'error')
    console.error(error)
  }
}
</script>


<template>
  <div class="col-md-3 ">
    <span class="d-flex flex-wrap fs-1 justify-content-center">
      <i class="mdi mdi-paper-roll-outline"></i>
    </span>
    <span class="d-flex fs-4 justify-content-center">
      <p>{{ currentPage }} 0f {{ totalPages }}</p>
    </span>
    <span class="d-flex justify-content-around">
      <button @click="getPage(currentPage - 1)" :disabled="currentPage == 1"
        class="btn btn-outline-light rounded-pill"><i class="mdi mdi-undo"></i> Previous</button>
      <button @click="getPage(currentPage + 1)" :disabled="currentPage == 35"
        class="btn btn-outline-light rounded-pill"> Next <i class="mdi mdi-redo"></i></button>
    </span>
  </div>
</template>


<style lang="scss" scoped></style>
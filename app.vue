<template>
  <div>
    <NuxtPage />
    <Modal :class="[
      { 'max-h-[100vh] transition-all duration-200 ease-in visible': isCloseOverlay },
      { 'max-h-0 transition-all duration-200 ease-out invisible': !isCloseOverlay },
    ]" />
    <div v-for="task in tasks" :key="task.id">
      <p>{{ task.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "./stores/task"
import { storeToRefs } from "pinia";

const { getNotes } = useTaskStore()
const { isCloseOverlay, tasks } = storeToRefs(useTaskStore())


onMounted(() => {
  getNotes()
})
</script>

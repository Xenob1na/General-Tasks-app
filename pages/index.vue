<template>
    <MainLayout>
        <div class="max-w-[1140px] mx-auto mt-8">
            <ProfileCard />

            <ClientOnly>

                <template #fallback>

                    <div class="text-white mx-auto flex flex-col items-center justify-center mt-5">
                        <Icon name="line-md:downloading-loop" size="50" color="white" />
                        <div class="text-white">Загрузка данных...</div>
                    </div>
                </template>
            </ClientOnly>

            <div v-if="isLoading">
                <div class="text-white mx-auto flex flex-col items-center justify-center">
                    <Icon name="line-md:downloading-loop" size="50" color="white" />
                    <div class="text-white">Загрузка данных...</div>
                </div>
            </div>

            <div v-else-if="isTask">
                <NotesList v-for="task in Tasks" :key="task.id" :items="task" />
            </div>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue'
import { useTaskStore } from "../stores/task"
import { storeToRefs } from "pinia";

const { getNotes } = useTaskStore()
const { tasks } = storeToRefs(useTaskStore())

const isLoading = ref(false)

interface Task {
    id: number;
    title: string;
    body: string;
    time: number;
}

const Tasks = ref<Task[]>([])
const isTask = ref(false)

onMounted(async () => {
    isLoading.value = true
    try {
        await getNotes()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
})

onBeforeMount(() => {
    watchEffect(() => {
        Tasks.value = tasks.value
        if (tasks && tasks.value.length >= 1) {
            isTask.value = true
        } else {
            isTask.value = false
        }
    })
})

watch(() => Tasks.value, () => {
    Tasks.value = tasks.value
    if (tasks && tasks.value.length >= 1) {
        isTask.value = true
    } else {
        isTask.value = false
    }
}, { deep: true })

</script>
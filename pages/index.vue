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

            <div v-if="isPendding">
                <div class="text-white mx-auto flex flex-col items-center justify-center">
                    <Icon name="line-md:downloading-loop" size="50" color="white" />
                    <div class="text-white">Загрузка данных...</div>
                </div>
            </div>

            <div v-if="isTask">
                <NotesList v-for="task in Tasks" :key="task.id" :items="task" />
            </div>
            <div v-else class="mt-10">
                <p class="text-center text-white text-[18px] font-bold">Нет заметок</p>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue'
import { useTaskStore } from "../stores/task"
import { storeToRefs } from "pinia";

const { getNotes } = useTaskStore()
const { tasks, isPendding } = storeToRefs(useTaskStore())



interface Task {
    id: number;
    title: string;
    body: string;
}

const Tasks = ref<Task[]>([])
const isTask = ref(false)

onMounted(async () => {
    try {
        await getNotes()
    } catch (error) {
        console.log(error)
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
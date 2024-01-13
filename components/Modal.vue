<template>
    <div id="Modal"
        class="fixed grid place-items-center  z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
        <div class="bg-white w-full max-w-[500px] rounded-lg text-white border border-gray-500 p-2">
            <button class="flex justify-between bg-white w-full p-3" @click="isCloseOverlay = false">
                <p class="text-[#030229] font-bold text-[16px]">Добавить заметку</p>
                <Icon name="mdi:close" size="25" color="black" />
            </button>

            <form class="mx-auto  rounded-lg" @click.prevent="" @keypress.enter="onSubmit">
                <div class="flex flex-col gap-4 p-4 md:p-8">

                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Заголовок</label>
                        <input name="task_title" v-model="content.title"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-[#00B37E] transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Описание</label>
                        <textarea v-model="content.body"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-[#00B37E] transition duration-100 focus:ring"
                            name="" id="" cols="30" rows="2"></textarea>
                    </div>
                    <button @click="onSubmit"
                        class="block rounded-lg bg-[#00B37E] mt-5 px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-[#00B37E] transition duration-100 md:text-base">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../stores/task"
import { storeToRefs } from "pinia";

const { addNotes } = useTaskStore()
const { isCloseOverlay } = storeToRefs(useTaskStore())


const content = reactive({
    title: '',
    body: '',
})

const onSubmit = async () => {
    isCloseOverlay.value = false
    try {
        if (content.title && content.body !== '') {
            await addNotes(content)
            content.title = ''
            content.body = ''
        }
    } catch (error) {
        console.log(error)
        isCloseOverlay.value = false
    }
}
</script>
<template>
    <section id="NotesList" class="mt-10">
        <div class="bg-[#202024] rounded-[8px] py-10 px-6">
            <div class="flex justify-between pb-6">
                <div class="flex items-center gap-2">
                    <Icon name="gg:profile" color="white" />
                    <h2 class="text-white font-bold text-[18px]">lesi@leslie.com</h2>
                </div>
                <div @click="isMenu = !isMenu" class="relative">
                    <button :disabled="isDeleting"
                        class="flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-black rounded-full cursor-pointer"
                        :class="isMenu ? 'bg-black' : ''">
                        <Icon v-if="!isDeleting" name="bi:three-dots" size="18" color="white" />
                        <Icon v-else name="eos-icons:bubble-loading" size="18" color="white" />
                    </button>

                    <div v-if="isMenu" class="absolute border right-0 z-20 mt-1 rounded">
                        <button 
                            class="flex items-center rounded gap-2 text-red-500 justify-between bg-white w-full pl-4 pr-3 py-2 hover:bg-[#e1e1e1]">
                            <div>Удалить</div>
                            <Icon name="solar:trash-bin-trash-broken" size="20" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-b-2 border-[#323238]" />

            <div class="mt-5">
                <h1 class="text-white font-bold text-[30px]">{{ items.title }}</h1>
                <p class="text-[#B0B0B0] font-medium text-[16px] mt-3">{{ items.body }}</p>
                <div class="flex items-center justify-end gap-2 mt-5">
                    <Icon name="solar:calendar-date-bold" color="white" size="20"/>
                    <span class="text-[#888888]">{{ displayableDate(items.time) }}</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
const isMenu = ref(false)
const isDeleting = ref(false)

interface Task {
  id: number;
  title: string;
  body: string;
  time: number;
}

const props = defineProps<{
  items: Task
}>()

const displayableDate = (date: any) => {
  return new Intl.DateTimeFormat(
    'ru-RU',
    { dateStyle: 'full' },
  ).format(new Date(date))
}
</script>
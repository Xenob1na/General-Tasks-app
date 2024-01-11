<template>
    <section id="ProfileCard">
        <div class="max-w-[1140px] max-h-[700px] bg-[#202024] rounded-[8px] py-10 px-6">

            <div class="flex justify-between pb-6">
                <div class="flex items-center gap-2">
                    <Icon name="gg:profile" color="white" />
                    <h2 class="text-white font-bold text-[18px]">lesi@leslie.com</h2>
                </div>
                <div>
                    <button :disabled="isDisabled" @click="router.push('/login')" class="flex items-center gap-2 text-white font-bold text-[18px]">
                        <Icon v-if="!isDisabled" name="mdi:logout" />
                        <Icon v-else name="eos-icons:bubble-loading" size="18" color="white" />
                        <span >Выйти</span>
                    </button>
                </div>
            </div>
            <div class="border-b-2 border-[#323238]" />

            <div class="mt-6">
                <button @click="isCloseOverlay = true"
                    class="border w-full border-[#00B37E] text-white bg-[#00B37E] text-[16px] font-bold duration transition-all hover:text-[#00B37E] hover:bg-[#202024] rounded-[8px] py-4 px-6 group flex items-center justify-center gap-1">
                    Написать заметку
                    <div class="duration transition-all group-hover:text-[#00B37E]">
                        <Icon name="ph:plus-fill" />
                    </div>
                </button>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { useTaskStore } from "../stores/task"
import { storeToRefs } from "pinia";

const { isCloseOverlay } = storeToRefs(useTaskStore())

const router = useRouter()

const isDisabled = ref(false)

</script>
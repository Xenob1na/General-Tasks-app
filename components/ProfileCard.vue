<template>
    <section id="ProfileCard">
        <div class="max-w-[1140px] bg-[#202024] rounded-[8px] relative">
            <div class="">
                <img src="/cust.png" alt="cust" class="w-full object-contain rounded-t-[8px]">
            </div>
            <div>
                <div class="flex justify-center">
                    <div>
                        <img src="/Profile.png" alt="" class="w-[100px] h-[100px] absolute top-0 left-[45%] right-0 bottom-0 mt-[240px]">
                        <div class="text-center mt-10 mb-10">
                            <h2 class="text-white font-bold text-[16px]">Leslie Alexander</h2>
                            <p class="text-[#8D8D99] text-[14px] leading-[160%]">UI Designer</p>
                            <p class="text-[#8D8D99] text-[14px] leading-[160%]">Обо мне: Привет меня зовут Леслиса, я веб-дизайнер</p>
                        </div>
                    </div>
                </div>
                <div class="border-b-2 border-[#323238]" />
                <div class="mt-[50px] px-6">
                    <button
                        class="border w-full border-[#00B37E] text-[#00B37E] text-[16px] font-bold duration transition-all hover:text-white hover:bg-[#00B37E] rounded-[8px] py-4 px-6 group flex items-center justify-center gap-1">
                        Редактировать профиль
                        <div class="duration transition-all group-hover:text-white">
                            <Icon name="bx:edit" />
                        </div>
                    </button>
                </div>
                <div class="mt-6 pb-6 px-6">
                    <button
                        class="border w-full border-[#00B37E] text-white bg-[#00B37E] text-[16px] font-bold duration transition-all hover:text-[#00B37E] hover:bg-[#202024] rounded-[8px] py-4 px-6 group flex items-center justify-center gap-1">
                        Написать заметку
                        <div class="duration transition-all group-hover:text-[#00B37E]">
                            <Icon name="ph:plus-fill" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>
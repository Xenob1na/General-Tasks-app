<template>
    <div class="py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-[850px] px-4 md:px-8">
            <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-8 lg:text-3xl">Регистрация</h2>

            <form class="mx-auto  rounded-lg" @click.prevent="">
                <div class="flex flex-col gap-4 p-4 md:p-8">

                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-white sm:text-base">Почта</label>
                        <input name="task_title" type="email" required placeholder="example@mail.ru"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-[#00B37E] transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-white sm:text-base">Пароль</label>
                        <input name="task_title" type="password" required placeholder="******"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-[#00B37E] transition duration-100 focus:ring" />
                    </div>
                    <button
                        class="rounded-lg bg-[#00B37E] mt-5 mb-4 px-8 py-4 text-center text-[18px] font-semibold text-white outline-none  transition duration-100 hover:text-[#00B37E] hover:bg-white">Регистрация</button>
                    <p class="text-white font-bold text-[18px] text-center">или</p>
                    <button @click="router.push('/login')"
                        class="rounded-lg bg-[#00B37E] mt-5 px-8 py-4 text-center text-[18px] font-semibold text-white outline-none  transition duration-100 hover:text-[#00B37E] hover:bg-white">Войти</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <header class="container px-4">
    <div class="flex items-center justify-between py-6 ">
      <RouterLink to="/">
        <heroicons-outline-book-open class="w-10 h-10 text-violet-600" />
      </RouterLink>

      <div>
        <a href="https://github.com/tinaaa071" 
        target="_blank"
        class="text-gray-400 hover:text-violet-600"
        >
          <ri-github-line class="w-6 h-6" />
        </a>
      </div>
    </div>

    <!-- 頁首 -->
    <div class="pt-6 pb-12 border-b border-gray-300">
      <h1 class="text-3xl font-medium tracking-wide text-gray-900 sm:text-5xl lg:text-6xl">
        Blog
      </h1>
      <p class="mt-6 text-xl tracking-wider text-gray-500">
        歡迎來到我的部落格
      </p>
    </div>
  </header>

  <main class="container px-4 py-12">
    <!-- 文章列表 -->
    <ul class="space-y-10 sm:space-y-16">
      <li class="sm:flex even:flex-row-reverse" v-for="i in 4" :key="i">
        <RouterLink to="/posts/my-post">
            <img 
              class="sm:w-[300px] object-cover rounded-lg aspect-video"
              src="https://images.unsplash.com/photo-1704326163357-cf0a659c226c?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </RouterLink>
        
        <div class="mt-4 sm:ml-6 sm:mt-0">
          <h4 class="text-2xl font-bold tracking-wide">
            <RouterLink to="/posts/my-post" class="text-gray-800 hover:text-violet-600">
              我的文章
            </RouterLink>
          </h4>
        
          <div class="mt-2 tracking-wider text-gray-400 text-start">
            2024/01/18
          </div>
          
          <p class="mt-3 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio adipisci eos aliquam assumenda modi dolorem explicabo consequuntur velit inventore exercitationem.
          </p>
          
          <div class="mt-4">
            <RouterLink to="/posts/my-post" class="tracking-wider text-violet-500 hover:text-violet-400">
              更多 ⮕
            </RouterLink>
          </div>
        </div>
      </li>
    </ul>

    <!-- 分頁器 -->
    <ui class="flex items-center justify-center mt-12 list-none ">
      <li>
        <RouterLink to="/" class="flex items-center justify-center px-3 text-lg font-medium text-gray-400 h-9 hover:text-violet-600">
          <heroicons-outline-arrow-sm-left />
        </RouterLink>
      </li>
      <li v-for="i in 3" :key="i">
        <RouterLink to="/" class="flex items-center justify-center px-3 text-lg font-medium text-gray-400 h-9 hover:text-violet-600">
          {{ i }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="flex items-center justify-center px-3 text-lg font-medium text-gray-400 h-9 hover:text-violet-600">
          <heroicons-outline-arrow-sm-right />
        </RouterLink>
      </li>
    </ui>
  </main>
</template>

<script>
import { useHead } from '@unhead/vue'

export default {
  setup() {
    useHead({
      title: 'Tina Blog',
      meta: [
        {
          name: 'description',
          content: '歡迎來到我的部落格',
        },
      ],
    })
  }
};
</script>
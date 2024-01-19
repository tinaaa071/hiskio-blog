<template>
  <!-- 標題 -->
  <header class="container px-4">
    <div class="flex items-center justify-between py-6 ">
      <RouterLink to="/" class="flex items-center">
        <heroicons-outline-book-open class="w-10 h-10 text-violet-600" />
        <div class="ml-2 text-xl font-medium text-gray-900">Blog</div>
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
  </header>

  <!-- 文章內容 -->
  <article class="container px-4 py-12">
    <div class="text-center">
        <h1 class="text-5xl font-medium tracking-wider">我的文章</h1>
        <div class="mt-4 tracking-wider text-gray-400">2024/01/18</div>
    </div>

    <div class="mx-auto mt-16 prose lg:prose-xl prose-headings:font-medium prose-a:text-violet-600 hover:prose-a:text-violet-500">
        <h2>Hi！我是 Tina</h2>
        <p>
          我的部落格：<a href="https://lucas-yang.vercel.app/">星星的筆記．Lucas</a>
        </p>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ul>
          <li><strong>個人嗜好</strong>：刻網站、看動漫</li>
          <li><strong>喜歡的唱見</strong>：hanser、三无Marblue</li>
          <li><strong>喜歡的遊戲</strong>：崩壞3rd、原神</li>
        </ul>
        <p>
          自學網頁前後端，主要以 Laravel、Vue.js、Tailwind CSS 為慣用開發框架。做過幾個小網站。
        </p>
        <blockquote>
          夜空中的小星星，也會閃耀著光芒 ✨
          <br />
          — Lucas
        </blockquote>
    </div>
    
  </article>
</template>

<script>
import { useHead } from '@unhead/vue'

export default {
  setup() {
    useHead({
      title: '我的文章 - Tina Blog',
      meta: [
        { name: 'description', content: 'Hi, 我是 Tina',},
        { property: 'og:title', content: 'Hi, 我是 Tina'},
        { property: 'og:description', content: 'Hi, 我是 Tina'},
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      ],
    })
  }
};
</script>
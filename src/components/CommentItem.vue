<template>
  <!-- 留言列表 -->
  <div>
    <!-- 用户信息 -->
    <div class="flex">
      <!-- 用户头像 -->
      <img
        :src="avatar"
        alt=""
        class="w-12 h-12 mr-4 rounded-full"
      >
      <!-- 用户名称和发表时间 -->
      <div>
        <p>{{ user }}</p>
        <p class="text-gray-600 text-sm">{{ time }}</p>
      </div>

      <!-- 菜单靠右对齐 -->
      <span class="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </span>
    </div>
    <!-- 留言内容 -->
    <p class="text-gray-600 py-4">
      {{ content }}
    </p>
  </div>
</template>

<script setup>
defineProps(['user', 'avatar', 'time', 'content'])
</script>

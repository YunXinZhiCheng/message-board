<template>
  <!-- 留言表单
    表单事件提交处理函数 @submit="handleSubmit"
   -->
  <form
    action=""
    class="grid"
    @submit="handleSubmit"
  >
    <textarea
      id=""
      v-model="content"
      name="comment"
      placeholder="请输入你的评论"
      class="bg-gray-50 p-2 rounded"
    />
    <fieldset class="py-4">
      <input
        type="submit"
        value="评论"
        class="px-4 py-1 bg-blue-600 rounded text-white"
      >
      <input
        type="reset"
        value="取消"
        class="px-4 py-1 bg-white rounded border ml-3"
      >
    </fieldset>
  </form>
</template>

<script setup>
// 导入 ref 函数
import { ref } from 'vue'
// 定义一个空的状态保存到content中
const content = ref('')

// 触发emit将表单数据提交submit给父组件
const emit = defineEmits(['submit'])

// 表单事件提交处理函数
const handleSubmit = (e) => {
  e.preventDefault()
  emit('submit', content.value)
  content.value = ''
}
</script>

<style></style>

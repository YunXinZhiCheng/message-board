<template>
  <!-- 回复按钮
    @click 点击事件：取反操作，控制是否显示留言表单
    :class 控制样式：三元运算符，判断显示或隐藏状态的留言表单样式
  -->
  <button
    class="pt-4 pb-10 text-blue-600"
    :class="[showCommentBox ? 'pb-2' : 'pb-10']"
    @click="showCommentBox = !showCommentBox"
  >
    回复
  </button>
  <!-- 是否显示留言表单
    提交事件：提交后要隐藏留言表单
  -->
  <CommentBox
    v-if="showCommentBox"
    class="mb-4"
    @submit="
      emit('submit', $event);
      showCommentBox = false
    "
  />
</template>

<script setup>
// 导入 ref 函数
import { ref } from 'vue'
// 导入留言表单组件
import CommentBox from './CommentBox.vue'

// 设置留言表单显示或隐藏状态
const showCommentBox = ref(false)

// 触发事件提交数据给父组件
const emit = defineEmits(['submit'])
</script>

<style></style>

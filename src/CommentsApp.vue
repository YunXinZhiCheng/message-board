<template>
  <!-- 整体容器 -->
  <main class="p-4 bg-gray-50 min-h-screen">
    <!-- 留言板容器 -->
    <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
      <!-- 标题 -->
      <h2 class="text-3xl my-6">评论</h2>

      <!-- 留言表单 
      添加事件，处理回调 @submit="addNewComment"
      -->
      <CommentBox @submit="addNewComment" />

      <!-- 分割线 -->
      <DividerHorizontal />
      <div
        v-for="comment in comments"
        :key="comment.id"
      >
        <!-- 评论 -->
        <CommentItem
          :user="comment.user"
          :avatar="comment.avatar"
          :time="comment.time"
          :content="comment.content"
        />
        <!-- 回复容器 -->
        <ReplyContainer v-if="comment.replies">
          <!-- 留言列表 -->
          <CommentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :user="reply.user"
            :avatar="reply.avatar"
            :time="reply.time"
            :content="reply.content"
          />
        </ReplyContainer>
        <!-- 回复按钮
          设置子组件传过来的数据
         -->
        <ReplyBox @submit="addNewComment($event, comment.id)" />
      </div>
    </div>
  </main>
</template>

<script setup>
// 导入子组件
import CommentBox from './components/CommentBox.vue'
import CommentItem from './components/CommentItem.vue'
import DividerHorizontal from './components/DividerHorizontal.vue'
import ReplyBox from './components/ReplyBox.vue'
import ReplyContainer from './components/ReplyContainer.vue'
// 导入图片
import avatar1 from './assets/images/avatar1.jpeg'
import avatar2 from './assets/images/avatar2.png'
import avatar3 from './assets/images/avatar3.png'
import avatar4 from './assets/images/avatar4.jpeg'
import avatar5 from './assets/images/avatar5.jpeg'

// 导入 ref 与 onMounted 函数
import { ref, onMounted } from 'vue'

// 数组数据：留言列表
const comments = ref([])

// 定义获取留言列表函数
async function getAllComments() {
  const res = await fetch('/api/comments')
  comments.value = await res.json()
}

// 使用生命周期方法
onMounted(() => {
  getAllComments()
})

// 定义发表留言和回复函数
const addNewComment = async (content, replyTo) => {
  const res = await fetch(`/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
      ...(replyTo && { replyTo }),
    }),
  })

  // 追加新的评论
  const newComment = await res.json()
  if (!replyTo) {
    // 如果回复为空
    comments.value.unshift(newComment)
  } else {
    // 回复不为空
    comments.value.find((c) => c.id === replyTo).replies.unshift(newComment)
  }

  // 新增加完评论后，自动获取新的评论列表
  // Notion AIP 有延迟，所以在添加完 page 之后，需要过一会才能获取到新的评论列表
  // setTimeout(async () => {
  //   await getAllComments()
  // }, 1000)
}
</script>

<style></style>

<template>
  <!-- 整体容器 -->
  <main class="p-4 bg-gray-50 min-h-screen">
    <!-- 留言板容器 -->
    <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
      <!-- 标题 -->
      <h2 class="text-3xl my-6">评论</h2>

      <!-- 留言表单 -->
      <CommentBox />

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
        <ReplyBox v-if="comment.replies">
          <!-- 留言列表 -->
          <CommentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :user="reply.user"
            :avatar="reply.avatar"
            :time="reply.time"
            :content="reply.content"
          />
        </ReplyBox>
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
// 导入图片
import avatar1 from './assets/images/avatar1.jpeg'
import avatar2 from './assets/images/avatar2.png'
import avatar3 from './assets/images/avatar3.png'
import avatar4 from './assets/images/avatar4.jpeg'
import avatar5 from './assets/images/avatar5.jpeg'

// 数组数据
const comments = [
  {
    id:1,
    user: '陨星之城',
    avatar: avatar1,
    time: '2小时之前',
    content: '如何把之前纯 HTML 项目改装成了 Vue 3.0 的项目？',
    // 回复
    replies: [
      {
        id: 2,
        user: "极客开发",
        avatar: avatar2,
        time: "2小时之前",
        content: "赞一个！添加 vue 的 vite 插件,修改 vite 的配置文件,修改目录结构，在 main.js 中挂载了 vue 节点",
      },
      {
        id: 3,
        user: "蔚蓝多云",
        avatar: avatar3,
        time: "2小时之前",
        content:
          "然后把 HTML 按结构拆分成了 Vue 的组件,接着把相关的代码剪切到了对应的组件中,最后定义示例数据，来展示和之前页面一样的效果",
      },
      // {
      //   id: 4,
      //   user: "账号4",
      //   avatar: avatar4,
      //   time: "2小时之前",
      //   content:
      //     "回答正确",
      // },
      // {
      //   id: 5,
      //   user: "账号5",
      //   avatar: avatar5,
      //   time: "2小时之前",
      //   content:
      //     "赞一个！！！",
      // },
    ],
  }
]
</script>

<style></style>

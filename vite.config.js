// 导入
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 导出
export default defineConfig({
  plugins: [vue()],
  // 解决跨域问题:使用服务代理
  server: {
    // 自动打开浏览器
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

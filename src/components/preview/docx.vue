<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { renderAsync } from 'docx-preview'
export default {
  name: 'previewDocx',
  props: {
    fileUrl: String
  },
  created() {
    this.uploading(this.fileUrl)
  },
  methods: {
    // 加载文件内容
    uploading(file) {
      // 获取文件流
      const xhr = new XMLHttpRequest()
      xhr.open('get', file, true)
      xhr.responseType = 'blob'
      xhr.onload = () => {
        if (xhr.status === 200) {
          // word预览
          renderAsync(
            xhr.response,
            document.getElementById('container'),
            null,
            {
              className: 'docx', // 默认和文档样式类的类名/前缀
              inWrapper: true, // 启用围绕文档内容渲染包装器
              ignoreWidth: false, // 禁止页面渲染宽度
              ignoreHeight: false, // 禁止页面渲染高度
              ignoreFonts: false, // 禁止字体渲染
              breakPages: true, // 在分页符上启用分页
              ignoreLastRenderedPageBreak: true, // 禁用lastRenderedPageBreak元素的分页
              experimental: false, // 启用实验性功能（制表符停止计算）
              trimXmlDeclaration: true, // 如果为真，xml声明将在解析之前从xml文档中删除
              debug: false // 启用额外的日志记录
            }
          )
        }
      }
      xhr.send()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

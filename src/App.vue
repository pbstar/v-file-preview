<template>
  <div id="app">
    <previewDocx v-if="fileType == 1" :fileUrl="fileUrl" />
    <previewMicrosoft v-else :fileUrl="fileUrl" />
  </div>
</template>

<script>
import previewDocx from './components/preview/docx.vue'
import previewMicrosoft from './components/preview/microsoft.vue'
export default {
  name: 'App',
  components: {
    previewDocx,
    previewMicrosoft
  },
  data() {
    return {
      fileUrl: '',
      fileType: ''
    }
  },
  created() {
    this.fileUrl = 'https://tscd.oss-cn-beijing.aliyuncs.com/onlineEducationTangshan/userTaskFile/2023-0163a29e6526289e6fc6fa0d8a/1673257924820.docx'
    // this.fileUrl = 'http://oss.mcweb.club/2.doc'
    // let fileName = this.fileUrl.substring(this.fileUrl.lastIndexOf(".") + 1, this.fileUrl.length + 1);
    // if (fileName == 'docx' || fileName == 'DOCX') this.fileType = 1
  }
}
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>

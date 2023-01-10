<template>
  <div id="app">
    <div v-if="fileUrl" style="width: 100%;height:100%;">
      <previewDocx v-if="fileType == 11" :fileUrl="fileUrl" />
      <previewPdf v-else-if="fileType == 2" :fileUrl="fileUrl" />
      <previewMicrosoft v-else :fileUrl="fileUrl" />
    </div>
    <noFile v-else />
  </div>
</template>

<script>
import previewDocx from './components/preview/docx.vue'
import previewMicrosoft from './components/preview/microsoft.vue'
import previewPdf from './components/preview/pdf.vue'
import noFile from './components/no-file'
export default {
  name: 'App',
  components: {
    previewDocx,
    previewMicrosoft,
    noFile,
    previewPdf
  },
  data() {
    return {
      fileUrl: '',
      fileType: ''
    }
  },
  created() {
    console.log(encodeURIComponent('http://oss.mcweb.club/2022%E5%B9%B4%E5%9B%BD%E5%BA%86%E6%94%BE%E5%81%87%E9%80%9A%E7%9F%A5.pdf'));
    if (this.$unit.getUrlKey('src')) {
      this.fileUrl = decodeURIComponent(this.$unit.getUrlKey('src')) //encodeURIComponent('http://oss.mcweb.club/2.doc')
      if (this.$unit.getUrlKey('type')) {
        this.fileType = this.$unit.getUrlKey('type')
      } else {
        let fileName = this.fileUrl.substring(this.fileUrl.lastIndexOf(".") + 1, this.fileUrl.length + 1);
        if (fileName == 'docx' || fileName == 'DOCX') this.fileType = 1
        if (fileName == 'pdf' || fileName == 'PDF') this.fileType = 2
      }
    }

    // this.fileUrl = 'https://tscd.oss-cn-beijing.aliyuncs.com/onlineEducationTangshan/userTaskFile/2023-0163a29e6526289e6fc6fa0d8a/1673257924820.docx'
    // this.fileUrl = 'https://tscd.oss-cn-beijing.aliyuncs.com/onlineEducationTangshan/userTaskFile/2023-0163a29e6526289e6fc6fa0d8a/1673332387828.docx'
    // this.fileUrl = 'http://oss.mcweb.club/2.doc'

  }
}
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>

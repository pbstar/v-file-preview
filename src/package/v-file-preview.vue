<template>
  <div class="vfilebox">
    <div v-if="fileUrl" style="width: 100%;height:100%;">
      <previewDocx v-if="fileType == 11" :fileUrl="fileUrl" />
      <previewPdf v-else-if="fileType == 2" :fileUrl="fileUrl" />
      <previewMicrosoft v-else :fileUrl="fileUrl" />
    </div>
    <noFile v-else />
  </div>
</template>

<script>
import previewDocx from '../components/preview/docx.vue'
import previewMicrosoft from '../components/preview/microsoft.vue'
import previewPdf from '../components/preview/pdf.vue'
import noFile from '../components/no-file'
export default {
  name: 'vueFilePreview',
  components: {
    previewDocx,
    previewMicrosoft,
    noFile,
    previewPdf
  },
  props: {
    src: String,
    type: String
  },
  data() {
    return {
      fileUrl: '',
      fileType: ''
    }
  },
  created() {
    console.log(encodeURIComponent('http://oss.mcweb.club/1.doc'));
    if (this.src) {
      this.fileUrl = decodeURIComponent(this.src) //encodeURIComponent('http://oss.mcweb.club/1.doc')
      if (this.type) {
        this.fileType = this.type
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
.vfilebox {
  height: 100%;
}
</style>

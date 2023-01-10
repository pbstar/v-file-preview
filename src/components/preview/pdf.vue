<template>
  <div style="height:100%;">
    <pdf ref="pdf" :src="fileUrl" />
  </div>
</template>

<script>

import pdf from 'vue-pdf'
export default {
  name: 'previewPdf',
  components: {
    pdf
  },
  props: {
    fileUrl: String
  }
}
</script>
<style lang="scss" scoped>

</style>

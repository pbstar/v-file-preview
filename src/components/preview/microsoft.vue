<template>
  <div style="height:100%;overflow: hidden;">
    <iframe width="100%" height="100%" :src="'https://view.officeapps.live.com/op/embed.aspx?src=' + fileUrl"
      frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'previewMicrosoft',
  props: {
    fileUrl: String
  }
}
</script>
<style lang="scss" scoped>

</style>

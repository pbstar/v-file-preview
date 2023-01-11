
import vueFilePreview from './v-file-preview.vue'

const components = {
  install(Vue) {
    Vue.component(
      'vueFilePreview', vueFilePreview
    )
  }
}

export default components
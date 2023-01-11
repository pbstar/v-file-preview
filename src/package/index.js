
import vueFilePreview from './v-file-preview.vue'

let coms = [
  vueFilePreview
]
let install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com)
  })
}

export default install
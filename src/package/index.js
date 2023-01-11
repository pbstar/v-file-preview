
import vFilePreview from './v-file-preview.vue'

let coms = [
  vFilePreview
]
let install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com)
  })
}

export default install
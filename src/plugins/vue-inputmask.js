import Inputmask from 'inputmask'

const VueInputMask = {
  install:  function(Vue){
    Vue.directive('mask', {
      created: function(el, binding){
        if (binding.value) {
          Inputmask(binding.value).mask(el)
        }
      }
    })
  }
}

export default VueInputMask

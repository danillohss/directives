import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)
Vue.directive('texto', {
    created(el, binding) {
        console.log(binding.value)
        if (binding.value?.cor) el.style.color = binding.value.cor
        if (binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte

        let totalCaracteres = 25;
        if (binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres

        let originalText = el.innerText
        let textLength = originalText;
        let newText = ''
        if (textLength.length > totalCaracteres) {
            newText = originalText.substring(0, (totalCaracteres - 3)) + '...';
        } else {
            newText = originalText;
        }
        el.innerText = newText;
    }
})

Vue.directive('position', {
    created(el, binding) {
        console.log(el, binding.arg, binding.value)
        const positionPossible = ['relative', 'absolute', 'fixed']
        if (positionPossible.includes(binding.arg)) {
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
})

Vue.mount('#app')


//createApp(App).mount('#app')

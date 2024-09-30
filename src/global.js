import Button from './components/Common/button.vue'
import Chips from '@/components/Common/chips.vue'
import Title from '@/components/Common/title.vue'

export const register = (appInstance) => {
  appInstance.component('NButton', Button)
  appInstance.component('NChips', Chips)
  appInstance.component('NTitle', Title)
}

// Auto Register Icons
export const iconAutoRegister = (appInstance) => {
  const icons = import.meta.glob('./components/icons/*.vue', { eager: true })

  Object.entries(icons).forEach(async ([path, component]) => {
    appInstance.component(
      'Icon' +
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
      component.default
    )
  })
}

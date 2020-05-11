import { Hotjar } from './hotjar'

export default {
  install(Vue, options) {
    const { id, snippetVersion = 6, enabled = false } = options
    if (!id) {
      console.error('Please specify Hotjar ID.')
      return false
    }

    Vue.$hj = {
      isEnabled: false,
      enable: () => {
        if (Vue.$hj.isEnabled) {
          return null
        }
        return new Hotjar(id, snippetVersion)
      }
    }

    if (enabled && process.env.NODE_ENV === 'production') {
      Vue.$hj.$isEnabled = true
      return new Hotjar(id, snippetVersion)
    }
  }
}

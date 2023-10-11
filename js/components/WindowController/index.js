import controllerTemplate from './controller-template'
import ButtonTypeIdentifier from './ButtonTypeIdentifier'

window.customElements.define('window-controller',
class WindowController extends window.HTMLElement {
  #activeWindow
  #movement = 5

  constructor () {
    super()
    this.innerHTML = controllerTemplate
    this.addEventListener('activateWindow', this.setActiveWindow)
    this.addEventListener('keydown', this.handleKey)
  }

  setActiveWindow = e => {
    this.#activeWindow = e.target
    console.log(this.#activeWindow)
  }

  handleKey = e => {
    if (ButtonTypeIdentifier.isArrow(e.which)) {
      if (e.ctrlKey && !e.altKey) {
        this.handleCtrlCombinatedArrow(e)
      } else if (!e.ctrlKey && e.altKey) {
        this.handleAltCombinatedArrow(e)
      } else if (e.altKey && e.ctrlKey) {
        this.handleCtrlAltCombinatedArrow(e)
      }
    }
  }

  handleAltCombinatedArrow = e => {
    switch (e.key) {
      case 'ArrowUp':
        this.#activeWindow.moveVertically(-this.#movement)
        break
    }
  }
})

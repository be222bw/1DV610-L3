import controllerTemplate from './controller-template'
import ButtonTypeIdentifier from './ButtonTypeIdentifier'
import ModifierButtonAndArrowCombinations from './ModifierButtonCombinations'

window.customElements.define('window-controller',
class WindowController extends window.HTMLElement {
  #activeWindow
  #movement = 5

  constructor () {
    super()
    this.innerHTML = controllerTemplate
    this.addEventListener('activateWindow', this.setActiveWindow)
    document.addEventListener('keydown', this.handleKey)
  }

  setActiveWindow = e => {
    this.#activeWindow = e.target
  }

  handleKey = e => {
    const keyNumber = e.which
    const key = e.key
    if (ButtonTypeIdentifier.isArrow(keyNumber)) {
      const modifierButtonAndArrowCombination =
        ModifierButtonAndArrowCombinations.generate(e)
      modifierButtonAndArrowCombination.exec(e,
        this.#activeWindow, this.#movement)
    } else if (ButtonTypeIdentifier.isDigit(keyNumber)) {
      if (e.altKey) {
        switch (key) {
          case '4':
            const closeWindow = new CustomEvent('closeWindow',
              { bubbles: true, composed: true })
            this.#activeWindow.dispatchEvent(closeWindow)
        }
      }
    }
  }
})

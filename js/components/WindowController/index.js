import controllerTemplate from './controller-template'
import ButtonTypeIdentifier from './ButtonTypeIdentifier'
import ModifierButtonAndArrowCombinations from './ModifierButtonCombinations'
import ModifierButtonCombinatedLetter from './ModifierButtonCombinatedLetter'

window.customElements.define('window-controller',
class WindowController extends window.HTMLElement {
  #activeWindow

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
      modifierButtonAndArrowCombination?.exec(e,
        this.#activeWindow)
    } else if (ButtonTypeIdentifier.isAltCombinatedReservedLetter(e)) {
        const event = ModifierButtonCombinatedLetter.generateEvent(key)
        this.#activeWindow?.dispatchEvent(event)
    }
  }
})

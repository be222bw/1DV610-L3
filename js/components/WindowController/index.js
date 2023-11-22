import controllerTemplate from './controller-template'
import ButtonTypeAndSideIdentifier from './ButtonTypeAndSideIdentifier'
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
    if (ButtonTypeAndSideIdentifier.isArrow(keyNumber)) {
      const modifierButtonAndArrowCombination =
        ModifierButtonAndArrowCombinations.generate(e)
      modifierButtonAndArrowCombination?.exec(e,
        this.#activeWindow)
    } else if (ButtonTypeAndSideIdentifier.isAltCombinatedReservedLetter(e)) {
        const event = ModifierButtonCombinatedLetter.generateEvent(key)
        this.#activeWindow?.dispatchEvent(event)
    }
  }
})

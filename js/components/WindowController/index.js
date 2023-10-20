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
    document.addEventListener('keydown', this.handleKey)
  }

  setActiveWindow = e => {
    this.#activeWindow = e.target
  }

  handleKey = e => {
    const keyNumber = e.which
    const key = e.key
    if (ButtonTypeIdentifier.isArrow(keyNumber)) {
      if (e.ctrlKey && e.shiftKey) {
        this.handleCtrlShiftCombinatedArrow(e)
      } else if (e.ctrlKey && !e.shiftKey) {
        this.handleCtrlCombinatedArrow(e)
      } else if (!e.ctrlKey && e.altKey) {
        this.handleAltCombinatedArrow(e)
      }
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

  handleCtrlShiftCombinatedArrow = e => {
    const rect = this.#activeWindow.getBoundingClientRect()
    const side = ButtonTypeIdentifier.getSideOppositeArrow(e.which)
    const oldSideValue = rect[side]
    const sign = ButtonTypeIdentifier.getSignForMovementBySide(side)
    this.#activeWindow.setSide(side,
      oldSideValue - sign * this.#movement)
  }

  handleAltCombinatedArrow = e => {
    switch (e.key) {
      case 'ArrowLeft':
        this.#activeWindow.moveHorizontally(-this.#movement)
        break
      case 'ArrowUp':
        this.#activeWindow.moveVertically(-this.#movement)
        break
      case 'ArrowRight':
        this.#activeWindow.moveHorizontally(this.#movement)
        break
      case 'ArrowDown':
        this.#activeWindow.moveVertically(this.#movement)
    }
  }


  handleCtrlCombinatedArrow = e => {
    const rect = this.#activeWindow.getBoundingClientRect()
    const side = ButtonTypeIdentifier.getSideByArrow(e.which)
    const oldSideValue = rect[side]
    const sign = ButtonTypeIdentifier.getSignForMovementBySide(side)
    this.#activeWindow.setSide(side, oldSideValue + sign * this.#movement)
  }
})

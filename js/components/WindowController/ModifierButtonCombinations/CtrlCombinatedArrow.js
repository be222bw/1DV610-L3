import ModifierButtonCombination from './ModifierButtonCombination'
import ButtonTypeIdentifier from '../ButtonTypeAndSideIdentifier'
export default class CtrlCombinatedArrow extends ModifierButtonCombination {
  exec (e, activeWindow) {
    const rect = activeWindow.getBoundingClientRect()
    const side = ButtonTypeIdentifier.getSideByArrow(e.which)
    const oldSideValue = rect[side]
    const sign = ButtonTypeIdentifier.getSignForMovementBySide(side)
    activeWindow.setSide(side, oldSideValue + sign * this.movement)
  }
}
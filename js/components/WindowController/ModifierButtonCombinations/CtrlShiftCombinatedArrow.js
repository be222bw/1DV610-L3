import ButtonTypeIdentifier from '../ButtonTypeIdentifier'
export default class CtrlShiftCombinatedArrow {
  exec (e, activeWindow, movement) {
    const rect = activeWindow.getBoundingClientRect()
    const side = ButtonTypeIdentifier.getSideOppositeArrow(e.which)
    const oldSideValue = rect[side]
    const sign = ButtonTypeIdentifier.getSignForMovementBySide(side)
    activeWindow.setSide(side,
      oldSideValue - sign * movement)
  }
}

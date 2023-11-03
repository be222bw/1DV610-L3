export default class ButtonTypeIdentifier {
  static isArrow (keyNumber) {
    return keyNumber >= 37 && keyNumber <= 40
  }

  static isDigit (keyNumber) {
    return keyNumber >= 48 && keyNumber <= 57
  }

  static isISOBasicLatinLetter (keyNumber) {
    return keyNumber >= 65 && keyNumber <= 90
  }

  static getSideByArrow (keyNumber) {
    const sidesInNumericalOrder = [ 'left', 'top', 'right', 'bottom' ]
    return sidesInNumericalOrder[keyNumber - 37]
  }

  static getSideOppositeArrow (keyNumber) {
    const oppositeSidesInNumericalOrder = [ 'right', 'bottom', 'left', 'top' ]
    return oppositeSidesInNumericalOrder[keyNumber - 37]
  }

  static getSignForMovementBySide (side) {
    switch (side) {
      case 'left':
      case 'top':
        return -1
      case 'right':
      case 'bottom':
        return 1
    }
  }
}
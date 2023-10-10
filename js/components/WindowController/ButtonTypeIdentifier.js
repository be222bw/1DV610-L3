export default class ButtonTypeIdentifier {
  static isArrowKey (keyboardEvent) {
    const key = keyboardEvent.which
    return key >= 37 && key <= 40
  }
}
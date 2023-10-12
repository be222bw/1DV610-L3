export default class ButtonTypeIdentifier {
  static isArrow (keyNumber) {
    return keyNumber >= 37 && keyNumber <= 40
  }
}
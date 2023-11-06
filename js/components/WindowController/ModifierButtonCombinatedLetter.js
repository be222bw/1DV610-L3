export default class ModifierButtonCombinatedLetter {
  static generateEvent (key) {
    let event
    switch (key) {
      case 'm':
        event = new CustomEvent('minimiseWindow',
        { bubbles: true, composed: true })
        break
      case 'M':
        event = new CustomEvent('maximiseWindow',
        { bubbles: true, composed: true })
        break
      case 'c':
        event = new CustomEvent('closeWindow',
              { bubbles: true, composed: true })
    }
    return event
  }
}
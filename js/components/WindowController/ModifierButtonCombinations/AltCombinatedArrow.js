import ModifierButtonCombination from "./ModifierButtonCombination"

export default class AltCombinatedArrow extends ModifierButtonCombination {
  exec (e, activeWindow) {
    switch (e.key) {
      case 'ArrowLeft':
        activeWindow.moveHorizontally(-this.movement)
        break
      case 'ArrowUp':
        activeWindow.moveVertically(-this.movement)
        break
      case 'ArrowRight':
        activeWindow.moveHorizontally(this.movement)
        break
      case 'ArrowDown':
        activeWindow.moveVertically(this.movement)
    }
  }
}

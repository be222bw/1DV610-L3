export default class AltCombinatedArrow {
  exec (e, activeWindow, movement) {
    switch (e.key) {
      case 'ArrowLeft':
        activeWindow.moveHorizontally(-movement)
        break
      case 'ArrowUp':
        activeWindow.moveVertically(-movement)
        break
      case 'ArrowRight':
        activeWindow.moveHorizontally(movement)
        break
      case 'ArrowDown':
        activeWindow.moveVertically(movement)
    }
  }
}

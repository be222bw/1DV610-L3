import AltCombinatedArrow from './AltCombinatedArrow'
import CtrlCombinatedArrow from './CtrlCombinatedArrow'
import CtrlShiftCombinatedArrow from './CtrlShiftCombinatedArrow'
export default class ModifierButtonAndArrowCombination {
  static generate (e) {
    if (e.ctrlKey && e.shiftKey) {
      return new CtrlShiftCombinatedArrow()
    } else if (e.ctrlKey && !e.shiftKey) {
      return new CtrlCombinatedArrow()
    } else if (!e.ctrlKey && e.altKey) {
      return new AltCombinatedArrow()
    }
  }
}

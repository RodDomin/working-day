import { QAction } from '@nodegui/nodegui'
import { EventDispatcher } from '../../../event/event'

export class ExitAction extends QAction {
  constructor (event: EventDispatcher) {
    super()

    this.setText('exit')

    this.addEventListener('triggered', () => {
      event.dispatch()
    })
  }
}

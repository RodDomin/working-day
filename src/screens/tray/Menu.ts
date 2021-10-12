import { QMenu } from '@nodegui/nodegui'
import { EventDispatcher } from '../../event/event'
import { ExitAction } from './actions/ExitAction'
import { PreferencesAction } from './actions/PreferencesAction'
import { WorkDayAction } from './actions/WorkDayAction'

export class Menu extends QMenu {
  constructor (closeEvent: EventDispatcher) {
    super()

    this.addAction(new WorkDayAction())
    this.addAction(new PreferencesAction())
    this.addAction(new ExitAction(closeEvent))
  }
}

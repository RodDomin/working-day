import { QAction } from '@nodegui/nodegui'

export class PreferencesAction extends QAction {
  constructor () {
    super()

    this.setText('Open preferences')
  }
}

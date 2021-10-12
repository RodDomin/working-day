import { QApplication, QIcon } from '@nodegui/nodegui'
import { CloseAppEvent } from './event/close-app.event'
import { Tray } from './screens/tray/Tray'

export class Application {
  private qApp: QApplication
  private appIcon: QIcon
  private tray: Tray

  constructor (appIcon: QIcon) {
    this.appIcon = appIcon
  }

  init () {
    this.qApp = QApplication.instance()
    this.qApp.setQuitOnLastWindowClosed(false)

    this.tray = new Tray(this.appIcon, new CloseAppEvent(this))
    this.tray.init()

    this.setGlobal()
  }

  private setGlobal () {
    (global as any).tray = this.tray
  }

  close () {
    this.qApp.quit()
  }
}

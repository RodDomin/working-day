import { QIcon, QSystemTrayIcon } from '@nodegui/nodegui'
import { EventDispatcher } from '../../event/event'
import { Menu } from './Menu'

export class Tray {
  private icon: QIcon
  private menu: Menu
  private tray: QSystemTrayIcon
  private closeEvent: EventDispatcher

  constructor (icon: QIcon, closeEvent: EventDispatcher) {
    this.icon = icon
    this.closeEvent = closeEvent
  }

  init () {
    this.menu = new Menu(this.closeEvent)
    this.tray = new QSystemTrayIcon()

    this.tray.setContextMenu(this.menu)

    this.tray.setIcon(this.icon)
    this.tray.setToolTip('Working day manager')

    this.tray.show()
  }
}

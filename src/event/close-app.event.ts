import { Application } from '../Application'
import { EventDispatcher } from './event'

export class CloseAppEvent implements EventDispatcher {
  private application: Application

  constructor (application: Application) {
    this.application = application
  }

  dispatch (): void {
    this.application.close()
  }
}

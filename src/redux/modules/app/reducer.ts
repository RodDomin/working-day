import { QApplication } from '@nodegui/nodegui'

const INITIAL_STATE = {
  data: null,
  instance: QApplication.instance()
}

export function AppReducer (state = INITIAL_STATE, action: any) {
  const types: { [data: string]: () => any } = {
    QUIT_APP: () => {
      state.instance.quit()
      return null
    },
    default: () => {
      return { ...state }
    }
  }

  const fn = types[action.type] ?? types.default

  return fn()
}

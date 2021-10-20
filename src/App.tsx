import { WidgetAttribute } from '@nodegui/nodegui'
import { Window, View, Text } from '@nodegui/react-nodegui'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Tray } from './Tray'

const style = `
  width: 500px;
  height: 800px;
`

export function App () {
  return (
    <>
      <Provider store={store}>
        <Tray />
        <Window attributes={{
          [WidgetAttribute.WA_QuitOnClose]: false
        }}>
          <View id="rootView" style={style}>
            <Text>Hello, World!</Text>
          </View>
        </Window>
      </Provider>
    </>
  )
}

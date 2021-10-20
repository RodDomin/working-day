import { Action, Menu, SystemTrayIcon } from '@nodegui/react-nodegui'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { TrayIcon } from './icons/tray'
import { quit } from './redux/modules/app/actions'

export function Tray () {
  const dispatch = useDispatch()

  const quitApp = useCallback(() => {
    dispatch(quit())
  }, [dispatch])

  return (
    <SystemTrayIcon icon={TrayIcon} tooltip="Working day" visible>
      <Menu>
        <Action text="Exit" on={{
          triggered: quitApp
        }} />
      </Menu>
    </SystemTrayIcon>
  )
}

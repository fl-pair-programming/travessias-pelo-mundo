import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('infra', {
    ping: () => 'pong'
})
import { create } from 'zustand'
import { fetchMetrics } from '../lib/api'

type Range = '7'|'30'|'90'
interface State {
range: Range
data: any|null
loading: boolean
setRange: (r: Range)=>void
load: ()=>Promise<void>
}

export const useMetrics = create<State>((set, get) => ({
range: '30',
data: null,
loading: false,
setRange: (range) => set({ range }),
load: async () => {
set({ loading: true })
const { range } = get()
const data = await fetchMetrics(range)
set({ data, loading: false })
}
}))
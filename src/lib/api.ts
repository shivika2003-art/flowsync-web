import axios from 'axios'
import { mockMetrics } from './mock'

const BASE = import.meta.env.VITE_API_BASE as string | undefined

export async function fetchMetrics(range: string){
if(!BASE){
// fallback to mock for first run
await new Promise(r=>setTimeout(r, 300))
return mockMetrics(range)
}
const { data } = await axios.get(`${BASE}/metrics`, { params: { range } })
return data
}
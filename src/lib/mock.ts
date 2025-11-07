export function mockMetrics(range: string){
const days = range === '90' ? 90 : range === '7' ? 7 : 30
const today = new Date()
const dates: string[] = []
const dau: number[] = []
const revenue: number[] = []
for(let i=days-1;i>=0;i--){
const d = new Date(today)
d.setDate(d.getDate()-i)
const ds = d.toISOString().slice(0,10)
dates.push(ds)
const base = 120 + Math.floor(Math.random()*100)
dau.push(base + Math.floor(Math.sin(i/5)*30))
revenue.push(parseFloat((200 + Math.random()*300).toFixed(2)))
}
const breakdown = [
{ category: 'Search', value: 42 },
{ category: 'Checkout', value: 27 },
{ category: 'Profile', value: 31 }
]
return { series: { dates, dau, revenue }, breakdown }
}
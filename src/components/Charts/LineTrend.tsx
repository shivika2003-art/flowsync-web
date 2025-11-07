import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

export default function LineTrend({ rows }:{ rows: any[] }){
return (
<div style={{ width: '100%', height: 260 }}>
<ResponsiveContainer>
<LineChart data={rows}>
<CartesianGrid />
<XAxis dataKey="date"/>
<YAxis/>
<Tooltip/>
<Line type="monotone" dataKey="dau" dot={false}/>
</LineChart>
</ResponsiveContainer>
</div>
)
}
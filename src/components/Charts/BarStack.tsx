import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

export default function BarStack({ rows }:{ rows: any[] }){
return (
<div style={{ width: '100%', height: 260 }}>
<ResponsiveContainer>
<BarChart data={rows}>
<CartesianGrid/>
<XAxis dataKey="date"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="revenue"/>
</BarChart>
</ResponsiveContainer>
</div>
)
}
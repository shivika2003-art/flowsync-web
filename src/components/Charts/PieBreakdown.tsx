import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts'

export default function PieBreakdown({ data }:{ data: {category:string, value:number}[] }){
return (
<div style={{ width: '100%', height: 240 }}>
<ResponsiveContainer>
<PieChart>
<Pie data={data} dataKey="value" nameKey="category" outerRadius={90} label/>
<Tooltip/>
</PieChart>
</ResponsiveContainer>
</div>
)
}
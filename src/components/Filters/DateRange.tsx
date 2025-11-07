import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export default function DateRange({ value, onChange }:{ value:'7'|'30'|'90', onChange:(v:any)=>void }){
return (
<ToggleButtonGroup value={value} exclusive onChange={(_,v)=>v && onChange(v)} size="small">
<ToggleButton value="7">7d</ToggleButton>
<ToggleButton value="30">30d</ToggleButton>
<ToggleButton value="90">90d</ToggleButton>
</ToggleButtonGroup>
)
}
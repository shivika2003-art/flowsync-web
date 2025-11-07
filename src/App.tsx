import { useEffect, useMemo, useState } from 'react'
import {
  ThemeProvider, CssBaseline, Container, Card, CardContent,
  AppBar, Toolbar, Typography, IconButton
} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { makeTheme } from './lib/theme'
import { useMetrics } from './stores/metricsStore'
import LineTrend from './components/Charts/LineTrend'
import BarStack from './components/Charts/BarStack'
import PieBreakdown from './components/Charts/PieBreakdown'
import DateRange from './components/Filters/DateRange'

export default function App(){
  const [mode, setMode] = useState<'light'|'dark'>('light')
  const theme = useMemo(()=>makeTheme(mode), [mode])
  const { data, load, range, setRange, loading } = useMetrics()

  useEffect(()=>{ void load() }, [range])

  const series = data?.series
  const rows = (series?.dates || []).map((d: string, i: number) => ({
    date: d,
    dau: series.dau[i],
    revenue: series.revenue[i]
  }))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>FlowSync Analytics</Typography>
          <DateRange value={range} onChange={setRange}/>
          <IconButton onClick={()=>setMode(mode==='light'?'dark':'light')} aria-label="toggle theme">
            {mode==='light' ? <DarkModeIcon/> : <LightModeIcon/>}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 3 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          <Card><CardContent>
            <Typography variant="subtitle1">Daily Active Users</Typography>
            {loading ? 'Loading…' : <LineTrend rows={rows} />}
          </CardContent></Card>

          <Card><CardContent>
            <Typography variant="subtitle1">Revenue</Typography>
            {loading ? 'Loading…' : <BarStack rows={rows} />}
          </CardContent></Card>

          <Card style={{ gridColumn:'span 2' }}><CardContent>
            <Typography variant="subtitle1">Feature Breakdown</Typography>
            {loading ? 'Loading…' : <PieBreakdown data={data?.breakdown || []} />}
          </CardContent></Card>
        </div>
      </Container>
    </ThemeProvider>
  )
}

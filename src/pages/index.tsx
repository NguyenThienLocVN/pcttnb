// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import RealTime from 'src/views/home/RealTime'
import Map from 'src/views/map'
import RainData from 'src/views/home/RainData'
import WaterData from 'src/views/home/WaterData'

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <RealTime />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} md={12}>
            <RainData />
          </Grid>
          <Grid item xs={12} md={12} sx={{marginTop: 5}}>
            <WaterData />
          </Grid>
          <Grid item xs={12} md={12} sx={{marginTop: 5}}>
            
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} sx={{height: 'calc(100vh - 120px)'}}>
          <Map />
        </Grid>
      </Grid>
  )
}

export default Dashboard

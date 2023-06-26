// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import RealTime from 'src/views/home/RealTime'
import ConstructionMap from 'src/views/construction/Map'
import CountLicenseFee from 'src/views/home/CountLicenseFee'
import RainingData from 'src/views/home/RainingData'
import WaterData from 'src/views/home/WaterData'

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <RealTime />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} md={12}>
            <RainingData />
          </Grid>
          <Grid item xs={12} md={12} sx={{marginTop: 5}}>
            <WaterData />
          </Grid>
          <Grid item xs={12} md={12} sx={{marginTop: 5}}>
            <CountLicenseFee />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} sx={{height: 'calc(100vh - 120px)'}}>
          <ConstructionMap />
        </Grid>
      </Grid>
  )
}

export default Dashboard

import { useState, useEffect } from "react";

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const RainingData = () => {

  return (
    <Card sx={{ position: 'relative' }}>
      <CardHeader
        title='SỐ LIỆU MƯA'
        sx={{ padding: 0 }}
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            textAlign: 'center',
            fontSize: '14px !important',
            fontWeight: 600,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important',
            borderBottom: '1px solid gray',
          }
        }}
      />
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={6}>
              <Typography>Trạm A</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Button variant="contained" color="primary" size="medium">3.6</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4} md={6}>
              <Typography>Trạm A</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Button variant="contained" color="primary" size="medium">3.6</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4} md={6}>
              <Typography>Trạm A</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Button variant="contained" color="primary" size="medium">3.6</Button>
            </Grid>
          </Grid>
      </Box>
      </CardContent>
    </Card>
  );
};

export default RainingData;

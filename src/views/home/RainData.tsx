import { useState, useEffect } from "react";

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
      <CardContent sx={{ padding: '10px !important' }}>
        <TableContainer className="raindata-table" component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow sx={{ background: '#a8d2ff', height: 35 }}>
                <TableCell padding="none"></TableCell>
                <TableCell padding="none" align="center">Hiện tại</TableCell>
                <TableCell padding="none" align="center">1 ngày</TableCell>
                <TableCell padding="none" align="center">3 ngày</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ background: '#ededed', height: 75 }}>
                <TableCell padding="none">
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px !important', color: '#1565C0' }}>Trạm A</Typography>
                  <Typography sx={{ fontSize: '13px !important' }}>Huyện Yên Mô, Ninh Bình</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-now">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-1d">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-3d">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ background: '#ededed', height: 75 }}>
                <TableCell padding="none">
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px !important', color: '#1565C0' }}>Trạm A</Typography>
                  <Typography sx={{ fontSize: '13px !important' }}>Huyện Yên Mô, Ninh Bình</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-now">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-1d">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-3d">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ background: '#ededed', height: 75 }}>
                <TableCell padding="none">
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px !important', color: '#1565C0' }}>Trạm A</Typography>
                  <Typography sx={{ fontSize: '13px !important' }}>Huyện Yên Mô, Ninh Bình</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-now">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-1d">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
                <TableCell padding="none" align="center" className="raindata-cell data-3d">
                  <Typography className="data-value">3.6</Typography>
                  <Typography className="data-unit">(mm)</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default RainingData;

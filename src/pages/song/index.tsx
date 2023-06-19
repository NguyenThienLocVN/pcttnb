// ** MUI Imports
import Grid from '@mui/material/Grid'
import React from 'react'
import RiverMap from 'src/views/river/Map'
import { Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material';
import { useMap} from "react-leaflet";


const FlyToButton = (lat:any, lng:any) => {
    // var map = useMap();
    // map.flyTo([lat, lng], 14, { duration: 2 });
    console.log(lat, lng);
}

// ** Icons Imports
function River() {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} sx={{ height: '50vh' }}>
                    <RiverMap />
                </Grid>
                <Grid item xs={12}>
                    <Table className='mainTable'>
                        <TableHead className='tableHead'>
                            <TableRow>
                                <TableCell size='small'>STT</TableCell>
                                <TableCell size='small'>Tên sông</TableCell>
                                <TableCell size='small'>Địa điểm</TableCell>
                                <TableCell size='small'>Độ dài</TableCell>
                                <TableCell size='small'>Nguồn</TableCell>
                                <TableCell size='small'>Cửa sông</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell size='small'>1</TableCell>
                                {/* <TableCell size='small'>Sông Vệ</TableCell> */}
                                <TableCell size='small'><Link href='#' onClick={() => FlyToButton(15.023683, 108.662813)}>Sông Chanh</Link></TableCell>
                                <TableCell size='small'>TP. Ninh Bình, Ninh Bình</TableCell>
                                <TableCell size='small'>80 km</TableCell>
                                <TableCell size='small'>Sông Thoa</TableCell>
                                <TableCell size='small'>Biển Đông</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>2</TableCell>
                                <TableCell size='small'>Sông Định</TableCell>
                                <TableCell size='small'>Hoa Lư, Ninh Bình</TableCell>
                                <TableCell size='small'>80 km</TableCell>
                                <TableCell size='small'>Sông Thoa</TableCell>
                                <TableCell size='small'>Biển Đông</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Sông Trà Bồng</TableCell>
                                <TableCell size='small'>Trà Bồng, Quảng Ngãi</TableCell>
                                <TableCell size='small'>45 km</TableCell>
                                <TableCell size='small'>Sông Thoa</TableCell>
                                <TableCell size='small'>Biển Đông</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>4</TableCell>
                                <TableCell size='small'>Sông Bin Dần</TableCell>
                                <TableCell size='small'>Yên Mô, Ninh Bình</TableCell>
                                <TableCell size='small'>80 km</TableCell>
                                <TableCell size='small'>Sông Thoa</TableCell>
                                <TableCell size='small'>Biển Đông</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default River

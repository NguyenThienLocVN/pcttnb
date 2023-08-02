// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import("../../../@core/components/map"), { ssr: false });

const DikeConstructions = () => {
    const [mapCenter, setMapCenter] = useState([ 20.246403, 105.967898 ]);
    const [mapZoom, setMapZoom] = useState(9);

    
    const zoomConstruction = (coords:any) => {
        setMapCenter(coords);
        setMapZoom(12);
    };

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} sx={{ height: '50vh', width: '100%' }}>
                    <Map center={mapCenter} zoom={mapZoom} />
                </Grid>
                <Grid item xs={12}>
                    <Table className='mainTable'>
                        <TableHead className='tableHead'>
                            <TableRow>
                                <TableCell size='small'>STT</TableCell>
                                <TableCell size='small'>Tên tuyến đê</TableCell>
                                <TableCell size='small'>Chiều dài (km)</TableCell>
                                <TableCell size='small'>Cấp đê</TableCell>
                                <TableCell size='small'>Loại đê</TableCell>
                                <TableCell size='small'>Thuộc huyện</TableCell>
                                <TableCell size='small'>Diện tích bảo vệ</TableCell>
                                <TableCell size='small'>Số dân bảo vệ</TableCell>
                                <TableCell size='small'>Địa danh đầu</TableCell>
                                <TableCell size='small'>Địa danh cuối</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell size='small'>1</TableCell>
                                <TableCell size='small'><Link href='#' onClick={() => zoomConstruction([20.363713, 105.918076])}>Đầm Cút</Link></TableCell>
                                <TableCell size='small'>8380</TableCell>
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>Huyện Gia Viễn</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>Xã Gia Thanh</TableCell>
                                <TableCell size='small'>Xã Gia Trấn</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>2</TableCell>
                                <TableCell size='small'><Link href='#' onClick={() => zoomConstruction([20.33791822727243, 105.812477149027])}>Tả Hoàng Long</Link></TableCell>
                                <TableCell size='small'>10050</TableCell>
                                <TableCell size='small'>4</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>Huyện Nho Quan</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>-</TableCell>
                                <TableCell size='small'>-</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'><Link href='#' onClick={() => zoomConstruction([20.36147235166413, 105.9234089034539])}>Hữu sông Đáy</Link></TableCell>
                                <TableCell size='small'>7122</TableCell>
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>TP. Ninh Bình</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>Xã Ninh Khánh</TableCell>
                                <TableCell size='small'>Xã Ninh Phúc</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>4</TableCell>
                                <TableCell size='small'><Link href='#'>Hữu sông Đáy</Link></TableCell>
                                <TableCell size='small'>13765</TableCell>
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>Huyện Kim Sơn</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>Xã Xuân Thiện</TableCell>
                                <TableCell size='small'>Xã Kim Tân</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DikeConstructions

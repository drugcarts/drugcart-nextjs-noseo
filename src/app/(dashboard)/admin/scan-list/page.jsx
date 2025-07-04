"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { GetScanListService } from '@/services/scanService';
import { GetScanBookingListService } from '@/services/scanBookingService';

const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    borderRadius: 12,
    marginTop: 2,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#00a65a",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        borderRadius: 12,
    },
}));

function ScanPage() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { scanList } = useSelector((state) => state.scanData)
    const { scanBookingList } = useSelector((state) => state.scanBookingData)

    useEffect(() => {
        dispatch(GetScanListService())
        dispatch(GetScanBookingListService())
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/scan')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Scans
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{scanList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/scan-bookings')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Scan Bookings
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{scanBookingList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ScanPage
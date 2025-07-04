"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { GetLabPackagesService } from '@/services/labPackageService';
import { GetLabsService } from '@/services/labService';
import { GetTestPackagesService } from '@/services/testPackageService';
import { GetLabBookingsService } from '@/services/labBookingService';

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

function LabListPage() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { labPackageList } = useSelector((state) => state.labPackageData)
    const { labList } = useSelector((state) => state.labData)
    const { testPackageList } = useSelector((state) => state.testPackageData)
    const { labBookingList } = useSelector((state) => state.labBookingData)

    useEffect(() => {
        dispatch(GetLabPackagesService(0, 0))
        dispatch(GetLabsService(0, 0))
        dispatch(GetTestPackagesService(0, 0))
        dispatch(GetLabBookingsService(0, 0))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/lab-package')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Lab Packages
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{labPackageList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/labpack')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Labs
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{labList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/test-package')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Test Packages
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{testPackageList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/lab-booking')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Lab Bookings
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{labBookingList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LabListPage
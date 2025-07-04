"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useRole } from '@/hooks/useRole';

const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    borderRadius: 12,
    marginTop: 2,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#ae0e49",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        borderRadius: 12,
    },
}));

function MedicinePage() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { role } = useRole()
    const { countList } = useSelector((state) => state.countData)
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/category')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Category
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.category}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/subcategory')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Sub Category
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.sub_category}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/genericlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Genetic Name
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.generic_name}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/medicinecat')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Products
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.products}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/manufactuerlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Manufactuer
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.manufactuer}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/formlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Form
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.forms}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/storagelist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Storage
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.storage}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/packagelist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Pack
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.pack}</Typography>
                    </CardItem>
                </Grid>
                {role === "admin" ? (
                    <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                        <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/courierlist')}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={16}
                                    color='#fff'
                                    sx={{ flexGrow: 1 }}
                                >
                                    Total Courier
                                </Typography>
                            </Box>
                            <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.courier}</Typography>
                        </CardItem>
                    </Grid>
                ) : null}
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/country_code_list')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Country
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.country}</Typography>
                    </CardItem>
                </Grid>
                {role === "admin" ? (
                    <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                        <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/writtenbylist')}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={16}
                                    color='#fff'
                                    sx={{ flexGrow: 1 }}
                                >
                                    Total Written by list
                                </Typography>
                            </Box>
                            <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.writtenby}</Typography>
                        </CardItem>
                    </Grid>
                ) : null}
                {role === "admin" ? (
                    <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                        <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/reviewbylist')}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={16}
                                    color='#fff'
                                    sx={{ flexGrow: 1 }}
                                >
                                    Total Review by list
                                </Typography>
                            </Box>
                            <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.reviewBy}</Typography>
                        </CardItem>
                    </Grid>
                ) : null}
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/referlist')}>
                        <Box>
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Reference list
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.reference}</Typography>
                    </CardItem>
                </Grid>
                {role === "admin" ? (
                    <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                        <CardItem elevation={6} sx={{ backgroundColor: "#00a65a" }} onClick={() => router.push('/admin/stocklist')}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={16}
                                    color='#fff'
                                    sx={{ flexGrow: 1 }}
                                >
                                    Total Stock list
                                </Typography>
                            </Box>
                            <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{countList?.stock}</Typography>
                        </CardItem>
                    </Grid>
                ) : null}
            </Grid>
        </Box>
    )
}

export default MedicinePage
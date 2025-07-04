"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetNonCategoryService } from '@/services/categoryService';
import { useRouter } from 'next/navigation';

const CardItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#7d5c68',
    ...theme.typography.body2,
    padding: 36,
    borderRadius: 12,
    marginTop: 20,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#00a65a",
        ...theme.typography.body2,
        padding: 36,
        borderRadius: 12,
    },
}));

function HealthStore() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { non_category } = useSelector((state) => state.categoryData)

    useEffect(() => {
        dispatch(GetNonCategoryService(1, 10))
    }, [])

    const ayush_FilterData = non_category?.categories?.filter((item) => item?.url !== "ayush" && item?.url !== "health-care-device")

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {ayush_FilterData && ayush_FilterData?.map((item, i) => (
                    <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }} key={i}>
                        <CardItem
                            elevation={6}
                            onClick={() => router.push(`/admin/healthstorecat/${item?.url}`)}
                        >
                            <Box>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Poppins"}
                                    fontWeight={500}
                                    fontSize={20}
                                    color='#fff'
                                    textAlign="center"
                                    sx={{ flexGrow: 1 }}
                                >
                                    {item?.category_name}
                                </Typography>
                            </Box>
                        </CardItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HealthStore
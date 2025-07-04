"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { GetTextFeedbackListService } from '@/services/textFeedbackService';
import { GetVideoFeedbackListService } from '@/services/videoFeedbackService';
import { GetSendFeedbackListService } from '@/services/sendFeebackService';

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

function CustomersPage() {
    const { textFeedbackList } = useSelector((state) => state.textFeedbackData)
    const { videoeFeedbackList } = useSelector((state) => state.videoFeedbackData)
    const { sendFeedbackList } = useSelector((state) => state.sendFeedbackData)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(GetTextFeedbackListService())
        dispatch(GetVideoFeedbackListService())
        dispatch(GetSendFeedbackListService())
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Address
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>0</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/text-feedback')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Text Feedbacks
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{textFeedbackList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/video-feedback')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Video Feedbacks
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{videoeFeedbackList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}>
                    <CardItem elevation={6} sx={{ backgroundColor: "#7d5c68" }} onClick={() => router.push('/admin/send-feedback')}>
                        <Box >
                            <Typography
                                variant="body1"
                                fontFamily={"Poppins"}
                                fontWeight={500}
                                fontSize={16}
                                color='#fff'
                                sx={{ flexGrow: 1 }}
                            >
                                Total Reviews
                            </Typography>
                        </Box>
                        <Typography variant="body1" fontFamily={"Poppins"} color='#fff' fontWeight="bold" fontSize={20}>{sendFeedbackList?.pagination?.totalItems}</Typography>
                    </CardItem>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CustomersPage
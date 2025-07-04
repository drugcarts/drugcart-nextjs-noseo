"use client";
import { useParams, useRouter } from "next/navigation";
import {
    Avatar,
    Box,
    Button,
    Grid2,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { GetSendFeedbackIdService } from '@/services/sendFeebackService';
import { useDispatch, useSelector } from "react-redux";
import { deepOrange } from "@mui/material/colors";
import OverallRating from '@/components/common/OverallRating';
import { DateMonthFormat } from '@/utils/dateFormat';

function ViewSendFeedback() {
    const { sendFeedback } = useSelector((state) => state.sendFeedbackData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetSendFeedbackIdService(params?.id))
    }, [params?.id])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Customer Review
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/send-feedback`)}
                >
                    Review List
                </Button>
            </Box>
            <Paper
                sx={{
                    borderColor: "#fa4b31",
                    borderTopWidth: 3,
                    borderBottomWidth: 2,
                    p: 2,
                    mt: 4,
                }}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Customer Name:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {sendFeedback?.username}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Picture:
                        </Typography>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500], width: 36, height: 36 }}
                            src={sendFeedback?.picture || ""}
                            alt={sendFeedback?.username}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Stars:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            <OverallRating rating={sendFeedback?.rating} />
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Rating:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {sendFeedback?.ratingStatus}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Date:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {DateMonthFormat(sendFeedback?.date)}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Status:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {sendFeedback?.status}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Comments:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {sendFeedback?.comments}
                        </Typography>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    );
}

export default ViewSendFeedback;

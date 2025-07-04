"use client";
import { useParams, useRouter } from "next/navigation";
import {
    Box,
    Button,
    Grid2,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { GetLabBookingIdService } from "@/services/labBookingService";
import { useDispatch, useSelector } from "react-redux";

function ViewLabBooking() {
    const { labBookingList, labBooking } = useSelector((state) => state.labBookingData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetLabBookingIdService(params?.id))
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
                    Lab Booking
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/lab-booking`)}
                >
                    Lab Booking List
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
                            Package Name:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.packagename}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Email:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.email}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Mobile:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.phone}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Address:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.address}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Appoitment date:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.appoitmentdate}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Time:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.timing}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            No of Persons:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.noofpersons}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Charges:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {labBooking?.hardcopy ? "Yes" : "No"}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Tests:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14, textTransform: "capitalize" }}>
                            {labBooking?.tests?.join(", ")}
                        </Typography>
                    </Grid2>
                </Grid2>
            </Paper>

            {labBooking?.name1 &&
                <Paper
                    sx={{
                        borderColor: "#fa4b31",
                        borderTopWidth: 3,
                        borderBottomWidth: 2,
                        p: 2,
                        mt: 4,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        sx={{ flexGrow: 1, marginBottom: 2 }}
                    >
                        Person 1
                    </Typography>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Name:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.name1}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Age:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.age1}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Gender:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.gender1}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            }
            {labBooking?.name2 &&
                <Paper
                    sx={{
                        borderColor: "#fa4b31",
                        borderTopWidth: 3,
                        borderBottomWidth: 2,
                        p: 2,
                        mt: 4,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        sx={{ flexGrow: 1, marginBottom: 2 }}
                    >
                        Person 2
                    </Typography>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Name:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.name2}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Age:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.age2}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Gender:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.gender2}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            }
            {labBooking?.name3 &&
                <Paper
                    sx={{
                        borderColor: "#fa4b31",
                        borderTopWidth: 3,
                        borderBottomWidth: 2,
                        p: 2,
                        mt: 4,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        sx={{ flexGrow: 1, marginBottom: 2 }}
                    >
                        Person 3
                    </Typography>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Name:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.name3}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Age:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.age3}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Gender:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.gender3}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            }
            {labBooking?.name4 &&
                <Paper
                    sx={{
                        borderColor: "#fa4b31",
                        borderTopWidth: 3,
                        borderBottomWidth: 2,
                        p: 2,
                        mt: 4,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        sx={{ flexGrow: 1, marginBottom: 2 }}
                    >
                        Person 4
                    </Typography>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Name:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.name4}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Age:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.age4}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Gender:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.gender4}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            }
            {labBooking?.name5 &&
                <Paper
                    sx={{
                        borderColor: "#fa4b31",
                        borderTopWidth: 3,
                        borderBottomWidth: 2,
                        p: 2,
                        mt: 4,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        sx={{ flexGrow: 1, marginBottom: 2 }}
                    >
                        Person 5
                    </Typography>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Name:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.name5}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Age:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.age5}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Gender:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {labBooking?.gender5}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            }
        </Box>
    );
}

export default ViewLabBooking;

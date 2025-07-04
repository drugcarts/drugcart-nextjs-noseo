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
import { GetContacUsIdService } from "@/services/contactService";
import { useDispatch, useSelector } from "react-redux";

function ViewContactUsError() {
    const { contactus } = useSelector((state) => state.contactUsData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetContacUsIdService(params?.id))
    }, [params?.id])

    const contactType = contactus?.type?.join(", ")
    console.log(contactType);

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    textTransform="capitalize"
                    sx={{ flexGrow: 1 }}
                >
                    {contactus?.name} Details
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/contactus`)}
                >
                    User Contact List
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
                            Name:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {contactus?.name}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Email:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {contactus?.email}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Mobile:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {contactus?.mobile}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Message:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {contactus?.message}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Contact Type:
                        </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {contactType}
                            </Typography>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    );
}

export default ViewContactUsError;

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
import { GetReportErrorIdService } from "@/services/reportErrorService";
import { useDispatch, useSelector } from "react-redux";

function ViewReportError() {
    const { reportError } = useSelector((state) => state.reportErrorData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetReportErrorIdService(params?.id))
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
                    Report Error
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/reporterror`)}
                >
                    Report Error List
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
                            {reportError?.name}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Email:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {reportError?.email}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Mobile:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {reportError?.mobile}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Country:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {reportError?.country}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Subject:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {reportError?.subject}
                        </Typography>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    );
}

export default ViewReportError;

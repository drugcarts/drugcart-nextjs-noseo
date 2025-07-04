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
import { GetNotifyIdService, PutNotifyService } from "@/services/notifyService";
import { useDispatch, useSelector } from "react-redux";

function ViewNotify() {
    const { notifyList, notify } = useSelector((state) => state.notifyData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetNotifyIdService(params?.id))
    }, [params?.id])

    const updateNotify = async () => {
        await dispatch(PutNotifyService(notify?._id, {status: "Active" }))
    }

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Notify List
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/notify`)}
                >
                    Notify List
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
                            {notify?.notname}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Email:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {notify?.notemail}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Phone:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {notify?.notphone}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Status:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {notify?.status === "InActive" ? "Pending" : "Finished"}
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                            Product:
                        </Typography>
                        <Typography
                            sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                            {notify?.notproname}
                        </Typography>
                    </Grid2>
                    {notify?.status === "InActive" ? (
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                In Stock:
                            </Typography>
                            <Button
                                color="secondary"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={updateNotify}
                            >
                                Update
                            </Button>
                        </Grid2>
                    ) : null}
                </Grid2>
            </Paper>
        </Box>
    );
}

export default ViewNotify;

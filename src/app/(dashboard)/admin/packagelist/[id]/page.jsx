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
import TextInput from "@/components/admin/input/TextInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutPackageService, GetPackageIdService } from "@/services/packageService";
import { useDispatch, useSelector } from "react-redux";

function EditStorage() {
    const { pack } = useSelector((state) => state.packageData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetPackageIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            packagename: pack?.packagename || "",
        },
        validationSchema: yup.object({
            packagename: yup.string().required("Package Name is required"),
        }),
        onSubmit: async (data) => {
            console.log(data);
            await dispatch(PutPackageService(pack?._id, data))
        },
    });

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Package
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Package List
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
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Package Name"}
                            value={formik.values.packagename}
                            onChange={formik.handleChange("packagename")}
                            helperText={
                                formik.touched.packagename ? formik.errors.packagename : null
                            }
                            error={formik.touched.packagename ? formik.errors.packagename : null}
                        />
                    </Grid2>
                </Grid2>
            </Paper>

            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Button
                    style={{ textTransform: "capitalize" }}
                    variant="contained"
                    onClick={formik.handleSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </Box>
    );
}

export default EditStorage;

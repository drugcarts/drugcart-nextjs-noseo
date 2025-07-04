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
import SelectInput from "@/components/admin/input/SelectInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { GetLocationIdService, PutLocationService } from '@/services/locationService';
import { useDispatch, useSelector } from "react-redux";

function EditLocation() {
    const { location } = useSelector((state) => state.locationData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetLocationIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            state: location?.state || "",
            location: location?.location || "",
            pincode: location?.pincode || "",
            status: location?.status || "",
        },
        validationSchema: yup.object({
            state: yup.string().required("State is required"),
            location: yup.string().required("City is required"),
            pincode: yup
                .string()
                .matches(/^\d{6}$/, 'Pincode must be exactly 6 digits')
                .required('Pincode is required'),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data) => {
            console.log(data);
            await dispatch(PutLocationService(location?._id, data))
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
                    Edit Delivery Product Location And Pincode
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/locationlist`)}
                >
                    Location List
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
                            title={"City"}
                            value={formik.values.location}
                            onChange={formik.handleChange("location")}
                            helperText={
                                formik.touched.location ? formik.errors.location : null
                            }
                            error={formik.touched.location ? formik.errors.location : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"State"}
                            value={formik.values.state}
                            onChange={formik.handleChange("state")}
                            helperText={
                                formik.touched.state ? formik.errors.state : null
                            }
                            error={formik.touched.state ? formik.errors.state : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            type="number"
                            title={"Pincode"}
                            value={formik.values.pincode}
                            onChange={formik.handleChange("pincode")}
                            helperText={
                                formik.touched.pincode ? formik.errors.pincode : null
                            }
                            error={formik.touched.pincode ? formik.errors.pincode : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Status"}
                            value={formik.values.status}
                            onChange={formik.handleChange("status")}
                            helperText={
                                formik.touched.status ? formik.errors.status : null
                            }
                            error={
                                formik.touched.status ? formik.errors.status : null
                            }
                            data={["Active", "Inactive"]}
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

export default EditLocation;

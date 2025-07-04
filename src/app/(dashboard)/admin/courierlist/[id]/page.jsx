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
import { GetCourierIdService, PutCourierService } from '@/services/courierService';
import { useDispatch, useSelector } from "react-redux";

function EditCourier() {
    const { courier } = useSelector((state) => state.courierData)
    const router = useRouter();
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCourierIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            couriername: courier?.couriername || "",
            website: courier?.website || "",
            status: courier?.status || "",
        },
        validationSchema: yup.object({
            couriername: yup.string().required("Courier Name is required"),
            website: yup.string().required("Website is required"),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data) => {
            console.log(data);
            await dispatch(PutCourierService(courier?._id, data))
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
                    Edit Courier
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Courier List
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
                            title={"Courier Name (Ex : ST Courier)"}
                            value={formik.values.couriername}
                            onChange={formik.handleChange("couriername")}
                            helperText={
                                formik.touched.couriername ? formik.errors.couriername : null
                            }
                            error={formik.touched.couriername ? formik.errors.couriername : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Website Name(Ex : www.stcourier.com)"}
                            value={formik.values.website}
                            onChange={formik.handleChange("website")}
                            helperText={formik.touched.website ? formik.errors.website : null}
                            error={formik.touched.website ? formik.errors.website : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
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

export default EditCourier;

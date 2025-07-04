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
import { PutReferenceService, GetReferenceIdService } from '@/services/referenceService';
import { useSelector, useDispatch } from "react-redux";

function EditReference() {
    const { reference } = useSelector((state) => state.referenceData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    useEffect(() => {
        dispatch(GetReferenceIdService(params?.id))
    }, [params?.id])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            websitename: reference?.websitename || "",
            url: reference?.url || "",
        },
        validationSchema: yup.object({
            websitename: yup.string().required("Website Name is required"),
        }),
        onSubmit: async (data) => {
            console.log(data);
            await dispatch(PutReferenceService(reference?._id, data))
        },
    });

    useEffect(() => {
        formik.values.url = URLText(formik.values.websitename)
    }, [formik.values.websitename])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Reference
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Reference List
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
                            title={"Reference Name (Ex : Netmeds or 1mg)"}
                            value={formik.values.websitename}
                            onChange={formik.handleChange("websitename")}
                            helperText={
                                formik.touched.websitename ? formik.errors.websitename : null
                            }
                            error={formik.touched.websitename ? formik.errors.websitename : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Url Name"}
                            value={URLText(formik.values.websitename)}
                            // onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
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

export default EditReference;

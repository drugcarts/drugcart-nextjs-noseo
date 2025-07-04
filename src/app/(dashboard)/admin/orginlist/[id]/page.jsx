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
import { PutOrginService, GetOrginIdService } from '@/services/orginService';
import { useDispatch, useSelector } from "react-redux";

function EditOrgin() {
    const { orgin } = useSelector((state) => state.orginData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetOrginIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            orginname: orgin?.orginname || "",
        },
        validationSchema: yup.object({
            orginname: yup.string().required("Orgin Name is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PutOrginService(orgin?._id, data))
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
                    Edit Country Orgin
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/orginlist`)}
                >
                    Product Country Orgin List
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
                            title={"Country of Orgin name: EX:India"}
                            value={formik.values.orginname}
                            onChange={formik.handleChange("orginname")}
                            helperText={
                                formik.touched.orginname ? formik.errors.orginname : null
                            }
                            error={formik.touched.orginname ? formik.errors.orginname : null}
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

export default EditOrgin;

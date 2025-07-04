"use client";
import { useRouter } from "next/navigation";
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
import { PostOrginService } from '@/services/orginService';
import { useDispatch } from "react-redux";

function OrginAdd() {
    const router = useRouter();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            orginname: "",
        },
        validationSchema: yup.object({
            orginname: yup.string().required("Orgin Name is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostOrginService(data, resetForm))
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
                    Add Country Orgin
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

export default OrginAdd;

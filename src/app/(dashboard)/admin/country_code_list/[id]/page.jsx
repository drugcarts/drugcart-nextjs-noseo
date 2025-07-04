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
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutCountryCodeService, GetCountryCodeIdService } from '@/services/countryCodeService';
import { useDispatch, useSelector } from "react-redux";

function EditCountryCode() {
    const [imagePreview, setImagePreview] = useState(null);
    const { countryCode } = useSelector((state) => state.countryCodeData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetCountryCodeIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            country: countryCode?.country || "",
            code: countryCode?.code || "",
            flag: countryCode?.flag || "",
        },
        validationSchema: yup.object({
            country: yup.string().required("Country is required"),
            code: yup.string().required("Code is required"),
            // flag: yup.string().required("Flag is required"),
        }),
        onSubmit: async (data) => {
            const finalData = { ...data };

            if (data.flag instanceof File) {
                const toBase64 = (file) =>
                    new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            const base64String = reader.result.split(',')[1];
                            resolve(base64String);
                        };
                        reader.onerror = (error) => reject(error);
                    });

                const base64 = await toBase64(data.flag);

                finalData.flag = {
                    name: data.flag.name,
                    type: data.flag.type,
                    data: base64,
                };
            }
            await dispatch(PutCountryCodeService(countryCode?._id, finalData));
        }
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("flag", file); // Set actual file
            setImagePreview(URL.createObjectURL(file)); // For preview
        }
    };

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Country Code
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/country_code_list`)}
                >
                    Country Code List
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
                            title={"Country Name"}
                            value={formik.values.country}
                            onChange={formik.handleChange("country")}
                            helperText={
                                formik.touched.country ? formik.errors.country : null
                            }
                            error={formik.touched.country ? formik.errors.country : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Country Code"}
                            value={formik.values.code}
                            onChange={formik.handleChange("code")}
                            helperText={
                                formik.touched.code ? formik.errors.code : null
                            }
                            error={formik.touched.code ? formik.errors.code : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Country Flag"}
                            image={`https://assets1.drugcarts.com/admincolor/countryflag/${countryCode?.flag}`}
                            fallbackImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/admincolor/countryflag/${countryCode?.flag}`}
                            onChange={handleImage}
                            error={
                                formik.touched.flag
                                    ? formik.errors.flag
                                    : null
                            }
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

export default EditCountryCode;

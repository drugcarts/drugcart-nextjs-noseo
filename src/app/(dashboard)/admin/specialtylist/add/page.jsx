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
import InputArea from "@/components/admin/input/InputArea";
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostSpecialService } from '@/services/specialityService';
import { useDispatch } from "react-redux";

function SpecialityAdd() {
    const [imagePreview, setImagePreview] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch()

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const formik = useFormik({
        initialValues: {
            specialty_name: "",
            url: "",
            image: "",
            imagealt: "",
            metatitle: "",
            metadesc: "",
            metakeyboard: "",
        },
        validationSchema: yup.object({
            specialty_name: yup.string().required("specialty name is required"),
            image: yup.mixed().required("image is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PostSpecialService(data, resetForm))
            setImagePreview(null)
        },
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue("image", {
                    name: file.name,
                    type: file.type,
                    base64: reader.result, // base64 encoded string
                });
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.specialty_name)
    }, [formik.values.specialty_name])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Specialty
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/specialtylist`)}
                >
                    Specialty List
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
                        <TextInput
                            title={"Specialty Name"}
                            value={formik.values.specialty_name}
                            onChange={formik.handleChange("specialty_name")}
                            helperText={
                                formik.touched.specialty_name ? formik.errors.specialty_name : null
                            }
                            error={formik.touched.specialty_name ? formik.errors.specialty_name : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.specialty_name)}
                            onChange={formik.handleChange("url")}
                            helperText={formik.touched.url ? formik.errors.url : null}
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Image"}
                            image={imagePreview}
                            onChange={handleImage}
                            error={
                                formik.touched.image
                                    ? formik.errors.image
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Image Alt Tag"}
                            value={formik.values.imagealt}
                            onChange={formik.handleChange("imagealt")}
                        />
                    </Grid2>
                </Grid2>
            </Paper>
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
                        <TextInput
                            title={"Meta Title"}
                            value={formik.values.metatitle}
                            onChange={formik.handleChange("metatitle")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Meta Keyword"}
                            value={formik.values.metakeyboard}
                            onChange={formik.handleChange("metakeyboard")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <InputArea
                            title={"Meta Description"}
                            value={formik.values.metadesc}
                            onChange={formik.handleChange("metadesc")}
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

export default SpecialityAdd;

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
import React, { useEffect, useState } from "react";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutFormService, GetFormIdService } from "@/services/formService";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function EditForm() {
    const [imagePreview, setImagePreview] = useState(null);
    const { form } = useSelector((state) => state.formData)
    const dispatch = useDispatch()
    const router = useRouter();
    const params = useParams()

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    useEffect(() => {
        dispatch(GetFormIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            formname: form?.formname || "",
            formurl: form?.formurl || "",
            picture: form?.picture || "",
            alt: form?.alt || "",
            metatitle: form?.metatitle || "",
            metakeyword: form?.metakeyword || "",
            metadesc: form?.metadesc || "",
        },
        validationSchema: yup.object({
            formname: yup.string().required("Form Name is required"),
            formurl: yup.string().required("Form URL is required"),
            // picture: yup.string().required("Picture is required"),
        }),
        onSubmit: async (data) => {
            const finalData = { ...data };
            if (data.picture instanceof File) {
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

                const base64 = await toBase64(data.picture);

                finalData.picture = {
                    name: data.picture.name,
                    type: data.picture.type,
                    data: base64,
                };
            }
            await dispatch(PutFormService(form?._id, finalData));
        }
    });

    useEffect(() => {
        formik.values.formurl = URLText(formik.values.formname)
    }, [formik.values.formname])

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("picture", file); // Set actual file
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
                    Edit Form
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Form List
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
                            title={"Form Name (Ex: Gel or caps)"}
                            value={formik.values.formname}
                            onChange={formik.handleChange("formname")}
                            helperText={
                                formik.touched.formname ? formik.errors.formname : null
                            }
                            error={formik.touched.formname ? formik.errors.formname : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL Name (Ex: gel or caps)"}
                            value={URLText(formik.values.formurl)}
                            onChange={formik.handleChange("formurl")}
                            helperText={formik.touched.formurl ? formik.errors.formurl : null}
                            error={formik.touched.formurl ? formik.errors.formurl : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Image"}
                            image={`https://assets1.drugcarts.com/formimg/${form?.picture}`}
                            fallbackImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/formimg/${form?.picture}`}
                            onChange={handleImage}
                            error={
                                formik.touched.picture
                                    ? formik.errors.picture
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Image Alt"}
                            value={formik.values.alt}
                            onChange={formik.handleChange("alt")}
                            helperText={
                                formik.touched.alt ? formik.errors.alt : null
                            }
                            error={formik.touched.alt ? formik.errors.alt : null}
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
                            value={formik.values.metakeyword}
                            onChange={formik.handleChange("metakeyword")}
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

export default EditForm;

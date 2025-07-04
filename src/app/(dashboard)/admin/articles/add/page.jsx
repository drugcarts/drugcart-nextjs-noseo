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
import InputArea from "@/components/admin/input/InputArea";
import TextInput from "@/components/admin/input/TextInput";
import TextEditor from "@/components/admin/input/TextEditor";
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostArticleService } from '@/services/articleService';
import { useDispatch } from "react-redux";

function ArticlesAdd() {
    const [imagePreview, setImagePreview] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch()

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const formik = useFormik({
        initialValues: {
            blogname: "",
            blogimg: "",
            url: "",
            description: "",
            imagealt: "",
            metatitle: "",
            metadesc: "",
            metakeyboard: "",
        },
        validationSchema: yup.object({
            blogname: yup.string().required("Article Name is required"),
            url: yup.string().required("URL is required"),
            // blogimg: yup.mixed().required("Image is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PostArticleService(data, resetForm));
            setImagePreview(null)
        },
    });


    useEffect(() => {
        formik.values.url = URLText(formik.values.blogname)
    }, [formik.values.blogname])

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue("blogimg", {
                    name: file.name,
                    type: file.type,
                    base64: reader.result, // base64 encoded string
                });
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
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
                    Add Articles
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/articles`)}
                >
                    Articles List
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
                            title={"Article Name"}
                            value={formik.values.blogname}
                            onChange={formik.handleChange("blogname")}
                            helperText={
                                formik.touched.blogname ? formik.errors.blogname : null
                            }
                            error={formik.touched.blogname ? formik.errors.blogname : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.url)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Image"}
                            image={imagePreview}
                            onChange={handleImage}
                            error={
                                formik.touched.blogimg
                                    ? formik.errors.blogimg
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Image Alt"}
                            value={formik.values.imagealt}
                            onChange={formik.handleChange("imagealt")}
                            helperText={
                                formik.touched.imagealt ? formik.errors.imagealt : null
                            }
                            error={formik.touched.imagealt ? formik.errors.imagealt : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Description:"}
                            value={formik.values.description}
                            onChange={formik.handleChange("description")}
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

export default ArticlesAdd;

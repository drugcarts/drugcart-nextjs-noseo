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
import InputArea from "@/components/admin/input/InputArea";
import TextInput from "@/components/admin/input/TextInput";
import TextEditor from "@/components/admin/input/TextEditor";
import ImageInput from "@/components/admin/input/ImageInput";
import SelectInput from "@/components/admin/input/SelectInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutBlogService, GetBlogIdService } from '@/services/blogService';
import { useSelector, useDispatch } from "react-redux";

function EditBlog() {
    const [imagePreview, setImagePreview] = useState(null);
    const { blog } = useSelector((state) => state.blogData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()
    const blog_type = ["Tranding", "Latest"];

    useEffect(() => {
        dispatch(GetBlogIdService(params?.id))
    }, [params?.id])

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            blogname: blog?.blogname || "",
            blogimg: blog?.blogimg || "",
            blogspoturl: blog?.blogspoturl || "",
            url: blog?.url || "",
            blogtype: blog?.blogtype || "",
            description: blog?.description || "",
            imagealt: blog?.imagealt || "",
            metatitle: blog?.metatitle || "",
            metadesc: blog?.metadesc || "",
            metakeyword: blog?.metakeyword || "",
        },
        validationSchema: yup.object({
            blogname: yup.string().required("Blog Name is required"),
            url: yup.string().required("URL is required"),
            blogimg: yup.string().required("Image is required"),
        }),
        onSubmit: async (data) => {
            const finalData = { ...data };

            if (data.blogimg instanceof File) {
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

                const base64 = await toBase64(data.blogimg);

                finalData.blogimg = {
                    name: data.blogimg.name,
                    type: data.blogimg.type,
                    data: base64,
                };
            }
            await dispatch(PutBlogService(blog?._id, finalData));
        }
    });

    useEffect(() => {
        formik.values.url = URLText(formik.values.blogname)
    }, [formik.values.blogname])

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("blogimg", file); // Set actual file
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
                    Add Blog
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Blog List
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
                            title={"Blog Name"}
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
                            title={"Blog Image"}
                            image={`https://assets3.drugcarts.com/blogs/${blog?.blogimg}`}
                            fallbackImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/blogs/${blog?.blogimg}`}
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
                        <TextInput
                            title={"Blogspot URL"}
                            value={formik.values.blogspoturl}
                            onChange={formik.handleChange("blogspoturl")}
                            helperText={
                                formik.touched.blogspoturl ? formik.errors.blogspoturl : null
                            }
                            error={formik.touched.blogspoturl ? formik.errors.blogspoturl : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <SelectInput
                            title={"Blog Type"}
                            value={formik.values.blogtype}
                            onChange={formik.handleChange("blogtype")}
                            data={blog_type}
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

export default EditBlog;

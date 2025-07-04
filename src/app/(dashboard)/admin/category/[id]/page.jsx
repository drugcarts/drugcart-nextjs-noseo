"use client";
import AddIcon from "@mui/icons-material/Add";
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
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryIdService, PutCategoryService } from '../../../../../services/categoryService'
import axios from "axios";

function EditCategory() {
    const [imagePreview, setImagePreview] = useState('')
    const { category } = useSelector((state) => state.categoryData)
    const dispatch = useDispatch()
    const router = useRouter();
    const params = useParams()

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    useEffect(() => {
        dispatch(GetCategoryIdService(params?.id))
    }, [params?.id])


    const handleCategoryImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("cat_img", file); // Set actual file
            setImagePreview(URL.createObjectURL(file)); // For preview
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            category_name: category?.category_name || "",
            cat_type: category?.cat_type || "",
            url: category?.url || "",
            cat_img: category?.cat_img || "",
            imagealt: category?.imagealt || "",
            metatitle: category?.metatitle || "",
            metadesc: category?.metadesc || "",
            metakeyboard: category?.metakeyboard || "",
        },
        validationSchema: yup.object({
            cat_type: yup.string().required("Category type is required"),
            category_name: yup.string().required("Category Name is required"),
            url: yup.string().required("URL is required"),
            // cat_img: yup.mixed().required("Category Image is required"),
        }),
        onSubmit: async (data) => {
            const finalData = { ...data };
            if (data.cat_img instanceof File) {
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

                const base64 = await toBase64(data.cat_img);

                finalData.cat_img = {
                    name: data.cat_img.name,
                    type: data.cat_img.type,
                    data: base64,
                };
            }
            await dispatch(PutCategoryService(category?._id, finalData));
        }
    });

    useEffect(() => {
        formik.values.url = URLText(formik.values.category_name)
    }, [formik.values.category_name])

    const catType = ["prescriptions", "non-prescriptions", "Others"];
    console.log(formik.values.cat_img);

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Category
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Category List
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
                        <SelectInput
                            title={"Category Type"}
                            value={formik.values.cat_type}
                            onChange={formik.handleChange("cat_type")}
                            helperText={
                                formik.touched.cat_type ? formik.errors.cat_type : null
                            }
                            error={
                                formik.touched.cat_type ? formik.errors.cat_type : null
                            }
                            data={catType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Category Name"}
                            value={formik.values.category_name}
                            onChange={formik.handleChange("category_name")}
                            helperText={
                                formik.touched.category_name ? formik.errors.category_name : null
                            }
                            error={
                                formik.touched.category_name ? formik.errors.category_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"URL"}
                            value={formik.values.url}
                            onChange={formik.handleChange("url")}
                            helperText={formik.touched.url ? formik.errors.url : null}
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Category Image"}
                            image={`https://assets1.drugcarts.com/category/thumb/${category?.cat_img}`}
                            fallbackImage={`https://drugcarts-nextjs.s3.ap-south-1.amazonaws.com/category/thumb/${category?.cat_img}`}
                            onChange={handleCategoryImage}
                            error={
                                formik.touched.cat_img
                                    ? formik.errors.cat_img
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Image Alt Tag"}
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

export default EditCategory;

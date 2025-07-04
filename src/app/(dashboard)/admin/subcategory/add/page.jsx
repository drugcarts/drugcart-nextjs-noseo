"use client";
import AddIcon from "@mui/icons-material/Add";
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
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PostSubCategoryService } from '../../../../../services/subCategoryService'
import { GetCategoryService } from "@/services/categoryService";
import SelectField from "@/components/admin/AutoComplete/SelectField";

function getFileNameFromUrl(url) {
    return url.split("/").pop();
}

function SubCategoryAdd() {
    const [imagePreview, setImagePreview] = useState(null);
    const { categories } = useSelector((state) => state.categoryData)
    const dispatch = useDispatch()
    const router = useRouter();

    useEffect(() => {
        dispatch(GetCategoryService())
    }, [])

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const categoryUrl = categories?.categories?.map((item) => {
        return {
            key: item?.url,
            value: item?.category_name
        }
    })

    const handleCategoryImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue("cat_img", {
                    name: file.name,
                    type: file.type,
                    base64: reader.result, // base64 encoded string
                });
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const formik = useFormik({
        initialValues: {
            cat_name: "",
            subcat_name: "",
            url: "",
            cat_img: "",
            imagealt: "",
            metatitle: "",
            metadesc: "",
            metakeyboard: "",
        },
        validationSchema: yup.object({
            cat_name: yup.string().required("Category type is required"),
            subcat_name: yup.string().required("Sub Category Name is required"),
            url: yup.string().required("URL is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PostSubCategoryService(data, resetForm));
            setImagePreview(null)
        },
    });

    useEffect(() => {
        formik.values.url = URLText(formik.values.subcat_name)
    }, [formik.values.subcat_name])

    console.log('test', formik.values.cat_name);
    
    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Sub Category
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/subcategory`)}
                >
                    Sub Category List
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
                        <SelectField
                            title="Category Name"
                            data={categoryUrl}
                            value={formik.values.cat_name}
                            onChange={(key) => formik.setFieldValue("cat_name", key)}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.cat_name ? formik.errors.cat_name : null
                            }
                            error={
                                formik.touched.cat_name ? formik.errors.cat_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Sub Category Name"}
                            value={formik.values.subcat_name}
                            onChange={formik.handleChange("subcat_name")}
                            helperText={
                                formik.touched.subcat_name ? formik.errors.subcat_name : null
                            }
                            error={
                                formik.touched.subcat_name ? formik.errors.subcat_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.subcat_name)}
                            onChange={formik.handleChange("url")}
                            helperText={formik.touched.url ? formik.errors.url : null}
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Category Image"}
                            image={imagePreview}
                            onChange={handleCategoryImage}

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

export default SubCategoryAdd;

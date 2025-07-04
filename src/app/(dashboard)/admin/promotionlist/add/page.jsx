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
import ImageInput from "@/components/admin/input/ImageInput";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostPromotionService } from '@/services/promotionService';
import { GetMainSliderListService } from '@/services/mainSliderService';
import { useSelector, useDispatch } from "react-redux";

function PromotionAdd() {
    const [imagePreview, setImagePreview] = useState(null);
    const { mainSliderList } = useSelector((state) => state.mainSliderData)
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetMainSliderListService())
    }, [])

    const uniqueArray = mainSliderList?.main_sliders?.filter((v, i, a) => a.findIndex(t => (t.title === v?.title)) === i)

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            url: "",
            image: "",
            alt: "",
            status: "Active",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            url: yup.string().required("Url is required"),
            image: yup.mixed().required("Image is required"),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PostPromotionService(data, resetForm));
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
        formik.values.url = URLText(formik.values.title)
    }, [formik.values.title])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Promotion
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/promotionlist`)}
                >
                    Promotion List
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
                        <SearchField
                            title="Title"
                            data={uniqueArray}
                            value={formik.values.title}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.title || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("title", newValue)}
                            helperText={
                                formik.touched.title ? formik.errors.title : null
                            }
                            error={
                                formik.touched.title ? formik.errors.title : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
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
                            title={"Alt"}
                            value={formik.values.alt}
                            onChange={formik.handleChange("alt")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Status"}
                            value={formik.values.status}
                            onChange={formik.handleChange("status")}
                            helperText={
                                formik.touched.status ? formik.errors.status : null
                            }
                            error={
                                formik.touched.status ? formik.errors.status : null
                            }
                            data={["Active", "Inactive"]}
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

export default PromotionAdd;

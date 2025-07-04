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
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { GetPromotionIdService, PutPromotionService } from '@/services/promotionService';
import { GetMainSliderListService } from '@/services/mainSliderService';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function EditPromotion() {
    const { promotion } = useSelector((state) => state.promotionData)
    const { mainSliderList } = useSelector((state) => state.mainSliderData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    const getFileNameFromUrl = (url) => {
        return url.split("/").pop();
    }

    useEffect(() => {
        dispatch(GetMainSliderListService())
        dispatch(GetPromotionIdService(params.id))
    }, [params.id])

    const uniqueArray = mainSliderList?.main_sliders?.filter((v, i, a) => a.findIndex(t => (t.title === v?.title)) === i)

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: promotion?.title || "",
            url: promotion?.url || "",
            image: promotion?.image || "",
            alt: promotion?.alt || "",
            status: promotion?.status || "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            url: yup.string().required("Url is required"),
            image: yup.string().required("Image is required"),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data) => {
            const finalData = { ...data };
            if (data.image instanceof File) {
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

                const base64 = await toBase64(data.image);

                finalData.image = {
                    name: data.image.name,
                    type: data.image.type,
                    data: base64,
                };
            }
            await dispatch(PutPromotionService(promotion?._id, finalData));
        }
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("image", file); // Set actual file
            setImagePreview(URL.createObjectURL(file)); // For preview
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
                    Edit Promotion
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
                            image={`https://assets3.drugcarts.com/admincolor/homepage/slider/${promotion?.image}`}
                            fallbackImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/admincolor/homepage/slider/${promotion?.image}`}
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

export default EditPromotion;

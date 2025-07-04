"use client";
import { useRouter, useParams } from "next/navigation";
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
import TextEditor from "@/components/admin/input/TextEditor";
import InputArea from "@/components/admin/input/InputArea";
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutLabService, GetLabIdService } from '@/services/labService';
import { useSelector, useDispatch } from "react-redux";

function EditAdminLab() {
    const [imagePreview, setImagePreview] = useState(null);
    const { lab } = useSelector((state) => state.labData)
    const router = useRouter();
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetLabIdService(params?.id))
    }, [params?.id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            labname: lab?.labname || "",
            url: lab?.url || "",
            logo: lab?.logo || "",
            image: lab?.image || "",
            address1: lab?.address1 || "",
            address2: lab?.address2 || "",
            description: lab?.description || "",
            metatitle: lab?.metatitle || "",
            metakeyword: lab?.metakeyword || "",
            metadesc: lab?.metadesc || "",
        },
        validationSchema: yup.object({
            labname: yup.string().required("Lab Name is required"),
            url: yup.string().required("Url is required"),
            image: yup.string().required("Image is required"),
        }),
        onSubmit: async (data) => {
            const finalData = { ...data };

            // If the image is a File (newly uploaded)
            if (data.image instanceof File) {
                const toBase64 = (file) =>
                    new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            const base64String = reader.result.split(',')[1]; // remove data:image/... prefix
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

            await dispatch(PutLabService(lab?._id, finalData));
        }
    });

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue("image", file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.labname)
    }, [formik.values.labname])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Edit Lab
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/labpack`)}
                >
                    Lab List
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
                            title={"Lab Name"}
                            value={formik.values.labname}
                            onChange={formik.handleChange("labname")}
                            helperText={
                                formik.touched.labname ? formik.errors.labname : null
                            }
                            error={formik.touched.labname ? formik.errors.labname : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Lab URL"}
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
                            image={`https://assets1.drugcarts.com/admincolor/lab/lablogo/${lab?.image}`}
                            fallbackImage={`https://drugcarts-nextjs.s3.ap-south-1.amazonaws.com/${lab?.image}`}
                            onChange={handleImage}
                            error={
                                formik.touched.image
                                    ? formik.errors.image
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Lab Address 1"}
                            value={formik.values.address1}
                            onChange={formik.handleChange("address1")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Lab Address 2"}
                            value={formik.values.address2}
                            onChange={formik.handleChange("address2")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <InputArea
                            title={"Lab Description"}
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

export default EditAdminLab;

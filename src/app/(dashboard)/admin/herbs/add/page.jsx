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
import TextEditor from "@/components/admin/input/TextEditor";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostHerbsService } from '@/services/herbsService';
import { useDispatch } from "react-redux";

function HerbsAdd() {
    const router = useRouter();
    const dispatch = useDispatch()

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            url: "",
            picture: "",
            alt: "",
            description: "",
            languages: "",
            origin: "",
            composition: "",
            types: "",
            infection: "",
            eydsorder: "",
            hedsorder: "",
            significance: "",
            dailylife: "",
            sideeffects: "",
            compounds: "",
            modernview: "",
            dosage: "",
            precautions: "",
            contraindicate: "",
            benefits: "",
            faq: "",
            reference: "",
            metatitle: "",
            metakeyboard: "",
            metadesc: "",
            reviewsy: "",
            writensy: "",
            medicinal: "",
            treatment: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            url: yup.string().required("Url is required"),
            // picture: yup.string().required("Picture is required")
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostHerbsService(data, resetForm))
        },
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("picture", URL.createObjectURL(file));
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
                    Add Herbs Name
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/herbs`)}
                >
                    Herbs List
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
                            title={"Title"}
                            value={formik.values.title}
                            onChange={formik.handleChange("title")}
                            helperText={
                                formik.touched.title ? formik.errors.title : null
                            }
                            error={formik.touched.title ? formik.errors.title : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL"}
                            value={URLText(formik.values.title)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Picture"}
                            image={formik.values.picture}
                            disabled={true}
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
                <Grid2 size={{ xs: 12, md: 3 }}>
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        fontSize={16}
                        marginBottom={3}
                    >
                        Author Details
                    </Typography>
                </Grid2>
                <Grid2 container marginBottom={2} spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Reviewd By :"}
                            value={formik.values.reviewsy}
                            onChange={formik.handleChange("reviewsy")}
                            helperText={
                                formik.touched.reviewsy ? formik.errors.reviewsy : null
                            }
                            error={formik.touched.reviewsy ? formik.errors.reviewsy : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Written By:"}
                            value={formik.values.writensy}
                            onChange={formik.handleChange("writensy")}
                            helperText={
                                formik.touched.writensy ? formik.errors.writensy : null
                            }
                            error={formik.touched.writensy ? formik.errors.writensy : null}
                        />
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"WHAT IS:"}
                        value={formik.values.dailylife}
                        onChange={formik.handleChange("dailylife")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"WHAT ARE THE OTHER NAMES IN VARIOUS LANGUAGES? :"}
                        value={formik.values.languages}
                        onChange={formik.handleChange("languages")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"ORIGIN AND SOURCE:"}
                        value={formik.values.origin}
                        onChange={formik.handleChange("origin")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"COMPOSITION:"}
                        value={formik.values.composition}
                        onChange={formik.handleChange("composition")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"CHEMICAL COMPOUNDS:"}
                        value={formik.values.compounds}
                        onChange={formik.handleChange("compounds")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"TRADITIONAL AND MODERN VIEW:"}
                        value={formik.values.modernview}
                        onChange={formik.handleChange("modernview")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"DOSAGE:"}
                        value={formik.values.dosage}
                        onChange={formik.handleChange("dosage")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"PRECAUTIONS:"}
                        value={formik.values.precautions}
                        onChange={formik.handleChange("precautions")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"CONTRAINDICATIONS:"}
                        value={formik.values.contraindicate}
                        onChange={formik.handleChange("contraindicate")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"BENEFITS:"}
                        value={formik.values.benefits}
                        onChange={formik.handleChange("benefits")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"TYPES:"}
                        value={formik.values.types}
                        onChange={formik.handleChange("types")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"SIGNIFICANCE:"}
                        value={formik.values.significance}
                        onChange={formik.handleChange("significance")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"HOW CAN YOU TAKE:"}
                        value={formik.values.eydsorder}
                        onChange={formik.handleChange("eydsorder")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"SIDE EFFECTS:"}
                        value={formik.values.sideeffects}
                        onChange={formik.handleChange("sideeffects")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"MEDICINAL USES OF:"}
                        value={formik.values.medicinal}
                        onChange={formik.handleChange("medicinal")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"MODERN VIEW OF TREATMENT:"}
                        value={formik.values.treatment}
                        onChange={formik.handleChange("treatment")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"FREQUENTLY ASKED QUESTIONS:"}
                        value={formik.values.faq}
                        onChange={formik.handleChange("faq")}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <TextEditor
                        title={"REFERENCE:"}
                        value={formik.values.reference}
                        onChange={formik.handleChange("reference")}
                    />
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

export default HerbsAdd;

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
import SearchField from "@/components/admin/AutoComplete/SearchField";
import InputArea from "@/components/admin/input/InputArea";
import SelectInput from "@/components/admin/input/SelectInput";
import ImageInput from "@/components/admin/input/ImageInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostDoctorService } from '@/services/doctorService';
import { GetSpecialListService } from '@/services/specialityService';
import { useSelector, useDispatch } from "react-redux";

function DoctorAdd() {
    const { specialList } = useSelector((state) => state.specialityData)
    const router = useRouter();
    const dispatch = useDispatch()
    const genderType = ["Male", "Female", "Transgender"];

    useEffect(() => {
        dispatch(GetSpecialListService())
    }, [])

    const formik = useFormik({
        initialValues: {
            specialist_name: "",
            specialist_url: "",
            doctor_name: "",
            url: "",
            picture: "",
            imagealt: "",
            doctor_no: "",
            gender: "",
            email: "",
            phone: "",
            language: "",
            experience: "",
            qualification: "",
            consult_fees: "",
            pwh: "",
            cwh_name: "",
            ug_degree: "",
            ug_city: "",
            ug_certificate: "",
            pg_degree: "",
            pg_city: "",
            pg_certificate: "",
            country: "",
            state: "",
            city: "",
            address: "",
        },
        validationSchema: yup.object({
            specialist_name: yup.string().required("Specialist name is required"),
            picture: yup.string().required("picture is required"),
            doctor_name: yup.string().required("doctor is required"),
            url: yup.string().required("url is required"),
            doctor_no: yup.string().required("Doctor Registration is required"),
            language: yup.string().required("Language is required"),
            gender: yup.string().required("Gender is required"),
            email: yup.string().email().required("Email is required"),
            experience: yup.string().required("Experience is required"),
            qualification: yup.string().required("Qualification is required"),
            consult_fees: yup.string().required("Consult Fees is required"),
            // pwh: yup.string().required("Past Working Hospital is required"),
            // cwh_name: yup.string().required("Hospital Name is required"),
            // ug_degree: yup.string().required("UG Degree is required"),
            // ug_city: yup.string().required("UG City is required"),
            // ug_certificate: yup.string().required("UG Certificate is required"),
            // pg_degree: yup.string().required("PG Degree is required"),
            // pg_city: yup.string().required("PG City is required"),
            // pg_certificate: yup.string().required("PG Certificate is required"),
            // country: yup.string().required("Country is required"),
            // state: yup.string().required("State is required"),
            // city: yup.string().required("City is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostDoctorService(data, resetForm))
        },
    });

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const handlePicture = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("picture", URL.createObjectURL(file));
    };

    const handleUGCertificate = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("ug_certificate", URL.createObjectURL(file));
    };

    const handlePGCertificate = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("pg_certificate", URL.createObjectURL(file));
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.doctor_name)
        formik.values.specialist_url = URLText(formik.values.specialist_name)
    }, [formik.values.doctor_name, formik.values.specialist_name])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Doctor
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/doctorlist`)}
                >
                    Doctor List
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
                            title="Specialist Name"
                            data={specialList?.specialty_lists}
                            value={formik.values.specialist_name}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.specialty_name || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("specialist_name", newValue)}
                            helperText={
                                formik.touched.specialist_name ? formik.errors.specialist_name : null
                            }
                            error={
                                formik.touched.specialist_name ? formik.errors.specialist_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Doctor Name"}
                            value={formik.values.doctor_name}
                            onChange={formik.handleChange("doctor_name")}
                            helperText={
                                formik.touched.doctor_name ? formik.errors.doctor_name : null
                            }
                            error={formik.touched.doctor_name ? formik.errors.doctor_name : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"URL (EX:dr-b-vinoth)"}
                            value={URLText(formik.values.doctor_name)}
                            onChange={formik.handleChange("url")}
                            helperText={formik.touched.url ? formik.errors.url : null}
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Picture"}
                            image={formik.values.picture}
                            onChange={handlePicture}
                            error={
                                formik.touched.picture
                                    ? formik.errors.picture
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
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Doctor Registration No"}
                            value={formik.values.doctor_no}
                            onChange={formik.handleChange("doctor_no")}
                            helperText={
                                formik.touched.doctor_no ? formik.errors.doctor_no : null
                            }
                            error={formik.touched.doctor_no ? formik.errors.doctor_no : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Gender"}
                            value={formik.values.gender}
                            onChange={formik.handleChange("gender")}
                            helperText={
                                formik.touched.gender ? formik.errors.gender : null
                            }
                            error={
                                formik.touched.gender ? formik.errors.gender : null
                            }
                            data={genderType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Email ID"}
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            helperText={
                                formik.touched.email ? formik.errors.email : null
                            }
                            error={formik.touched.email ? formik.errors.email : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Phone"}
                            value={formik.values.phone}
                            onChange={formik.handleChange("phone")}
                            helperText={
                                formik.touched.phone ? formik.errors.phone : null
                            }
                            error={formik.touched.phone ? formik.errors.phone : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Language Known"}
                            value={formik.values.language}
                            onChange={formik.handleChange("language")}
                            helperText={
                                formik.touched.language ? formik.errors.language : null
                            }
                            error={formik.touched.language ? formik.errors.language : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Experience"}
                            value={formik.values.experience}
                            onChange={formik.handleChange("experience")}
                            helperText={
                                formik.touched.experience ? formik.errors.experience : null
                            }
                            error={formik.touched.experience ? formik.errors.experience : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Qualification"}
                            value={formik.values.qualification}
                            onChange={formik.handleChange("qualification")}
                            helperText={
                                formik.touched.qualification ? formik.errors.qualification : null
                            }
                            error={formik.touched.qualification ? formik.errors.qualification : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Consult Fees"}
                            value={formik.values.consult_fees}
                            onChange={formik.handleChange("consult_fees")}
                            helperText={
                                formik.touched.consult_fees ? formik.errors.consult_fees : null
                            }
                            error={formik.touched.consult_fees ? formik.errors.consult_fees : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Past Working Hospital"}
                            value={formik.values.pwh}
                            onChange={formik.handleChange("pwh")}
                            helperText={
                                formik.touched.pwh ? formik.errors.pwh : null
                            }
                            error={formik.touched.pwh ? formik.errors.pwh : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Current Working Hospital Name"}
                            value={formik.values.cwh_name}
                            onChange={formik.handleChange("cwh_name")}
                            helperText={
                                formik.touched.cwh_name ? formik.errors.cwh_name : null
                            }
                            error={formik.touched.cwh_name ? formik.errors.cwh_name : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"UG Degree"}
                            value={formik.values.ug_degree}
                            onChange={formik.handleChange("ug_degree")}
                            helperText={
                                formik.touched.ug_degree ? formik.errors.ug_degree : null
                            }
                            error={formik.touched.ug_degree ? formik.errors.ug_degree : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"UG College Name/City"}
                            value={formik.values.ug_city}
                            onChange={formik.handleChange("ug_city")}
                            helperText={
                                formik.touched.ug_city ? formik.errors.ug_city : null
                            }
                            error={formik.touched.ug_city ? formik.errors.ug_city : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"UG Certificates"}
                            image={formik.values.ug_certificate}
                            onChange={handleUGCertificate}
                            error={
                                formik.touched.ug_certificate
                                    ? formik.errors.ug_certificate
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"PG Degree"}
                            value={formik.values.pg_degree}
                            onChange={formik.handleChange("pg_degree")}
                            helperText={
                                formik.touched.pg_degree ? formik.errors.pg_degree : null
                            }
                            error={formik.touched.pg_degree ? formik.errors.pg_degree : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"PG College Name/City"}
                            value={formik.values.pg_city}
                            onChange={formik.handleChange("pg_city")}
                            helperText={
                                formik.touched.pg_city ? formik.errors.pg_city : null
                            }
                            error={formik.touched.pg_city ? formik.errors.pg_city : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"PG Certificates"}
                            image={formik.values.pg_certificate}
                            onChange={handlePGCertificate}
                            error={
                                formik.touched.pg_certificate
                                    ? formik.errors.pg_certificate
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Country"}
                            value={formik.values.country}
                            onChange={formik.handleChange("country")}
                            helperText={
                                formik.touched.country ? formik.errors.country : null
                            }
                            error={formik.touched.country ? formik.errors.country : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"State"}
                            value={formik.values.state}
                            onChange={formik.handleChange("state")}
                            helperText={
                                formik.touched.state ? formik.errors.state : null
                            }
                            error={formik.touched.state ? formik.errors.state : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"City"}
                            value={formik.values.city}
                            onChange={formik.handleChange("city")}
                            helperText={
                                formik.touched.city ? formik.errors.city : null
                            }
                            error={formik.touched.city ? formik.errors.city : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <InputArea
                            title={"Address"}
                            value={formik.values.address}
                            onChange={formik.handleChange("address")}
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

export default DoctorAdd;

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
import InputArea from "@/components/admin/input/InputArea";
import ImageInput from "@/components/admin/input/ImageInput";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostTestPackageService } from '@/services/testPackageService';
import { GetLabPackagesService } from '@/services/labPackageService';
import { useSelector, useDispatch } from "react-redux";
import { GetLabsService } from "@/services/labService";
import SelectInput from "@/components/admin/input/SelectInput";

function AdminLabTestAdd() {
    const [imagePreview, setImagePreview] = useState(null);
    const { labPackageList } = useSelector((state) => state.labPackageData)
    const { labList } = useSelector((state) => state.labData)
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetLabPackagesService())
        dispatch(GetLabsService())
    }, [])

    const statusType = ["Active", "InActive"]

    const formik = useFormik({
        initialValues: {
            name: "",
            packageName: "",
            packageurl: "",
            testname: "",
            url: "",
            nooftest: "",
            logo: "",
            image: "",
            price: "",
            saleprice: "",
            discount: "",
            type: "",
            required: "",
            offervalid: "",
            labdescription: "",
            description: "",
            certificates: "",
            testincludes: "",
            deliverytiming: "",
            procedure: "",
            note: "",
            status: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Lab Name is required"),
            url: yup.string().required("Url is required"),
            image: yup.mixed().required("Image is required"),
            packageName: yup.string().required("Package Name is required"),
            testname: yup.string().required("Test Name is required"),
            status: yup.string().required("Status is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostTestPackageService(data, resetForm))
            setImagePreview(null)
        },
    });

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };

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

    const handleLogo = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("logo", URL.createObjectURL(file));
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.testname)
        formik.values.packageurl = URLText(formik.values.packageName)
    }, [formik.values.testname, formik.values.packageName])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Test Package
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/test-package`)}
                >
                    Test Package List
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
                        <SearchField
                            title="Test Package"
                            data={labPackageList?.lab_packages}
                            value={formik.values.packageName}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.packageName || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("packageName", newValue)}
                            helperText={
                                formik.touched.packageName ? formik.errors.packageName : null
                            }
                            error={
                                formik.touched.packageName ? formik.errors.packageName : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <SearchField
                            title="Lab Name"
                            data={labList?.labs}
                            value={formik.values.name}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.labname || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("name", newValue)}
                            helperText={
                                formik.touched.name ? formik.errors.name : null
                            }
                            error={
                                formik.touched.name ? formik.errors.name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Test Name: (Eg. Aarogyam 1.1)"}
                            value={formik.values.testname}
                            onChange={formik.handleChange("testname")}
                            helperText={
                                formik.touched.testname ? formik.errors.testname : null
                            }
                            error={formik.touched.testname ? formik.errors.testname : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Test URL: (Eg. aarogyam-1-1)"}
                            value={URLText(formik.values.url)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"No.of Test (Eg : 10)"}
                            type="number"
                            value={formik.values.nooftest}
                            onChange={formik.handleChange("nooftest")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Price (Eg: Rs.650.00)"}
                            type="number"
                            value={formik.values.price}
                            onChange={formik.handleChange("price")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Discount (Eg: 20)"}
                            type="number"
                            value={formik.values.discount}
                            onChange={formik.handleChange("discount")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Test Image"}
                            image={imagePreview}
                            onChange={handleImage}
                            error={
                                formik.touched.image
                                    ? formik.errors.image
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Lab Logo"}
                            image={formik.values.logo}
                            onChange={handleLogo}
                            error={
                                formik.touched.logo
                                    ? formik.errors.logo
                                    : null
                            }
                            disabled={true}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Certificates of lab (Eg: ISO, NABL)"}
                            value={formik.values.certificates}
                            onChange={formik.handleChange("certificates")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Report Delivery timing ( Eg : 12-48 hours)"}
                            value={formik.values.deliverytiming}
                            onChange={formik.handleChange("deliverytiming")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
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
                            data={statusType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput title={"Sample Type ( Eg : Blood or Urine)"}
                            type="text"
                            value={formik.values.type}
                            onChange={formik.handleChange("type")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Lab Description ( Eg: Tyrocare Lab description)"}
                            value={formik.values.labdescription}
                            onChange={formik.handleChange("labdescription")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Test Description (Description about Test : Eg Aarogyam 1.1 Description)"}
                            value={formik.values.description}
                            onChange={formik.handleChange("description")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Test Requirments : (Eg: Blood ,Urine etc)"}
                            value={formik.values.required}
                            onChange={formik.handleChange("required")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"List of Test includes ( Test package list ex : Liver test ,Hormone test Etc)"}
                            value={formik.values.testincludes}
                            onChange={formik.handleChange("testincludes")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Booking procedure"}
                            value={formik.values.procedure}
                            onChange={formik.handleChange("procedure")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <InputArea
                            title={"Note"}
                            value={formik.values.note}
                            onChange={formik.handleChange("note")}
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

export default AdminLabTestAdd;

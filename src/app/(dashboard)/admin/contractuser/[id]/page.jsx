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
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PutContractUserService, GetContractUserIdService } from '../../../../../services/contractUserService'
import { GetGeneticService } from "@/services/genericService";
import { GetAllUserService } from "@/services/admin/userService";
import SelectField from "@/components/admin/AutoComplete/SelectField";

function EditContractUser() {
    const { adminUser } = useSelector((state) => state.adminUserData)
    const { genericList } = useSelector((state) => state.genericData)
    const { contractUser } = useSelector((state) => state.contractUserData)
    const dispatch = useDispatch()
    const router = useRouter();
    const params = useParams()

    useEffect(() => {
        dispatch(GetGeneticService())
        dispatch(GetAllUserService())
        dispatch(GetContractUserIdService(params.id))
    }, [params.id])

    const uniqueGenericArray = genericList?.generics?.filter((v, i, a) => a.findIndex(t => (t.url === v?.url)) === i)

    const AdminUserUrl = adminUser?.users?.map((item) => {
        return {
            key: item?.username,
            value: item?.username
        }
    })

    const GenericUrl = uniqueGenericArray?.map((item) => {
        return {
            key: item?.url,
            value: item?.generices
        }
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            amount: contractUser?.amount ||  "",
            username: contractUser?.username ||  "",
            generices: contractUser?.generices ||  "",
        },
        validationSchema: yup.object({
            username: yup.string().required("User Name is required"),
            generices: yup.string().required("Generic Name is required"),
            amount: yup.string().required("Amount is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PutContractUserService(contractUser?._id,data));
        },
    });

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Contract User List
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/contractuser`)}
                >
                    Contract User List
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
                            title="User Name"
                            data={AdminUserUrl}
                            value={formik.values.username}
                            onChange={(key) => formik.setFieldValue("username", key)}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.username ? formik.errors.username : null
                            }
                            error={
                                formik.touched.username ? formik.errors.username : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectField
                            title="Generic Name"
                            data={GenericUrl}
                            value={formik.values.generices}
                            onChange={(key) => formik.setFieldValue("generices", key)}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.generices ? formik.errors.generices : null
                            }
                            error={
                                formik.touched.generices ? formik.errors.generices : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput title={"Amount"}
                            value={formik.values.amount}
                            onChange={formik.handleChange("amount")}
                            type="number"
                            helperText={
                                formik.touched.amount ? formik.errors.amount : null
                            }
                            error={
                                formik.touched.amount ? formik.errors.amount : null
                            }
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

export default EditContractUser;

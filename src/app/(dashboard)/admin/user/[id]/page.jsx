"use client"
import { useParams, useRouter } from 'next/navigation'
import { Box, Button, Grid2, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectInput from '@/components/admin/input/SelectInput';
import TextInput from '@/components/admin/input/TextInput';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { CreateUserService, GetUserService, PutUserService } from '../../../../../services/admin/userService'

function EditUser() {
    const { userId } = useSelector((state) => state.adminUserData)
    const dispatch = useDispatch()
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        dispatch(GetUserService(params?.id))
    },[params?.id])

    console.log(userId);
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: userId?.username || "",
            email: userId?.email || "",
            password: userId?.password || "",
            role: userId?.role || "",
            salary: userId?.salary || "",
        },
        validationSchema: yup.object({
            username: yup.string().required("Username is required"),
            email: yup.string().email().required("Email is required"),
            password: yup.string().required("Password is required").min(6, "6 characters required"),
            role: yup.string().required("User Type is required"),
            // salary: yup.string().required("Salary is required"),
        }),
        onSubmit: async (data) => {
            await dispatch(PutUserService(userId?._id, data))
        },
    });

    const UType = ["contract", "salary"]

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Edit User</Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    User List
                </Button>
            </Box>
            <Paper sx={{ borderColor: "#fa4b31", borderTopWidth: 3, borderBottomWidth: 2, p: 2, mt: 4 }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"User Name"}
                            value={formik.values.username}
                            onChange={formik.handleChange("username")}
                            helperText={formik.touched.username ? formik.errors.username : null}
                            error={formik.touched.username ? formik.errors.username : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            type="email"
                            title={"Email"}
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            helperText={formik.touched.username ? formik.errors.email : null}
                            error={formik.touched.email ? formik.errors.email : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Password"}
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            helperText={formik.touched.username ? formik.errors.password : null}
                            error={formik.touched.password ? formik.errors.password : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"User Type"}
                            value={formik.values.role}
                            onChange={formik.handleChange("role")}
                            helperText={formik.touched.username ? formik.errors.role : null}
                            error={formik.touched.role ? formik.errors.role : null}
                            data={UType}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            type="text"
                            title={"Salary"}
                            value={formik.values.salary}
                            onChange={formik.handleChange("salary")}
                            helperText={formik.touched.username ? formik.errors.salary : null}
                            error={formik.touched.salary ? formik.errors.salary : null}
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
    )
}

export default EditUser
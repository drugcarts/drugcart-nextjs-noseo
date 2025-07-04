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
import { useFormik } from "formik";
import * as yup from "yup";
import { PostPackageService } from "@/services/packageService";
import { useDispatch } from "react-redux";

function PackageAdd() {
  const router = useRouter();
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      packagename: "",
    },
    validationSchema: yup.object({
        packagename: yup.string().required("Package Name is required"),
    }),
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      await dispatch(PostPackageService(data, resetForm))
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
          Add Package
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/packagelist`)}
        >
          Package List
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
              title={"Package Name"}
              value={formik.values.packagename}
              onChange={formik.handleChange("packagename")}
              helperText={
                formik.touched.packagename ? formik.errors.packagename : null
              }
              error={formik.touched.packagename ? formik.errors.packagename : null}
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

export default PackageAdd;

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
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostStorageService } from "@/services/storageService";
import { useDispatch } from "react-redux";

function StorageAdd() {
  const router = useRouter();
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      storagename: "",
    },
    validationSchema: yup.object({
        storagename: yup.string().required("Storage Name is required"),
    }),
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      await dispatch(PostStorageService(data, resetForm))
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
          Add Storage
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/storagelist`)}
        >
          Storage List
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
              title={"Storage Name"}
              value={formik.values.storagename}
              onChange={formik.handleChange("storagename")}
              helperText={
                formik.touched.storagename ? formik.errors.storagename : null
              }
              error={formik.touched.storagename ? formik.errors.storagename : null}
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

export default StorageAdd;

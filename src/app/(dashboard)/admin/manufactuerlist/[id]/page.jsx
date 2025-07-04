"use client";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TextInput from "@/components/admin/input/TextInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { PutManufactuerService, GetManufactuerIdService } from "../../../../../services/manufactuerService"
import { useDispatch, useSelector } from "react-redux";

function EditManufactuer() {
  const { manufactuer } = useSelector((state) => state.manufactuerData)
  const dispatch = useDispatch()
  const router = useRouter();
  const params = useParams()

  const URLText = (text) => {
    return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
  };

  useEffect(() => {
    dispatch(GetManufactuerIdService(params?.id))
  }, [params?.id])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      manufactuername: manufactuer?.manufactuername || "",
      manufactuerurl: manufactuer?.manufactuerurl || "",
      manufactueraddress: manufactuer?.manufactueraddress || "",
      metatitle: manufactuer?.metatitle || "",
      metadesc: manufactuer?.metadesc || "",
      metakeyword: manufactuer?.metakeyword || "",
    },
    validationSchema: yup.object({
      manufactuername: yup.string().required("Manufactuer Name is required"),
      manufactuerurl: yup.string().required("Manufactuer URL is required"),
      manufactueraddress: yup
        .string()
        .required("Manufactuer Address is required"),
    }),
    onSubmit: async (data) => {
      await dispatch(PutManufactuerService(manufactuer?._id, data))
    },
  });

  useEffect(() => {
    formik.values.manufactuerurl = URLText(formik.values.manufactuername)
  }, [formik.values.manufactuername])

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Edit Manufactuer
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.back()}
        >
          Manufactuer List
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
              title={"Manufactuer Name"}
              value={formik.values.manufactuername}
              onChange={formik.handleChange("manufactuername")}
              helperText={
                formik.touched.manufactuername
                  ? formik.errors.manufactuername
                  : null
              }
              error={
                formik.touched.manufactuername
                  ? formik.errors.manufactuername
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Manufactuer URL (Ex: natco-pharma)"}
              value={formik.values.manufactuerurl}
              onChange={formik.handleChange("manufactuerurl")}
              helperText={
                formik.touched.manufactuerurl
                  ? formik.errors.manufactuerurl
                  : null
              }
              error={
                formik.touched.manufactuerurl
                  ? formik.errors.manufactuerurl
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Manufactuer Address/Marketer Address"}
              value={formik.values.manufactueraddress}
              onChange={formik.handleChange("manufactueraddress")}
              helperText={
                formik.touched.manufactueraddress
                  ? formik.errors.manufactueraddress
                  : null
              }
              error={
                formik.touched.manufactueraddress
                  ? formik.errors.manufactueraddress
                  : null
              }
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
              helperText={
                formik.touched.metatitle
                  ? formik.errors.metatitle
                  : null
              }
              error={
                formik.touched.metatitle
                  ? formik.errors.metatitle
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Meta Keyword"}
              value={formik.values.metakeyword}
              onChange={formik.handleChange("metakeyword")}
              helperText={
                formik.touched.metakeyword
                  ? formik.errors.metakeyword
                  : null
              }
              error={
                formik.touched.metakeyword
                  ? formik.errors.metakeyword
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <InputArea
              title={"Meta Description"}
              value={formik.values.metadesc}
              onChange={formik.handleChange("metadesc")}
              helperText={
                formik.touched.metadesc
                  ? formik.errors.metadesc
                  : null
              }
              error={
                formik.touched.metadesc
                  ? formik.errors.metadesc
                  : null
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

export default EditManufactuer;

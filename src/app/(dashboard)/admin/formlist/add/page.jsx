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
import { PostFormService } from "@/services/formService";
import { useDispatch } from "react-redux";

function FormAdd() {
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch()

  const URLText = (text) => {
    return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
  };

  const formik = useFormik({
    initialValues: {
      formname: "",
      formurl: "",
      picture: "",
      alt: "",
      metatitle: "",
      metakeyword: "",
      metadesc: "",
    },
    validationSchema: yup.object({
      formname: yup.string().required("Form Name is required"),
      formurl: yup.string().required("Form URL is required"),
      // picture: yup.mixed().required("Picture is required"),
    }),
    onSubmit: async (data, { resetForm }) => {
      await dispatch(PostFormService(data, resetForm));
      setImagePreview(null)
    },
  });

  useEffect(() => {
    formik.values.formurl = URLText(formik.values.formname)
  }, [formik.values.formname])

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("picture", {
          name: file.name,
          type: file.type,
          base64: reader.result, // base64 encoded string
        });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Form
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/formlist`)}
        >
          Form List
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
              title={"Form Name (Ex: Gel or caps)"}
              value={formik.values.formname}
              onChange={formik.handleChange("formname")}
              helperText={
                formik.touched.formname ? formik.errors.formname : null
              }
              error={formik.touched.formname ? formik.errors.formname : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={"URL Name (Ex: gel or caps)"}
              value={URLText(formik.values.formurl)}
              onChange={formik.handleChange("formurl")}
              helperText={formik.touched.formurl ? formik.errors.formurl : null}
              error={formik.touched.formurl ? formik.errors.formurl : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ImageInput
              title={"Image"}
              image={imagePreview}
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
              value={formik.values.metakeyword}
              onChange={formik.handleChange("metakeyword")}
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

export default FormAdd;

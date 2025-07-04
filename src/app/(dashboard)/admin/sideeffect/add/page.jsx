"use client";
import { useRouter } from "next/navigation";
import { Box, Button, Grid2, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TextEditor from "@/components/admin/input/TextEditor";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PostSideeffectService } from "@/services/sideeffectService";
import { GetGeneticService } from "@/services/genericService";

function SideeffectAdd() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { genericList } = useSelector((state) => state.genericData);

  useEffect(() => {
    dispatch(GetGeneticService());
  }, []);

  const URLText = (text) => {
    const splitText = text.split(" ");
    const joinSpace = splitText.join("-").toLowerCase();
    return joinSpace;
  };

  useEffect(() => {
    formik.values.generic_name = URLText(formik.values.generic_name);
  }, [formik.values.generic_name]);
  
  const formik = useFormik({
    initialValues: {
      generic_name: "",
      common: "",
      rare: "",
      severe: "",
    },
    validationSchema: yup.object({
      generic_name: yup.string().required("Generic Name is required"),
    }),
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      await dispatch(PostSideeffectService(data, resetForm));
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
          Add Sideeffect
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/sideeffect`)}
        >
          Sideeffect List
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
          <Grid2 size={{ xs: 12, md: 8 }}>
            <SearchField
              title="Generic Name Search"
              data={genericList?.generics}
              value={formik.values.generic_name}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.generices || ""
              }
              onInputChange={(event, newValue) =>
                formik.setFieldValue("generic_name", newValue)
              }
              helperText={
                formik.touched.generic_name ? formik.errors.generic_name : null
              }
              error={
                formik.touched.generic_name ? formik.errors.generic_name : null
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
            <TextEditor
              title={"Common Side Effect :"}
              value={formik.values.common}
              onChange={formik.handleChange("common")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextEditor
              title={"Rare Side Effect :"}
              value={formik.values.rare}
              onChange={formik.handleChange("rare")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextEditor
              title={"Severe Side Effect :"}
              value={formik.values.severe}
              onChange={formik.handleChange("severe")}
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

export default SideeffectAdd;

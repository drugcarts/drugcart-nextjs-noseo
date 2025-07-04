"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import dynamic from "next/dynamic";
// import Quill from "quill";
// import QuillImageResize from "quill-image-resize-module-react";
import "react-quill-new/dist/quill.snow.css";
import TextEditor from "@/components/admin/input/TextEditor";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useSelector, useDispatch } from "react-redux";
import { GetCategoryService } from "@/services/categoryService";
import { GetSubCategoryService } from "@/services/subCategoryService";
import { GetGeneticService, PostGeneticService } from "@/services/genericService";
import SelectField from "@/components/admin/AutoComplete/SelectField";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Quill.register("modules/resize", QuillImageResize);

function GenericeAdd() {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categoryData)
  const { subCategories } = useSelector((state) => state.subCategoryData)
  const dispatch = useDispatch()

  const URLText = (text) => {
    return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
  };

  const categoryUrl = categories?.categories?.map((item) => {
    return {
      key: item?.url,
      value: item?.category_name
    }
  })

  const formik = useFormik({
    initialValues: {
      catnames: "",
      subname: "",
      url: "",
      generices: "",
      gen_img: "",
      imagealt: "",
      mechanism: "",
      description: "",
      usesofmeds: "",
      useofbenefits: "",
      indicat: "",
      medicinework: "",
      contraindications: "",
      sideeffects: "",
      faqs: "",
      pregnancy: "",
      breastfeeding: "",
      kidneyproblem: "",
      liverdisease: "",
      asthma: "",
      takemedicine: "",
      adult: "",
      childrenmed: "",
      elderlymed: "",
      alcohol: "",
      heartdisease: "",
      driving: "",
      warnings: "",
      talkdoctor: "",
      instructions: "",
      druginteraction: "",
      drugfood: "",
      drugdiease: "",
      fooditems: "",
      overdose: "",
      misseddose: "",
      disposal: "",
      fasttag: "",
      refer: "",
      metatitle: "",
      metakeyword: "",
      metadesc: "",
    },
    validationSchema: yup.object({
      catnames: yup.string().required("Category is required"),
      subname: yup.string().required("Sub Category is required"),
      url: yup.string().required("URL is required"),
      generices: yup.string().required("Generices is required"),
      // gen_img: yup.string().required("URL is required")
    }),
    onSubmit: async (data, { resetForm }) => {
      // await console.log(data);
      await dispatch(PostGeneticService(data, resetForm))
    },
  });

  const handleCategoryImage = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("gen_img", URL.createObjectURL(file));
  };

  useEffect(() => {
    formik.values.url = URLText(formik.values.generices)
  }, [formik.values.generices])

  useEffect(() => {
    dispatch(GetCategoryService())
    dispatch(GetSubCategoryService())
  }, [formik.values.catnames])

  const filterSubCategory = subCategories?.subcategoryItems?.filter((item) => item?.cat_name === formik.values.catnames)?.map((data) => {
    return {
      key: data?.url,
      value: data?.subcat_name
    }
  })

  // useEffect(() => {
  //   if (typeof window !== "undefined" && typeof document !== "undefined") {
  //     // This ensures the code runs only on the client side
  //     window.addEventListener("load", () => {
  //       // Quill.register("modules/resize", QuillImageResize);
  //     });
  //   }
  // }, []);
  const catType = ["prescriptions", "non-prescriptions", "Others"];
  const subcatType = ["test", "test1"];
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
    // resize: {
    //   modules: ["Resize"],
    // },
  };

  console.log(formik.values.catnames);
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Generic Name
        </Typography>
        {/* <div
          dangerouslySetInnerHTML={{ __html: formik.values.mechanism }}
        /> */}
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/genericlist`)}
        >
          Generic List
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
              title="Category Name"
              data={categoryUrl}
              value={formik.values.catnames}
              onChange={(key) => formik.setFieldValue("catnames", key)}
              getOptionLabel={(option) => option?.value}
              helperText={
                formik.touched.catnames ? formik.errors.catnames : null
              }
              error={
                formik.touched.catnames ? formik.errors.catnames : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectField
              title="Sub Category Name"
              data={filterSubCategory}
              value={formik.values.subname}
              onChange={(key) => formik.setFieldValue("subname", key)}
              getOptionLabel={(option) => option?.value}
              helperText={
                formik.touched.subname ? formik.errors.subname : null
              }
              error={
                formik.touched.subname ? formik.errors.subname : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Generic Name"}
              value={formik.values.generices}
              onChange={formik.handleChange("generices")}
            // helperText={formik.touched.generices ? formik.errors.generices : null}
            // error={formik.touched.generices ? formik.errors.generices : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"URL"}
              value={URLText(formik.values.generices)}
              onChange={formik.handleChange("url")}
              helperText={formik.touched.url ? formik.errors.url : null}
              error={formik.touched.url ? formik.errors.url : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput
              title={"Generic Image"}
              image={formik.values.gen_img}
              onChange={handleCategoryImage}
              error={
                formik.touched.gen_img
                  ? formik.errors.gen_img
                  : null
              }
              disabled={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Image Alt Tag"}
              value={formik.values.imagealt}
              onChange={formik.handleChange("imagealt")}
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            {/* <EditorToolbar /> */}
            <TextEditor
              title={"Medical Description of Medicine:"}
              value={formik.values.description}
              onChange={formik.handleChange("description")}
            // value={value} 

            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Uses of Medicine:"}
              value={formik.values.usesofmeds}
              onChange={formik.handleChange("usesofmeds")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Uses and Benefits of Medicine:"}
              value={formik.values.useofbenefits}
              onChange={formik.handleChange("useofbenefits")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Medicine Prescribed for Follow Indication:"}
              value={formik.values.indicat}
              onChange={formik.handleChange("indicat")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Mechanism of action of Medicine:"}
              value={formik.values.mechanism}
              onChange={formik.handleChange("mechanism")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"How Medicine works:"}
              value={formik.values.medicinework}
              onChange={formik.handleChange("medicinework")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Contraindications of Medicine:"}
              value={formik.values.contraindications}
              onChange={formik.handleChange("contraindications")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Side effects of Medicine:"}
              value={formik.values.sideeffects}
              onChange={formik.handleChange("sideeffects")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"FAQs for Medicine:"}
              value={formik.values.faqs}
              onChange={formik.handleChange("faqs")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Precautions and general warning of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Pregnancy:"}
              value={formik.values.pregnancy}
              onChange={formik.handleChange("pregnancy")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Breast Feeding:"}
              value={formik.values.breastfeeding}
              onChange={formik.handleChange("breastfeeding")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Kidney Problem:"}
              value={formik.values.kidneyproblem}
              onChange={formik.handleChange("kidneyproblem")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Liver Disease:"}
              value={formik.values.liverdisease}
              onChange={formik.handleChange("liverdisease")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Heart Disease:"}
              value={formik.values.heartdisease}
              onChange={formik.handleChange("heartdisease")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Asthma:"}
              value={formik.values.asthma}
              onChange={formik.handleChange("asthma")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"How to Take Medicine:"}
              value={formik.values.takemedicine}
              onChange={formik.handleChange("takemedicine")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Use of Medicine in Adult:"}
              value={formik.values.adult}
              onChange={formik.handleChange("adult")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Use of Medicine in children:"}
              value={formik.values.childrenmed}
              onChange={formik.handleChange("childrenmed")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Use of Medicine in Elderly Patients:"}
              value={formik.values.elderlymed}
              onChange={formik.handleChange("elderlymed")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Alcohol:"}
              value={formik.values.alcohol}
              onChange={formik.handleChange("alcohol")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Driving or operating machinery:"}
              value={formik.values.driving}
              onChange={formik.handleChange("driving")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Other general warnings:"}
              value={formik.values.warnings}
              onChange={formik.handleChange("warnings")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Talk to your doctor if:"}
              value={formik.values.talkdoctor}
              onChange={formik.handleChange("talkdoctor")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"General instructions:"}
              value={formik.values.instructions}
              onChange={formik.handleChange("instructions")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Drug Interaction of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Drug-Drug interaction of Medicine:"}
              value={formik.values.druginteraction}
              onChange={formik.handleChange("druginteraction")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Drug-Food interaction of Medicine:"}
              value={formik.values.drugfood}
              onChange={formik.handleChange("drugfood")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Drug-Disease interaction of Medicine:"}
              value={formik.values.drugdiease}
              onChange={formik.handleChange("drugdiease")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Interaction with food items:"}
              value={formik.values.fooditems}
              onChange={formik.handleChange("fooditems")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Dosage of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Over Dose:"}
              value={formik.values.overdose}
              onChange={formik.handleChange("overdose")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Missed Dose:"}
              value={formik.values.misseddose}
              onChange={formik.handleChange("misseddose")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Storage and disposal:"}
              value={formik.values.disposal}
              onChange={formik.handleChange("disposal")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Fast tag:"}
              value={formik.values.fasttag}
              onChange={formik.handleChange("fasttag")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"References:"}
              // value={value}
              // onChange={setValue}
              value={formik.values.refer}
              onChange={formik.handleChange("refer")}
            />
          </Grid2>
        </Grid2>
      </Paper>
      <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
        <Button style={{ textTransform: "capitalize" }} variant="contained" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default GenericeAdd;
"use client";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid2,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import VideoInput from "@/components/admin/input/VideoInput";
import { useFormik } from "formik";
import * as yup from "yup";
import dynamic from "next/dynamic";
import SearchField from "@/components/admin/AutoComplete/SearchField";
// import Quill from "quill";
// import QuillImageResize from "quill-image-resize-module-react";
import "react-quill-new/dist/quill.snow.css";
import TextEditor from "@/components/admin/input/TextEditor";
import { GetCategoryService } from "@/services/categoryService";
import { GetSubCategoryService } from "@/services/subCategoryService";
import { GetGeneticService } from "@/services/genericService";
import { GetFormService } from "@/services/formService";
import { GetStorageService } from '@/services/storageService';
import { GetPackageService } from '@/services/packageService';
import { GetManufactuerService } from '@/services/manufactuerService';

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Quill.register("modules/resize", QuillImageResize);

function ProductAdd() {
  const { categories } = useSelector((state) => state.categoryData)
  const { subCategories } = useSelector((state) => state.subCategoryData)
  const { genericList } = useSelector((state) => state.genericData)
  const { formList } = useSelector((state) => state.formData)
  const { storageList } = useSelector((state) => state.storageData)
  const { packageList } = useSelector((state) => state.packageData)
  const { manufactuerList } = useSelector((state) => state.manufactuerData)
  const dispatch = useDispatch()
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // This ensures the code runs only on the client side
      window.addEventListener("load", () => {
        // Quill.register("modules/resize", QuillImageResize);
      });
    }
  }, []);

  const handleTypeChange = (event) => {
    setCategoryName(event.target.value);
  };
  const handleSubTypeChange = (event) => {
    setSubCategoryName(event.target.value);
  };

  const countryList = ["India", "Switzerland", "united states", "Germany"]

  const URLText = (text) => {
    const splitText = text.split(" ")
    const joinSpace = splitText.join("-").toLowerCase()
    return joinSpace
  }

  const formik = useFormik({
    initialValues: {
      cat_name: "",
      subcat_name: "",
      generices: "",
      product_code: "",
      product_name: "",
      url: "",
      varient: "",
      form: "",
      imagealt: "",
      genericname: "",
      brand: "",
      manufactuer: "",
      manufactueraddress: "",
      tabscount: "",
      strength: "",
      packageName: "",
      price: "",
      product_img: "",
      description: "",
      disclaimer: "",
      stock: "",
      saleprice: "",
      percentage: "",
      rexrequired: "",
      orgin: "",
      storage: "",
      writebyid: "",
      reviewbyid: "",
      faqs: "",
      pregnancy: "",
      breastfeeding: "",
      kidneyproblem: "",
      liverdisease: "",
      heartdisease: "",
      asthma: "",
      takemedicine: "",
      adult: "",
      childrenmed: "",
      elderlymed: "",
      alcohol: "",
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
      ingredients: "",
      direction: "",
      dosages: "",
      precaution: "",
      prostatus: "",
      paymenttype: "",
      retunpolicy: "",
      gst: "",
      hsn: "",
    },
    validationSchema: yup.object({
      cat_name: yup.string().required("Category is required"),
      subcat_name: yup.string().required("Sub Category is required"),
      url: yup.string().required("URL is required"),
      generices: yup.string().required("Generices is required"),
      gen_img: yup.string().required("URL is required")
    }),
    onSubmit: async (data, { resetForm }) => {
      // await console.log(data);
      await dispatch(PostGeneticService(data, resetForm))
    },
  });

  const filterSubCategory = subCategories?.subcategoryItems?.filter((item) => item?.cat_name === formik.values.cat_name)

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
    dispatch(GetGeneticService())
    dispatch(GetFormService())
    dispatch(GetStorageService())
    dispatch(GetPackageService())
    dispatch(GetManufactuerService())
  }, [formik.values.cat_name])

  const avalibleStock =
    [
      "In Stock",
      "Out of Stock",
      "Sold Out",
      "Banned",
      "Not For Sale",
      "Discontinued",
      "Withdrawn",
      "Banned For Sale",
      "We do not sell this product",
      "Banned For Sale - As per Ministry of Health and Family Welfare",
      "We do not facilitate sale of this product at present",
      "Not for Online Sale",
    ];
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

  //   console.log(value);
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Product
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/genericelist`)}
        >
          Product List
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
              title="Category Name"
              data={categories?.categories}
              value={formik.values.cat_name}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.category_name || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("cat_name", newValue);
                formik.setFieldValue("subname", "");
              }}
              helperText={
                formik.touched.cat_name ? formik.errors.cat_name : null
              }
              error={
                formik.touched.cat_name ? formik.errors.cat_name : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Sub Category Name"
              data={filterSubCategory}
              value={formik.values.subcat_name}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.subcat_name || "")}
              onInputChange={(event, newValue) => formik.setFieldValue("subcat_name", newValue)}
              helperText={
                formik.touched.subcat_name ? formik.errors.subcat_name : null
              }
              error={
                formik.touched.subcat_name ? formik.errors.subcat_name : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Generic Name"
              data={genericList?.generics}
              value={formik.values.generices}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.generices || "")}
              onInputChange={(event, newValue) => formik.setFieldValue("generices", newValue)}
              helperText={
                formik.touched.generices ? formik.errors.generices : null
              }
              error={
                formik.touched.generices ? formik.errors.generices : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Brand Name (website Product title) EX:Veenat 100mg Tablet"}
              value={formik.values.brand}
              onChange={formik.handleChange("brand")}
              helperText={formik.touched.brand ? formik.errors.brand : null}
              error={formik.touched.brand ? formik.errors.brand : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"URL (EX:veenat-100mg-tablet) [ all small letters only ]"}
              value={URLText(formik.values.brand)}
              onChange={formik.handleChange("url")}
              helperText={formik.touched.url ? formik.errors.url : null}
              error={formik.touched.url ? formik.errors.url : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Other varient Product Name Select"
              data={genericList?.generics}
              value={formik.values.varient}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.generices || "")}
              onInputChange={(event, newValue) => formik.setFieldValue("varient", newValue)}
              helperText={
                formik.touched.varient ? formik.errors.varient : null
              }
              error={
                formik.touched.varient ? formik.errors.varient : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput title={"Product Image"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Image alt tag"}
              value={formik.values.imagealt}
              onChange={formik.handleChange("imagealt")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Salt Composition(Generic Name with Strength) EX:Veenat (100mg)"}
              value={formik.values.strength}
              onChange={formik.handleChange("strength")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Form : (Ex : Gel or caps)"
              data={formList?.forms}
              value={formik.values.form}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.formname || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("form", newValue);
              }}
              helperText={
                formik.touched.form ? formik.errors.form : null
              }
              error={
                formik.touched.form ? formik.errors.form : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Country of Origin"
              data={countryList}
              value={formik.values.orgin}
              getOptionLabel={(option) => (typeof option === "string" ? option : option || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("orgin", newValue);
              }}
              helperText={
                formik.touched.orgin ? formik.errors.orgin : null
              }
              error={
                formik.touched.orgin ? formik.errors.orgin : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Storage"
              data={storageList?.storages}
              value={formik.values.storage}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.storagename || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("storage", newValue);
              }}
              helperText={
                formik.touched.storage ? formik.errors.storage : null
              }
              error={
                formik.touched.storage ? formik.errors.storage : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput title={"Strength Eg : 100mg"}
              value={formik.values.strength}
              onChange={formik.handleChange("strength")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Pack"
              data={packageList?.packages}
              value={formik.values.packageName}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.packagename || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("packageName", newValue);
              }}
              helperText={
                formik.touched.packageName ? formik.errors.packageName : null
              }
              error={
                formik.touched.packageName ? formik.errors.packageName : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextInput title={"Drugs By Ailments"}
              value={formik.values.strength}
              onChange={formik.handleChange("strength")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Manufactuer Address"
              data={manufactuerList?.manufactuers}
              value={formik.values.manufactueraddress}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.manufactueraddress || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("manufactueraddress", newValue);
              }}
              helperText={
                formik.touched.manufactueraddress ? formik.errors.manufactueraddress : null
              }
              error={
                formik.touched.manufactueraddress ? formik.errors.manufactueraddress : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Marketer Address"
              data={manufactuerList?.manufactuers}
              value={formik.values.manufactueraddress}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.manufactueraddress || "")}
              onInputChange={(event, newValue) => {
                formik.setFieldValue("manufactueraddress", newValue);
              }}
              helperText={
                formik.touched.manufactueraddress ? formik.errors.manufactueraddress : null
              }
              error={
                formik.touched.manufactueraddress ? formik.errors.manufactueraddress : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Rex Required (Ex:Rx Required)"}
              value={formik.values.rexrequired}
              onChange={formik.handleChange("rexrequired")}
              data={["Yes", "No"]}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Available Stock"}
              value={formik.values.stock}
              onChange={formik.handleChange("stock")}
              data={avalibleStock}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Available Stock"}
              value={formik.values.stock}
              onChange={formik.handleChange("stock")}
              data={avalibleStock}
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
            <TextEditor title={"Medical Description of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Uses of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Uses and Benefits of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Medicine Prescribed for Follow Indication:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Mechanism of action of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"How Medicine works:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Contraindications of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Side effects of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"FAQs for Medicine:"} />
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
            <TextEditor title={"Pregnancy:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Breast Feeding:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Kidney Problem:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Liver Disease:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Heart Disease:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Asthma:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"How to Take Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Use of Medicine in Adult:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"Use of Medicine in children:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Use of Medicine in Elderly Patients:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Alcohol:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Driving or operating machinery:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Other general warnings:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Talk to your doctor if:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"General instructions:"} />
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
            <TextEditor title={"Drug-Drug interaction of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Drug-Food interaction of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Drug-Disease interaction of Medicine:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Interaction with food items:"} />
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
            <TextEditor title={"Over Dose:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Missed Dose:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Storage and disposal:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor title={"Fast tag:"} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor title={"References:"} value={value} onChange={setValue} />
          </Grid2>
        </Grid2>
      </Paper>
      <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
        <Button style={{ textTransform: "capitalize" }} variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default ProductAdd;
"use client";
import AddIcon from "@mui/icons-material/Add";
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
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import TextEditor from "@/components/admin/input/TextEditor";
import InputArea from "@/components/admin/input/InputArea";
import VideoInput from "@/components/admin/input/VideoInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import SelectField from "@/components/admin/AutoComplete/SelectField";
import { GetCategoryService, GetNonCategoryService } from "@/services/categoryService";
import { PostProductService } from "@/services/productService";
import { GetSubCategoryService } from "@/services/subCategoryService";
import { GetGeneticService } from "@/services/genericService";
import { GetFormService } from "@/services/formService";
import { GetStorageService } from "@/services/storageService";
import { GetPackageService } from "@/services/packageService";
import { GetManufactuerService } from "@/services/manufactuerService";
import { GetOrginService } from "@/services/orginService";
import { GetReferenceService } from "@/services/referenceService";
import { GetWrittenByService } from "@/services/writtenByService";
import { GetReviewByService } from "@/services/reviewByService";
import { GetStockService } from "@/services/stockService";
import SliderPage from "../../../../../components/layout/Slider";
import axios from "axios";

const HealthStoreProductAdd = () => {
    const { non_category } = useSelector((state) => state.categoryData)
    const { subCategories } = useSelector((state) => state.subCategoryData);
    // const { productList } = useSelector((state) => state.productData);
    const { formList } = useSelector((state) => state.formData);
    const { storageList } = useSelector((state) => state.storageData);
    const { packageList } = useSelector((state) => state.packageData);
    const { manufactuerList } = useSelector((state) => state.manufactuerData);
    const { orginList } = useSelector((state) => state.orginData);
    const { stockList } = useSelector((state) => state.stockData);
    const { referenceList } = useSelector((state) => state.referenceData);
    const { writtenByList } = useSelector((state) => state.writtenbyData);
    const { reviewByList, reviewBy } = useSelector(
        (state) => state.reviewbyData
    );
    const dispatch = useDispatch();
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState(null);

    const getFileNameFromUrl = (url) => {
        if (!url || typeof url !== "string") return "";
        const parts = url.split("category/");
        return parts.length > 1 ? "category/" + parts[1] : "";
    };

    const productStatus = ["Active", "InActive"];
    const paymentTypes = ["Online Payment Only", "Cash on Delivery"];
    const returnPolicy = ["Non Returnable", "Return within 7 days"];
    const gst = ["5%", "12%", "18%"];
    const trends = ["Frequently", "Tranding", "Top Brands", "Top Health", "Best Selling", "Popular"];

    const uniqueStockArray = stockList?.stocks?.filter((v, i, a) => a.findIndex(t => (t.name === v?.name)) === i)
    const health_store_FilterData = non_category?.categories?.filter((item) => item?.url !== "ayush" && item?.url !== "health-care-device")
    const categoryUrl = health_store_FilterData?.map((item) => {
        return {
            key: item?.url,
            value: item?.category_name
        }
    })

    const URLText = (text) => {
        return text.trim().replace(/[^\w\s-]/g, "").split(/\s+/).join("-").toLowerCase();
    };


    const formik = useFormik({
        initialValues: {
            cat_name: "",
            subcat_name: "",
            generices: "",
            // product_code: "",
            product_name: "",
            url: "",
            genericname: "",
            varient: "",
            imagealt: "",
            manufactuer: "",
            manufactueraddress: "",
            form: "",
            tabscount: "",
            orgin: "",
            strength: "",
            packageName: "",
            price: "",
            packing: "",
            product_img: "",
            description: "",
            disclaimer: "",
            stock: "In Stock",
            saleprice: "",
            percentage: "",
            rexrequired: "",
            storage: "",
            temperature: "",
            product_type: "",
            // timestamp: "",
            writebyid: "",
            reviewbyid: "",
            faq: "",
            reference: "",
            metatitle: "",
            metakeyword: "",
            metadesc: "",
            vedio: "",
            vedioalt: "",
            userupdate: "",
            updatetimestamp: "",
            userid: "",
            date: "",
            referwebsite: "",
            keybenefits: "",
            keyingredients: "",
            expires: "",
            usesofmeds: "",
            useofbenefits: "",
            indicat: "",
            indication: "",
            mechanism: "",
            medicinework: "",
            contraindications: "",
            sideeffects: "",
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
            prostatus: "Active",
            paymenttype: "",
            retunpolicy: "",
            gst: "",
            hsn: "",
        },
        validationSchema: yup.object({
            cat_name: yup.string().required("Category name is required"),
            subcat_name: yup.string().required("SubCategory Name is required"),
            product_name: yup.string().required("Product Name is required"),
            product_img: yup.mixed().required("Product Image is required"),
            url: yup.string().required("URL is required"),
            manufactuer: yup.string().required("Manufactuer is required"),
            packageName: yup.string().required("Package is required"),
        }),
        // onSubmit: async (data, { resetForm }) => {
        //   const packGetID = packageList?.packages?.find((item) => item?.packagename === data.packageName)
        //   console.log("packGetID", packGetID.packagename);

        //   await dispatch(PostProductService({ ...data, manufactuer: URLText(data.manufactuer), packageName: packGetID.packagename }, resetForm));
        // },
        onSubmit: async (data, { resetForm }) => {
            const updatedData = {
                ...data,
                url: URLText(data.url),
            };

            await dispatch(PostProductService(updatedData, resetForm));
            setImagePreview(null)
        },
    });

    useEffect(() => {
        const percentage = formik.values.percentage;
        const sale = (percentage / 100) * formik.values.price;
        const saleDetail = formik.values.price - sale;
        console.log(saleDetail, "SALE");


        formik.setFieldValue("saleprice", saleDetail.toFixed(2));
    }, [formik.values.price, formik.values.percentage]);

    useEffect(() => {
        formik.values.url = URLText(formik.values.product_name);
        // formik.values.saleprice = saleDetail;
        // formik.values.subcaturl = URLText(formik.values.subcat_name);
    }, [formik.values.product_name]);

    useEffect(() => {
        dispatch(GetNonCategoryService(1, 10))
        dispatch(GetSubCategoryService());
        dispatch(GetFormService());
        dispatch(GetStorageService());
        dispatch(GetPackageService());
        dispatch(GetManufactuerService());
        dispatch(GetOrginService());
        dispatch(GetReferenceService());
        dispatch(GetWrittenByService());
        dispatch(GetReviewByService());
        dispatch(GetStockService())
    }, []);

    const filterSubCategory = subCategories?.subcategoryItems?.filter((item) => item?.cat_name === formik.values.cat_name)?.map((data) => {
        return {
            key: data?.url,
            value: data?.subcat_name
        }
    })
    // const filterOthervarient = productList?.productItems?.filter(
    //   (item) => item?.subcat_name === formik.values.subcaturl
    // );

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue("product_img", {
                    name: file.name,
                    type: file.type,
                    base64: reader.result, // base64 encoded string
                });
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const manufactuerUrl = manufactuerList?.manufactuers?.map((item) => {
        return {
            key: item?.manufactuerurl,
            value: item?.manufactuername
        }
    })

    const packageUrl = packageList?.packages?.map((item) => {
        return {
            key: item?.packid,
            value: item?.packagename
        }
    })

    const writtenByUrl = writtenByList?.written_by_lists?.map((item) => {
        return {
            key: item?.id,
            value: item?.name
        }
    })

    const reviewByUrl = reviewByList?.review_by_lists?.map((item) => {
        return {
            key: item?.id,
            value: item?.name
        }
    })

    const storageUrl = storageList?.storages?.map((item) => {
        return {
            key: item?.storageid,
            value: item?.storagename
        }
    })
    // console.log('non_category0', non_category);

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Health Store Product
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
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
                        <SelectField
                            title="Category Name"
                            data={categoryUrl}
                            value={formik.values.cat_name}
                            onChange={(key) => {
                                formik.setFieldValue("cat_name", key)
                                formik.setFieldValue("subname", "");
                            }}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.cat_name ? formik.errors.cat_name : null
                            }
                            error={
                                formik.touched.cat_name ? formik.errors.cat_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectField
                            title="Sub Category Name"
                            data={filterSubCategory}
                            value={formik.values.subcat_name}
                            onChange={(key) => {
                                formik.setFieldValue("subcat_name", key)
                            }}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.subcat_name ? formik.errors.subcat_name : null
                            }
                            error={
                                formik.touched.subcat_name ? formik.errors.subcat_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={
                                "Brand Name (website Product title) EX:Veenat 100mg Tablet"
                            }
                            value={formik.values.product_name}
                            onChange={formik.handleChange("product_name")}
                            helperText={
                                formik.touched.product_name ? formik.errors.product_name : null
                            }
                            error={
                                formik.touched.product_name ? formik.errors.product_name : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL (EX:veenat-100mg-tablet) [ all small letters only ]"}
                            value={URLText(formik.values.product_name)}
                            onChange={formik.handleChange("url")}
                            helperText={formik.touched.url ? formik.errors.url : null}
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SearchField
                            title="Other varient Product Name Select"
                            // data={filterOthervarient}
                            value={formik.values.varient}
                            getOptionLabel={(option) =>
                                typeof option === "string" ? option : option?.varient || ""
                            }
                            onInputChange={(event, newValue) =>
                                formik.setFieldValue("varient", newValue)
                            }
                            helperText={formik.touched.varient ? formik.errors.varient : null}
                            error={formik.touched.varient ? formik.errors.varient : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <ImageInput
                            title={"Product Image"}
                            image={imagePreview}
                            onChange={handleImage}
                            error={
                                formik.touched.product_img
                                    ? formik.errors.product_img
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Image alt tag ((Brand name, price, uses- Drugcarts )"}
                            value={formik.values.imagealt}
                            onChange={formik.handleChange("imagealt")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={
                                "Salt Composition(Generic Name with Strength) EX:Veenat (100mg)"
                            }
                            value={formik.values.genericname}
                            onChange={formik.handleChange("genericname")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                        <SearchField
                            title="Form : (Ex : Gel or caps)"
                            data={formList?.forms}
                            value={formik.values.form}
                            getOptionLabel={(option) =>
                                typeof option === "string" ? option : option?.formname || ""
                            }
                            onInputChange={(event, newValue) => {
                                formik.setFieldValue("form", newValue);
                            }}
                            helperText={
                                formik.touched.form ? formik.errors.form : null
                            }
                            error={formik.touched.form ? formik.errors.form : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                        <SearchField
                            title="Country of Origin"
                            data={orginList?.orgins}
                            value={formik.values.orgin}
                            getOptionLabel={(option) =>
                                typeof option === "string" ? option : option?.orginname || ""
                            }
                            onInputChange={(event, newValue) => {
                                formik.setFieldValue("orgin", newValue);
                            }}
                            helperText={formik.touched.orgin ? formik.errors.orgin : null}
                            error={formik.touched.orgin ? formik.errors.orgin : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectField
                            title="Storage"
                            data={storageUrl}
                            value={formik.values.storage}
                            onChange={(key) => {
                                formik.setFieldValue("storage", key)
                            }}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.storage ? formik.errors.storage : null
                            }
                            error={
                                formik.touched.storage ? formik.errors.storage : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Strength Eg : 100mg"}
                            value={formik.values.strength}
                            onChange={formik.handleChange("strength")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectField
                            title="Pack"
                            data={packageUrl}
                            value={formik.values.packageName}
                            onChange={(key) => {
                                formik.setFieldValue("packageName", key)
                            }}
                            getOptionLabel={(option) => option?.value}
                            helperText={
                                formik.touched.packageName ? formik.errors.packageName : null
                            }
                            error={
                                formik.touched.packageName ? formik.errors.packageName : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextInput
                            title={"Drugs By Ailments"}
                            value={formik.values.indication}
                            onChange={formik.handleChange("indication")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        {/* <SearchField
              title="Manufactuer Address"
              data={manufactuerList?.manufactuers}
              value={formik.values.manufactuer}
              getOptionLabel={(option) =>
                typeof option === "string"
                  ? option
                  : option?.manufactuername || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("manufactuer", newValue);
              }}
              helperText={
                formik.touched.manufactuer ? formik.errors.manufactuer : null
              }
              error={
                formik.touched.manufactuer ? formik.errors.manufactuer : null
              }
            /> */}
                        <SelectField
                            title="Manufactuer Address"
                            data={manufactuerUrl}
                            value={formik.values.manufactuer}
                            onChange={(key) => formik.setFieldValue("manufactuer", key)}
                            getOptionLabel={(option) => option?.value}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <SelectField
                            title="Marketer Address"
                            data={manufactuerUrl}
                            value={formik.values.manufactueraddress}
                            onChange={(key) => formik.setFieldValue("manufactueraddress", key)}
                            getOptionLabel={(option) => option?.value}
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
                        <SearchField
                            title="Available Stock"
                            data={uniqueStockArray}
                            value={formik.values.stock}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.name || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("stock", newValue)}
                            helperText={
                                formik.touched.stock ? formik.errors.stock : null
                            }
                            error={
                                formik.touched.stock ? formik.errors.stock : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SearchField
                            title="Product reference"
                            data={referenceList?.references}
                            value={formik.values.reference}
                            getOptionLabel={(option) => (typeof option === "string" ? option : option?.websitename || "")}
                            onInputChange={(event, newValue) => formik.setFieldValue("reference", newValue)}
                            helperText={
                                formik.touched.reference ? formik.errors.reference : null
                            }
                            error={
                                formik.touched.reference ? formik.errors.reference : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Product Status"}
                            value={formik.values.prostatus}
                            onChange={formik.handleChange("prostatus")}
                            data={productStatus}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Expires on or after: (Ex:June,2021)"}
                            value={formik.values.expires}
                            onChange={formik.handleChange("expires")}
                            helperText={formik.touched.expires ? formik.errors.expires : null}
                            error={formik.touched.expires ? formik.errors.expires : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Payment Type"}
                            value={formik.values.paymenttype}
                            onChange={formik.handleChange("paymenttype")}
                            data={paymentTypes}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Return Policy"}
                            value={formik.values.retunpolicy}
                            onChange={formik.handleChange("retunpolicy")}
                            data={returnPolicy}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"HSN"}
                            value={formik.values.hsn}
                            onChange={formik.handleChange("hsn")}
                            helperText={formik.touched.hsn ? formik.errors.hsn : null}
                            error={formik.touched.hsn ? formik.errors.hsn : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        {/* <SelectInput
              title={"GST(%)"}
              value={formik.values.gst}
              onChange={formik.handleChange("gst")}
              data={gst}
            /> */}
                        <TextInput
                            title={"GST(%)"}
                            type="number"
                            value={formik.values.gst}
                            onChange={formik.handleChange("gst")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"MRP : Ex:123.00"}
                            value={formik.values.price}
                            onChange={formik.handleChange("price")}
                            helperText={formik.touched.price ? formik.errors.price : null}
                            error={formik.touched.price ? formik.errors.price : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Percentage DISCOUNT:(Ex:2)only type number."}
                            value={formik.values.percentage}
                            onChange={formik.handleChange("percentage")}
                            helperText={
                                formik.touched.percentage ? formik.errors.percentage : null
                            }
                            error={
                                formik.touched.percentage ? formik.errors.percentage : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Sale Price"}
                            value={formik.values.saleprice}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Other Temperature"}
                            value={formik.values.temperature}
                            onChange={formik.handleChange("temperature")}
                            helperText={
                                formik.touched.temperature ? formik.errors.temperature : null
                            }
                            error={
                                formik.touched.temperature ? formik.errors.temperature : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <SelectInput
                            title={"Product Type"}
                            value={formik.values.product_type}
                            onChange={formik.handleChange("product_type")}
                            data={trends}
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
                        <TextInput
                            title={
                                "Meta Title:(unlimited) Character Only : ( Choose Below Any one Example )"
                            }
                            value={formik.values.metatitle}
                            onChange={formik.handleChange("metatitle")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextInput
                            title={"Meta Keyword:(unlimited) Character Only "}
                            value={formik.values.metakeyword}
                            onChange={formik.handleChange("metakeyword")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextInput
                            title={"Meta Description:(unlimited) Character Only"}
                            value={formik.values.metadesc}
                            onChange={formik.handleChange("metadesc")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography
                            variant="h6"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                        >
                            Author Details :
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <SelectField
                            title="Reviewd By"
                            data={reviewByUrl}
                            value={formik.values.reviewbyid}
                            onChange={(key) => formik.setFieldValue("reviewbyid", key)}
                            getOptionLabel={(option) => option?.value}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <SelectField
                            title="Written By"
                            data={writtenByUrl}
                            value={formik.values.writebyid}
                            onChange={(key) => formik.setFieldValue("writebyid", key)}
                            getOptionLabel={(option) => option?.value}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        {/* <EditorToolbar /> */}
                        <TextEditor
                            title={"Medical Description of Medicine :"}
                            value={formik.values.description}
                            onChange={formik.handleChange("description")}
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
                            title={"Alcohol :"}
                            value={formik.values.alcohol}
                            onChange={formik.handleChange("alcohol")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Driving or operating machinery :"}
                            value={formik.values.driving}
                            onChange={formik.handleChange("driving")}
                        />
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
                            Drug-Drug Interaction of Medicine:
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Drug Interaction of Medicine:"}
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
                            title={"Over Dose :"}
                            value={formik.values.overdose}
                            onChange={formik.handleChange("overdose")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Missed Dose :"}
                            value={formik.values.misseddose}
                            onChange={formik.handleChange("misseddose")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Storage and disposal :"}
                            value={formik.values.disposal}
                            onChange={formik.handleChange("disposal")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Fast tag :"}
                            value={formik.values.fasttag}
                            onChange={formik.handleChange("fasttag")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"References :"}
                            value={formik.values.refer}
                            onChange={formik.handleChange("refer")}
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
};

export default HealthStoreProductAdd;
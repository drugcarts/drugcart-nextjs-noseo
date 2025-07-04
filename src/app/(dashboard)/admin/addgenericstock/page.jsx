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
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { useFormik } from "formik";
import { GetMainSliderListService } from '@/services/mainSliderService';
import { useSelector, useDispatch } from "react-redux";
import { PutGenericProductStockService, PutProductService } from "@/services/productService";
import { GetGeneticService } from "@/services/genericService";
import { GetStockService } from "@/services/stockService";

function AddGenericStock() {
    const { genericList } = useSelector((state) => state.genericData);
    const { stockList } = useSelector((state) => state.stockData);
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetMainSliderListService())
        dispatch(GetGeneticService());
        dispatch(GetStockService())
    }, [])

    const uniqueArray = stockList?.stocks?.filter((v, i, a) => a.findIndex(t => (t.name === v?.name)) === i)

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const formik = useFormik({
        initialValues: {
            generices: "",
            stock: "In Stock",
        },
        onSubmit: async (data) => {
            let saveData ={
                stock: data.stock
            }
            await dispatch(PutGenericProductStockService(formik.values.generices, saveData))
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
                    Add Generic Available Stock
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/genericlist`)}
                >
                    Generic Product List
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
                        <SearchField
                            title="Generic Name"
                            data={genericList?.generics}
                            value={formik.values.generices}
                            getOptionLabel={(option) =>
                                typeof option === "string" ? option : option?.generices || ""
                            }
                            onInputChange={(event, newValue) =>
                                formik.setFieldValue("generices", newValue)
                            }
                            helperText={
                                formik.touched.generices ? formik.errors.generices : null
                            }
                            error={formik.touched.generices ? formik.errors.generices : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <SearchField
                            title="Available Stock"
                            data={uniqueArray}
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

export default AddGenericStock;

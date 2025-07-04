"use client"
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { GetProductIdService } from '@/services/productService';
import { useDispatch, useSelector } from 'react-redux';
import { DateMonthFormat, TimeFormat } from '@/utils/dateFormat';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    // textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    borderColor: "gray",
    borderWidth: 2,
}));

function ProductView() {
    const { product } = useSelector((state) => state.productData);
    const dispatch = useDispatch();
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        dispatch(GetProductIdService(params?.id));
    }, [params?.id]);
    console.log(product);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <Typography
                    variant="h5"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Product View
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    onClick={() => router.back()}
                >
                    Product list
                </Button>
            </Box>
            <Grid container spacing={2} marginTop={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Category :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.cat_name}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Sub Category :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.subcat_name}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Product Name :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.product_name}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Url :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.url}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Generic Name :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.generices ? product?.generices : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Composition :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.composition ? product?.composition : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Brand Name :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.brand ? product?.brand : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Composition :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.composition ? product?.composition : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Manufactuer :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.manufactuer ? product?.manufactuer : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Manufactuer Address :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.manufactueraddress ? product?.manufactueraddress : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Form :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.form ? product?.form : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Country of Origin :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.orgin ? product?.orgin : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Storage :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.storage ? product?.storage : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Strength :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.strength ? product?.strength : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Package :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.packageName ? product?.packageName : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Rex Required :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.rexrequired ? product?.rexrequired : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            MRP :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.price ? product?.price : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Available Stock :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.stock ? product?.stock : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            DISCOUNT(%) :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.percentage ? product?.percentage : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Created Date :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {DateMonthFormat(product?.timestrap)}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Created Time :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {TimeFormat(product?.timestrap)}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Description :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            <div
                                className="rich-content-card"
                                dangerouslySetInnerHTML={{
                                    __html: product?.description ?
                                        product?.description : "-"
                                }}
                            />
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Meta Title :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.metatitle ? product?.metatitle : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Meta Keyword :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.metakeyword ? product?.metakeyword : "-"}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Item elevation={0}>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                            sx={{ color: "#000" }}
                            marginBottom={0.5}
                        >
                            Meta Description :
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            fontFamily={"Poppins"}
                            fontSize={14}
                            sx={{ color: "#000" }}
                        >
                            {product?.metadesc ? product?.metadesc : "-"}
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductView
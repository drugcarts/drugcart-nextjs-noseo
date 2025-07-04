"use client"
import React, { useEffect, useState } from 'react'
import { GetOrderOneService, PutOrderService } from '@/services/orderService';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Button,
    Grid2,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { IMAGES } from '@/components/common/images';
import NotesModal from '@/components/admin/modal/NotesModal';
import TrackingModal from '@/components/admin/modal/TrackingModal';
import CanelModal from '@/components/admin/modal/CanelModal';
import { GetCourierService } from '@/services/courierService';
import { DateFormat, TimeFormat } from '@/utils/dateFormat';

function page() {
    const [openNotes, setNotesModal] = useState(false)
    const [openTracking, setTrackingModal] = useState(false)
    const [canelModal, setCancelModal] = useState(false)
    const { orderGetData } = useSelector((state) => state.orderData)
    const params = useParams()
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(GetOrderOneService(params?.orderId))
        dispatch(GetCourierService(1, 100))
    }, [params?.orderId])

    console.log('orderGetData', orderGetData);


    const handleProcessOrder = async () => {
        const statusChange = {
            ...orderGetData,
            trackingInfo: {
                ...orderGetData?.trackingInfo,
                orderStatus: "Processing"
            }
        };
        await dispatch(PutOrderService(orderGetData?.orderId, statusChange));
    };

    const handleTransitOrder = async () => {
        const statusChange = {
            ...orderGetData,
            trackingInfo: {
                ...orderGetData?.trackingInfo,
                orderStatus: "Transit"
            }
        };
        await dispatch(PutOrderService(orderGetData?.orderId, statusChange));
    };

    const handleDeliveredOrder = async () => {
        const statusChange = {
            ...orderGetData,
            trackingInfo: {
                ...orderGetData?.trackingInfo,
                orderStatus: "Delivered"
            }
        };
        await dispatch(PutOrderService(orderGetData?.orderId, statusChange));
    };

    return (
        <Box>
            <Grid2 container spacing={2} alignItems="center" justifyContent={"space-between"}>
                {/* Title */}
                <Grid2 xs={12} md={6}>
                    <Typography
                        variant="h6"
                        fontFamily="Poppins"
                        fontWeight="bold"
                    >
                        Order View
                    </Typography>
                </Grid2>

                {/* Buttons Container */}
                <Grid2 xs={12} md={6} display="flex" justifyContent="flex-end" gap={2}>
                    {orderGetData?.trackingInfo?.orderStatus === "Pending" && (
                        <>
                            <Button
                                color="success"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={handleProcessOrder}
                            >
                                Process Order
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={() => setCancelModal(true)}
                            >
                                Cancel Order
                            </Button>
                            {!orderGetData?.notes ? (
                                <Button
                                    color="info"
                                    variant="contained"
                                    style={{ textTransform: "capitalize" }}
                                    onClick={() => setNotesModal(true)}
                                >
                                    Notes
                                </Button>
                            ) : null}
                            <CanelModal open={canelModal} setOpen={setCancelModal} />
                            <NotesModal open={openNotes} setOpen={setNotesModal} />
                        </>
                    )}
                    {orderGetData?.trackingInfo?.orderStatus === "Processing" && (
                        <>
                            <Button
                                color="success"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={() => router.push(`/admin/user-invoice/${orderGetData?.orderId}`)}
                            >
                                Generate Invoice
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={() => setTrackingModal(true)}
                            >
                                Order Tracking
                            </Button>
                            <TrackingModal open={openTracking} setOpen={setTrackingModal} />
                        </>
                    )}
                    {orderGetData?.trackingInfo?.orderStatus === "Dispatched" && (
                        <>
                            <Button
                                color="error"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={handleTransitOrder}
                            >
                                Order Transit
                            </Button>
                        </>
                    )}
                    {orderGetData?.trackingInfo?.orderStatus === "Transit" && (
                        <>
                            <Button
                                color="error"
                                variant="contained"
                                style={{ textTransform: "capitalize" }}
                                onClick={handleDeliveredOrder}
                            >
                                Delivered
                            </Button>
                        </>
                    )}
                    {orderGetData?.trackingInfo?.orderStatus === "Delivered" && null}
                    {orderGetData?.trackingInfo?.orderStatus === "Cancelled" && null}
                </Grid2>
            </Grid2>
            <Box>
                <Paper
                    sx={{
                        borderColor: "#fa4b31",
                        borderTopWidth: 3,
                        borderBottomWidth: 2,
                        p: 2,
                        mt: 2,
                    }}
                >
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Order ID:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                #{orderGetData?.orderId}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Date:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {DateFormat(orderGetData?.createdAt)}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Time:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {TimeFormat(orderGetData?.createdAt)}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Prescription:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "blue", fontSize: 14 }}>
                                <a href={orderGetData?.rximage} target="_blank">
                                    {orderGetData?.rximage ? "View File" : "-"}
                                </a>
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Total Price:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.itemsPrice}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Shipping Price:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingPrice}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Tracking No:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.trackingInfo?.trackingno ? orderGetData?.trackingInfo?.trackingno : "-"}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Order Status:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.trackingInfo?.orderStatus}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Payment Type:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.paymentInfo?.paymentmode === "cod" ? "Cash on Delivery" : "Online Pay"}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Payment Status:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.paymentInfo?.paymentstatus}
                            </Typography>
                        </Grid2>
                        {orderGetData?.cancelItem === "Active" ?
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Cancel Reason:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {orderGetData?.reason}
                                </Typography>
                            </Grid2> : null}
                        {orderGetData?.cancelItem === "Active" ?
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Cancel By:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14, textTransform: "capitalize" }}>
                                    {orderGetData?.cancelUser}
                                </Typography>
                            </Grid2> : null}
                    </Grid2>
                </Paper>
            </Box>

            {orderGetData?.orderItems?.map((product, i) => (
                <Box key={i}>
                    <Typography
                        variant="h6"
                        fontFamily={"Poppins"}
                        fontWeight="bold"
                        sx={{ flexGrow: 1, marginTop: 3 }}
                    >
                        Product - {i + 1}
                    </Typography>
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
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Product Name:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.product_name}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Product Image:
                                </Typography>
                                <Avatar
                                    alt={product?.imagealt}
                                    src={
                                        product?.product_img
                                            ? `https://assets2.drugcarts.com/${product?.product_img}`
                                            : IMAGES.NO_IMAGE
                                    }
                                    sx={{ width: 80, height: 60 }}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Description:
                                </Typography>
                                <div
                                    className="rich-content-card font-Poppins"
                                    dangerouslySetInnerHTML={{
                                        __html: product?.description?.length > 150
                                            ? product?.description.slice(0, 150) + "..."
                                            : product?.description || "<p>No description available</p>"
                                    }} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Quantity:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.quantity}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Product Code:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.product_code}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Price:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.price}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Sales Price:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.saleprice}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    Percentage:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.percentage}%
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                    GST:
                                </Typography>
                                <Typography
                                    sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                    {product?.gst}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Box>
            ))}
            <Box>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1, marginTop: 3 }}
                >
                    Delivery Address
                </Typography>
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
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Customer Name:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.cus_name}{" "}{orderGetData?.shippingInfo?.lastname}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Type:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.type}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Phone:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.phone}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Email:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.email}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Address:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.address}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Town:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.town}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                State:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.state}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Country:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.country}
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 600, fontFamily: "Poppins", color: "#000", fontSize: 16 }}>
                                Postal Code:
                            </Typography>
                            <Typography
                                sx={{ mt: 1, mb: 0.5, fontWeight: 500, fontFamily: "Poppins", color: "#000", fontSize: 14 }}>
                                {orderGetData?.shippingInfo?.postcode}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            </Box>
        </Box>
    )
}

export default page
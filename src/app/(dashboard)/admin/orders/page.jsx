"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Grid2, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Pagination from "@mui/material/Pagination";
import SearchInput from "@/components/admin/input/SearchInput";
import DDInput from "@/components/admin/input/DDInput";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from "react-redux";
import { DeleteOrderService, GetOrderIdService, GetOrdersService } from '@/services/orderService';
import DeleteModal from '@/components/admin/modal/DeleteModal';
import { DateMonthFormat, TimeFormat } from "@/utils/dateFormat"

const rowText = {
    color: "#fff",
    fontFamily: "Poppins",
};
function OrderListPage() {
    const { orderList, order } = useSelector((state) => state.orderData)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showNo, setShowNo] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const [orderStatus, setOrderStatus] = useState("")
    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch()

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const router = useRouter();

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        dispatch(GetOrdersService(page, showNo, search, orderStatus))
    }, [page, showNo, search, orderStatus])

    const searchSubmit = () => {
        dispatch(GetOrdersService(page, showNo, search, orderStatus))
    }

    const AllOrderStatus = () => {
        setOrderStatus("")
        setSearch("")
    }

    const ProcessOrderStatus = () => {
        setOrderStatus("Processing")
        setSearch("")
    }

    const CompletedOrderStatus = () => {
        setOrderStatus("Completed")
        setSearch("")
    }

    const CancelledOrderStatus = () => {
        setOrderStatus("Cancelled")
        setSearch("")
    }

    const PendingOrderStatus = () => {
        setOrderStatus("Pending")
        setSearch("")
    }

    const colorValue = (status) => {
        if (status === "Processing") {
            return "blue"
        } else if (status === "Completed") {
            return "green"
        } else if (status === "Cancelled") {
            return "red"
        } else {
            return "green"
        }
    }
    console.log("orderList", orderStatus);

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h5"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    All User Order Lists
                </Typography>
            </Box>
            <Grid2 container spacing={3} justifyContent="space-between" alignItems="center">
                <Grid2
                    marginTop={2}
                    size={{ xs: 12, sm: 5, md: 3 }}
                >
                    <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                        style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                        onClick={AllOrderStatus}
                    >
                        All Orders List
                    </Button>
                </Grid2>
                <Grid2
                    marginTop={2}
                    size={{ xs: 12, sm: 5, md: 3 }}
                >
                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                        onClick={ProcessOrderStatus}
                    >
                        Processing orders list
                    </Button>
                </Grid2>
                <Grid2
                    marginTop={2}
                    size={{ xs: 12, sm: 5, md: 3 }}
                >
                    <Button
                        fullWidth
                        color="info"
                        variant="contained"
                        style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                        onClick={PendingOrderStatus}
                    >
                        Pending orders list
                    </Button>
                </Grid2>
                <Grid2
                    marginTop={2}
                    size={{ xs: 12, sm: 5, md: 3 }}
                >
                    <Button
                        fullWidth
                        color="success"
                        variant="contained"
                        style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                        onClick={CompletedOrderStatus}
                    >
                        Completed orders list
                    </Button>
                </Grid2>
                <Grid2
                    marginTop={2}
                    size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}
                >
                    <Button
                        color="error"
                        variant="contained"
                        style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                        onClick={CancelledOrderStatus}
                    >
                        Cancelled orders list
                    </Button>
                </Grid2>
            </Grid2>
            <Grid2 container alignItems={"center"} spacing={2}>
                <Grid2
                    container
                    alignItems={"center"}
                    marginTop={2}
                    size={{ xs: 12, sm: 5, md: 1, lg: 3, xl: 3 }}
                    marginRight={"auto"}
                >
                    <Typography fontFamily={"Poppins"} fontWeight={500}>
                        Show Pages
                    </Typography>
                    <DDInput
                        value={showNo}
                        data={userEntries}
                        onChange={handleNoChange}
                    />
                </Grid2>
                <Grid2
                    size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }}
                    marginLeft={"auto"}
                >
                    <SearchInput
                        placeholder="Order Id"
                        filterOption={true}
                        rowCount={8}
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        filterSubmit={searchSubmit}
                    />
                </Grid2>
            </Grid2>

            <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                <Table size="small" aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#00a65a" }}>
                        <TableRow>
                            <TableCell style={rowText}>Sno</TableCell>
                            <TableCell style={rowText}>Order Id</TableCell>
                            <TableCell style={rowText}>Date</TableCell>
                            <TableCell style={rowText}>Time</TableCell>
                            <TableCell style={rowText}>Status</TableCell>
                            <TableCell style={rowText}>Customer Name</TableCell>
                            <TableCell style={rowText}>Country</TableCell>
                            <TableCell style={rowText}>Phone</TableCell>
                            <TableCell style={rowText}>Products</TableCell>
                            <TableCell align="right" style={rowText}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList && orderList?.all_orders?.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {row?.sno}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                    component="th"
                                    scope="row"
                                >
                                    #{row?.orderId}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {DateMonthFormat(row?.createdAt)}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                    {TimeFormat(row?.createdAt)}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily, fontWeight: "bold", color: colorValue(row?.trackingInfo?.orderStatus) }}
                                >
                                    {row?.trackingInfo?.orderStatus}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                >
                                    {row?.shippingInfo?.cus_name}{" "}{row?.shippingInfo?.lastname}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                >
                                    {row?.shippingInfo?.country}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                >
                                    {row?.shippingInfo?.phone}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                >
                                    {row?.orderItems?.length}
                                </TableCell>
                                <TableCell
                                    sx={{ fontFamily: rowText.fontFamily }}
                                    align="right"
                                >
                                    <button onClick={() => {
                                        router.push(`/admin/orderview/${row?.orderId}`)
                                    }}>
                                        <VisibilityIcon color="primary" />
                                    </button>
                                    <button onClick={() => setSelectedId(row._id)}>
                                        <DeleteIcon color='error' />
                                    </button>
                                    <DeleteModal
                                        open={selectedId === row._id}
                                        setOpen={() => setSelectedId(null)}
                                        title={"Delete Order"}
                                        description={`Are you sure you want to delete #${row?.orderId}`}
                                        onSubmit={async () => {
                                            await dispatch(DeleteOrderService(row?.orderId));
                                            setSelectedId(null);
                                        }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                sx={{
                    my: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {orderList?.pagination?.totalItems} entries</Typography>
                <br />
                <Pagination
                    size="large"
                    count={orderList?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </Box>
    );
}

export default OrderListPage;

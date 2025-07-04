"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Avatar, Box, Button, FormHelperText, Grid2, IconButton, Typography } from "@mui/material";
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from "@mui/material/Pagination";
import SearchInput from "@/components/admin/input/SearchInput";
import DDInput from "@/components/admin/input/DDInput";
import { useDispatch, useSelector } from "react-redux";
import { GetContractUserProductService } from '@/services/contractService';
import DeleteModal from '@/components/admin/modal/DeleteModal';

const rowText = {
    color: "#fff",
    fontFamily: "Poppins",
};
function ContractWorkPage() {
    const { contractUserProducts } = useSelector((state) => state.contractData)
    const { loading } = useSelector((state) => state.common)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showNo, setShowNo] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const [selectedId, setSelectedId] = useState(null);

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const router = useRouter();

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        dispatch(GetContractUserProductService(page, showNo, search, params?.id))
    }, [page, showNo, search, params?.id])

    const searchSubmit = () => {
        dispatch(GetContractUserProductService(page, showNo, search, params?.id))
    }

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h5"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Contract Worker : {contractUserProducts?.username}
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.back()}
                >
                    Go Back
                </Button>
            </Box>
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
                            <TableCell style={rowText}>Category</TableCell>
                            <TableCell style={rowText}>Sub Category</TableCell>
                            <TableCell style={rowText}>Generic</TableCell>
                            <TableCell style={rowText}>Product</TableCell>
                            <TableCell style={rowText}>Manufactuer</TableCell>
                            <TableCell style={rowText}>Stock</TableCell>
                            <TableCell style={rowText}>MRP</TableCell>
                            <TableCell style={rowText}>%</TableCell>
                            <TableCell style={rowText}>Price</TableCell>
                            <TableCell align="right" style={rowText}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            contractUserProducts?.products?.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ color: 'red' }}>
                                        {loading ? "" : "No data found"}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                contractUserProducts && contractUserProducts?.products?.map((row, i) => (
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
                                            {row?.cat_name}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.subcat_name}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.generices}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.product_name}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.manufactuer}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.stock}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.saleprice}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.percentage}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                            {row?.price}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontFamily: rowText.fontFamily }}
                                            align="right"
                                        >
                                            <button onClick={() => {
                                                router.push(`/admin/productlist/view/${row?._id}`)
                                            }}>
                                                <VisibilityIcon color="primary" />
                                            </button>
                                        </TableCell>
                                        <DeleteModal
                                            open={selectedId === row?._id}
                                            setOpen={() => setSelectedId(null)}
                                            title={"Delete Product"}
                                            description={`Are you sure you want to delete ${row?.product_name}`}
                                            onSubmit={async () => {
                                                await dispatch(DeleteProductService(row?._id));
                                                setSelectedId(null);
                                            }} />
                                    </TableRow>
                                )))}
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
                <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {contractUserProducts?.pagination?.totalItems} entries</Typography>
                <br />
                <Pagination
                    size="large"
                    count={contractUserProducts?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </Box>
    );
}

export default ContractWorkPage;

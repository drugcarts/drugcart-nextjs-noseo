"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { Box, Button, Grid2, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchInput from '@/components/admin/input/SearchInput';
import DDInput from '@/components/admin/input/DDInput';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCategoryService, GetCategoryIdService, GetCategoryService } from '@/services/categoryService';
import { GetProductCategoryService, GetProductIdService, DeleteProductService } from '@/services/productService';
import DeleteModal from '@/components/admin/modal/DeleteModal';
import { useRole } from '@/hooks/useRole';
import { tableText } from '@/utils/textFormat';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('pizza burger', 356, 16.0, 49, 3.9),
    createData('sultiute', 356, 16.0, 49, 3.9),
];
const rowText = {
    color: '#fff',
    fontFamily: "Poppins",
}
function MedicineList() {
    const { productCategory, product } = useSelector((state) => state.productData)
    const { loading } = useSelector((state) => state.common)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showNo, setShowNo] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()
    const { role } = useRole()
    const [selectedId, setSelectedId] = useState(null);

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const router = useRouter()
    const handleClick = () => {
        alert("row count alert");
    };

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        dispatch(GetProductCategoryService(page, showNo, params?.url, search))
    }, [page, showNo, search])

    const searchSubmit = () => {
        dispatch(GetProductCategoryService(page, showNo, params?.url, search))
    }

    console.log("productCategory", productCategory);

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography
                    variant="h5"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Medicine Product List
                </Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/productlist/add`)}
                >
                    Add Product
                </Button>
            </Box>
            <Grid2 container alignItems={"center"} spacing={2}>
                <Grid2 container alignItems={"center"} marginTop={2} size={{ xs: 12, sm: 5, md: 1, lg: 3, xl: 3 }} marginRight={"auto"}>
                    <Typography fontFamily={"Poppins"} fontWeight={500}>Show Pages</Typography>
                    <DDInput
                        value={showNo}
                        data={userEntries}
                        onChange={handleNoChange}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 5, md: 3, lg: 3, xl: 3 }} marginLeft={"auto"}>
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
                    <TableHead sx={{ backgroundColor: '#00a65a' }}>
                        <TableRow>
                            <TableCell style={rowText}>Sno</TableCell>
                            <TableCell style={rowText}>Category</TableCell>
                            <TableCell style={rowText}>Subcat</TableCell>
                            <TableCell style={rowText}>Product</TableCell>
                            <TableCell style={rowText}>Code</TableCell>
                            <TableCell style={rowText}>Manufactuer</TableCell>
                            <TableCell style={rowText}>MRP</TableCell>
                            <TableCell align="center" style={rowText}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            productCategory?.products?.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ color: 'red' }}>
                                        {loading ? "" : "No data found"}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                productCategory && productCategory?.products?.map((row, i) => (
                                    <TableRow
                                        key={row?.sno}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row?.sno}</TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                            {row?.cat_name}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                            {row?.subcat_name}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                            {tableText(row?.product_name, 20)}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                            {row?.product_code}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                            {tableText(row?.manufactuer, 20)}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                            {row?.price}
                                        </TableCell>
                                        <TableCell sx={{ fontFamily: rowText.fontFamily }} align="right">
                                            <button
                                            className='mx-1'
                                                onClick={() => {
                                                    router.push(`/admin/productlist/view/${row?._id}`);
                                                }}
                                            >
                                                <VisibilityIcon color="warning" />
                                            </button>
                                            <button className='mx-1' onClick={() => {
                                                router.push(`/admin/productlist/${row?._id}`)
                                            }}>
                                                <CreateIcon color="primary" />
                                            </button>
                                            {role === "admin" ? <button className='mx-1' onClick={() => setSelectedId(row._id)}>
                                                <DeleteIcon color='error' />
                                            </button> : null}
                                        </TableCell>
                                        <DeleteModal
                                            open={selectedId === row._id}
                                            setOpen={() => setSelectedId(null)}
                                            title={"Delete Product"}
                                            description={`Are you sure you want to delete ${row?.product_name}`}
                                            onSubmit={async () => {
                                                await dispatch(DeleteProductService(row._id));
                                                setSelectedId(null);
                                            }} />
                                    </TableRow>
                                )))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
                <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {productCategory?.pagination?.totalItems} entries</Typography>
                <br />
                <Pagination
                    size="large"
                    count={productCategory?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </Box>
    )
}

export default MedicineList
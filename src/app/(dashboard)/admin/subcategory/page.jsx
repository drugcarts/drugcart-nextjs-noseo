"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Box, Button, Grid2, Typography } from '@mui/material'
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
import SearchInput from '@/components/admin/input/SearchInput';
import DDInput from '@/components/admin/input/DDInput';
import { DeleteSubCategoryService, GetSubCategoryIdService, GetSubCategoryService } from '../../../../services/subCategoryService';
import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from '@/components/admin/modal/DeleteModal';
import { useRole } from '@/hooks/useRole';


function createData(categoryName, subCategory) {
    return { categoryName, subCategory };
}

const rows = [
    createData('alzheimers-disese', "Lewy Body Dementia"),
    createData('alzheimers-disese', "Vascular Dementia"),
    createData('alzheimers-disese', "Fronto Temporal Dementia"),
    createData('anaemia', "Anaemia"),
    createData('anaesthesia-local', "local anesthetic"),
    createData('analgesic', "Headache", "salary"),
    createData('analgesic', "Pain relief"),
];
const rowText = {
    color: '#fff',
    fontFamily: "Poppins",
}
function SubCategory() {
    const router = useRouter()
    const { subCategories, subCategory } = useSelector((state) => state.subCategoryData)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showNo, setShowNo] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const { role } = useRole()
    const [selectedId, setSelectedId] = useState(null);

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        dispatch(GetSubCategoryService(page, showNo, search))
    }, [page, showNo, search])

    const searchSubmit = () => {
        dispatch(GetSubCategoryService(page, showNo, search))
    }

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" fontFamily={"Poppins"} fontWeight="bold" sx={{ flexGrow: 1 }}>Sub Catogory List</Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/subcategory/add`)}
                >
                    Add Sub Category
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
                            <TableCell style={rowText}>Sub Category</TableCell>
                            <TableCell style={rowText}>Url</TableCell>
                            <TableCell align="right" style={rowText}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subCategories && subCategories?.subcategoryItems?.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row?.sno}</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }}>{row?.subcat_name}</TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }} component="th" scope="row">
                                    {row?.url}
                                </TableCell>
                                <TableCell sx={{ fontFamily: rowText.fontFamily }} align="right">
                                    <button onClick={() => {
                                        router.push(`/admin/subcategory/${row?._id}`)
                                    }}>
                                        <CreateIcon color="primary" />
                                    </button>
                                    {role === "admin" ? <button onClick={() => setSelectedId(row._id)}>
                                        <DeleteIcon color='error' />
                                    </button> : null}

                                </TableCell>
                                <DeleteModal
                                    open={selectedId === row._id}
                                    setOpen={() => setSelectedId(null)}
                                    title={"Delete Category"}
                                    description={`Are you sure you want to delete ${row?.subcat_name}`}
                                    onSubmit={async () => {
                                        await dispatch(DeleteSubCategoryService(row._id));
                                        setSelectedId(null);
                                    }} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
                <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {subCategories?.pagination?.totalItems} entries</Typography>
                <br />
                <Pagination
                    size="large"
                    count={subCategories?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </Box>
    )
}

export default SubCategory
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
import Pagination from "@mui/material/Pagination";
import SearchInput from "@/components/admin/input/SearchInput";
import DDInput from "@/components/admin/input/DDInput";
import { useDispatch, useSelector } from "react-redux";
import { DeletePromotionService, GetPromotionListService } from '@/services/promotionService';
import DeleteModal from '@/components/admin/modal/DeleteModal';

const rowText = {
    color: "#fff",
    fontFamily: "Poppins",
};
function AdminMainSlider() {
    const { promotionList } = useSelector((state) => state.promotionData)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showNo, setShowNo] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const [selectedId, setSelectedId] = useState(null);
    const [fallbackMap, setFallbackMap] = useState({});

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const handleImageError = (id) => {
        setFallbackMap((prev) => ({ ...prev, [id]: true }));
    };

    const handleNoChange = (event) => {
        setShowNo(event.target.value);
    };

    const router = useRouter();

    const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        dispatch(GetPromotionListService(page, showNo, search))
    }, [page, showNo, search])

    const searchSubmit = () => {
        dispatch(GetPromotionListService(page, showNo, search))
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
                    Promotion List
                </Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
                    startIcon={<AddIcon />}
                    onClick={() => router.push(`/admin/promotionlist/add`)}
                >
                    Add Promotion List
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
                            <TableCell style={rowText}>Title</TableCell>
                            <TableCell style={rowText}>url</TableCell>
                            <TableCell style={rowText}>Image</TableCell>
                            <TableCell style={rowText}>Status</TableCell>
                            <TableCell align="right" style={rowText}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {promotionList && promotionList?.promotions?.map((row, i) => {
                            const id = row?._id || row?.title; // Unique identifier
                            const fallback = fallbackMap[id];
                            const imageUrl = fallback
                                ? `https://assets2.drugcarts.com/admincolor/homepage/slider/${row?.image}`
                                : `${process.env.NEXT_PUBLIC_IMAGE_URL}/admincolor/homepage/slider/${row?.image}`;
                            return (
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
                                        {row?.title}
                                    </TableCell>
                                    <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                        {row?.url}
                                    </TableCell>
                                    <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                        {row?.image ? (
                                            <Avatar
                                                alt={row?.title}
                                                src={imageUrl}
                                                style={{ width: 80, height: 24 }}
                                                variant="rounded"
                                                onError={() => handleImageError(id)}
                                            />
                                        ) : (
                                            <FormHelperText error>No Image</FormHelperText>
                                        )}
                                    </TableCell>
                                    <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                                        {row?.status}
                                    </TableCell>
                                    <TableCell
                                        sx={{ fontFamily: rowText.fontFamily }}
                                        align="right"
                                    >
                                        <button onClick={() => {
                                            router.push(`/admin/promotionlist/${row?._id}`)
                                        }}>
                                            <CreateIcon color="primary" />
                                        </button>
                                        <button onClick={() => setSelectedId(row._id)}>
                                            <DeleteIcon color='error' />
                                        </button>
                                    </TableCell>
                                    <DeleteModal
                                        open={selectedId === row._id}
                                        setOpen={() => setSelectedId(null)}
                                        title={"Delete Promotion"}
                                        description={`Are you sure you want to delete ${row?.title} ?`}
                                        onSubmit={async () => {
                                            await dispatch(DeletePromotionService(row._id));
                                            setSelectedId(null);
                                        }}
                                    />
                                </TableRow>
                            )
                        })}
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
                <Typography fontFamily={"Poppins"}>Showing 1-{showNo} of {promotionList?.pagination?.totalItems} entries</Typography>
                <br />
                <Pagination
                    size="large"
                    count={promotionList?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </Box>
    );
}

export default AdminMainSlider;

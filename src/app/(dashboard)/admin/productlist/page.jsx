"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, Button, Grid2, Typography } from "@mui/material";
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
import {
  GetProductService,
  GetProductIdService,
  DeleteProductService,
} from "@/services/productService";
import DeleteModal from "@/components/admin/modal/DeleteModal";
import { tableText } from '@/utils/textFormat';

const rowText = {
  color: "#fff",
  fontFamily: "Poppins",
};
function ProductList() {
  const { productList, products } = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showNo, setShowNo] = useState(10);
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleNoChange = (event) => {
    setShowNo(event.target.value);
  };

  const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    dispatch(GetProductService(page, showNo, search));
  }, [page, showNo, search]);

  const searchSubmit = () => {
    // dispatch(GetCategoryService(page, showNo, search));
  };

  // console.log('genericList', genericList);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h5"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Product List
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
              <TableCell style={rowText}>Category Name</TableCell>
              <TableCell style={rowText}>Sub Category</TableCell>
              <TableCell style={rowText}>Generic Name</TableCell>
              <TableCell style={rowText}>Product Name</TableCell>
              <TableCell align="center" style={rowText}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList &&
              productList?.products?.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ fontFamily: rowText.fontFamily }}>
                    {i + 1}
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
                    {tableText(row?.product_name, 30)}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontFamily: rowText.fontFamily }}
                  >
                    <button
                    className='mx-1'
                      onClick={() => {
                        router.push(`/admin/productlist/view/${row?._id}`);
                      }}
                    >
                      <VisibilityIcon color="warning" />
                    </button>
                    <button
                    className='mx-1'
                      onClick={() => {
                        router.push(`/admin/product/${row?._id}`);
                      }}
                    >
                      <CreateIcon color="primary" />
                    </button>
                    <button className='mx-1' onClick={() => setSelectedId(row._id)}>
                      <DeleteIcon color='error' />
                    </button>
                  </TableCell>
                  <DeleteModal
                    open={selectedId === row?._id}
                    setOpen={() => setSelectedId(null)}
                    title={"Delete Product"}
                    description={`Are you sure you want to delete ${row?.generices}`}
                    onSubmit={async () => {
                      await dispatch(DeleteProductService(row?._id));
                      setSelectedId(null);
                    }}
                  />
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
        <Typography fontFamily={"Poppins"}>
          Showing 1-{showNo} of {productList?.product?.pagination?.totalItems}{" "}
          entries
        </Typography>
        <br />
        <Pagination
          size="large"
          count={productList?.pagination?.totalPages}
          page={page}
          color="secondary"
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
}

export default ProductList;

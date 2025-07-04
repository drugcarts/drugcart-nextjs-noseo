"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import Pagination from "@mui/material/Pagination";
import SearchInput from "@/components/admin/input/SearchInput";
import DDInput from "@/components/admin/input/DDInput";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteOrderprescriptionService,
  GetOrderprescriptionService,
} from "@/services/orderPrescriptionService";
import DeleteModal from "@/components/admin/modal/DeleteModal";
import { useRole } from "@/hooks/useRole";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("pizza burger", 356, 16.0, 49, 3.9),
  createData("sultiute", 356, 16.0, 49, 3.9),
];
const rowText = {
  color: "#fff",
  fontFamily: "Poppins",
};
function OrderPrescriptionPage() {
  const { orderprescriptionList } = useSelector(
    (state) => state.orderPrescriptionData
  );
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showNo, setShowNo] = useState(10);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { role } = useRole();

  const handleNoChange = (event) => {
    setShowNo(event.target.value);
  };

  const router = useRouter();

  const userEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    dispatch(GetOrderprescriptionService(page, showNo, search));
  }, [page, showNo, search]);

  const searchSubmit = () => {
    dispatch(GetOrderprescriptionService(page, showNo, search));
  };

  console.log(orderprescriptionList, "orderprescriptionList");
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h5"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Order Prescription
        </Typography>
        {/* <Button
          color="secondary"
          variant="contained"
          style={{ textTransform: "capitalize", fontFamily: "Poppins" }}
          startIcon={<AddIcon />}
          onClick={() => router.push(`/admin/orderprescription/add`)}
        >
          Add Order Prescription
        </Button> */}
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
              <TableCell style={rowText}>Enquiry type</TableCell>
              <TableCell style={rowText}>Prescription</TableCell>
              <TableCell style={rowText}>Customer Address</TableCell>
              <TableCell align="right" style={rowText}>
                Status
              </TableCell>
              <TableCell align="right" style={rowText}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderprescriptionList &&
              orderprescriptionList?.order_prescriptions?.map((row, i) => (
                <TableRow
                  key={row?.sno}
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
                    {row?.enquirytype}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    component="th"
                    scope="row"
                  >
                       <a href={row?.rximage} target="_blank" className={"text-blue-700  font-medium"}>{"View File"}</a>
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    component="th"
                    scope="row"
                  >
                    <>
                      {row?.type}, {row?.cus_name} {row?.lastname},
                      <br />
                      {row?.phone} , {row?.email}, <br />
                      {row?.address},{row?.town}, <br />
                      {row?.country}, {row?.state}, {row?.postcode} <br />
                    </>
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    align="right"
                  >
                    {row?.status}
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: rowText.fontFamily }}
                    align="right"
                  >
                    <DeleteModal
                      open={openModal}
                      setOpen={setOpenModal}
                      title={"Delete OrderPrescription"}
                      description={`Are you sure you want to delete ${row?.cus_name}`}
                      onSubmit={() =>
                        dispatch(DeleteOrderprescriptionService(row?._id))
                      }
                    />
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
        <Typography fontFamily={"Poppins"}>
          Showing 1-{showNo} of {orderprescriptionList?.pagination?.totalItems}{" "}
          entries
        </Typography>
        <br />
        <Pagination
          size="large"
          count={orderprescriptionList?.pagination?.totalPages}
          page={page}
          color="secondary"
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
}

export default OrderPrescriptionPage;

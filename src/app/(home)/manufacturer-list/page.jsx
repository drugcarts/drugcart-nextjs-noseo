"use client";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLetterManufactuerService } from "@/services/manufactuerService";
import { Box, Pagination, Typography } from "@mui/material";
import Link from "next/link";

const ManufactuerList = () => {
  const {  firstLetter } = useSelector((state) => state.manufactuerData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    dispatch(GetLetterManufactuerService(page, 10, selectedLetter));
  }, [page, selectedLetter]);

  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="py-2 text-xl font-bold">
          <h2>Search Manufacturer Name</h2>
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {alphabet.map((letter, i) => (
              <button
                className={`${selectedLetter === letter ? "bg-[#B7084B]" : "bg-[#35A24D]"
                  } px-2 text-white rounded-md`}
                key={i}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className={`${selectedLetter === "" ? "bg-[#B7084B]" : "bg-[#35A24D]"} px-2 text-white rounded-md`}
              onClick={() => {
                setSelectedLetter("")
                setPage(1)
              }}
            >
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
          {firstLetter?.manufactuers?.map((row, i) => (
            <div
              key={i}
              className="grid border-[1.5px] p-4 cursor-pointer bg-white border-gray-200 py-5"
            >
              <Link href={`/manufacturer/${row?.manufactuerurl}`} className="text-center">
              <ListAltIcon
                className="mx-auto opacity-30 text-[red]"
                style={{ fontSize: "40px" }}
              />
              <p className="text-center font-bold">
                <span>{row?.manufactuername}</span>
              </p>
              </Link>
            </div>
          ))}
        </div>
        <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
          <Typography fontFamily={"Poppins"}>Showing 1-{10} of {firstLetter?.pagination?.totalItems} entries</Typography>
          <br />
          <Pagination
            size="large"
            count={firstLetter?.pagination?.totalPages}
            page={page}
            color="secondary"
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      </section>
    </>
  );
};

export default ManufactuerList;

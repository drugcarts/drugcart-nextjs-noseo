"use client";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useRouter, usePathname } from "next/navigation";
import { Box, Pagination, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TocIcon from "@mui/icons-material/Toc";
import { GetGeneticService, GetLetterGeneticService } from "@/services/genericService";

const GenericMoleculeIndex = () => {
  const { genericList, firstLetter } = useSelector((state) => state.genericData);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showNo, setShowNo] = useState(10);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    dispatch(GetLetterGeneticService(page, 10, selectedLetter));
  }, [page, selectedLetter]);

  const filteredConditions =
    selectedLetter === "All"
      ? genericList?.generics
      : genericList?.generics?.filter((c) =>
        c.generices.startsWith(selectedLetter)
      );

  const genericmoleculeClick = (gen_url) => {
    router.push(`/generic-products/${gen_url}`);
  };
  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="py-2 text-xl font-bold m-4">
          <h2>Find Your Generic Medicines A to Z</h2>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 m-4">
          {firstLetter?.generics &&
            firstLetter?.generics?.map((row, i) => (
              <div
                key={i}
                className="grid border-[1.5px] p-4 cursor-pointer bg-white border-gray-200 py-5"
                onClick={() => genericmoleculeClick(row?.url)}
              >
                <TocIcon
                  className="mx-auto opacity-30 text-[red]"
                  style={{ fontSize: "40px" }}
                />
                <p className="text-center font-bold">
                  <span>{row?.generices}</span>
                </p>
              </div>
            ))}
        </div>
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontFamily={"Poppins"}>
            Showing 1-{showNo} of {firstLetter?.pagination?.totalItems} entries
          </Typography>
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

export default GenericMoleculeIndex;

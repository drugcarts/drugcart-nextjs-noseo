"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Grid2,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import ImageField from "@/components/admin/AutoComplete/ImageField";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryService } from '@/services/categoryService';
import { GetGeneticService } from "@/services/genericService";
import { GetProductNameService } from "@/services/productService";

function MedicineCat() {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categoryData)
  const { genericList } = useSelector((state) => state.genericData)
  const { productList, productName } = useSelector((state) => state.productData);
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [protectsearch, setProductSearch] = useState("")
  const [selectedLetter, setSelectedLetter] = useState("A");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    dispatch(GetCategoryService())
    dispatch(GetGeneticService())
    dispatch(GetProductNameService(1, 10, protectsearch))
  }, [protectsearch])

  // Filter conditions based on first letter of the name
  const filteredConditions =
    selectedLetter === "All"
      ? categories?.categories
      : categories?.categories?.filter((c) => c.category_name.startsWith(selectedLetter));

  console.log('search', search);

  const uniqueArray = genericList?.generics?.filter((v, i, a) => a.findIndex(t => (t.url === v?.url)) === i)

  const handleValueSelect = (event, newValue) => {
    if (newValue) {
      router.push(`/admin/genericproducts/${newValue?.url}`);
    }
  };
  const handleValueProductSelect = (event, newValue) => {
    if (newValue) {
      router.push(`/admin/productlist/${newValue?._id}`);
    }
  };

  return (
    <Box>
      <Box>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            {/* <SearchField title="Generic Name Search" /> */}
            <SearchField
              title="Generic Name Search"
              data={uniqueArray}
              value={search}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.generices || "")}
              onChange={handleValueSelect}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }} marginLeft={"auto"}>
            <ImageField title={"Brand Name Search (Product name)"} data={productName?.products}
              value={protectsearch}
              getOptionLabel={(option) => (typeof option === "string" ? option : option?.product_name || "")}
              onInputChange={(event, newValue) => setProductSearch(newValue)}
              onChange={handleValueProductSelect} />
          </Grid2>
        </Grid2>
      </Box>
      <div className="p-4">
        <Typography variant="h5" align="center" gutterBottom>
          A to Z
        </Typography>

        <div className="flex justify-center flex-wrap gap-2 my-4">
          {alphabet.map((letter, i) => (
            <Button
              size="small"
              key={i}
              variant={selectedLetter === letter ? "contained" : "outlined"}
              color="success"
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </Button>
          ))}
          <Button
            size="small"
            variant={selectedLetter === "All" ? "contained" : "outlined"}
            color="success"
            onClick={() => setSelectedLetter("All")}
          >
            View All
          </Button>
        </div>

        <Typography variant="h6">{selectedLetter}</Typography>
        <Grid2 container spacing={2}>
          {filteredConditions?.map((condition, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Link href={`/admin/medicinesubcategory/${condition?.url}`}>
                <Card elevation={3} className="p-2 cursor-pointer">
                  <CardContent className="flex flex-col items-center">
                    <Typography variant="h6" align="center" fontWeight="bold">
                      {condition?.category_name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </Box>
  );
}

export default MedicineCat;

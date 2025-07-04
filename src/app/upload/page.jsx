"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"; // Import Axios
import ImageInput from "@/components/admin/input/ImageInput"; // Your ImageInput component

const UploadForm = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleCategoryImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const formik = useFormik({
    initialValues: {
      image: null,
    },
    validationSchema: yup.object({
      image: yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("file", values.image);
      formData.append("folder", "maycategory");

      try {
        const res = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res.status === 200) {
          setImageUrl(res.data.url || res.data.fileName); // Adjust based on API response
          console.log("Upload success:", res.data);
          resetForm(); // optional reset
        } else {
          alert("Upload failed");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Upload error");
      }
    },
  });

  console.log('imageUrl', imageUrl);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <ImageInput
              name="image"
              type="file"
              onChange={handleCategoryImage}
              error={formik.touched.image ? formik.errors.image : null}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-sm text-red-600 mt-1">{formik.errors.image}</p>
            )}
          </div>
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
        </div>

        {imageUrl && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Uploaded Image Preview</h3>
            <img
              src={imageUrl}
              alt="Uploaded"
              className="mt-2 max-w-full h-auto rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;

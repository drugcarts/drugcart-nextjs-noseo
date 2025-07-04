"use client";
import { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { IMAGES } from "@/components/common/images";
import PrescriptionCard from "@/components/common/PrescriptionCard";
import { PostOrderprescriptionService } from "@/services/orderPrescriptionService"
import axios from "axios";
import { useDispatch } from "react-redux";

const PrescripUpload = () => {
  const [image, setImage] = useState(null);
  const [type, setType] = useState("Home");
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch()

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      enquirytype: "",
      rximage: "",
      cus_name: "",
      type: "Home",
      lastname: "",
      email: "",
      lastname: "",
      phone: "",
      address: "",
      postcode: "",
      state: "",
      country: "",
      town: "",
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      // await dispatch(PostOrderprescriptionService(data, resetForm))
      if (!selectedFile) {
        alert("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("folder", "prescriptions");

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          setSelectedFile(null);
          await dispatch(PostOrderprescriptionService({ ...data, rximage: response.data.url }, resetForm))
        } else {
          alert("Upload failed");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Error uploading file");
      }
    },
  });

  return (
    <>
      <section className="max-w-7xl mx-auto mt-3">
        <div className="flex flex-wrap h-62 px-10 justify-center items-center bg-[#ADC79B]">
          <div className="w-full md:w-1/2 py-6">
            <h3 className="mb-6 text-xl md:text-3xl text-white font-bold">
              Order Prescriptions Without the Hassle
            </h3>
            <p className="text-[#B7084B] text-[14px] md:text-xl">
              DrugCarts make a wide range of prescription medicines and other
              health products conveniently available all across India.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              priority
              src={IMAGES.MEDICINEPRESCRIPTION}
              alt="Ayush Banner"
              className="w-[100%] h-[300px] md:w-[70%] md:h-[350px] rounded-lg p-6 mx-auto"
            />
          </div>
        </div>

        <div className="py-4 my-5 rounded-md">
          <p className="text-center py-6 w-full mx-auto text-xl md:text-2xl font-bold">
            ORDER MEDICINES IN 3 STEPS{" "}
          </p>
          <div className="flex flex-wrap h-62 justify-center items-center">
            <div className="w-full md:w-1/3 justify-center items-center">
              <Image
                src={IMAGES.UPLOADICONS}
                alt="Drugcarts Vission"
                className="w-12 mx-auto"
              />
              <h2 className="text-md md:text-xl text-center py-4 font-bold text-[#4C4C95] ">
                Upload a valid prescription
              </h2>
              <p className="text-md text-center px-6">
                A valid prescription is an order for drugs or medical supplies,
                written and signed and then
              </p>
            </div>
            <div className="w-full md:w-1/3 justify-center items-center">
              <Image
                src={IMAGES.CALLICONS}
                alt="Drugcarts Vission"
                className="w-12 mx-auto"
              />
              <h2 className="text-xl text-center py-4 font-bold text-[#4C4C95] ">
                Receive a confirmation call
              </h2>
              <p className="text-md text-center px-6">
                Will you be able to make your appointment? If you need to
                reschedule, please let me know at your earliest convenience.
              </p>
            </div>
            <div className="w-full md:w-1/3 justify-center items-center">
              <Image
                src={IMAGES.DELIVERYICONS}
                alt="Drugcarts Vission"
                className="w-12 mx-auto"
              />
              <h2 className="text-xl text-center py-4 font-bold text-[#4C4C95] ">
                Delivery at your door step
              </h2>
              <p className="text-md text-center px-6">
                Door Step Delivery – This delivery method involves getting the
                product delivered to your front door step.
              </p>
            </div>
            <div className="w-full md:w-1/3"></div>
          </div>
        </div>

        <div className="bg-[#EBEBFF] border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            How its Work
          </h2>
          <p className="text-center">
            A valid prescription is an order for drugs or medical supplies,
            written and signed and then
          </p>
          <div className="flex flex-wrap h-62 justify-center items-center mt-10">
            <div className="w-full md:w-3/5 justify-center items-center bg-white p-4 rounded-lg">
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-full md:w-3/3 text-center text-[14px] rounded">
                  <h3 className="text-lg md:text-2xl font-bold text-center">
                    Upload photo of your prescription
                  </h3>
                  <PrescriptionCard
                    className="shadow-lg rounded-2xl items-center justify-center w-24 mx-auto rounded overflow-hidden"
                    image={IMAGES.PRESCRIPTIONICON}
                    file={selectedFile}
                    title={"Browse files to upload your prescription"}
                    imageformat={"(JPG, JPEG, PNG, PDF)"}
                    btntext={"Upload"}
                    onChange={handleFileChange}
                    disabled={true}
                  />
                  <div className="p-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="enquirytype"
                        value="Search and add Medicines"
                        checked={formik.values.enquirytype === "Search and add Medicines"}
                        onChange={formik.handleChange}
                        className="cursor-pointer"
                      />
                      <span>Search and add Medicines</span>
                    </label>
                    <label className="flex items-center space-x-2 mt-2 py-6">
                      <input
                        type="radio"
                        name="enquirytype"
                        value="Ask Drugcarts to Call"
                        checked={formik.values.enquirytype === "Ask Drugcarts to Call"}
                        onChange={formik.handleChange}
                        className="cursor-pointer"
                      />
                      <div className="flex">
                        <span className="w-[45%]">Ask Drugcarts to Call </span>
                        <span className="w-[55%] text-[8px]">
                          Within 30 mins to Confirm Your Order Medicines.
                        </span>
                      </div>
                    </label>
                    <label className="flex items-center space-x-2 mt-2">
                      <input
                        type="radio"
                        name="enquirytype"
                        value="I want all the Medicines in Prescription"
                        checked={formik.values.enquirytype === "I want all the Medicines in Prescription"}
                        onChange={formik.handleChange}
                        className="cursor-pointer"
                      />
                      <span> I want all the Medicines in Prescription</span>
                    </label>
                    {/* <p className="mt-4">Selected Option: <strong>{selectedOption}</strong></p> */}
                  </div>
                  <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border p-2 rounded w-full"
                        value={formik.values.cus_name}
                        onChange={formik.handleChange("cus_name")}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border p-2 rounded w-full"
                        value={formik.values.lastname}
                        onChange={formik.handleChange("lastname")}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="E-Mail Address"
                        className="border p-2 rounded w-full"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        required
                      />
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="border p-2 rounded w-full"
                        value={formik.values.phone}
                        onChange={formik.handleChange("phone")}
                        required
                      />
                    </div>
                    <textarea
                      placeholder="Door no/Apart no/Street name"
                      className="border p-2 rounded w-full"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                      required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="number"
                        placeholder="Postal Code"
                        className="border p-2 rounded w-full"
                        value={formik.values.postcode}
                        onChange={formik.handleChange("postcode")}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Town"
                        className="border p-2 rounded w-full"
                        value={formik.values.town}
                        onChange={formik.handleChange("town")}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="State"
                        className="border p-2 rounded w-full"
                        value={formik.values.state}
                        onChange={formik.handleChange("state")}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        className="border p-2 rounded w-full"
                        value={formik.values.country}
                        onChange={formik.handleChange("country")}
                        required
                      />
                    </div>
                    <h3 className="block text-gray-700 mb-1 text-left font-bold">
                      Type of Place
                    </h3>
                    <div className="flex flex-wrap gap-4 mx-4">
                      <button
                        type="button"
                        className={`px-4 py-2 ${type === "Home"
                            ? "bg-green-600 text-white"
                            : "bg-gray-300 text-black"
                          } rounded mr-2`}
                        onClick={() => {
                          setType("Home");
                          formik.setFieldValue("type", "Home");
                        }}
                      >
                        Home
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 ${type === "Office"
                            ? "bg-green-600 text-white"
                            : "bg-gray-300 text-black"
                          } rounded mr-2`}
                        onClick={() => {
                          setType("Office");
                          formik.setFieldValue("type", "Office");
                        }}
                      >
                        Office
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 ${type === "Others"
                            ? "bg-green-600 text-white"
                            : "bg-gray-300 text-black"
                          } rounded mr-2`}
                        onClick={() => {
                          setType("Others");
                          formik.setFieldValue("type", "Others");
                        }}
                      >
                        Others
                      </button>
                    </div>
                    <div className="flex justify-end my-3">
                      <button
                        type="submit"
                        className="w-40 bg-pink-700 text-white py-2 rounded mr-2"
                      >
                        Proceed
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 justify-center items-center">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Valid Prescription
              </h2>
              <Image
                src={IMAGES.PRESCRIPTIONFORMAT}
                alt="prescription format"
                className="w-[80%] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrescripUpload;

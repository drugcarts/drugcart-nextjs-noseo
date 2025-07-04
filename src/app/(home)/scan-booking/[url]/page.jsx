"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostScanBookingService } from "@/services/scanBookingService";
import { GetScanListService } from "@/services/scanService";
import { useSelector, useDispatch } from "react-redux";

const ScanBooking = () => {
    const { scanList } = useSelector((state) => state.scanData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetScanListService());
    }, []);

    const formik = useFormik({
        initialValues: {
            scanName: "",
            city: "",
            centre: "",
            test: "",
            address: "",
            name: "",
            phone: "",
            email: "",
            date: "",
            subject: "",
        },
        validationSchema: yup.object({
            scanName: yup.string().required("Scan Name is required"),
            city: yup.string().required("City is required"),
            centre: yup.string().required("Centre is required"),
            test: yup.string().required("Test is required"),
            address: yup.string().required("Address is required"),
            name: yup.string().required("Name is required"),
            phone: yup.string().required("Phone is required"),
            email: yup.string().email("Invalid email").required("Email is required"),
            date: yup.date().required("Date is required"),
            subject: yup.string().required("Subject is required"),
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PostScanBookingService(data, resetForm));
            resetForm();
        },
    });

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="bg-[#eee] p-3 text-[#B7084B] font-bold text-xl text-center">
                <h1>Book Your Test</h1>
            </div>
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <select
                            name="scanName"
                            className="w-full p-2 border rounded-md"
                            value={formik.values.scanName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Select Service</option>
                            {scanList?.scans?.map((item, i) => (
                                <option key={i} value={item?.scantestname}>
                                    {item?.scantestname}
                                </option>
                            ))}
                        </select>
                        {formik.touched.scanName && formik.errors.scanName && <p className="text-red-500 text-[12px] m-1">{formik.errors.scanName}</p>}
                    </div>

                    <div>
                        <select
                            name="city"
                            className="w-full p-2 border rounded-md"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Select City</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Chengalpattu">Chengalpattu</option>
                            <option value="Kanchipuram">Kanchipuram</option>
                        </select>
                        {formik.touched.city && formik.errors.city && <p className="text-red-500 text-[12px] m-1">{formik.errors.city}</p>}
                    </div>
                    <div>
                        <select
                            name="centre"
                            className="w-full p-2 border rounded-md"
                            value={formik.values.centre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Select Centre</option>
                            <option value="PET">PET Centre</option>
                            <option value="CT">CT Centre</option>
                        </select>
                        {formik.touched.centre && formik.errors.centre && <p className="text-red-500 text-[12px] m-1">{formik.errors.centre}</p>}
                    </div>
                    <div>
                        <select
                            name="test"
                            className="w-full p-2 border rounded-md"
                            value={formik.values.test}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Select Test</option>
                            <option value="test1">Test 1</option>
                            <option value="test2">Test 2</option>
                            <option value="test3">Test 2</option>
                        </select>
                        {formik.touched.test && formik.errors.test && <p className="text-red-500 text-[12px] m-1">{formik.errors.test}</p>}
                    </div>
                </div>
                <div>
                    <textarea
                        name="address"
                        className="w-full p-2 border rounded-md mt-4"
                        placeholder="Address"
                        rows="2"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.address && formik.errors.address && <p className="text-red-500 text-[12px] m-1">{formik.errors.address}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2 border rounded-md"
                            placeholder="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && <p className="text-red-500 text-[12px] m-1">{formik.errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="phone"
                            className="w-full p-2 border rounded-md"
                            placeholder="Phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-[12px] m-1">{formik.errors.phone}</p>}
                    </div>
                    <div>
                        <input
                            name="email"
                            className="w-full p-2 border rounded-md"
                            placeholder="E-Mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && <p className="text-red-500 text-[12px] m-1">{formik.errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="date"
                            name="date"
                            className="w-full p-2 border rounded-md"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.date && formik.errors.date && <p className="text-red-500 text-[12px] m-1">{formik.errors.date}</p>}
                    </div>
                </div>
                <div>
                    <textarea
                        name="subject"
                        className="w-full p-2 border rounded-md mt-4"
                        placeholder="Enter your Subject"
                        rows="4"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.subject && formik.errors.subject && <p className="text-red-500 text-[12px] m-1">{formik.errors.subject}</p>}
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-700" onClick={formik.handleSubmit}>
                    Submit
                </button>
            </div >
        </section >
    );
};

export default ScanBooking;

"use client"
import React, { useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams, useRouter } from 'next/navigation';
import { PostNotifyService } from '@/services/notifyService'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductUrlService } from "@/services/productService"
function NotifyPage() {
    const { product } = useSelector((state) => state.productData);
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetProductUrlService(params.url))
    }, [params.url])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            notname: "",
            notemail: "",
            notphone: "",
            notproname: product?.product_name,
            notprourl: params.url
        },
        validationSchema: yup.object({
            notname: yup.string().required("Name is Required"),
            notemail: yup.string().email().required("Email is Required"),
            notphone: yup.string()
                .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
                .required("Mobile number is required"),
        }),
        onSubmit: (data, { resetForm }) => {
            console.log(data);
            dispatch(PostNotifyService(data, resetForm))
        },
    });

    return (
        <section className="px-auto md:px-12 mt-3">
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-poppins)]">Product Notify</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="mobile" className="block text-sm font-bold text-black">
                            Name
                        </label>
                        <input
                            type="text"
                            id="notname"
                            value={formik.values.notname}
                            onChange={formik.handleChange("notname")}
                            placeholder="Enter your Name"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <p className="text-red-600 text-sm my-2">{formik.touched.notname ? formik.errors.notname : null}</p>
                    </div>
                    <div className="">
                        <label htmlFor="mobile" className="block text-sm font-bold text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            id="notemail"
                            value={formik.values.notemail}
                            onChange={formik.handleChange("notemail")}
                            placeholder="Enter your Email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <p className="text-red-600 text-sm my-2 ml-1">{formik.touched.notemail ? formik.errors.notemail : null}</p>
                    </div>
                    <div className="">
                        <label htmlFor="mobile" className="block text-sm font-bold text-black">
                            Mobile number
                        </label>
                        <input
                            type="tel"
                            id="notphone"
                            value={formik.values.notphone}
                            onChange={formik.handleChange("notphone")}
                            placeholder="Enter your Mobile number"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <p className="text-red-600 text-sm my-2">{formik.touched.notphone ? formik.errors.notphone : null}</p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-45 mx-auto mt-4 bg-bgcolor text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition"
                    onClick={formik.handleSubmit}
                >
                    Submit
                </button>
            </div>
        </section>

    )
}

export default NotifyPage
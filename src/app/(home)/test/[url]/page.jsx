"use client";
import { IMAGES } from '@/components/common/images';
import Image from 'next/image';
import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import { GetTestUrlService } from '@/services/testPackageService';
import { PostLabBookingService } from '@/services/labBookingService';
import { useParams } from 'next/navigation';
import { useFormik } from "formik";
import * as yup from "yup";

const options = [
    { id: "fastingbloodsugar", label: "Fasting Blood Sugar(FBS) @ Rs. 149 / Person" },
    { id: "crptest", label: "CRP Test @ Rs. 400 / Person" },
    { id: "esrtest", label: "ESR Test @ Rs. 200 / Person" },
    { id: "covid", label: "Covid Antibody IgG @ Rs. 390 / Person" },
    { id: "urineanalysis", label: "Complete Urine Analysis @ Rs. 300 / Person" },
    { id: "heartattach", label: "Troponin - Heart Attack Risk Test (ACTNI) @ Rs. 500/Person" },
];

const faqs = [
    {
        question: "What full body checkup includes?",
        answer: `A Correct prescription has the following information:
      - Name and address of the Doctor
      - Doctor's stamp or signature
      - Patient name and age
      - Date of visit or date of the prescription
      - Name of medicine, dosage, strength and duration for which it is required and direction to take the medicine`,
    },
    {
        question: "How much blood is required for full body test?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "How important is full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "How do I prepare for a full body checkup?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "Can we eat anything before full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "What is a 12 hour fast for blood test?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "How do I prepare for a full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "How do I prepare for a full body checkup?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
]

const LabTestDetail = () => {
    const { testUrl } = useSelector((state) => state.testPackageData)
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(false);
    const [selected, setSelected] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);
    const params = useParams()

    useEffect(() => {
        dispatch(GetTestUrlService(params.url))
    }, [params.url])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            packagename: testUrl?.packageName || "",
            noofpersons: "",
            name1: "",
            age1: "",
            gender1: "",
            name2: "",
            age2: "",
            gender2: "",
            name3: "",
            age3: "",
            gender3: "",
            name4: "",
            age4: "",
            gender4: "",
            name5: "",
            age5: "",
            gender5: "",
            email: "",
            phone: "",
            address: "",
            appoitmentdate: "",
            timing: "",
            tests: [],
            hardcopy: false
        },
        validationSchema: yup.object({
            noofpersons: yup.string().required("No of persons is required"),
            name1: yup.string().required("Name is required"),
            age1: yup.string().required("Age is required"),
            gender1: yup.string().required("Gender is required"),
            address: yup.string().required("Address is required"),
            phone: yup
                .string()
                .required("Phone is required")
                .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
            email: yup.string().email("Invalid email").required("Email is required"),
            appoitmentdate: yup.string().required("Date is required"),
            address: yup.string().required("Address is required"),
            timing: yup.string().required("Timing is required")
        }),
        onSubmit: async (data, { resetForm }) => {
            await dispatch(PostLabBookingService(data, resetForm));
            resetForm();
        },
    });

    const handleCheckboxChange = (id) => {
        formik.setFieldValue(
            "tests",
            formik.values.tests.includes(id)
                ? formik.values.tests.filter((item) => item !== id)
                : [...formik.values.tests, id]
        );
    };

    const hardCheckboxChange = () => {
        setIsChecked(!isChecked);
        formik.setFieldValue("hardcopy", !isChecked)
    }

    const totalPriceExtra = Number(testUrl?.price) + 75;

    const totalDiscount = Number(testUrl?.price) - (Number(testUrl?.price) * Number(testUrl?.discount)) / 100;
    const finalPrice = Number(testUrl?.price) - totalDiscount;

    return (
        <section className="max-w-7xl mx-auto mt-3">
            <div className='flex flex-wrap m-2 p-2'>
                <div className='w-full md:w-4/6 border-[1.5px] p-2'>
                    <div className='flex justify-between p-2'>
                        <div>
                            <div className='flex flex-wrap'>
                                <div className='w-full md:w-[80%]'>
                                    <h2 className="text-md md:text-xl font-bold">{testUrl?.packageName} ({testUrl?.testname}) from {testUrl?.name}</h2>
                                    <p>The joy of healthy living comes with good health and proper care. Book your popular test package today</p>
                                </div>
                                <div className='w-full md:w-[20%]'>
                                    <div className="flex">
                                        <span className="text-black text-lg font-bold mr-2">4.0</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-gray-300 text-lg">&#9733;</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center mt-2 space-x-3 md:space-x-6">
                                <p className="text-red-600 text-xl font-bold ">Price {totalDiscount.toFixed(0)}</p>
                                <p className="text-blue-400 text-sm line-through">M.R.P <span className="text-blue-600 font-bold">{testUrl?.price}</span></p>
                                <p className="text-green-600 text-sm font-medium">You Save {testUrl?.discount}%</p>
                            </div>
                            <p className="text-blue-900 border-[1.5px] p-1 w-full md:w-[30%] text-sm my-2 font-bold ">You Save : Rs. {finalPrice.toFixed(0)}</p>
                            <p className='text-[red] font-bold'>Sample Type:</p>
                            <div className="rich-content space-y-4" dangerouslySetInnerHTML={{ __html: testUrl?.required }} />
                            <div className="rich-content space-y-4 my-3" dangerouslySetInnerHTML={{ __html: testUrl?.description }} />
                            <h3 className='mt-2 font-bold text-md text-blue-600'>List of Tests Included:</h3>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Lab Description</h3>
                            <div className="rich-content space-y-4 my-3" dangerouslySetInnerHTML={{ __html: testUrl?.labdescription }} />
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Test Requirement</h3>
                            <div className="rich-content space-y-4 my-3" dangerouslySetInnerHTML={{ __html: testUrl?.required }} />
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Lab Includes</h3>
                            <div className="rich-content space-y-4 my-3" dangerouslySetInnerHTML={{ __html: testUrl?.testincludes }} />
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Report Timing</h3>
                            <p className='my-2'>{testUrl?.deliverytiming}</p>
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Booking Procedure</h3>
                            <div className="rich-content space-y-4 my-3" dangerouslySetInnerHTML={{ __html: testUrl?.procedure }} />
                            <h3 className='mt-2 font-bold text-md bg-[#35ac44] text-white p-2'>Note</h3>
                            <p className='my-2'>{testUrl?.note}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/6 border-[1.5px] p-2'>
                    <h4 className="bg-[#0082c8] p-2 text-white">Thyrocare Aarogyam 1.2.Package</h4>
                    <h4 className='font-bold my-2'>Book Now, Pay Later </h4>
                    <p>You will get a payment link at the time of sample collection. CASH payment option is NOT available at present scenario. You can also make the payment by <b>Scan QR code</b> at the time of collection.</p>
                    <label>Number of Persons</label>
                    <select
                        name="noofpersons"
                        className="border p-2 rounded w-full my-2"
                        value={formik.values.noofpersons}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {formik.touched.noofpersons && formik.errors.noofpersons && <p className="text-red-500 text-[12px] ml-2">{formik.errors.noofpersons}</p>}
                    <div>
                        <input
                            name="name1"
                            type="text"
                            placeholder="Beneficiary Name 1"
                            className="border p-2 rounded w-full my-2"
                            value={formik.values.name1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name1 && formik.errors.name1 && <p className="text-red-500 text-[12px] ml-2">{formik.errors.name1}</p>}
                        <div className='flex gap-3'>
                            <div>
                                <select
                                    name="gender1"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.gender1}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="">--Please Gender--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {formik.touched.gender1 && formik.errors.gender1 && <p className="text-red-500 text-[12px] ml-2">{formik.errors.gender1}</p>}
                            </div>
                            <div>
                                <input
                                    name="age1"
                                    type="number"
                                    placeholder="Age"
                                    className="border p-2 rounded w-full my-2 h-10"
                                    value={formik.values.age1}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.age1 && formik.errors.age1 && <p className="text-red-500 text-[12px] ml-2">{formik.errors.age1}</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <input
                            name='name2'
                            type="text"
                            placeholder="Beneficiary Name 2"
                            className="border p-2 rounded w-full my-2"
                            value={formik.values.name2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className='flex gap-1'>
                            <select
                                name="gender2"
                                className="border p-2 rounded w-full my-2"
                                value={formik.values.gender2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">--Please Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <input
                                name="age2"
                                type="text"
                                placeholder="Age"
                                className="border p-2 rounded w-full my-2"
                                value={formik.values.age2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <hr />
                    </div>
                    {formik.values.noofpersons === "3" && (
                        <div>
                            <input
                                name='name3'
                                type="text"
                                placeholder="Beneficiary Name 3"
                                className="border p-2 rounded w-full my-2"
                                value={formik.values.name3}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <div className='flex gap-1'>
                                <select
                                    name="gender3"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.gender3}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="">--Please Gender--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <input
                                    name="age3"
                                    type="text"
                                    placeholder="Age 3"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.age3}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <hr />
                        </div>
                    )}
                    {formik.values.noofpersons === "4" && (
                        <>
                            <div>
                                <input
                                    name='name3'
                                    type="text"
                                    placeholder="Beneficiary Name 3"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.name3}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className='flex gap-1'>
                                    <select
                                        name="gender3"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.gender3}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Please Gender--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <input
                                        name="age3"
                                        type="text"
                                        placeholder="Age 3"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.age3}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <hr />
                            </div>
                            <div>
                                <input
                                    name='name4'
                                    type="text"
                                    placeholder="Beneficiary Name 4"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.name4}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className='flex gap-1'>
                                    <select
                                        name="gender4"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.gender4}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Please Gender--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <input
                                        name="age4"
                                        type="text"
                                        placeholder="Age 4"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.age4}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <hr />
                            </div>
                        </>
                    )}
                    {formik.values.noofpersons === "5" && (
                        <>
                            <div>
                                <input
                                    name='name3'
                                    type="text"
                                    placeholder="Beneficiary Name 3"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.name3}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className='flex gap-1'>
                                    <select
                                        name="gender3"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.gender3}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Please Gender--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <input
                                        name="age3"
                                        type="text"
                                        placeholder="Age 3"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.age3}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <hr />
                            </div>
                            <div>
                                <input
                                    name='name4'
                                    type="text"
                                    placeholder="Beneficiary Name 4"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.name4}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className='flex gap-1'>
                                    <select
                                        name="gender4"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.gender4}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Please Gender--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <input
                                        name="age4"
                                        type="text"
                                        placeholder="Age 4"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.age4}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <hr />
                            </div>
                            <div>
                                <input
                                    name='name5'
                                    type="text"
                                    placeholder="Beneficiary Name 5"
                                    className="border p-2 rounded w-full my-2"
                                    value={formik.values.name5}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className='flex gap-1'>
                                    <select
                                        name="gender4"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.gender5}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">--Please Gender--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <input
                                        name="age5"
                                        type="text"
                                        placeholder="Age 5"
                                        className="border p-2 rounded w-full my-2"
                                        value={formik.values.age5}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <hr />
                            </div>
                        </>
                    )}
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="border p-2 rounded w-full my-2"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && <p className="text-red-500 text-[12px] ml-2">{formik.errors.email}</p>}
                    <input
                        name="phone"
                        type="text"
                        placeholder="Mobile(Indian Number Only)"
                        className="border p-2 rounded w-full my-2"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-[12px] ml-2">{formik.errors.phone}</p>}
                    <input
                        name="appoitmentdate"
                        type="date"
                        placeholder="Appoinment Date"
                        className="border p-2 rounded w-full my-2"
                        value={formik.values.appoitmentdate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        min={new Date().toISOString().split("T")[0]}
                    />
                    {formik.touched.appoitmentdate && formik.errors.appoitmentdate && <p className="text-red-500 text-[12px] ml-2">{formik.errors.appoitmentdate}</p>}
                    <input
                        name="timing"
                        type="text"
                        placeholder="Slot Time Ex: (8:20pm)"
                        className="border p-2 rounded w-full my-2"
                        value={formik.values.timing}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.timing && formik.errors.timing && <p className="text-red-500 text-[12px] ml-2">{formik.errors.timing}</p>}
                    <textarea
                        name="address"
                        placeholder="Complete Address"
                        className="border p-2 rounded w-full md:col-span-2 h-32 my-2"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && <p className="text-red-500 text-[12px] ml-2">{formik.errors.address}</p>}
                    <p className='font-bold text-sm my-2'>Order with incomplete/invalid address will be rejected.</p>
                    <h2 className='font-bold text-md'>Tick To Add Additional Tests(Optional)</h2>

                    <div className="justify-center items-center text-md">
                        {options.map((option) => (
                            <label key={option.id} className="flex font-bold items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={formik.values.tests.includes(option.id)}
                                    onChange={() => handleCheckboxChange(option.id)}
                                />

                                {/* Custom Checkbox */}
                                <div
                                    className={`w-4 h-4 flex items-center justify-center border-2 rounded-md  my-2 transition-all ${formik.values.tests.includes(option.id) ? "bg-blue-500 border-blue-500" : "border-gray-400"
                                        }`}
                                >
                                    {formik.values.tests.includes(option.id) && (
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>

                                <span className="text-gray-800 text-xs my-2">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <hr className='my-4' />
                    <div className="flex items-center space-x-2">
                        <input
                            id="checkbox"
                            type="checkbox"
                            checked={isChecked}
                            onChange={hardCheckboxChange}
                            className="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="text-gray-800 text-xs my-2 font-bold">
                            Please Tick To Receive Hard Copy Report,Courier Charges Rs. 75 Extra
                        </label>
                    </div>
                    <h2 className='font-bold text-[14px] my-2 text-[blue]'>Test/Package Price: Rs.{testUrl?.price}</h2>
                    <h2 className='font-bold text-md my-2 text-[green]'>Home Collection Charge: Rs. 0</h2>
                    <h2 className='font-bold text-md text-[red]'>Total Amount: Rs.: {formik.values.hardcopy ? totalPriceExtra : testUrl?.price}</h2>
                    <button className="px-4 py-2 my-4 flex mx-auto bg-[#B7084B] text-white rounded-lg hover:bg-blue-700" onClick={formik.handleSubmit}>
                        Book Now
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-2/3 p-2'>
                    <div className=" bg-white p-2 rounded-lg shadow-md">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className={`flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none ${openIndex === index ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                                        }`}
                                >
                                    {faq.question}
                                    {openIndex === index ? (
                                        <ArrowUpwardIcon className="w-6 h-6" />
                                    ) : (
                                        <ArrowDownwardIcon className="w-6 h-6" />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className="p-4 text-gray-600 bg-white">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-1/3 border-[1.5px] p-2'>
                    <h3 className='font-bold text-md'>Our Shop Category of Tests</h3>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.DIABETESICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Diabetes</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.HEMOGRAMICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Complete Hemogram</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.THYROIDICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Thyroid Test</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.LIPIDICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Lipid Profile</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.LIVERICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Liver Profile</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.KIDNEYICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Kidney Function Test</h3>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4 border-[1.5px]'>
                        <div className='w-[30%]'>
                            <Image
                                priority
                                src={IMAGES.VITAMINICON}
                                alt="Ayush Banner"
                                className="w-16 h-16 mx-auto"
                            /></div>
                        <div className='w-[70%]'>
                            <h3 className='font-bold'>Vitamin Test</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LabTestDetail;
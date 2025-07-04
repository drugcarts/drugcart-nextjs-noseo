"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const CancerCare = () => {
    const { serviceUrl } = useSelector((state) => state.serviceData);
    const dispatch = useDispatch()
    const pathname = usePathname();

    let pathSegments = pathname.split("/").filter(Boolean);
    pathSegments = pathSegments.map((segment) => segment.replace(/-/g, " "));

    const urlText = pathSegments[0].split(" ").join("-")

    useEffect(() => {
        if (pathSegments.length > 0) {
            dispatch(GetServiceUrlService(urlText));
        }
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            service: serviceUrl?.title || "",
            name: "",
            email: "",
            mobile: "",
            city: "",
        },
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostServiceQuiryService(data, resetForm))
        },
    });

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.CANCERBANNER} alt="Cancer Care" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Cancer Care</h2>
                    <p className="text-sm mb-6">Cancer Care</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mb-2 ">Name</label>
                        <input
                            type="text" name="name"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            required
                        />
                        <label className="w-[30%] block md:mt-4 md:mb-2">Mobile</label>
                        <input
                            type="number" name="mobile"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mt-4 md:mb-2">E-Mail</label>
                        <input
                            type="email" name="email"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            required
                        />
                        <label className="w-[30%] block  md:mt-4 md:mb-2">City</label>
                        <input
                            type="text" name="city"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.city}
                            onChange={formik.handleChange("city")}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[50%] mt-6 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                    >
                        Book Now
                    </button>
                </form>
            </div>
            <div className="flex">
                <div className="w-full md:w-[68%] p-2">
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">What Is Cancer?</h1>
                        <p className="my-2"> Although in our life the healthy cells in our bodies get developed make divide of cells and replace them in a controlled manner. Cancer starts when a cell growth is altered so that it multiplies and uncontrolled. A tumor is composed of a cluster of abnormal cells. The disease can occur in at any part of the human body, and its life threatening. </p>
                        <p className="my-2"> Most cancers form tumors, but cancerous are not by tumors. Benign or noncancerous, tumors do not spread to other parts of the body, and won’t create new tumors. </p>
                        <p className="my-2"> Benign tumor are non cancerous in which do not spread the cells, tumors send out healthy cells and mediate with body functions, take the nutrients from body tissues .Sometimes they growth in large causes problem in organs and tissue</p>
                        <p className="my-2"> Malignant tumor is cancerous and invades in other parts of the body. The cell growth occurs by the process called metastasis, where cells travel that enters into the nearby tissue through the lymphatic or blood vessels forming new tumors. It grows in large number of new cells it very dangerous to treat and more fatal.</p>
                        <p className="my-2"> Solid tumors are formed by many cancers, which are group of mass tissue cells. Blood cancer it does not form tumors that are solid called leukemia. </p>
                        <Image priority src={IMAGES.CANCER1} alt="CANCER CARE" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">The Cancer and Normal Cells are different:</h1>
                        <p className="my-2"> There are difference between the cancerous cell and normal cell. Cancer cells are don’t have specialized function than normal cells. Normal cell generally grows into specific cell types and have functions whereas cancer cells are not.</p>
                        <p className="my-2"> Cancer cells they do not send respond to signals from the brain and nervous system that to stop spreading of cells. They have the ability to hide from the immune system and the network of organs, cells and tissues that protect the body from any infections. </p>
                        <p className="my-2"> These tumours play a role to help the immune system consists of cells but not to grow. These cells make the immune system from further getting rid of other cells.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Why it Causes cancer:</h1>
                        <p className="my-2"> These cancer cells are normally a genetic its due to changes in the gene that control cell functions mainly by the way they divide and grow the new cells.</p>
                        <p className="my-2"> Genetic causes can be inherited from parents and due to error on which cells can grows and divide and get damaged to the DNA from environmental exposures. It caused by chemicals and substances such as tobacco smoke, UV rays and radiation</p>
                        <p className="my-2"> Various people have cancer possess with unique characteristics. As they keep grows, different changes may occur. Mutations can cause cells and replaced to instead of die, they form new cells. Tumors can cause a variety of health problems, depending in the growth of the body.</p>
                        <p className="my-2"> Scientists have studied that molecular change it leads to causes cancer. Some characterized by genetic mutations occur in different types of cancer and due to this, they are alterations which are believed it’s genetic. Mutations can cause cells and replaced to instead of die, they form new cells.</p>
                        <Image priority src={IMAGES.CANCER2} alt="Dietitian" className="w-full mx-auto" />
                    </div>
                </div>
                <div className="w-full md:w-[30%] p-2 border-[1.5px]">
                    <h3 className="text-[16px] font-bold text-center uppercase pb-6 mt-6">Physiotherapy Services</h3>
                    <div className="items-center justify-start gap-2 text-[#ff5e00]">
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Back Pain Treatment at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Sports Injury Treatment at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Post Surgical Rehab at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Paralysis Treatment at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Parkinson Disease Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Cerebral Palsy Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Arthritis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Knee Pain Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Elbow Pain Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Foot Care Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Achilles Tendinitis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Supraspinatus Tendinitis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Spondylosis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Ankylosing Spondylitis Treatment at home</h2>
                    </div>
                    <h3 className="text-[16px] font-bold text-center uppercase py-6 mt-6">Our Services</h3>
                    <div className="items-center justify-start gap-2 text-[#ff5e00]">
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Nurse Care at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Elder Care at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Diagnostic at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Doctor Consultations
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Medical Equipment
                        </h2>
                    </div>
                </div>
            </div>

            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Stages of cancer:</h1>
                <p className="my-2"> Cancer can spread in many forms of cell that causes spreading by the process of metastasis, they break away enters into tissue and that travel through the lymph and blood system and then it form newer tumors. A primary tumor is the type of cancer called as metastatic tumor.</p>
                <p className="my-2"> Cancer that spreads from one place where it’s got started infection called metastatic cancer with the same name as original or primary cancer. For example, breast cancer that spreads and forms a metastatic tumor in the lungs is metastatic breast cancer and not regconorized as lung cancer.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Cancer Types</h1>
                <p className="my-2"> The cancer is named by the area and begins with many type of cancers and spread to the other parts of the body.. There are some of the different types of cancers for example Lung cancer begins in the lung cells and brain cancer starts in the brain cells:</p>
                <Image priority src={IMAGES.CANCER3} alt="Dietitian" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">CARCINOMA :</h1>
                <p className="my-2"> This is a type of cancer is formed by the epithelial cells. These start the cells in the skin or other tissues in the inner surfaces of the body. There are different types of carcinoma cells.</p>
                <p className="my-2"> Adenocarcinoma is a type of cancer that begins from the mucus producing cell. This type of tissues that possess mucus fluid called glandular tissues. Generally adenocarcinoma is in prostate, colon, and breast.</p>
                <p className="my-2"> Cancer cells starts from the base layer of the epidermis, the outer layer of the skin Basil cell carcinoma. The some other types of carcinoma are squamous cell and transitional cell carcinoma.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">SARCOMAS :</h1>
                <p className="my-2"> The cancer cells that connect the tissue in the bone, mucus, cartilage and soft tissues include fat, blood vessels, muscles, fibrous and lymph vessels.</p>
                <p className="my-2"> The type of cancer are found in bones are known as osteosarcoma, and the main tissue include malignant fibrous histiocytoma, liposarcoma, and leiomyosarcoma.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">LEUKEMIA :</h1>
                <p className="my-2"> Blood cancers are generally classified as leukemia. They begin at the bone marrow and they create a new blood cells that are due to the abnormal growth in the bone marrow and blood.</p>
                <p className="my-2"> Other types of cancers like lymphoma and myeloma are due to immune system. </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Risk Factors associated with cancer and Treatment :</h1>
                <p className="my-2"> The cause of cancer is due to mutation in the DNA cells. Some of these factors include:</p>
                <p className="my-2">• Carcinogen are exposure to chemical causing cancer</p>
                <p className="my-2">• Exposure to radiation</p>
                <p className="my-2">• unprotected of the sun exposures</p>
                <p className="my-2">• Due to human papilloma virus (HPV)</p>
                <p className="my-2">• Smoking</p>
                <p className="my-2">• Lifestyle changes, such as type of diet and physical activity levelilies </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Cancer Services at our home :</h1>
                <p className="my-2"> Cancer is dangerous and Battling is a difficult task and its emotional journey to the patients and their families. The intensive care treatment usually in multiple hospital visits, leading to direct and indirect costs for medical service. We give your complete treatment for cancer from chemotherapy to palliative care.</p>
                <Image priority src={IMAGES.CANCER4} alt="Dietician" className="w-[60%] my-4" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">When you need us most :</h1>
                <p className="my-2">• administration of adjuvant therapy</p>
                <p className="my-2">• Antibiotic/electrolyte infusion</p>
                <p className="my-2">• Chemotherapy at home</p>
                <p className="my-2">• Neutropenic care</p>
                <p className="my-2">• Doctor suggested with palliative care at end of life,</p>
                <p className="my-2">• Parenteral/nutritional blood transfusion </p>
                <p className="my-2">• PICC line dressing </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Best benefits proved by the patient :</h1>
                <p className="my-2">• Save the 50%of money than hospital</p>
                <p className="my-2">• Fast recovery with low risk of infections</p>
                <p className="my-2">• Daily 24×7 clinical supervision and report to doctors.</p>
                <p className="my-2">• Highly trained nurses and clinical staff.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">We will help you?</h1>
                <p className="my-2"> Through drug carts that we ensure that cancer-affected patients would get the best treatment and help by trained nurses with the knowledge , clinical staff and doctors provide a treatment care with low risk with infection, give a nutritional diet and food with proper treatment medications at home health care service.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">REFERENCES</h1>
                <p className="my-2">1.WWW.healthline.com/health/cancer</p>
                <p className="my-2">2.https://www.webmd.com/cancer/most-common-cancers</p>
                <p className="my-2">3.https://hcah.in/our-services/</p>
            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default CancerCare;
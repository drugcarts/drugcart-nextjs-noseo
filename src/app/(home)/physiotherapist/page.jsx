"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CustomerSaying from "@/components/home-page/CustomerSaying";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const steps = [
    { icon: <PhoneAndroidIcon className="text-red-500 text-3xl" />, title: "REQUEST", desc: "Request for therapeutic massage" },
    { icon: <PersonIcon className="text-blue-500 text-3xl" />, title: "RESPONSE", desc: "Response and book appointment" },
    { icon: <VolunteerActivismIcon className="text-yellow-500 text-3xl" />, title: "THERAPY", desc: "Type of therapy by expert visit at your home" },
    { icon: <BarChartIcon className="text-green-500 text-3xl" />, title: "MONITORING", desc: "Monitoring the patient" },
];

const faqs = [
    {
        question: "Q : Which cities Physiotherapy treatment are available at home?",
        answer: "A : We are currently available in 5 major cities for physiotheraphy treatment in Bengaluru, Chennai, Hyderabad, Mumbai and Pune.",
    },
    {
        question: "Q : May I know a Physiotheraphy near me?",
        answer: "A : Yes, a Nightingales Physiotherapist near to you - Book appointment, request a call to the number +91 1800 103 4530. We will connect you with the nearest physiotherapist",
    },
    {
        question: "Q : Whether a qualified Physiotherapists at Nightingales?",
        answer: "A : yes, we have qualified Physiotherapists with MPT & BPT degrees and they are experienced professionals & and well trained at home care.",
    },
    {
        question: "Q : How to check my condition is improving?",
        answer: "A : Our Physiotherapist measures and monitor the improvement over time through exercises & a course of action for you",
    },
    {
        question: "Q: How long time is taken for physiotherapy session?",
        answer: "A: Session time depends on the patient’s condition and normaly it takes Physiotherapy session of about 45 minutes.",
    },
    {
        question: "Q : If I book appointment of 25 visits, can I postpone or reschedule the visits?",
        answer: "A : Yes. Date and time preferences can be discussed with the Physiotherapist. The appointment will be rescheduled within the agreed duration.",
    },
    {
        question: "Q : whether I can pay online for your services?",
        answer: "A : Yes. Payments are facilitated with a hassle-free online payment.",
    },
    {
        question: "Q : What is the cost one session for Physiotherapy treatment at home?",
        answer: "A : Our cost for Physiotherapy start at INR 750 & depend on the patient condition",
    },
    {
        question: "Q : Is physiotherapy same as massage?",
        answer: "A : Physiotherapy follows a scientific approach to solve the problems and treatment might involve a few massage-like techniques.",
    },
    {
        question: "Q : Did you have a local center for physiotherapy treatment?",
        answer: "A : No. Our experts come to your home and treat your convenience.",
    },
]

const Physiotherapist = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const { serviceUrl } = useSelector((state) => state.serviceData);
    const dispatch = useDispatch()
    const pathname = usePathname();

    let pathSegments = pathname.split("/").filter(Boolean);
    pathSegments = pathSegments.map((segment) => segment.replace(/-/g, " "));

    useEffect(() => {
        dispatch(GetServiceUrlService(pathSegments[0]))
    }, [])

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
            <div className="flex flex-wrap h-62 justify-center items-center ">
                <div className="w-full md:w-[58%] md:h-[300px] p-6 bg-[#E7CEBD] m-2 rounded-md">
                    <h3 className="text-[#4C4C95] font-bold text-xl md:text-3xl mb-6 text-center"> Unlock Your Body Potential</h3>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3">
                            <Image priority src={IMAGES.PHYSIOTHERAPISTBANNER} alt="Logo" className="w-[100%] md:h-[150px]" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-[#F24E1E] text-3xl font-bold mb-5">With Physiolife</h2>
                            <p>We care for the growing needs of our community.
                                We build systems for providing health services for individuals,
                                families, communities and populations in general.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] p-2 text-center bg-[#CEDEFC] rounded-md">
                    <h2 className="font-bold">{serviceUrl?.title}</h2>
                    <p className="text-sm">Visit at Home</p>
                    <p className="text-sm mb-6">Contact Drugcarts when you need best people for healthcare of your loved ones!</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mb-2 text-gray-900">Name</label>
                        <input
                            type="text" name="name"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            required
                        />
                        <label className="w-[30%] block md:mt-4 md:mb-2 text-gray-900">Mobile</label>
                        <input
                            type="number" name="mobile"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mt-4 md:mb-2 text-gray-900">E-Mail</label>
                        <input
                            type="email" name="email"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            required
                        />
                        <label className="w-[30%] block  md:mt-4 md:mb-2 text-gray-900">City</label>
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
            <div className="flex flex-wrap">
                <div className="w-full md:w-[68%] p-2">
                    <h1 className="text-md md:text-xl font-bold">PHYSIOTHERAPY</h1>
                    <p className="my-2"> Physiotherapy or physical therapy, is an allied health science profession that deals with of bio – mechanics , kinesiology, manual and exercise therapy and electrotherapy, to help patients restore to the normal physical mobility how the body works, strength and function</p>

                    <p className="my-2"> Physiotherapists helps you both chronic and acute problems to recover from injuries and disabilities from back, neck, knees pain to the patient</p>

                    <p className="my-2"> Physiotherapy gives training to patient for rehabilitation of patients who suffers from Parkinson’s, Paralysis, Stroke, Multiple Sclerosis and Cerebral Palsy.</p>
                    <Image priority src={IMAGES.PHYSIOTHERAPISTBANNER1} alt="Logo" className="w-full" />

                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">TREATMENT AND BENEFITS OF PHYSIOTHERAPY AT HOME</h1>
                        <ul className="p-4 list-disc leading-7">
                            <li>Convenience to patient</li>
                            <li>Personalized care</li>
                            <li>Heal your problem fast</li>
                            <li>No mobility issues</li>
                            <li>Time management</li>
                            <li>Effective cost</li>
                            <li>Family support and supervision</li>
                        </ul>
                    </div>
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">WHEN YOU NEED A PHYSIOTHERAPIST FOR YOU?</h1>
                        <p className="my-2">Call physiotherapist when u feel discomfort like knee pain, back pain, neck strain over a long time we will visit you experience a particular movement get best treatment from a physiotherapist.</p>
                        <p className="my-2">Physiotherapy has a wide range of specialties and people can take prevention due to medical issues: Neurological issues, Neuromuscular, skeletal, Cardiovascular and Respiratory.</p>
                    </div>
                </div>
                <div className="w-full md:w-[30%] p-2 border-[1.5px] hidden md:block">
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
            <div className="bg-[#F0F5FF]">
                <h3 className="font-bold text-md md:text-xl px-4 pt-4">When You Need Physiotherapy For You ? </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 m-3">
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.INJURYICON} alt="Logo" className="h-20 w-32" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">INJURED WHILE PLAYING</h2>
                            <p className="text-[14px]">The sports / athlete person
                                importance to take
                                care of fitness.</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.PREGNANCYICON} alt="PREGNANCYICON" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">DURING & AFTER PREGNANCY</h2>
                            <p className="text-[14px]">The hormonal changes and
                                relax the ligaments,
                                bolsters back during pregnancy</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.SURGEONSKIN} alt="PREGNANCYICON" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">BEFORE SURGICAL PROCEDURE</h2>
                            <p className="text-[14px]">To make patient comfortable
                                in a best condition
                                during to surgery</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.WHEELCHAIR} alt="PARALYSIS" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">PARALYSIS</h2>
                            <p className="text-[14px]">It needs regular physiotherapy
                                treatment,muscle tone
                                provide to the patient
                                as in paralysis.</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.BACKPAIN} alt="PARKINSON’S DISEASE" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">PARKINSON’S DISEASE</h2>
                            <p className="text-[14px]">Parkinsonism is a neurogenerative
                                disorder its help the patient to
                                get more mobility and independence.</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.PHYSICALTHERAPY} alt="PEDIATRIC PHYSIOTHERAPY" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">PEDIATRIC PHYSIOTHERAPY</h2>
                            <p className="text-[14px]">Helping a child with impairment,
                                physiological and social
                                well being to reach
                                their physiotherapist potential.</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.PAINPOINTS} alt="LIVING WITH CHRONIC PAIN" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">LIVING WITH CHRONIC PAIN</h2>
                            <p className="text-[14px]">A chronic pain
                                continues more
                                than 3-6 months,</p>
                        </div>
                    </div>
                    <div className="flex border-[2px] m-2 p-2">
                        <div className="w-[30%] flex justify-center items-center">
                            <Image priority src={IMAGES.LUNGDISEASE} alt="CHRONIC OBSTRUCTIVE PULMONARY DISEASE" className="h-[90px] w-[90px]" />
                        </div>
                        <div className="w-[70%]">
                            <h2 className="font-bold text-[14px]">CHRONIC OBSTRUCTIVE PULMONARY DISEASE</h2>
                            <p className="text-[14px]">Rehabilitation program for
                                an effective intervention of
                                patients suffers from Chronic Obstructive Pulmonary Disease</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-lg p-6">
                <h1 className="text-md md:text-xl font-bold">HOW WILL YOU PREPARE PHYSIOTHERAPY SESSION AT HOME?</h1>
                <ul className="p-4 list-disc leading-7">
                    <li>Free from ventilated air space, clutter for small exercise, equipments</li>
                    <li>Ensure your clothing with comfortable which improves your joint stability movement by the physiotherapist</li>
                    <li>Area in which you got pain at which level you have a pain exactly.</li>
                    <li>Inform to physiotherapist, how the pain started; what are the problem faced by you.</li>
                    <li>Keep attention to the exercises and ask the question to the physiotherapist.</li>
                </ul>
            </div>
            <div className="shadow-md rounded-lg p-6">
                <h1 className="text-md md:text-xl font-bold">WHY DO PHYSIOTHERAPY EXERCISES?</h1>
                <ul className="p-4 leading-7">
                    <li>Physiotherapy exercises is a essential way to help patient and prevent from injuries and pain related diseases.</li>
                    <li>Physiotherapists are skilled by the medical professionals who will improve the exercises to strengthen muscles and function and asses your problem and get rapid relief. These exercises range from low to high-level postures that repair the body function.</li>
                    <li>In case of medication, as prescribed by a doctor; and benefit from physiotherapy with the exercises.</li>
                    <li>Physiotherapy helps to restore a balanced emotional and mental state.</li>
                </ul>
            </div>
            <div className="shadow-md rounded-lg p-6">
                <h1 className="text-md md:text-xl font-bold">WHAT ARE THE PHYSIOTHERAPY TREATMENTS / PROCEDURES AVAILABLE AT HOME?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="my-2 border-[1.5px] border-[#9ce1e6] rounded p-2">
                        <div className="flex justify-center items-center">
                            <Image priority src={IMAGES.SOFTTISSUE} alt="Logo" className="w-full h-56" />
                        </div>
                        <h2 className="font-bold text-[14px] my-2">JOINT MOBILIZATION AND MANIPULATION</h2>
                        <p className="text-[14px]">Through Walking, Postural Training, Balance Exercises, Traction, Taping, Bandaging, Fitting of Orthosis provide a therapeutic massage.</p>
                    </div>
                    <div className="my-2 border-[1.5px] border-[#9ce1e6] rounded p-2">
                        <div className="flex justify-center items-center">
                            <Image priority src={IMAGES.MOBILIZATION2} alt="Logo" className="w-full h-56" />
                        </div>
                        <h2 className="font-bold text-[14px] my-2">SOFT TISSUE MOBILIZATION</h2>
                        <p className="text-[14px]">The techniques used by hands on your muscles, ligaments and fascia with the goal of breaking adhesions</p>
                    </div>
                    <div className="my-2 border-[1.5px] border-[#9ce1e6] rounded p-2">
                        <div className="flex justify-center items-center">
                            <Image priority src={IMAGES.EXERCISES} alt="Logo" className="w-full h-56" />
                        </div>
                        <h2 className="font-bold text-[14px] my-2">EXERCISE AND STRETCHING REGIMES</h2>
                        <p className="text-[14px]">Crucial part of physiotherapy rehabilitation and increase the effect of performance level by exercise and strength to overcome your muscles weak</p>
                    </div>
                    <div className="my-2 border-[1.5px] border-[#9ce1e6] rounded p-2">
                        <div className="flex justify-center items-center">
                            <Image priority src={IMAGES.IMBALANCE} alt="Logo" className="w-full h-56" />
                        </div>
                        <h2 className="font-bold text-[14px] my-2">MUSCLE IMBALANCE CORRECTION</h2>
                        <p className="text-[14px]">When one side of the body in trouble and other side with strong and that time the whole body will take adjustments to compensate</p>
                    </div>
                    <div className="my-2 border-[1.5px] border-[#9ce1e6] rounded p-2">
                        <div className="flex justify-center items-center">
                            <Image priority src={IMAGES.COLDTHERAPY} alt="Logo" className="w-full h-56" />
                        </div>
                        <h2 className="font-bold text-[14px] my-2">COLD THERAPY / CRYOTHERAPY</h2>
                        <p className="text-[14px]">With use of ice pack is an effective to minimize the pain and swelling ,specially in acute injuries</p>
                    </div>
                    <div className="my-2 border-[1.5px] border-[#9ce1e6] rounded p-2">
                        <div className="flex justify-center items-center">
                            <Image priority src={IMAGES.ACCUPUNCTURE} alt="Logo" className="w-full h-56" />
                        </div>
                        <h2 className="font-bold text-[14px] my-2">ACUPUNCTURE</h2>
                        <p className="text-[14px]">Acupuncture therapy is natural healing process, that enhance your mind with energy, reduce and relieve from the pain</p>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-lg p-6">
                <h1 className="text-md md:text-xl font-bold">WE WILL HELP YOU?</h1>
                <p className="my-2">Physiotherapists treat a patient for an hour depends on stage of the problem they will asses your the problem, diagnose, treatment plan which varies from one person to other patient’s needs and improve the patient mobility and heal your problems</p>
            </div>
            <div className="flex items-center justify-center space-x-16 p-10 bg-gray-100 mt-5">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="p-4 bg-white rounded-full shadow-lg">{step.icon}</div>
                        <h3 className="text-lg font-bold mt-3">{step.title}</h3>
                        <p className="text-sm text-gray-600 max-w-xs">{step.desc}</p>
                        {index < steps.length - 1 && <div className="w-10 h-1 bg-gray-400 mt-4"></div>}
                    </div>
                ))}
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">BENEFITS FOR CHOOSING DRUGCARTS</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    <div className="border-[1.5px] p-4 bg-slate-300">
                        <h2 className="font-bold">Proven Methodologies :</h2>
                        <p>Customized care plans and evidence based practices.</p>
                    </div>
                    <div className="border-[1.5px] p-4 bg-slate-300">
                        <h2 className="font-bold">Tools for Measuring Outcome :</h2>
                        <p>Internationally to monitor the clinical outcomes give assurance for a improvement.</p>
                    </div>
                    <div className="border-[1.5px] p-4 bg-slate-300">
                        <h2 className="font-bold">Patient-centric Approach :</h2>
                        <p>Relationship with the patient, family and with effective communication to patient participation.</p>
                    </div>
                    <div className="border-[1.5px] p-4 bg-slate-300">
                        <h2 className="font-bold">Individualized Care :</h2>
                        <p>Identify the patient needs and care.</p>
                    </div>
                    <div className="border-[1.5px] p-4 bg-slate-300">
                        <h2 className="font-bold">Save Money & Time :</h2>
                        <p>Book a appointment for your convenience and save your time and money.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
                <h2 className="text-md md:text-xl font-bold my-2">FAQ</h2>
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
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <p>Save Money & Time : Book a appointment for your convenience and save your time and money.</p>
            </div>
            <CustomerSaying />
        </section>
    )
}

export default Physiotherapist

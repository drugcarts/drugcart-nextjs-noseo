"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const NewbornBabyCare = () => {
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
                    <Image priority src={IMAGES.NEWBORNBANNER} alt="Newborn Baby Care" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Newborn Baby and Mother Care</h2>
                    <p className="text-sm mb-6">Newborn Baby and Mother Care</p>
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
                        <h1 className="text-md md:text-xl font-bold">Baby Care</h1>
                        <p className="my-2"> Parenthood gives you a lot of joy and is very satisfying but they are some of the task connected with baby care are not easy to achieve. Once you had a baby in your house, they will permanent change as the way you clean. Shortly they will be a new responsibility of parenthood will take with extra caution and care. Some of handy baby care tips it takes lot of time for care and making sure that our little baby is as safe in at home all the time.</p>
                        <p className="my-2"> Every baby is different with different characteristics which makes newborn baby care with different quality for each baby.</p>
                        <p className="my-2"> On the basis of baby needs with the adaptive potentials, a customized baby care plan must be followed.</p>
                        <Image priority src={IMAGES.NEWBORN1} alt="CANCER CARE" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Newborn Baby care</h1>
                        <p className="my-2"> There are many number of baby care centre in our city; one of the best options for a baby care is personalized and effective newborn baby care at home.</p>
                        <p className="my-2"> In the case of a small baby can be very fearful and debility approach and hence small baby care must be perform carefully.</p>
                        <p className="my-2"> When you need help from others there are many number of mothers and baby care centers for an individual you may get contact help from them.</p>
                        <p className="my-2"> Although we have not selected for baby care centre and determined to take care of baby with our own there are some tips that may be helpful.</p>
                        <p className="my-2"> <b>Hand washing:</b> Be alert make sure to wash your hands or use a sanitizer before handling a small baby.</p>

                        <p className="my-2"> <b>Hand washing:</b> Be alert make sure to wash your hands or use a sanitizer before handling a small baby.</p>
                        <p className="my-2"> In the case of a newborn babe there is every chance of getting an infection. Since the immune system is not that strong.</p>
                        <p className="my-2"> <b>Giving the support:</b> In case of a newborn babe the neck muscles are not developed. This is the reason that the babies need support when holding them.</p>
                        <p className="my-2"> While handling the babe with hand is a safe way to handle the baby by providing support to them.</p>
                        <p className="my-2"> <b>Don’t shake the baby:</b> while playing don’t shake the baby it lead to bleeding in the brain and it may act as fatal.</p>
                        <p className="my-2"> Tickling of the feet lightly let baby will wake up .Even it is time to don’t wake up the baby instead of shaking, </p>
                        <p className="my-2"> <b>Keep Securely don’t be fasten:</b> Whenever the baby is carried out in a stroller or in the car seat, take care and make sure not to travel fasten keep the baby well so that there will be no chance of accident.</p>
                        <p className="my-2"> Also, avoid to try in the the roads that are rough or too bumpy</p>
                        <p className="my-2"> <b>No rough play:</b> One of the important tips for newborn baby care is to be sure that the baby is not ready for any kind of rough play.</p>
                        <p className="my-2"> Therefore the baby on the knee,jerk or throwing up baby in the air is not at all suitable to the baby.</p>
                        <p className="my-2"> So, that this are some of the tips with respect to how to take care of the baby in the right way.</p>
                        <p className="my-2"> Apart from these tips, for the every-round development of the baby and to ensure that a proper bonding with baby there are some factors that should be kept in your mind.</p>
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
                <h1 className="text-md md:text-xl font-bold">Caring for the Newborn Baby</h1>
                <p className="my-2"> Becoming a new parent will gracefully make you to learn a many of things.</p>
                <p className="my-2"> There are some of the basic things that a parent would come across on a daily day basis of the life.</p>
                <p className="my-2"> There are essential way to make it as easy one.</p>
                <p className="my-2"> Changing diapers:</p>
                <p className="my-2"> It depends upon the parent to decide whether they will select for a cloth or a diaper. Regardingly what is being used for the baby, the newborn baby will make at least 10 times in a day with dirty. When you are using diapers are be caution, there are a list of things that should be kept readily.</p>
                <p className="my-2">• A new diaper</p>
                <p className="my-2">• Fastening cloth </p>
                <p className="my-2">• Ointment</p>
                <p className="my-2">• Diaper wipes</p>
                <p className="my-2"> While changing the diaper, set down the baby on its back and change the diaper.</p>
                <p className="my-2"> Gently wipe the private part of the area using lukewarm water and cotton, when wipes are not being used.</p>
                <p className="my-2"> Here, two important things should be considered</p>
                <p className="my-2"> 1. In case of a baby boy be careful while changing the diaper because there are being in nature of the private part to the air may make him urinate.</p>
                <p className="my-2"> 2. In case of a baby girl, to avoid any form of urinary tract infection to be consider wiping from front to back</p>
                <p className="my-2"> 3. In case any form of swelling or rashes appears on the private part, go to the nearest baby health care centre.</p>
                <p className="my-2"><b>Baby bath:</b>Gentle as mothers touch, bath with lukewarm water joining the bubbles, splashing, coos and giggles and it’s the perfect time of the day for bath time to attached to your baby’s senses and nurture your bond This one of the challenging task for new parents hence it is important to know the process for parents.</p>
                <p className="my-2"> Before putting down the baby in a tumbler of water, be careful make sure to check the temperature of the water as hot water might causes rashes.</p>
                <p className="my-2"> <b>Vaccination:</b> It’s ensuring that the babies are in good health and this is one important step.</p>
                <p className="my-2"> Keep reminding it’s important a way from developing many types of infections. There are many numbers of vaccinations to the babies that are administered.</p>
                <p className="my-2"> <b>Food and nutrition:</b> Food plays a very essential role to the baby in providing with the much-needed nutrition.</p>
                <p className="my-2"> Nevertheless, it is advised to breastfeed for at least six months to ensure proper immunity, for newborns.</p>
                <Image priority src={IMAGES.NEWBORN2} alt="New born baby care" className="w-full mx-auto" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">My Baby Care :</h1>
                <p className="my-2"> For working mothers, finding external help for the baby care at the right time is always not possible.</p>
                <p className="my-2"> In such case one may select for baby day care or baby care centre.</p>
                <p className="my-2"> But before registering the baby, make sure to go through the brochures and policies in details to ensure that the baby is safe for any kind of baby daycare.</p>
                <p className="my-2"> Also to avoid any kind of problems in the future for baby, make sure to go for well respected and trusted baby care centers.</p>
                <p className="my-2"> Search in Google for “baby care near me” move close to your home as finding a baby care centre nearby will help you out in carrying the baby to know about some of the best daycare centre.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">We will help you?</h1>
                <p className="my-2"> Don’t worry you can trust drug carts for baby care and what you’re looking from them without any problems.</p>
                <p className="my-2"> We make all these tasks easy for your baby on right from taking care of the baby to scheduling the vaccination time,</p>
                <p className="my-2"> You can understand why we claim to be the best just call and check our “my newborn baby care” policies. </p>
                <p className="my-2"> We provide your service and we know that motherhood is an amazing phase and live this moment to the fullest and to help you heal completely.
                </p>
                <Image priority src={IMAGES.NEWBORN3} alt="Dietitian" className="w-[60%]" />
            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default NewbornBabyCare;
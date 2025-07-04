"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const SpeechTherapy = () => {
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
                    <Image priority src={IMAGES.SANITIZATION} alt="Speech Therapy" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#8bbbf3] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Speech Therapy</h2>
                    <p className="text-sm mb-6">Speech Therapy</p>
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
                        <h1 className="text-md md:text-xl font-bold">SPEECH THERAPY</h1>
                        <p className="my-2"> Speech therapist can help the kids with different kind of difficulties by the assessment and treatment of communication problems and speech disorders. It is excuted by speech-language pathologists (SLPs) or speech therapists.</p>
                        <p className="my-2"> Speech therapy techniques are useful to improve communication skills and kids with speech difficulties and language issues like articulation therapy, language intervention activities, and others depending on the type of speech or language disorder.</p>
                        <p className="my-2"> Speech therapy may be needed for speech disorders in develop in childhood and speech impairments in adults caused by an injury or illness, such as stroke or brain injury.</p>
                        <Image priority src={IMAGES.SPEECH1} alt="Speech therapist" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">What will happen during speech therapy?</h1>
                        <p className="my-2 mb-24"> Speech therapy indentify problem and way to treat it by an Speech language pathologist(SLP) are educated in the study of human communication, development and disorders and they assess speech, language, communication, and oral/feeding/swallowing skills. </p>
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
                <h1 className="text-md md:text-xl font-bold">When you need speech therapy?</h1>
                <p className="my-2"> There are many speech and language disorders that can be treated with therapy.</p>
                <p className="my-2"> <b>Articulation disorders</b></p>
                <p className="my-2"> These are disorder in making sounds of words, or saying incorrectly to the point that listeners can't understand what's being said. An example of distorting a word would be saying “this” instead of “thith”.</p>
                <p className="my-2"> <b>Fluency disorders</b></p>
                <p className="my-2"> That affects the flow, speed, and rhythm of speech. This includes the problem in Stuttering and cluttering are fluency disorders. A person with stuttering has trouble getting out a sound and flow of speech is interrupted. A person with cluttering they speaks very fast and words together.</p>

                <p className="my-2"> <b>Resonance disorders</b></p>
                <p className="my-2"> A resonance disorder occurs when a obstruction in pith, volume or quality of voice in the nasal or oral cavities alters the vibrations. Resonance disorders are associated with cleft palate, neurological disorders, and swollen tonsils.</p>

                <p className="my-2"> <b>Receptive disorders</b></p>
                <p className="my-2"> A person with disorder has trouble understanding and processing language what others say. This can causes language disorders, autism, hearing loss, and a head injury can lead to a receptive language disorder.</p>

                <p className="my-2"> <b>Expressive disorders</b></p>
                <p className="my-2"> Expressive language disorder is putting words together that are difficulty to use the language. If you have an expressive disorder, you may have trouble forming words putting together does not form sentences, such as using incorrect verb tense. It’s associated with these causes Down syndrome and hearing loss. It can also result in head trauma or a medical condition.</p>

                <p className="my-2"> <b>ognitive-communication disorders</b></p>
                <p className="my-2"> Difficulty communicating includes memory, attention, perception, organization, regulation, and problem solving its because of an injury to the part of the brain that controls your ability to think is referred to as cognitive-communication disorder. It can result in memory issues due to its caused by biological problems, such abnormal brain development, certain neurological conditions, a brain injury, or stroke.</p>

                <p className="my-2"> <b>Aphasia</b></p>
                <p className="my-2"> This is disorder due to acquired communication that affects a person’s ability to speak and understand others. It also affects a person’s ability to read and write. Stroke is the most common cause of aphasia, though other brain disorders.</p>

                <p className="my-2"> <b>Dysarthria</b></p>
                <p className="my-2"> This condition is characterized by slow or slurred speech due to inability of the muscles control during speech. It’s caused by nervous system disorders and conditions that cause facial paralysis or throat and tongue weakness, such as multiple sclerosis (MS), amyotrophic lateral sclerosis (ALS), and stroke.</p>
                <Image priority src={IMAGES.SPEECH2} alt="Speech therapist" className="w-[60%]" />
            </div>

            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Speech therapy for children</h1>
                <p className="my-2"> Speech disorder of children take place in a classroom or small group, or one-on-one. Speech therapy for children like exercise and activities it’s varied depending on your child’s disorder, age, and needs. The SLP may vary depending on children:</p>
                <p className="my-2"> • A part of language intervention to help stimulate language development and interact with children through talking and playing, and using books, pictures other objects</p>
                <p className="my-2"> • Teach the child how to make certain sounds as model correct sounds and syllables for a child during appropriate age</p>
                <p className="my-2"> • how to do speech therapy at home provide strategies and homework for the child and parent</p>
                <Image priority src={IMAGES.SPEECH3} alt="Speech therapist" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Speech therapy for adults</h1>
                <p className="my-2"> Speech therapy for adults also starts with assessment problem to determine needs and the best treatment. </p>
                <p className="my-2"> Therapy includes retraining of swallowing function due to an injury or medical condition, such as Parkinson’s disease or oral cancer.</p>
                <p className="my-2"> Exercises may involve:</p>
                <p className="my-2"> • Improving cognitive communication problem solving, memory, and organization, and other activities</p>
                <p className="my-2"> • To improve social communication by conversational tactics</p>
                <p className="my-2"> • breathing exercises for resonance</p>
                <p className="my-2"> • exercises to strengthen oral muscles</p>
                <p className="my-2"> There are many resources available for speech therapy exercises at home like:</p>
                <p className="my-2"> • speech therapy apps</p>
                <p className="my-2"> • Language development toys and games.</p>
                <p className="my-2"> • workbooks </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">How long it takes forspeech therapy?</h1>
                <p className="my-2"> The amount of time a person needs speech therapy depends on a factors:</p>
                <p className="my-2"> • age</p>
                <p className="my-2"> • type and severity of the speech disorder</p>
                <p className="my-2"> • frequency of therapy </p>
                <p className="my-2"> • undergoing medical condition</p>
                <p className="my-2"> • treatment of an undergoing medical condition</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Speech therapy successful for children</h1>
                <p className="my-2"> The caregivers provides speech therapy varies between the disorder being treated and age groups proved it success </p>
                <p className="my-2"> Speech therapy for young children has been shownTrusted Source to be most successful when caregiver started early and practiced at home.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Some of the benefits of speech therapy by caregivers</h1>
                <p className="my-2"> • Improvement in the skills to understand and express thoughts, ideas and feelings.</p>
                <p className="my-2"> • Improvement in language speech </p>
                <p className="my-2"> • Increased ability to problem-solving. </p>
                <p className="my-2"> • Improved swallowing function and safety.</p>
                <p className="my-2"> • More confident and less frustrated.</p>
                <Image priority src={IMAGES.SPEECH4} alt="Speech therapist" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">We will help you</h1>
                <p className="my-2">Caregivers can treat wide range of speech, language delays and disorders in children and adults by speech therapy. Speech therapy pathologist will educate with intervention and communicate with speech therapy can improve communication and boost self-confidence </p>
            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default SpeechTherapy
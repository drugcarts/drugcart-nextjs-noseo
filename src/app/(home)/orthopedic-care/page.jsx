"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const OrthopedicCare = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.ORTHOPADICBANNER} alt="ORTHOPADIC BANNER" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <div className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#bfc5c0] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Orthopedic Care</h2>
                    <p className="text-sm mb-6">Orthopedic Care</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mb-2 ">Name</label>
                        <input
                            type="text" name="name"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label className="w-[30%] block md:mt-4 md:mb-2">Mobile</label>
                        <input
                            type="tel" name="mobile"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mt-4 md:mb-2">E-Mail</label>
                        <input
                            type="email" name="email"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label className="w-[30%] block  md:mt-4 md:mb-2">City</label>
                        <input
                            type="text" name="city"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[50%] mt-6 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                    >
                        Book Now
                    </button>
                </div>
            </div>
            <div className="flex">
                <div className="w-full md:w-[68%] p-2">
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">Orthopedic care at home</h1>
                        <p> Did you need the best orthopedic care to your family member with some of the condition such as joint replacement, spinal injury, fractures, sprains or sport injuries at home? Our orthopedic care service will promote to disable side-effects of an orthopedic surgery or injury. The experience of our trained team to manage the pain, improve stability, balance and movement of the patient.</p>
                        <p> Drugcarts understands about the orthopedic injury or surgery can cause the patient experience some problems like pain, lack of mobility, with the muscles and stability. Orthopedic care service provides for individual needs a personalized care and in with accordance of surgeon’s suggestions and protocols.</p>
                        <p> Our orthopedic care, patients need to recover faster with their comfortable pace in the center of family members. Our team will help patients with right therapy and exercises make their recovery and rehabilitation process by the trained and qualified physiotherapists as smooth as needed.</p>
                        <p> Our orthopedic care service provides for orthopedic conditions with the complete management and post surgery care to patients at home. It’s Due to our specialized orthopedic and musculoskeletal rehabilitation care; help patients regain lost mobility, balance, skills and movement to live quality life. </p>
                        <Image priority src={IMAGES.ORTHOPADIC1} alt="ORTHOPADIC" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Problems associated for orthopedic patient</h1>
                        <p> Many problems that can affect orthopedic patient are the bones, joints, ligaments, tendons, and muscles.</p>
                        <p> Some problems may occur in bone:</p>
                        <p> • Bone causes deformities, infection, tumors</p>
                        <p> • Fractures</p>
                        <p> • Need for amputation</p>
                        <p> • Spinal deformities</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Some problems may occur in joint</h1>
                        <p>• Arthritis </p>
                        <p>• bursitis </p>
                        <p>• Dislocation of joint </p>
                        <p>• swelling and inflammation of joint</p>
                        <p>• Tears of ligament</p>
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
                <h1 className="text-md md:text-xl font-bold">Treatment and services for orthopedic care</h1>
                <p> Healthcare provides to treat many orthopedic conditions though imaging techniques:</p>
                    <p> • X-rays</p>
                    <p> • Bone scans</p>
                    <p> • Computed tomography (CT) scan</p>
                    <p> • Magnetic resonance imaging (MRI) scan</p>
                    <p> • Arteriogram (joint x-ray)</p>
                    <p> • Discography</p>
                    <p> Corticosteroid used in treatment for orthopedic patient in painful area of joints, tendons, and ligaments, and the spine.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Service care condition to covered for the orthopedic patients.</h1>
                <p> A great deal for Orthopedic care can help the patients in regaining the mobility and getting back to quality life. Some patient condition covered includes</p>
                    <p> • Surgery or hip replacement</p>
                    <p> • Knee replacements</p>
                    <p> • Shoulder replacement </p>
                    <p> • Recovering from fractures</p>
                    <p> • In case of multiple injuries</p>
                    <p> • Patients with rheumatoid arthritis, ankylosing spondylitis</p>
                    <p> • Procedure for any orthopedic care</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Benefits of orthopedic care service</h1>
                <p> • With highest standard orthopedic care by combining physical therapy, nursing and occupational therapy</p>
                    <p> • Care and support to the patients by the surgeon or physician</p>
                    <p> • Nursing support 12-24 hours by a trained and qualified team</p>
                    <p> • The patient with specific needs and conditions to be supported by Medical caretaker </p>
                    <p> • Qualified physiotherapist for routine exercise</p>
                    <p> • Nutritional and family counseling</p>
                    <p> • Prevention from the pain management, wound care and infection</p>
                    <p> • Therapies to regain motion and strengthen muscles for patient</p>
                    <p> • Blood coagulation and monitoring therapies</p>
                    <p> • care with prevention and home safety assessment.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Orthopedic service follows new procedures:</h1>
                <p> • Minimally invasive surgery</p>
                    <p> • Advanced external fixation</p>
                    <p> • Use of bone-fusing protein and bone graft substitutes.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Who are in team involved for orthopedic care?</h1>
                <p> Orthopedic care team includes a doctor, a non-doctor specialist and professionals such of a physical therapist.</p>
                    <p> • Orthopedic surgeons: will specialize care in the disorders of the bones, muscles, tendons, and ligaments. They are trained of 5 year experience to manage joint problems.</p>
                    <p> • Physical medicine and rehabilitation doctors: A physiatrists specialize in this type of care for joint injections.</p>
                    <p> • Doctors that part of team with neurologist, Pain specialists, Primary care doctors, Psychiatrists, Chiropractors for orthopedic care helps to recover from pain relief.</p>
                    <p> • Non-doctor health professionals they care of orthopedic patient with athletic trainers, counselors, nurse practitioners, and therapist are work together with patient regaining mobility.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">We will help you</h1>
                <p> Orthopedic care services, its aim to patient who are in the treatment in bones, joints, ligaments, tendons, and muscles pain to get rid of pain with relief. Drug carts understand about the orthopedic injury or surgery can cause the patient experience some problems like pain, lack of mobility, with the muscles and stability. Orthopedic care service provides for individual needs a personalized care at home. To overcome this problem our trained doctors, therapist and healthcare professional will provide care of patient with physical exercise that makes you recover to quality life and comfortable with families at home, when you need orthopedic care just give contact with us.</p>
                <Image priority src={IMAGES.ORTHOPADIC2} alt="ORTHOPADIC" className="w-[60%] my-4" />
                </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default OrthopedicCare;
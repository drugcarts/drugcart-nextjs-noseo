"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const LongTermCare = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.LONGTERMBANNER} alt="LONG TERM BANNER" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <div className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Long Term Care</h2>
                    <p className="text-sm mb-6">Long Term Care</p>
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
                        <h1 className="text-md md:text-xl font-bold">LONG TERM CARE</h1>
                        <p> "Long-term care" means helping people of any age with their medical needs or daily activities for a long period of time. Long term care is the diversity of service it helps the patient for both medicted and non-medicated service who are in continuous illness or disability, who cannot care for themselves for long period of time at home.</p>
                        <p> Only highly trained and experienced home care nurse and caretakers can help and support for more complex and intensive care. This section is mainly for older people who need long-term care at their home. This information may be useful for younger people with disabilities or illnesses that require long-term care. When you needs long-term care, remember that it is important to quality varies from one place or caregiver to another. Making long-term care decisions might be hard, when plan well in advance. Long term care includes dementia care, end of life care, disability, mental health support, and stroke recovery and cancer treatment.</p>
                        <Image priority src={IMAGES.LONGTERM1} alt="Sanitization" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Types of Long-Term Care</h1>
                        <p> As that many people do not know about the long-term care options .The major types of long-term care:</p>
                        <p> Home care can be given by our family members, friends, volunteers, and/or paid professionals at home. This type of care is that help of shopping to nursing care. Certain short-term, skilled home care offered by a nurse or therapist is covered by Medicare and is called "home health care." Another type of care given at home is hospice care its for terminally ill people.</p>
                        <p> Community services are the support services that can given to the adult day care, meal programs, senior centers, transportation, and other services. This can help adults with Alzheimer's disease-continue to live in the community as impairment. </p>
                        <p> Supportive housing programs provide house with low-cost to older people with low to moderate incomes. There are number of facilities provide a meal with some task such as housekeeping, shopping, and laundry.</p>
                        <p> Assisted living provides 24-hour supervision, assistance, meals, and health care services include help with eating, bathing, dressing, toileting, taking medicine, transportation, laundry, and housekeeping. Social and recreational activities also are provided.</p>

                        <p> Continuing care retirement communities (CCRCs) provide a full service care usually is provided in one of three main stages: independent living assisted living, and skilled nursing.</p>
                        <p> Nursing homes: Its provide care to people who cannot be cared at home or in the community. They offered skilled nursing care, rehabilitation services, meals, activities, under medical supervision. Many nursing homes also offer temporary or periodic care.</p>
                        <p> Drug carts provide to learn about long-term care in nearby area by contacting.</p>
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
                <h1 className="text-md md:text-xl font-bold">When I need this kind of long term care service?</h1>
                <p> When you need help with daily activities? Health care needs? That time you can use the following chart that helps you identify the type and help you needed of long-term care that you needs. Its Relative low cost when comparing to others service.</p>
                <p> Need a help for daily Activities like</p>
                <p>• Shopping</p>
                <p>• Preparing meals</p>
                <p>• Eating</p>
                <p>• Laundry and other housework</p>
                <p>• Home maintenance</p>
                <p>• Paying bills and other money matters</p>
                <p>• Bathing</p>
                <p>• Dressing</p>
                <p>• Grooming</p>
                <p>• Going to the bathroom</p>
                <p>• Remembering to take medicines</p>
                <p>• Walking</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Needs of Health Care</h1>
                <p> Physical therapy</p>
                <p> Speech therapy</p>
                <p> Occupational therapy</p>
                <p> Rehabilitation</p>
                <p> Medical nutritional therapy</p>
                <p> Oxygen</p>
                <p> Care for pressure ulcers or other wounds</p>
                <p> Alzheimer's disease care</p>
                <p> Health monitoring (for diabetes, for example)</p>
                <p> Pain management</p>
                <p> Nursing care services</p>
                <p> Other medical services provided by a doctor or other clinic</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Long term care service with support</h1>
                <p> It covers a variety of health, health-related services that individuals assists the functional limitations due to physical, cognitive, or mental conditions or disabilities with the support. The goal of Long term care service is to facilitate optimal functioning among people with disabilities</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Long term service is cost effective</h1>
                <p> Long-term care it’s very expensive. Accordingly health plans and programs need routinely cover long-term care at home or in nursing service.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Benefits of long term care service at home</h1>
                <p><b>Our Expertise</b></p>
                <p> Specialist will receive the full care from the patient, </p>
                <p><b>Commitment to quality </b></p>
                <p> Its due to nursing excellence & innovations in professional .</p>
                <p><b>Bio-psychosocial Approach</b></p>
                <p> The patient will integrate physical, psychological and social issues for the patients.</p>
                <p><b>Communication</b></p>
                <p> Taking care of the personal responsibility and sharing information.</p>
                <p><b>Cost Consciousness</b></p>
                <p> We provide the highest quality service in the most cost-effective manner.</p>
                <p><b>24*7 Support</b></p>
                <p> Our service are planned to respond quickly from health care service to ambulance </p>
                <Image priority src={IMAGES.LONGTERM2} alt="Vaccination" className="w-[60%] my-4" />
            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default LongTermCare;
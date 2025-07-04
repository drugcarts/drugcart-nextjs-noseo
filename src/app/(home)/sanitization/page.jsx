"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const Sanitization = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.SANITIZATIONBANNER} alt="Sanitization" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <div className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Sanitization and Disinfectant Service</h2>
                    <p className="text-sm mb-6">Sanitization and Disinfectant Service</p>
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
                        <h1 className="text-md md:text-xl font-bold">Sanitization</h1>
                        <p className="my-2"> During a pandemic time when the Corona virus get affected by all sections of the society,.Its very important that we should follow the guidelines and precautions to keep ourselves and loved ones to be safe. Its right time to drugcarts to support our range of elderly and patient care services in the Home Healthcare industry, cleaning and disinfection services at Home. Must needed to be sanitized like Office Space, Factories, Schools or Industrial areas like Bank ATMs, Shops, Restaurant and Dhaba.</p>
                        <p className="my-2"> Why should get Sanitize at your Home</p>
                        <p className="my-2"> Its important measure to achieve safety your life and family. Sanitization and Disinfectant Service at Home and Commercial Place through drugcarts at many cities. Considered its one of the most effective no-contact disinfecting measures against the Corona virus, the WHO approved Disinfectant Solutions are safe the skin friendly and food.</p>
                        <p className="my-2"> • somebody in our family found infected by COVID-19 Positive</p>
                        <p className="my-2"> • After recovery of patient from COVID-19</p>
                        <p className="my-2"> • Frequently traveled out station</p>
                        <p className="my-2"> • If our family member met patient with COVID-19</p>
                        <p className="my-2"> • Families having elderly or kids</p>
                        <Image priority src={IMAGES.SANITIZATION1} alt="Sanitization" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">For Book Sanitization Slot, Call</h1>
                        <p className="my-2"> <b>Why Choose Us?</b></p>
                        <p className="my-2"> Certified Disinfectants</p>
                        <p className="my-2"> Drugcarts used disinfectant Healthcare for sanitization services are best and safe from all disinfecting area protect from germs, bacteria and virus. The chemical solutions used are best in world class standard which is fully safe and eco-friendly. The common names are Chemtext Alstasan, RADIX SIL 10 and Virex Ii 256 Surface Disinfectant are mostly used.</p>
                        <p className="my-2"> Protection “Dont Touch human”</p>
                        <p className="my-2"> Protects our Healthcare workers and people with more safety. We followed global safety standards and our Sanitizations workers comes along with SITRA-approved ,PPE suits are sealed from hands to toe with thumb ring and ankle elastic with an head cap to assure full protection and ensure zero percent human touch.</p>
                        <p className="my-2"> <b>Most Effective Technology</b></p>
                        <p className="my-2"> The best technique of sanitization are use to maintain a high level of cleanliness throughout the full production environment is fogging, Its hard to reach areas, by distributing sanitizer through the air by atomization. This can be achieved by using a disinfectant fog a electronic machine that supersaturates the atmosphere.</p>
                        <p className="my-2"> Drugcarts Services at home for sanitization</p>
                        <Image priority src={IMAGES.SANITIZATION3} alt="Sanitization" className="w-full mx-auto" />
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
                <h1 className="text-md md:text-xl font-bold">Sanitization at home</h1>
                <p className="my-2">Drugcarts provides the best cost package for cleaning and disinfecting your Home. We are offering quality disinfection and sanitization services in our area at your doorstep. Our goal is to keep our home from safe from virus, bacteria, and germs through certified disinfectant chemicals through best technique of fogging. Our Sanitization expert comes with PPE kit and take around 30 to 60 minutes to clear your residence from all harmful germs, bacteria and virus.</p>
                <p className="my-2">Our home sanitization service starts at Rs 1000. Book an Home Sanitization and Disinfection</p>
                <Image priority src={IMAGES.SANITIZATION2} alt="New born baby care" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Sanitization for office :</h1>
                <p className="my-2"> The Corona virus can be on a surface more than to 14 days. For this reason its important a trusted professional to clean and disinfect your office space.we believe in maintaining complete health protection in our office or workspace sanitation procedure and follow the guidelines by the Health Ministry.</p>
                <p className="my-2"> Book an Home Sanitization and Disinfecting service at your office.</p>
                <Image priority src={IMAGES.SANITIZATION3} alt="New born baby care" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Sanitization for car/vehicle :</h1>
                <p className="my-2"> Disinfecting your vehicle to safeguard you and family from COVID-19. Our Vehicle sanitization services through pumping disinfectant solution inside your car to free from germs. Fogging technicque for vehicle sanitization is available.</p>
                <Image priority src={IMAGES.SANITIZATION4} alt="New born baby care" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Sanitization FAQ’s</h1>
                <p className="my-2"> <b> Q1: What is the difference between Disinfecting and Sanitization?</b></p>
                <p className="my-2"> A1: Sanitation is removing of germs on surface and disinfectant is destruction of viruses and bacteria.</p>

                <p className="my-2"> <b> Q2: When should use Disinfectants in my worksplace?</b></p>
                <p className="my-2"> A2: Things to consider preventing from diseases, our employees will travel outside so we should use disinfectants often in worksplace to fight against bacteria </p>

                <p className="my-2"> <b> Q3: Can I start working right after the process of Disinfection process to been carried out?</b></p>
                <p className="my-2"> Yes, its correct process to prevent from diseases after using disinfection at working place.</p>

                <p className="my-2"> <b> Q4: Can I order Masks, PPEs, and Sanitizers in bulk?</b></p>
                <p className="my-2"> A4: Yes, it’s are protective devices, its help to reduce our chances of preventing corona virus</p>

                <p className="my-2"> <b> Q5: Can I buy rent a Tunnel Spray Disinfectant for my business?</b></p>
                <p className="my-2"> A5: Yes, We offer to buy or rent a Tunnel Spray Disinfectant in your office space, Factory setup, Hospital, Healthcare facility or any other public place. </p>

                <p className="my-2"> <b> Q4: How much it cost to buy or rent a Tunnel Spray Disinfectant in India?</b></p>
                <p className="my-2"> A4: Its depends on the schedule and duration of your wish to rent it for the price range from INR 45,000 to INR 250,000 for estimated cost call drugcarts.</p>

                <p className="my-2"> <b> Q5: Are disinfecting services safe to depend on for Office, Home, or Factories?</b></p>
                <p className="my-2"> A5: The current scenario, there is nothing better to safe from a professional disinfection and sanitization service which helps to avoid the spread of COVID-19. </p>

            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default Sanitization;
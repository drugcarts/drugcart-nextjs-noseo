"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const Vaccination = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.VACCINATIONBANNER} alt="Vaccination" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <div className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Vaccination</h2>
                    <p className="text-sm mb-6">Vaccination</p>
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
                        <h1 className="text-md md:text-xl font-bold">Vaccination</h1>
                        <p className="my-2"> Vaccination is the process of administer of an antigenic substance or vaccine that improve your immunity against one or more diseases. It stimulates immunity in human body and protects the person from infection and thus prevents the onset of the disease.</p>
                        <p className="my-2"> The term vaccination and immunization have often used interchangeably as both have different meaning. While vaccination is the administration of vaccine, immunization is what happens to the body after get vaccinated.</p>
                        <p className="my-2"> Drugcarts provide many different types of vaccinations that comfort you at home namely H1N1, Chicken Pox, Typhoid, Hepatitis B, Pneumonia, Cervical cancer are some of the regularly administered vaccinations for India. You might also get new types of vaccines on special request.</p>
                        <Image priority src={IMAGES.VACCINATION1} alt="Sanitization" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">When Do You Need Us?</h1>
                        <p className="my-2"> Vaccination is an important procedure that protects from harmful diseases. When Your tavelling to visit a hospital or Doctor’s clinic for a small procedure, more over you can get vaccinations at home. Drugcarts offers affordable nursing and doctor services, who would visit you and administer vaccines at home. When you in need of a vaccination through online and book an appointment with us and we will offer an experienced nurse to administer the vaccine. The variety of vaccines list available with us.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Hepatitis B Vaccination</h1>
                        <p className="my-2">Drugcarts provides the best cost package for cleaning and disinfecting your Home. We are offering quality disinfection and sanitization services in our area at your doorstep. Our goal is to keep our home from safe from virus, bacteria, and germs through certified disinfectant chemicals through best technique of fogging. Our Sanitization expert comes with PPE kit and take around 30 to 60 minutes to clear your residence from all harmful germs, bacteria and virus.</p>
                        <p className="my-2">Our home sanitization service starts at Rs 1000. Book an Home Sanitization and Disinfection</p>
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
                <h1 className="text-md md:text-xl font-bold">H1N1 Vaccination</h1>
                <p className="my-2"> The H1N1 vaccination protects people from infections caused by the influenza virus that caused a pandemic back yer in 2009. It is a quite contagious diseases and its better to be protected against this disease from infectetion. The H1N1 vaccine virus are curable, it has as 11% fatality rate . The H1N1 vaccination injection if not administered to people under 18 years of age they are will affected to allergic like eggs, gelatin.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Typhoid Vaccination</h1>
                <p className="my-2"> Typhoid vaccination injection is the cause deadly ‘Salmonella Typhi’ virus that leads to the highly infectious disease protects people from Typhoid. The symptoms like high fever, fatigue, weakness, stomach pains, headache, loss of appetite and rash. Typhoid fever is also very contagious and if not treated is fatal. It kills the people up to 30% infected.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Chicken Pox Vaccination</h1>
                <p className="my-2"> Chickenpox is the initial infection with varicella zoster virus and its a highly contagious disease causes Skin rash forms small, itchy blisters, fever, headache are symptoms of this disease. Chickenpox is a curable disease but there is exceptions always and the disease might be lethal in babies, adolescents, pregnant women and people with weakened immune system. So make sure protect from Chickenpox with everyone is vaccinated in your family as Chickenpox vaccine is the best way. </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Pneumonia Vaccination</h1>
                <p className="my-2"> Pneumonia vaccination or Pneumococcal vaccination protects against the bacteria from ‘Streptococcus pneumonia’ bacterium that can lead to pneumonia, sepsis and meningitis. The children younger than 2 years of age should get 4 doses of the Pneumonia Conjugate (PC13) vaccine. This vaccination is also suggested for adults up to 64 years of age. Pneumonia may be lethal for both kids and adults, and your loved ones protected from this lethal disease with a Pneumonia Vaccination.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Cervical Cancer Vaccination</h1>
                <p className="my-2"> Cervical Cancer Vaccination or HPV vaccination from papillomavirus, a sexually transmitted infection protects women from the human. Although cervical cancer is curable, yet it kills thousands of women. The survival rate depends on the detection early and the stage of the cancer. So protect your mother, wife, daughter and sisters from this fatal disease and get vaccinated </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">We can Help you at home?</h1>
                <p className="my-2"> Our experienced nurses help with vaccination at home. We would provide vaccination at corporate offices for employees. We offer Flu/H1N1, HBV, HAV, Typhoid, Pneumonia, chicken pox, DTP, MMR, meningitis, cholera, HPV/cervical cancer and Zoster vaccines and other vaccine are on request to visit patient’s home. </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Significance Of Vaccination</h1>
                <p className="my-2"> Prevention is better than cure and as such a way its advisable to get vaccinated from the varied diseases rather to suffer and taking medication. Vaccination forms a line to defense our body and prevents from infection with any infectious disease, some of them with fatal. Thanks to a number of vaccination diseases like polio and small pox have been successfully eradicated. In fact, the Government of India has made a list of vaccines are administered to kids that provide protection from diseases like – Tuberculosis, Diphtheria, Pertusis, Polio, Measles, Mumps, Hepatitis A and B, Typhoid, Rubella and Rota virus to be compulsory.</p>

                <p className="my-2"> Some of the reasons to prevent to vaccinated are:</p>
                <p className="my-2"> • Vaccination protects children and adults from harmful diseases that might cause fatal or physical disability.</p>
                <p className="my-2"> • When you are not immunized and also vaccination, then you might get infected with disease and leads to spread the disease to family members with low immunity .</p>
                <p className="my-2"> • Vaccination costs are less than the cost of the medical care needed to cure you if you get infected with an infectious disease.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Some Home Benefits for Vaccination</h1>
                <p className="my-2"> Vaccination is a simple procedure and can be easily administered at home under the care of a trained nurse. The signifance in getting vaccination at home are as:</p>
                <p className="my-2">• The most obvious benefit of getting vaccination at home is able to get the services of doctor or nurse at the comfort at your home, rather than having to travel long way to the hospital and waiting for your turn.</p>
                <p className="my-2">• Vaccinations causes a lot of stress among children, so that ease the process to get better to them vaccinated with the comfort at home, where they might be handled by family members.</p>
                <p className="my-2">• Getting vaccination at home makes you the luxury to choose the day and time of vaccination as per your preference, rather having to abort important work just to get the Doctor’s appointment on time.</p>
                <Image priority src={IMAGES.VACCINATION2} alt="Vaccination" className="w-[60%] my-4" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">What are the Possible Side Effects Of Vaccination</h1>
                <p className="my-2"> Vaccinations are safe and effective and are developed after a period of long research and reviews to assure its safety. Whatever vaccines may involve a little discomfort and can cause pain, redness and tenderness at the site of the injection and slight fever specially in small kids, these symptoms are minor in nature and usually fade away in a two days, but the kind of protection that vaccination offers outweighs the discomfort caused, and are necessary for the prevention of a disease For the well being of an individual or a kid. It is important to note that no vaccine is 100% effective in the prevention of diseases, yet we can’t just undergo them as it would make you more vulnerable and getting affected with infectious diseases.</p>
                <p className="my-2">Vaccinations are developed after research and made you to protect against varied types of diseases. So it is highly suggested that each one of us talk to doctor and find about the vaccination that we needed to administered sooner than later for the prevention from fatal disease “prevention is always better than cure”.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Vaccination Near Me</h1>
                <p className="my-2"> With the availability of vaccines that you need to stress yourself about visiting a clinic or hospital and for the injury. Just in Google search vaccination near me and book an appointment with a nurse on Drugcarts. You will get the best trained nurses to help you in getting to normal life back as possible.</p>
                <Image priority src={IMAGES.VACCINATION3} alt="Vaccination" className="w-[60%] my-4" />
            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default Vaccination;
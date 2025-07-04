"use client";
import Link from 'next/link';
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const PrivacyPolicy = () => {
    return (
        <section className="max-w-7xl mx-auto mt-3">
            <h1 className='text-md md:text-xl font-bold text-[#4C4C95] p-2 border-t-[1.5px] border-b-[1.5px] text-center'>
                Privacy Policy
            </h1>
            <Image
                priority
                src={IMAGES.POLICY}
                alt="Privacy Policy"
                className="w-[50%] mx-auto"
            />
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>1) DEFINITION CLAUSE :</h2>
                <p className='my-2'> i. Personal information/ data: “Personal Information” is defined under the SPI Rules to mean any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available to a body corporate, is capable of identifying such person.</p>
                            <p className='my-2'> ii. Sensitive Personal Data or Information” of a person to mean personal information about that person relating to : </p>
                            <p className='my-2'> • passwords;</p>
                            <p className='my-2'> • financial information such as bank accounts, credit and debit card details or other payment instrument details;</p>
                            <p className='my-2'> • physical, physiological and mental health condition;</p>
                            <p className='my-2'> • sexual orientation; </p>
                            <p className='my-2'> • medical records and history;</p>
                            <p className='my-2'> • biometric information; </p>
                            <p className='my-2'> • information received by body corporate under lawful contract or otherwise;</p>
                            <p className='my-2'> • visitor details as provided at the time of registration or thereafter; and </p>
                            <p className='my-2'> • call data records.</p>

                            <p className='my-2'> iii. Website : Website here refers to http://drugcarts.com/</p>
                            <p className='my-2'> iv. Mobile application : It refer to the mobile based application of the company: Drugcarts</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>2) GENERAL CLAUSE :</h2>
                <p className='my-2'> Drugcarts is an online platform designed to cater the health needs of the people. Healthcare is one of the basic needs of the people and we provide the customers with an integrated platform and intend to make the healthcare services hassle free. </p>
                            <p className='my-2'> We aim to provide the customers a platform where they can order and get their medicines delivered at home by connecting the customers to licensed pharmacies. Customers can now avoid booking appointments, wait for hours for consultation as they can now consult the qualified practitioners at their own ease. Along with these, we also provide other medical and nursing related services as given and available on our website and listed below:</p>

                            <p className='my-2'> 1. Providing nursing care attendants.</p>
                            <p className='my-2'> 2. Physiotherapy and Stroke Rehabilitation.</p>
                            <p className='my-2'> 3. Post-surgical and Elder Care services.</p>
                            <p className='my-2'> 4. Maternity care and nursing home services.</p>
                            <p className='my-2'> 5. Orthopaedic care.</p>
                            <p className='my-2'> 6. Diabetes care.</p>
                            <p className='my-2'> 7. Speech therapy.</p>
                            <p className='my-2'> 8. Counselling, fitness, yoga and meditation, dietician and nutritionist services.</p>
                            <p className='my-2'> 9. Sanitization and disinfectant services.</p>
                            <p className='my-2'> 10. Vaccinations. </p>
                            <p className='my-2'> 11. Cancer and Palliative care services.</p>
                            <p className='my-2'> 12. Sale of medical equipment’s</p>
                            <p className='my-2'> 13. Covid-protection care</p>
                            <p className='my-2'> 14. Spa-salon wellness</p>
                            <p className='my-2'> 15. Cupping therapy</p>
                            <p className='my-2'> 16. Other special care services as given in the website.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>3) APPLICABILITY OF POLICY :</h2>
                <p className='my-2'> This Privacy Policy applies to Services that are owned and operated by Drugcarts. Drugcarts does not exercise control over the sites displayed as search results or links from within its Services. These other sites may place their own cookies or other files on the Users’ computer, collect data or solicit personal information from the Users, for which Drugcarts is not responsible or liable. </p>
                            <p className='my-2'> Accordingly, Drugcarts does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does Drugcarts guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, messages or other materials available on such websites. </p>
                            <p className='my-2'> The inclusion or exclusion does not imply any endorsement by Drugcarts of the website, the website's provider, or the information on the website. If you decide to visit a third party website linked to the Website, you do this entirely at your own risk. Drugcarts encourages the User to read the privacy policies of that website.</p>

            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>4) AMENDMENTS IN PRIVACY POLICY :</h2>
                <p className='my-2'> We would like to keep you informed that we may change this Privacy Policy as and when required. We request you to keep yourself updated regarding the revised terms, if any and stay updated about our practices and options presented to you.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>5) INFORMATION WE COLLECT AND STORE</h2>
                <p className='my-2'> <b>i. WHAT DO WE COLLECT</b></p>
                            <p className='my-2'> Drugcarts collects and stores data of the users as well as visitors of the website only to an extent required providing services to its users. In order to avail full service experience from our website, users are required to create an account or subscribe to our website for which we collect following information as given below:</p>

                            <p className='my-2'> • Name, age and address of the user</p>
                            <p className='my-2'> • Email-id and other contact details</p>
                            <p className='my-2'> • Gender</p>
                            <p className='my-2'> • Payment related information ( UPI, Net-banking, Cards, Wallets)</p>
                            <p className='my-2'> • Password to access the account</p>
                            <p className='my-2'> • Medical details</p>
                            <p className='my-2'> • Photocopy of lab reports or other documents, in case of online consultation or lab services</p>
                            <p className='my-2'> • Valid financial accounts details</p>
                            <p className='my-2'> • Id proof- Aadhar details, PAN Details etc</p>
                            <p className='my-2'> • If you an existing customer then updated information if any modifications done.</p>
                            <p className='my-2'> • Any other information required to provide you services listed on our website.</p>

                            <p className='my-2'><b> ii. HOW DO WE COLLECT:</b></p>
                            <p className='my-2'> The information is collected by the website in three ways:</p>
                            <p className='my-2'> • When the user registers on the website voluntarily, the user will be asked to enter certain personal information on the registration portal. Drugcarts does not collect personal information by any other mode apart from what is entered by the user.</p>
                            <p className='my-2'> • The information shall also be collected by Drugcarts when the user visits or browses through the website. The software automatically connects to the device- computer, laptop or mobile of the user to analyse the search history or other information including but not limiting to IP address, time zone, Plug-in devices etc with the help of communication protocol settings.</p>


                            <p className='my-2'> iii. WHY DO WE COLLECT</p>
                            <p className='my-2'> Drugcarts collects and stores information for providing better service facilities to its users that are utilised for various business and regulatory purposes including but not limiting to following purposes given in this privacy policy and terms and agreements:</p>
                            <p className='my-2'> • Registration of the new user.</p>
                            <p className='my-2'> • Placing and processing the order placed on the website or mobile application.</p>
                            <p className='my-2'> • Billing and payment purposes.</p>
                            <p className='my-2'> • To provide technical support to the users.</p>
                            <p className='my-2'> • To give users customised website based on their search history.</p>
                            <p className='my-2'> • For better browsing experience.</p>
                            <p className='my-2'> • Improvement of performance of the website, service provided and functionality associated with the website.</p>
                            <p className='my-2'> • To help the users get subscription advantages and access to offers and discounts beforehand.</p>
                            <p className='my-2'> • To resolve discrepancies, conflicts and grievances of the users in time bound manner.</p>
                            <p className='my-2'> • To conduct surveys for R&D purposes.</p>
                            <p className='my-2'> • Verification of the users, and/ or,</p>
                            <p className='my-2'> • Verification of the users, and/ or,</p>



                            <p className='my-2'> <b>iv. DISCLOSURE AND TRANSFER OF INFORMATION: </b></p>

                            <p className='my-2'> Drugcarts may disclose or transfer the following information to any third-party for the purpose mentioned in this privacy policy or terms and agreements:</p>

                            <p className='my-2'>• To our aggregators and sellers appointed by Drugcarts for the purpose of completing the services required by the users, on behalf of the Drugcarts, under the contract. </p>
                            <p className='my-2'>• To any governmental organisations, banks or financial institutions as and when required by Law, time being in force</p>

                            <p className='my-2'> a) To protect or defend the name and reputation of the Drugcarts;</p>
                            <p className='my-2'> b) To minimise or protect against fraud and credit risk</p>
                            <p className='my-2'> c) For verification of identity, to facilitate ease of enquiry and investigation.</p>
                            <p className='my-2'> d) Or any other purposes deemed to necessary to protect the rights and title of the Drugcarts.</p>


                            <p className='my-2'><b> v. ACCESS TO INFORMATION</b></p>
                            <p className='my-2'> The information collected by Drugcarts is accessible by the employees of Drugcarts on a need-to-know basis only and for carrying out services required by the users.</p>

            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>6) HOW DO WE STORE INFORMATION:</h2>
                <p className='my-2'> All the information is collected and stored by the Drugcarts in electronic format on all its equipments and employees’ equipments and such information shall be converted into physical format as and when required.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>7) CONFIDENTIALITY WE MAINTAIN</h2>
                <p className='my-2'> i. All the information provided by the users to Drugcarts shall be kept confidential and shall not be used for any other purpose other than specified in clause 3 and 5 of the privacy policy and clause 5 of terms and agreements. </p>
                            <p className='my-2'> ii. The website will not be responsible for authentication of personal information given by the users on the website or to any person acting on behalf of Drugcarts.</p>
                            <p className='my-2'> iii. It is solely the duty of the user to maintain the confidentiality of the user name and password generated by the user at the time of registration and the Drugcarts will not be responsible for loss of confidentiality. The users are obligated to store the user name and password for all future connections. The users shall immediately notify, contact or mail Drugcarts at- support@drugcarts.com of any unauthorised use of the user’s account.</p>
                            <p className='my-2'> iv. Drugcarts takes no liability for the loss suffered by the user due to unauthorised use of the information.</p>
                            <p className='my-2'> v. If at any point of time, Drugcarts suspects or believes that the information provided by the user is inaccurate, incomplete, outdated or becomes untrue, Drugcarts reserves the right to cancel or discontinue the services with no refund policy.</p>
                            <p className='my-2'> vi. The website may use such information collected from the Users from time to time for the purposes of debugging customer support related issues.</p>

            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>8) LINK TO THIRD-PARTY WEBSITE</h2>
                <p className='my-2'> i. All the third-party links, advertisements, or websites available of Drugcarts websites are owned and managed by third-party and Drugcarts has no control or managerial powers over the content displayed by the third-party links.</p>
                            <p className='my-2'> ii. Drugcarts takes no responsibility for the use of cookies, information collected and used while visiting these links and we sincerely advise the users to visit the privacy policy of these websites before using or availing their services.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>9) COOKIE POLICY</h2>
                <p className='my-2'> Drugcarts collects cookies to provide better browsing experience to the users of the website. Cookies are small data files present in your system’s hardware or device files which helps us track the information you have been browsing or information relating to your search history of your personal device. This allows us to customise our website according to your interests, which will enable us to deliver a more personalised service to our customers. You may choose to accept or decline cookies. Please be aware that by declining cookies you may be unable to use our website to its fullest capability.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>10) RETENTION OF INFORMATION</h2>
                <p className='my-2'> i. All the information is collected and stored by the Drugcarts in electronic format on all its equipments and employees’ equipments and such information shall be converted into physical format as and when required but in all cases utmost confidentiality shall be maintained and unauthorised used shall be prohibited.</p>
                            <p className='my-2'> ii. Drugcarts retains the information collected from the user at the time of using the website, subscribing to the website, booking appointments, availing lab services, any other services availed by the user from the Drugcarts even after cancellation of the account till the time required to process all the formalities. </p>
                            <p className='my-2'> iii. Once all the formalities are completed, the collected information is discarded from the system and all the data files pertaining to the users are deleted from the server.</p>
                            <p className='my-2'> iv. As the website is also engaged in providing services in relation to pharmaceutical products and access to information related to it, Drugcarts, may therefore, retain and submit the stored information of all such relevant users.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>11) RIGHTS OF USERS IN RELATION TO THE INFORMATION COLLECTED</h2>
                <p className='my-2'> i. Any information in relation to personal data or sensitive personal data provided by the user to Drugcarts is purely voluntary and no coercion is exercised on the user to provide the information.</p>
                            <p className='my-2'> ii. If the user feels that by providing certain information, the user’s privacy rights will be at risk, the user has all rights to withdraw the consent at any time as per the terms under this privacy policy </p>
                            <p className='my-2'> iii. To err is human, in case any user requires modifying, updating or changing any of the personal information voluntarily given by them; they can modify them by writing an email at support@drugcarts.com and communicate the updates to be made in their information. It is however brought to the notice of the users that, Drugcarts reserves the right to store the original information given by the user at the time of accessing the website for future references.</p>
                            <p className='my-2'> iv. If you are a casual visitor, landed of the website while browsing the content and do not wish to provide any personal information to us, we advise you to enable the “clear cookie” function on your browser settings and as soon as you exit the website, you can use the function to ensure deletion or clearing of the information collected by Drugcarts. We do not take any guarantee for any information for all the visitors of the website.</p>
                            <p className='my-2'> v. If the users have inadvertently given any information before reading this policy and wish to withdraw, delete or cancel their account at Drugcarts, they can exercise their right by sending an email at support@drugcarts.com for cancellation of the user account. </p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>12) SECURITY PRACTICE AND PROCEDURES</h2>
                <p className='my-2'> Drugcarts maintains reasonable security practices and procedures in relation to collection, storage and dissemination the information collected while using the website. All necessary practices to include, technical, operational and physical security measures are undertaken to protect and preserve the information collected from loss, misuse, third-party breach and unauthorised disclosure.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>13) CONSENT:</h2>
                <p className='my-2'> You acknowledge that this Privacy Policy is a part of the Terms of Use of the Website and the other Services, and you unconditionally agree that becoming a User of the Website and its Services signifies your (i) assent to this Privacy Policy, and (ii) consent to Drugcarts using, collecting, processing and/or disclosing your Personal Information in the manner and for the purposes set out in this Privacy Policy. Your visit to the Website and use of the Services is subject to this Privacy Policy and the Terms of Use.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>14) DISPUTE RESOLUTION MECHANISM</h2>
                <p className='my-2'> If case of any disputes arising out of breach of this policy or any other terms and conditions available at <Link className="text-blue-900" href="https://drugcarts.com/terms-and-conditions"> http://drugcarts.com/terms-and-conditions</Link>, the complaint shall be resolved by Arbitration Mechanism as per Section 34 of the Arbitration and Conciliation Act, 1996 having its seating only at Mumbai where the arbitrator shall be appointed by the Company or as per the direction of the Court.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>15) GRIEVANCE REDRESSAL:</h2>
                <p className='my-2'> All complaints shall be sent by the complainant either by mail at- support@drugcarts.com or via postal services at our registered office address. Drugcarts addresses all discrepancies and grievances expeditiously and in time bound manner.</p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>16) CONTACT INFORMATION:</h2>
                <p className='my-2'> If you have any queries or issues with our privacy, please email us at support@drugcarts.com </p>
            </div>
        </section>
    )
}

export default PrivacyPolicy
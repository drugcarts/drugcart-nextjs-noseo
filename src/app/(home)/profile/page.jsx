'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PersonIcon from '@mui/icons-material/Person';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ScienceIcon from '@mui/icons-material/Science';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TransgenderIcon from '@mui/icons-material/Transgender';
import TtyIcon from '@mui/icons-material/Tty';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SourceIcon from '@mui/icons-material/Source';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LogoutIcon from '@mui/icons-material/Logout';
import MyOrders from '@/components/profile/MyOrders';
import MyRefills from "@/components/profile/MyRefills";
import MyAddress from '@/components/profile/MyAddress';
import MyPrescription from '@/components/profile/MyPrescription';
import MyLab from '@/components/profile/MyLab';
import AddressForm from "@/components/common/AddressForm";
import MyAppointment from "@/components/profile/MyAppointment";
import TextFeedback from "@/components/profile/TextFeedback";
import VideoFeedback from "@/components/profile/VideoFeedback";
import SendFeedback from "@/components/profile/SendFeedback";
import { useDispatch, useSelector } from 'react-redux';
import { PutProfileService } from '@/services/profileService';
import TitleIcon from '@mui/icons-material/Title';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import LogoutModal from '@/components/common/LogoutModal';
import { setMenuTab } from '@/reduxToolkit/slices/commonSlice';

const tabs = [
    { id: 'profile', label: 'My Profile', icon: <PersonIcon /> },
    { id: 'orders', label: 'My Order', icon: <ListAltIcon /> },
    { id: "refills", label: "My Refills", icon: <ListAltIcon /> },
    { id: 'address', label: 'My Address', icon: <LocationOnIcon /> },
    { id: 'prescription', label: 'My Prescription', icon: <SummarizeIcon /> }
];

const tabsdoctors = [
    { id: 'labtest', label: 'My Lab Test', icon: <ScienceIcon /> },
    { id: 'appointment', label: 'My Appointment', icon: <InterpreterModeIcon /> },
    { id: 'family', label: 'My Family', icon: <SettingsAccessibilityIcon /> },
    { id: 'healthrecords', label: 'Health Records', icon: <MonitorHeartIcon /> }
];

export default function ProfileTab() {
    const { menuTab } = useSelector((state) => state.common)
    const { profile } = useSelector((state) => state.profileData)
    const { userAddress } = useSelector((state) => state.addressData)
    const [activeTab, setActiveTab] = useState('profile');
    const [edit, setEdit] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()

    const logout = async () => {
        await localStorage.removeItem("token");
        await localStorage.removeItem("cart");
        // window.location.reload();
        window.location.href = "/"
    };

    const tabssupport = [
        // { id: 'social', label: 'Social Pages', icon: <TransgenderIcon /> },
        { id: 'contactus', label: 'Contact Us', icon: <TtyIcon />, onPress: () => router.push('/contactus') },
        { id: 'aboutus', label: 'About Us', icon: <AnnouncementIcon />, onPress: () => router.push('/about-us') },
        // { id: 'faqs', label: 'FAQs', icon: <StickyNote2Icon /> },
        { id: 'textfeedback', label: 'Text Feedback', icon: <TitleIcon /> },
        { id: 'videofeedback', label: 'Video Feedback', icon: <OndemandVideoIcon /> },
        { id: 'feedback', label: 'Send Feedback', icon: <ThumbUpOffAltIcon /> }
    ];

    const tabslegal = [
        { id: 'terms', label: 'Terms and Conditon', icon: <SourceIcon />, onPress: () => router.push('/terms-and-conditions') },
        { id: 'policy', label: 'Private Policy', icon: <AdminPanelSettingsIcon />, onPress: () => router.push('/privacy-policy') },
        { id: 'refund', label: 'Refund Policy', icon: <AgricultureIcon />, onPress: () => router.push('/cancellation-return-refund-policy') },
        { id: 'logout', label: 'Logout', icon: <LogoutIcon />, onPress: () => setIsLogout(true) },
    ];

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: profile?.username || "",
            phone: profile?.phone || "",
            useremail: profile?.useremail || "",
            gender: profile?.gender || "",
            dob: profile?.dob || "",
            blood: profile?.blood || "",
        },
        onSubmit: async (data) => {
            await dispatch(PutProfileService(profile?._id, data));
            setEdit(false)
        },
    });

    return (
        <>
            {/* <section className="px-2 md:px-12 mt-3">
                <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 ">
                    <Link href="#" className="hover:text-gray-700">Home</Link>
                    <span>&gt;</span>
                    <Link href="#" className="hover:text-gray-700">My Account</Link>
                </div>
            </section> */}
            <section className="px-2 md:px-12 mt-3">
                <div className="flex max-w-7xl mx-auto md:my-6">
                    {/* Sidebar Tabs */}
                    <div className="w-12 md:w-64 border-2 bg-white p-0 min-h-screen text-[14px]">
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Message</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabs.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${menuTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => dispatch(setMenuTab(tab.id))}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Doctors</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabsdoctors.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${menuTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => dispatch(setMenuTab(tab.id))}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Support</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabssupport.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${menuTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => {
                                        if (tab?.onPress) {
                                            tab.onPress();
                                        } else {
                                            dispatch(setMenuTab(tab.id));
                                        }
                                    }}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-0">
                            <li className='border-b-2 p-2 hidden md:block'>
                                <div className="flex items-center space-x-4">
                                    <div className="h-px w-full bg-gray-400"></div>
                                    <p className="text-gray-600 font-sans text-sm">Legal</p>
                                    <div className="h-px w-full bg-gray-400"></div>
                                </div>
                            </li>
                            {tabslegal.map(tab => (
                                <li
                                    key={tab.id}
                                    className={`p-2 border-b-2 flex items-center gap-2 cursor-pointer ${menuTab === tab.id ? 'bg-pink-600 text-white' : ''}`}
                                    onClick={() => {
                                        if (tab?.onPress) {
                                            tab.onPress();
                                        } else {
                                            setActiveTab(tab.id);
                                        }
                                    }}
                                >
                                    {tab.icon} <span className='hidden md:block'>{tab.label}</span>
                                </li>
                            ))}
                            <LogoutModal
                                open={isLogout}
                                onClose={() => setIsLogout(false)}
                                onConfirm={logout}
                            />
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-3 md:p-8">
                        {menuTab === 'profile' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Account Information</h2>
                                {/* Personal Information */}
                                <div className="bg-white shadow-md p-6 rounded-lg mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Personal Information</h3>
                                        <button onClick={() => setEdit(!edit)} className="flex items-center gap-2">
                                            <EditLocationAltIcon /> {edit ? 'Cancel' : 'Edit'}
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input type="text" placeholder="Full Name" value={formik.values.username} onChange={formik.handleChange("username")} disabled={!edit} className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Mobile Number" value={formik.values.phone} disabled={true} className="border p-2 rounded w-full" />
                                        <input type="email" placeholder="E-Mail Address" value={formik.values.useremail} onChange={formik.handleChange("useremail")} disabled={!edit} className="border p-2 rounded w-full" />
                                        {/* <input type="text" placeholder="Gender" value={formik.values.gender} onChange={formik.handleChange("gender")} disabled={!edit} className="border p-2 rounded w-full" /> */}
                                        <select
                                            disabled={!edit}
                                            name="gender"
                                            className="border p-2 rounded w-full"
                                            value={formik.values.gender}
                                            onChange={formik.handleChange("gender")}
                                            onBlur={formik.handleBlur("gender")}
                                        >
                                            <option value="" disabled>--Please Gender--</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <input
                                            type="date"
                                            placeholder="Date of Birth"
                                            value={formik.values.dob}
                                            onChange={formik.handleChange("dob")}
                                            disabled={!edit}
                                            className="border p-2 rounded w-full"
                                            max={new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                                                .toISOString()
                                                .split("T")[0]}
                                        />
                                        <input type="text" placeholder="Blood Group" value={formik.values.blood} onChange={formik.handleChange("blood")} disabled={!edit} className="border p-2 rounded w-full" />
                                    </div>
                                    <div className="flex justify-end my-3">
                                        <button
                                            type="submit"
                                            disabled={!edit}
                                            className={`w-16 ${edit ? "bg-pink-700 text-white" : "bg-gray-400 text-white"}  py-1 rounded mr-2`}
                                            onClick={formik.handleSubmit}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                                {/* Address Details */}
                                <AddressForm />
                                {/* <div className="bg-white shadow-md p-6 rounded-lg">
                                    <div className="flex flex-wrap justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Address Details</h3>
                                        <button className="bg-green-500 text-white px-4 py-2 rounded">+ Add Address</button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Full Name" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Mobile Number" className="border p-2 rounded w-full" />
                                        <textarea placeholder="Address 1" className="border p-2 rounded w-full md:col-span-2 h-32"></textarea>
                                        <input type="text" placeholder="Pincode" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="Landmark" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="City" className="border p-2 rounded w-full" />
                                        <input type="text" placeholder="State" className="border p-2 rounded w-full" />
                                    </div>
                                </div> */}
                                {/* <div className="bg-white shadow-md p-6 rounded-lg mt-4">
                                    <div className="flex flex-wrap items-center space-x-4 space-y-4">
                                        <span className="font-semibold">Type of Place</span>
                                        <div className="flex space-x-2">
                                            {['Home', 'Office', 'Others'].map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => setSelected(type)}
                                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${selected === type ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button className="px-6 py-2 bg-pink-700 justify-end items-end text-white font-semibold rounded-md">ADD</button>
                                    </div>
                                </div> */}
                            </div>
                        )}

                        {menuTab === "orders" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                                <p>Order details will be displayed here.</p>
                                <MyOrders />
                            </div>
                        )}
                        {menuTab === "refills" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Refills</h2>
                                <MyRefills />
                            </div>
                        )}

                        {menuTab === 'address' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Address</h2>
                                <MyAddress />
                            </div>
                        )}

                        {menuTab === 'prescription' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">My Prescription</h2>
                                <MyPrescription />
                            </div>
                        )}
                        {menuTab === 'labtest' && (
                            <div>
                                <MyLab />
                            </div>
                        )}
                        {menuTab === 'appointment' && (
                            <div>
                                <MyAppointment />
                            </div>
                        )}
                        {menuTab === 'textfeedback' && (
                            <div>
                                <TextFeedback />
                            </div>
                        )}
                        {menuTab === 'videofeedback' && (
                            <div>
                                <VideoFeedback />
                            </div>
                        )}
                        {menuTab === 'feedback' && (
                            <div>
                                <SendFeedback />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

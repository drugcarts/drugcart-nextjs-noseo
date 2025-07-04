"use client";
import { IMAGES } from '@/components/common/images';
import Image from 'next/image';
import CustomerSaying from '@/components/home-page/CustomerSaying';
import FeedbackCard from '@/components/home-page/FeedbackCard';

const LabPackages = () => {
    return (
        <section className="max-w-7xl mx-auto mt-3">
            <div className='bg-[#F7C9B0]'>
                <div className='flex justify-center items-center mx-2'>
                    <Image
                        src={IMAGES.LAB_ICON || null}
                        alt="Product"
                        width={12}
                        height={12}
                    />
                    <p className='text-[16px] mx-2 my-2 Jost font-bold'>Get your sample collected in the next 30 minutes!</p>
                </div>
            </div>
            <h2 className='text-md md:text-xl font-bold mt-4'>All Women FullBody Checkups Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
                <div className='bg-[#F0F5FF] h-[300px] rounded-lg p-4 border-[1.5px]'>
                    <h3 className='font-bold text-md'>Women Wellness Premium Package</h3>
                    <div className="flex">
                        <span className="text-black text-lg font-bold mr-2">4.0</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-gray-300 text-lg">&#9733;</span>
                    </div>
                    <p>Include 46 Test</p>
                    <p className="text-red-600 text-xl font-bold mt-2">Price 1440</p>
                    <p className="text-blue-400 text-sm mt-2 line-through">M.R.P <span className="text-blue-600 font-bold">1800.00</span></p>
                    <p className="text-green-600 text-sm font-medium">You Save $360.00</p>
                    <h3 className="w-[150px] bg-red-100 text-red-600 px-2 py-1 mt-2 rounded-md font-semibold text-sm border border-red-400 border-dotted">
                        50% OFF
                    </h3>

                    <button className="flex mx-auto px-4 bg-green-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-green-700 transition">
                        Book Now
                    </button>
                </div>
                <div className='bg-[#F0F5FF] h-[300px] rounded-lg p-4 border-[1.5px]'>
                    <h3 className='font-bold text-md'>Women Wellness Premium Package</h3>
                    <div className="flex">
                        <span className="text-black text-lg font-bold mr-2">4.0</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-gray-300 text-lg">&#9733;</span>
                    </div>
                    <p>Include 46 Test</p>
                    <p className="text-red-600 text-xl font-bold mt-2">Price 1440</p>
                    <p className="text-blue-400 text-sm mt-2 line-through">M.R.P <span className="text-blue-600 font-bold">1800.00</span></p>
                    <p className="text-green-600 text-sm font-medium">You Save $360.00</p>
                    <h3 className="w-[150px] bg-red-100 text-red-600 px-2 py-1 mt-2 rounded-md font-semibold text-sm border border-red-400 border-dotted">
                        50% OFF
                    </h3>

                    <button className="flex mx-auto px-4 bg-green-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-green-700 transition">
                        Book Now
                    </button>
                </div>
                <div className='bg-[#F0F5FF] h-[300px] rounded-lg p-4 border-[1.5px]'>
                    <h3 className='font-bold text-md'>Women Wellness Premium Package</h3>
                    <div className="flex">
                        <span className="text-black text-lg font-bold mr-2">4.0</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-yellow-500 text-lg">&#9733;</span>
                        <span className="text-gray-300 text-lg">&#9733;</span>
                    </div>
                    <p>Include 46 Test</p>
                    <p className="text-red-600 text-xl font-bold mt-2">Price 1440</p>
                    <p className="text-blue-400 text-sm mt-2 line-through">M.R.P <span className="text-blue-600 font-bold">1800.00</span></p>
                    <p className="text-green-600 text-sm font-medium">You Save $360.00</p>
                    <h3 className="w-[150px] bg-red-100 text-red-600 px-2 py-1 mt-2 rounded-md font-semibold text-sm border border-red-400 border-dotted">
                        50% OFF
                    </h3>

                    <button className="flex mx-auto px-4 bg-green-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-green-700 transition">
                        Book Now
                    </button>
                </div>
            </div>
            <CustomerSaying />
            <FeedbackCard />
        </section>
    )
}

export default LabPackages
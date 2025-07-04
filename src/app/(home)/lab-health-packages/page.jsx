"use client";
import CustomerSaying from '@/components/home-page/CustomerSaying';
import FeedbackCard from '@/components/home-page/FeedbackCard';
import Link from 'next/link';

const LabHealthPackages = () => {
    return (
        <section className="max-w-7xl mx-auto mt-3">
            <h2 className='text-md md:text-xl font-bold'>All Heath Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center mt-6">
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Full Body Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Women Full Body Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Men Full Body Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Vitamin Profile Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Full Body Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Women Full Body Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Men Full Body Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
                <div className='bg-[#ffe1e1] h-[200px] place-content-center rounded-lg'>
                    <h3 className='font-bold text-xl pb-4'>Vitamin Profile Checkups</h3>
                    <Link href="" className='text-violet-950 font-semibold'>View All Package</Link>
                </div>
            </div>
            <CustomerSaying />
            <FeedbackCard />
        </section>
    )
}

export default LabHealthPackages;

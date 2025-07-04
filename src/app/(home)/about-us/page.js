"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import ServiceGroup from "@/components/home-page/serviceGroup";
import CustomerSaying from "@/components/home-page/CustomerSaying";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex flex-wrap h-62 justify-center items-center bg-slate-50">
        <div className="text-xl md:text-3xl text-blue-950 font-bold">
          <h3 className="mb-6"> About Us - Mission,Vision,Service</h3>
          <div className="flex justify-center items-center">
            <Image priority src={IMAGES.LOGO} alt="Logo" className="w-40" />
          </div>
        </div>
        <div>
          <Image
            priority
            src={IMAGES.ABOUTUS}
            alt="About Us"
            className="w-[100%] h-[300px] rounded-lg p-6 mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-62 justify-center items-center">
        <div className="w-full md:w-1/2 p-4">
          <h3 className="my-4 font-bold text-2xl"> About Us</h3>
          <p>
            DrugCarts is an india’s biggest online pharmacy, DrugCarts provide
            accurate, authoritative & trustworthy information on medicines and
            help people use their medicines effectively and safely.DrugCarts
            help people to look into your own health effortlessly as well as
            take care of loved ones wherever they may reside in India. People
            can buy and send medicines from any corner of the country - with
            just a few clicks of the mouse. <br />
            <br />
            Drugcarts also Provide a diagnostic services from certified labs and
            online doctor. DrugCarts make a wide range of prescription medicines
            and other health products conveniently available all across India.
            <br />
            <br />
            Drugcarts also offers various services like homecare services in
            Nursing ,Physiotherapy,Eldercare, Post – surgical care ,Newborn baby
            and Mothercare,Diabetic care, etc Drugcarts bringing all the service
            in a single digital platform connecting multiple services in just
            one touch of click
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            priority
            src={IMAGES.ABOUTUSCHECKMEDINE}
            alt="About us"
            className="w-[80%] h-[300px] rounded my-6 mx-auto"
          />
        </div>
      </div>
      <div className="bg-[#FFEDF2] rounded-md  py-4 my-5">
        <ServiceGroup />
        <p className="text-center py-6 w-[50%] mx-auto ">
          Drugcarts bringing all the service in a single digital platform
          connecting multiple services in just one touch of click
        </p>
      </div>
      <div className="bg-[#EFEFFF] py-4 my-5 rounded-md">
        <p className="text-center py-6 w-[50%] mx-auto ">
          People can buy and send medicines from any corner of the country with
          just a few clicks of the mouse.{" "}
        </p>
        <div className="flex flex-wrap h-62 justify-center items-center">
          <div className="w-full md:w-1/3 text-[#4C4C95] justify-center items-center">
            <Image
              src={IMAGES.VISSION}
              alt="Drugcarts Vission"
              className="w-12 mx-auto"
            />
            <h2 className="text-xl text-center py-4 font-bold">Our Vision</h2>
            <p className="text-md text-center px-6">
              DrugCarts is an india’s biggest online pharmacy, DrugCarts provide
              accurate, authoritative & trustworthy information on medicines and
              help people use their medicines effectively and safely
            </p>
          </div>
          <div className="w-full md:w-1/3 text-[#4C4C95] justify-center items-center">
            <Image
              src={IMAGES.RESOLUTION}
              alt="Resolution"
              className="w-12 mx-auto"
            />
            <h2 className="text-xl text-center py-4 font-bold">Resolution</h2>
            <p className="text-md text-center px-6">
              DrugCarts help people to look into your own health effortlessly as
              well as take care of loved ones wherever they may reside in India.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-[#4C4C95] justify-center items-center">
            <Image
              src={IMAGES.MISSION}
              alt="Our Mission"
              className="w-12 mx-auto"
            />
            <h2 className="text-xl text-center py-4 font-bold">Our Mission</h2>
            <p className="text-md text-center px-6">
              Drugcarts bringing all the service in a single digital platform
              connecting multiple services in just one touch of click
            </p>
          </div>
          <div className="w-full md:w-1/3"></div>
        </div>
      </div>
      <CustomerSaying />
    </section>
  );
};

export default About;

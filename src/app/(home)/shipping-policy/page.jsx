import React from 'react';
import Link from "next/link";
const ShippingPolicy = () => {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <h1 className='text-md md:text-xl font-bold text-[#4C4C95] p-2 border-t-[1.5px] border-b-[1.5px] text-center'>
        Shipping Policy
      </h1>
      <p className='my-2 p-2'><span className="font-bold">Drugcarts private limited,</span> on behalf of its own and its affiliate companies/groups under the brand Drugcarts state that they are the original author and publisher of this shipping policy on the Website URL <span className="font-bold"><Link href="https://www.drugcarts.com/">www.drugcarts.com</Link></span> and the Mobile Application <span className="font-bold">“Drugcarts”</span> together known and referred hereinafter as<span className="font-bold"> “Website.”</span></p>
      <div className='border-[1.5px] p-4 my-4'>
        <h2 className='text-md md:text-xl font-bold py-3'>General clauses:</h2>
        <p> 1. An email confirmation will be sent to your registered email id and mobile number as soon as the order is placed. The second email confirmation will be sent when the pharmacist accepts the order after the availability check and assessment of your prescription.</p>
        <p> 2. It is to be noted that we do not sell any medicines without a valid prescription.</p>
        <p> 3. Drugcarts dispatches the medicines, subject to its availability within 1-2 working days and the same is communicated to the customers via mail or message along with the billing track details.</p>
        <p> 4. Priority shipping options are given based on the availability of medicines and urgency of procurement of medicines. In case priority shipping is to be claimed, you can write an email at support@drugcarts.com subject indicating order number and priority.</p>
        <p> 5. We try our best to deliver your medicines within time frame but in case of any unexpected situations or area being non-serviceable, delays are bound to happen.</p>
        <p> 6. Shipping charges and policy are subject to changes; hence it is advisable to keep yourself updated with the recent policy.</p>

      </div>
      <div className='border-[1.5px] p-4 my-4'>
        <h2 className='text-md md:text-xl font-bold py-3'>Dispatch, delivery, and tracking clause :</h2>
        <p> 1. As soon the product is dispatched, the customers will be intimated about the dispatch via email along with the tracking address which will be available for tracking after 12 hours of dispatch.</p>
        <p> 2. The products are usually dispatched within 1-2 working days of placing the order. In case of delay in shipment due to non-availability or non-serviceable areas, the customers will be notified of the delay.</p>
        <p> 3. In case the delivery is delayed due to third-party logistics issues, we shall resolve it at the earliest and any such delay shall be communicated to the customers.</p>
        <p> 4. In case of any queries relating to dispatch, delivery, or tracking details, you can reach out to us @ <b>support@drugcarts.com.</b> </p>

      </div>
      <div className='border-[1.5px] p-4 my-4'>
        <h2 className='text-md md:text-xl font-bold py-3'>Delivery and shipping charge</h2>
        <p> 1. We offer both express and normal delivery options to our customers. If the medicines are required on an emergency basis, you can write to us @ support@drugcarts.com and we shall process the request on a priority basis.</p>
        <p> 2. Orders below Rs1000 will not be eligible for free delivery. Delivery charge of Rs.40-50 will be charged for the delivery.</p>
        <p> 3. In case of express delivery, we charge Rs. 50-60 for serviceable areas and express delivery to non-serviceable areas is subject to the approval of the logistics team.</p>

      </div>
      <div className='border-[1.5px] p-4 my-4'>
        <h2 className='text-md md:text-xl font-bold py-3'>Mode of shipment:</h2>
        <p> We offer PAN India service to all our customers and both serviceable and non-serviceable zone. Shipments to non-serviceable zones are subject to the approval of our logistic team. </p>
        <p> Once the shipment is concluded, we shall notify you with our delivery partner details and tracking number or Airway bill number.</p>

      </div>
      <div className='border-[1.5px] p-4 my-4'>
        <h2 className='text-md md:text-xl font-bold py-3'>Cancelled and returned orders:</h2>
        <p> For our cancellation and return product guidelines, refer to our cancellation and return policy.</p>
      </div>
    </section>
  )
}

export default ShippingPolicy

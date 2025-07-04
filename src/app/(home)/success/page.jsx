"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { IMAGES } from "@/components/common/images";
import { useDispatch, useSelector } from 'react-redux'; // Make sure to import dispatch
import { GetOrderOneService, PostOrderService, PutOrderService } from '../../../services/orderService'; // Import your action
import { useSearchParams, useRouter } from 'next/navigation';
import {
  selectCartTotal,
  selectTotalAfterDiscount,
  selectTotalDiscountPercentage,
  selectTotalSavings,
  selectMRPCartTotal,
  selectDrugcartDiscountTotal,
} from "@/reduxToolkit/slices/cartSlice";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const { carts, items } = useSelector((state) => state.cartData);
  const { prescription } = useSelector((state) => state.prescriptionData);
  const { userAddress, addresses } = useSelector((state) => state.addressData);
  const totalPrice = useSelector(selectCartTotal);
  const totalDiscountPercentage = useSelector(selectTotalDiscountPercentage);
  const totalMRPPrice = useSelector(selectMRPCartTotal);
  const totalDrugcartDiscount = useSelector(selectDrugcartDiscountTotal);
  const totalSavings = useSelector(selectTotalSavings);
  const { orderGetData } = useSelector((state) => state.orderData)

  useEffect(() => {
    const txnid = searchParams.get('txnid');
    const amount = searchParams.get('amount');
    const status = searchParams.get('status');
    const orderID = typeof window !== 'undefined' ? sessionStorage.getItem('orderId') : null;
    dispatch(GetOrderOneService(orderID))
    if (status === 'success' && txnid && amount) {
      // const onlineOrderData = {
      //   shippingInfo: addresses,
      //   orderItems: items,
      //   rximage: prescription?.rximage,
      //   paymentInfo: {
      //     paymentmode: "online",
      //     paymentstatus: "Success"
      //   },
      //   itemsPrice: totalPrice,
      //   shippingPrice: 0,
      //   totalPrice: totalPrice,
      // };

      // Dispatch your action
      // dispatch(PutOrderService(orderGetData?.orderId, onlineOrderData));
      // alert('Payment Successful!');
      try {
        const onlineOrderData = {
          paymentInfo: {
            paymentmode: "online",
            paymentstatus: "Success"
          },
        };
        dispatch(PutOrderService(orderID, onlineOrderData));
      } catch (err) {
        console.error('Order dispatch failed:', err);
      }
    }
  }, [searchParams, dispatch, orderGetData?.orderId]);

  console.log('orderGetData', orderGetData);

  return (
    <div>
      <div className="flex items-center justify-center m-4 mb-10">
        <div className="text-center">
          <Image
            src={IMAGES.SUCCESS}
            alt="Success"
            className="mx-auto w-[20%]"
          />
          <h2 className="text-green-600 text-2xl font-bold mt-4">
            Woohoo, Success !
          </h2>
          <p className="text-gray-600 mt-2">
            Your order has successfully been submitted
          </p>
          <button className="mt-4 px-6 py-2 bg-pink-700 text-white rounded flex items-center justify-center gap-2 mx-auto" onClick={() => router.replace('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
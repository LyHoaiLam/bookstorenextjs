'use client'
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface PassengerCounterProps {
  label: string;
  unitPrice: number;
  count: number;
  setCount: (count: number) => void;
}

function PassengerCounter({ label, unitPrice, count, setCount }: PassengerCounterProps) {
  const increase = () => setCount(count + 1)
  const decrease = () => {
    if ( count > 0 ) setCount(count - 1)
  }

  const total = count * unitPrice;

  return (
    <div className="items-center">
      <div className="w-full flex justify-between">
        <p className="font-medium">{label}</p>
        <p className="text-gray-500">{unitPrice.toLocaleString()} VNĐ / người</p>
      </div>

      <div className="flex justify-end items-center gap-4 text-right">
        <button onClick={decrease} className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <Minus size={20} />
        </button>
        <span className="text-2xl">{count}</span>
        <button onClick={increase} className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <Plus size={20} />
        </button>
      </div>


      <div className="text-right">
        <p className="font-bold text-red-500">{total.toLocaleString()} VNĐ</p>
      </div>
    </div>
  );
}

export default function FormTour() {
    
  const [countBig, setCountBig] = useState(1);
  const [countChild, setCountChild] = useState(1);

  const priceBig = 3290000;
  const priceChild = 2290000;

  const totalAll = countBig * priceBig + countChild * priceChild;

  return (
    <div className="max-w-xl mx-auto mt-8 space-y-6">
      <PassengerCounter
        label="Người lớn trên 10 tuổi"
        unitPrice={priceBig}
        count={countBig}
        setCount={setCountBig}
      />

      <PassengerCounter
        label="Trẻ em từ 6 đến dưới 10 tuổi"
        unitPrice={priceChild}
        count={countChild}
        setCount={setCountChild}
      />

      <div className="text-right text-xl font-bold pt-4">
        Tổng cộng: <span className="text-red-500 ml-3">{totalAll.toLocaleString()} VNĐ</span>
      </div>
      <div className="flex justify-end mt-6">
        <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Đặt ngay
        </button>
    </div>
    </div>
  );
}

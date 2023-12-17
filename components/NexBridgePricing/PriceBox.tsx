import React from 'react';

interface PriceBoxProps {
  package: {
    title: string;
    description: string[];
    price: string;
  };
}

function PriceBox({ package: packageItem }: PriceBoxProps) {
  return (
    <div className="h-full space-y-10 max-w-sm text-white p-2">
      <div className="rounded-full bg-gray-800/80 p-5 text-center backdrop-blur-2xl">
        <h2 className="text-teal-500 text-center text-4xl not-italic font-semibold ">
          {packageItem.title}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-9 rounded-[38px] bg-gray-800 p-12 backdrop-blur-2xl">
        <ul className="space-y-4 list-disc md:h-96">
          {packageItem.description.map((item) => (
            <li className='text-sm' key={packageItem.price}>
              {item}
            </li>
          ))}
        </ul>
        <h1 className="text-5xl font-semibold">€ {packageItem.price}</h1>

        <button className="text-md rounded-full bg-emerald-500 px-20 py-4 font-semibold text-slate-950">
          PURCHASE
        </button>
      </div>
    </div>
  );
}

export default PriceBox;

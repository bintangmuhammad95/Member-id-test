import { XCircleIcon } from "@heroicons/react/solid";

export const Filter = ({ onClickClose }) => {
  return (
    <div className="p-6 fixed z-30 bg-white right-0">
      <div className="flex flex-row flex-1 justify-between">
        <label className="font-bold text-lg">Filter</label>
        <label onClick={onClickClose} className="cursor-pointer">
          x
        </label>
      </div>

      <div className="flex flex-col text-blue-700 space-y-3 p-6">
        <label className="border p-2 border-blue-700 flex flex-row rounded-md">
          Poin: 10000 - 500000 <XCircleIcon className="w-5 h-5 ml-5" />
        </label>
        <label className="border p-2 border-blue-700 flex flex-row rounded-md">
          Type: Voucher, Product <XCircleIcon className="w-5 h-5 ml-5" />
        </label>
        <label className="border p-2 border-blue-700 flex flex-row rounded-md">
          Clear All Filter
        </label>
      </div>

      <div className="font-semibold">
        <label>Poin Needed</label>
        <div className="flex-1 flex flex-row justify-between text-blue-700">
          <label>IDR 10.000</label>
          <label>IDR 500.000</label>
        </div>
      </div>

      <div>
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointe"
        />
      </div>

      <div className="mt-10">
        <label className="font-semibold">Awards Type</label>
        <div className="mt-3">
          <input type="checkbox" className="mr-3" />
          All Type
        </div>
        <div>
          <input type="checkbox" className="mr-3" />
          Vouchers
        </div>
        <div>
          <input type="checkbox" className="mr-3" />
          Products
        </div>
        <div>
          <input type="checkbox" className="mr-3" />
          Others
        </div>
      </div>

      <div className="flex flex-1 mt-10">
        <button className="bg-blue-700 text-white font-bold rounded-md p-3 w-full">
          Filter
        </button>
      </div>
    </div>
  );
};

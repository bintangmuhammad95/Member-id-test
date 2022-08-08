import React, { useState } from "react";
import { Card } from "../../components/card/Card";
import { data } from "../../dummy/data";
import Image from "next/image";
import { MenuAlt2Icon, AdjustmentsIcon } from "@heroicons/react/outline";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Filter } from "../../components/filter/Filter";

const Awards = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  function convertInputPrice(number) {
    const formatNumber = number
      .toString()
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formatNumber;
  }
  return (
    <>
      {showMenu && <Sidebar onClick={() => setShowMenu((prev) => !prev)} />}
      {showFilter && (
        <Filter onClickClose={() => setShowFilter((prev) => !prev)} />
      )}
      <div className="flex flex-1 justify-between p-5">
        <div>
          <MenuAlt2Icon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        <div className="font-bold">Awards</div>

        <div>
          <AdjustmentsIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowFilter((prev) => !prev)}
          />
        </div>
      </div>

      <div className="mb-8">
        {data.map((v) => (
          <div key={v.id}>
            <Card>
              <div className="flex flex-1 justify-end">
                <label
                  className={`
                ${v.type === "Vouchers" && "bg-blue-700"} 
                  ${v.type === "Products" && "bg-red-700"}
                  ${v.type === "Giftcard" && "bg-orange-600"}
                   p-3 rounded-md text-white font-medium text-xs`}
                >
                  {v.type}
                </label>
              </div>

              <div className="relative h-20 w-20">
                <Image src={v.img} alt="" layout="fill" />
              </div>

              <div className="mt-3">
                <label>{convertInputPrice(v.point)} poin</label>
              </div>
            </Card>

            <div className="px-5">
              <label>{v.name}</label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;

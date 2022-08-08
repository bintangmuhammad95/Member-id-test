import Image from "next/image";
import { useRouter } from "next/router";

export const Sidebar = ({ onClick }) => {
  const router = useRouter();
  const menus = [
    {
      menu: "Home",
      to: "/awards",
    },
    {
      menu: "Cards",
      to: "/awards",
    },
    {
      menu: "Profile",
      to: "/awards",
    },
    {
      menu: "Logout",
      to: "/",
    },
  ];
  return (
    <div className="flex flex-1 flex-row">
      <div className="pt-14 pl-11 z-50 bg-white fixed w-[70vw] h-[100vh]">
        <div className="relative h-14 w-14 mb-6">
          <Image src={"/star.jpg"} alt="" layout="fill" />
        </div>

        <div className="font-bold text-2xl mb-10">
          <label>Awards Menu</label>
        </div>

        <div className="space-y-4 flex-1 flex flex-col">
          {menus.map((v, idx) => (
            <label
              key={idx}
              onClick={() => router.push(v.to)}
              className="cursor-pointer text-gray-400 hover:text-black font-medium"
            >
              {v.menu}
            </label>
          ))}
        </div>
      </div>
      <div
        className="w-[100vw] h-[100vh] bg-black opacity-30 z-30 fixed"
        onClick={onClick}
      ></div>
    </div>
  );
};

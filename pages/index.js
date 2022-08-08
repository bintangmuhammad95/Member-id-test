import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col justify-center pt-5">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex justify-center">
          <Image src={"/star.jpg"} alt="" height={100} width={100} />
        </div>

        <label className="font-bold text-center">AWARD</label>
      </div>

      <div className="flex-1 flex flex-col mt-8 space-y-3 px-9">
        <p className="text-center">
          Enter your email address to sign in and continue
        </p>

        <input
          className="border border-gray-400 p-3 rounded-md"
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="rounded-md p-3 text-white bg-slate-700"
          onClick={() => {
            if (email !== "user@mail.com") {
              alert("Email Address is not exists");
            } else {
              router.push("/awards");
            }
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

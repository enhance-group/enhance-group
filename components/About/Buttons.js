"use client";

import { oxanium } from "../fonts";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();
  return (
    <div
      className={`${oxanium.className} w-full h-full flex justify-evenly text-neutral-800
      md:w-full md:h-full`}
    >
      <button
        className="px-3 py-2 text-sm font-bold bg-yellow-600 rounded-lg md:text-lg md:hover:text-neutral-300 md:hover:border-neutral-800 active:text-neutral-300 hover:scale-110"
        onClick={() => router.push("/team")}
      >
        Check our team
      </button>

      <button
        className="px-3 py-2 text-sm font-bold bg-yellow-600 rounded-lg md:text-lg md:hover:text-neutral-300 md:hover:border-neutral-800 active:text-neutral-300 hover:scale-110"
        onClick={() => router.push("/projects")}
      >
        Check our projects
      </button>
    </div>
  );
};

export default Buttons;

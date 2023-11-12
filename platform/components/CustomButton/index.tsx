import React from "react";
import { useFormStatus } from "react-dom";

const CustomFooter = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group mx-auto flex h-[65px] w-[248px] items-center justify-center gap-2 rounded-full bg-gradient-to-l from-emerald-400 via-blue-500 to-purple-500 outline-none transition-all hover:scale-105"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <div className="text-lg font-medium leading-relaxed text-white group-hover:text-xl">
          Let&apos;s Meet!
        </div>
      )}
    </button>
  );
};

export default CustomFooter;

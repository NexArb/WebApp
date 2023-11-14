import React from "react";
import { useFormStatus } from "react-dom";

type ProjectItem = {
  className: string;
  text: string;
};

const CustomFooter = ({ className, text }: ProjectItem) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`hover:scale-105} group mx-auto flex items-center justify-center gap-2 rounded-full outline-none transition-all ${className}`}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <div className="text-lg font-medium leading-relaxed text-white group-hover:text-xl">
          {text}
        </div>
      )}
    </button>
  );
};

export default CustomFooter;

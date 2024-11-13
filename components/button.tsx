import Link from "next/link";
import { ReactNode } from "react";

const ButtonRotatingBackgroundGradient = ({
  children,
  className,
  link,
}: {
  children: ReactNode;
  className: string;
  link: string;
}) => {
  return (
    <button
      className={`relative group inline-flex justify-center items-center h-14 w-14 overflow-hidden rounded-full p-[2px] focus:outline-none ${className}`}
    >
      <Link href={link} target="_blank">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] group-hover:duration-1000 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] transition-all" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#121418] shadow-button group-hover:bg-[#03061c] group-hover:shadow-none p-4 text-sm font-medium text-gray-50 backdrop-blur-3xl transition-all duration-300">
          {children}
        </span>
      </Link>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;

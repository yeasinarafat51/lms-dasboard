/* eslint-disable react/prop-types */

import { cn } from "../components/lib/utiles";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "lg:font-bold font-normal   rounded-md text-[10px] md:text-[13px]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

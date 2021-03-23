import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
  onClick: () => void;
};

export const SampleButton = (props: Props) => {
  const { children, onClick } = props;
  return (
    <button
      className="ripple inline-block px-6 py-2 text-center text-black text-xs font-medium leading-6 hover:bg-gray-100 bg-transparent border-2 border-black rounded focus:outline-none uppercase transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

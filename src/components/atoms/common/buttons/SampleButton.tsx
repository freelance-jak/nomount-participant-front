import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
  onClick: () => void;
};

export const SampleButton = (props: Props) => {
  const { children, onClick } = props;
  return (
    <button
      className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-transparent border-2 border-black rounded ripple hover:bg-gray-100 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

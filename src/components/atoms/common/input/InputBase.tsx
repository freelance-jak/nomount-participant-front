import type { ChangeEvent } from "react";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const style = {
  borderRadius: "2rem",
};

export const InputBase = (props: Props) => {
  const { value, placeholder = "", onChange } = props;

  return (
    <input
      className="px-7 py-4 w-full text-gray-500 border outline-none shadow-md"
      type="text"
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
};

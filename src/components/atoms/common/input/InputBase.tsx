import type { ChangeEvent } from "react";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const style = {
  boxShadow: "0 0 16px #ddd",
  borderRadius: "2rem",
};

export const InputBase = (props: Props) => {
  const { value, placeholder = "", onChange } = props;

  return (
    <input
      className="w-full py-4 px-7 text-gray-500 border outline-none shadow-lg"
      type="text"
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
};

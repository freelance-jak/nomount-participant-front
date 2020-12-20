import type { ChangeEvent } from "react";
import { InputBase } from "src/components/atoms/common/input/InputBase";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = (props: Props) => {
  const { value, placeholder = "", onChange } = props;

  return <InputBase value={value} placeholder={placeholder} onChange={onChange} />;
};

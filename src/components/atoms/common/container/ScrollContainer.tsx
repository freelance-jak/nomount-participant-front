import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
  height: string;
};

export const ScrollContainer = (props: Props) => {
  const { children, height } = props;
  return (
    <div style={{ height: height }} className="overflow-scroll">
      {children}
    </div>
  );
};

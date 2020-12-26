import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export const EventDate = (props: Props) => {
  const { children } = props;
  return <h3 className="text-sm mt-5 mb-32 text-negative">{children}</h3>;
};

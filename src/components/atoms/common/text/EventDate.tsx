import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export const EventDate = (props: Props) => {
  const { children } = props;
  return <h3 className="mb-32 mt-5 text-negative text-sm">{children}</h3>;
};

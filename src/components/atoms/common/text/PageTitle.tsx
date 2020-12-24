import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export const PageTitle = (props: Props) => {
  const { children } = props;
  return <h2 className="text-5xl">{children}</h2>;
};

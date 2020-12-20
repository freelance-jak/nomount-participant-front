import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export const PageSubTitle = (props: Props) => {
  const { children } = props;
  return <h3>{children}</h3>;
};

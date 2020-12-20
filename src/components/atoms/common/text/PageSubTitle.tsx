import type { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export const PageSubTitle = (props: Props) => {
  const { children } = props;
  return <h3 className="text-4xl">{children}</h3>;
};

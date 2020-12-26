import type { ReactNode } from "react";
import { Footer } from "src/components/footer";
import { SideMenu } from "src/components/organisms/SideMenu";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideMenu />
      <div>
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

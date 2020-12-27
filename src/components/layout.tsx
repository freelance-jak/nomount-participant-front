import type { ReactNode } from "react";
import { Footer } from "src/components/footer";
import { SideMenu } from "src/components/organisms/SideMenu";
import { TopMenu } from "src/components/organisms/TopMenu";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="sm:flex">
      <div className="hidden sm:flex">
        <SideMenu />
      </div>

      <div className="bg-white sm:hidden">
        <TopMenu />
      </div>
      <div className="flex-initial">
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

import "react-pro-sidebar/dist/css/styles.css";

import Router from "next/router";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import { MenuTitle } from "src/components/molecules/common/MenuTitle";

export const SideMenu = () => {
  const onClickMenu = (path: string) => {
    Router.push(path);
  };

  return (
    <div className="sticky top-0 md:h-screen">
      <ProSidebar>
        <Menu iconShape="circle">
          <MenuItem>{<MenuTitle onClickTitle={() => onClickMenu("/")} />}</MenuItem>
          <SubMenu title="Meet" defaultOpen={true}>
            <MenuItem>2021/01</MenuItem>
            <MenuItem>2021/02</MenuItem>
            <MenuItem>2021/03</MenuItem>
            <MenuItem>2021/04</MenuItem>
            <MenuItem>2021/05</MenuItem>
          </SubMenu>
          <MenuItem>{<button onClick={() => onClickMenu("/ranking")}>RANKING</button>}</MenuItem>
          <MenuItem>{<button onClick={() => onClickMenu("/cancels")}>CANCEL LIST</button>}</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

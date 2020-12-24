import "react-pro-sidebar/dist/css/styles.css";

import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import { MenuTitle } from "src/components/molecules/common/MenuTitle";

export const SideMenu = () => {
  return (
    <>
      <ProSidebar>
        <Menu iconShape="circle">
          <MenuItem>{<MenuTitle />}</MenuItem>
          <SubMenu title="Meet" defaultOpen={true}>
            <MenuItem>2021/01</MenuItem>
            <MenuItem>2021/02</MenuItem>
            <MenuItem>2021/03</MenuItem>
            <MenuItem>2021/04</MenuItem>
            <MenuItem>2021/05</MenuItem>
          </SubMenu>
          <MenuItem>RANKING</MenuItem>
          <MenuItem>CANCEL LIST</MenuItem>
        </Menu>
      </ProSidebar>
    </>
  );
};

import Image from "next/image";
import Router from "next/router";
import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { SearchInput } from "src/components/atoms/common/input/SearchInput";
import { DashboardMenu } from "src/components/molecules/common/images/DashboardMenu";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }, []);

  const onClickMenu = (path: string) => {
    Router.push(path);
  };

  return (
    <div className="text-center pt-40 m-auto">
      <Image src="/nomountapp_logo.png" width={460} height={50} />
      <div className="pt-12 px-10">
        <SearchInput value={searchText} placeholder="Search for apps" onChange={onChangeSearchText} />
      </div>
      <div className="pt-20 flex justify-center space-x-10 > *">
        <DashboardMenu src="/icon_meet.png" title="MEET" onClick={() => onClickMenu("/monthSummary")} />
        <DashboardMenu src="/icon_shuffle.png" title="SHUFFLE" onClick={() => alert()} />
        <DashboardMenu src="/icon_team.png" title="TEAM" onClick={() => alert()} />
        <DashboardMenu src="/icon_list.png" title="コレスル" onClick={() => alert()} />
      </div>
      <div className="pt-8 flex justify-center space-x-10 > *">
        <DashboardMenu src="/icon_team.png" title="TEAM" onClick={() => alert()} />
        <DashboardMenu src="/icon_meet.png" title="MEET" onClick={() => alert()} />
        <DashboardMenu src="/icon_list.png" title="コレスル" onClick={() => alert()} />
        <DashboardMenu src="/icon_shuffle.png" title="SHUFFLE" onClick={() => alert()} />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

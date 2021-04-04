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
  const redirectToOtherPage = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="m-auto pt-40 text-center">
      <Image src="/nomountapp_logo.png" width={460} height={50} />
      <div className="pt-12 px-10">
        <SearchInput value={searchText} placeholder="Search for apps" onChange={onChangeSearchText} />
      </div>
      <div className="> flex justify-center pt-20 * space-x-10">
        <DashboardMenu src="/icon_meet.png" title="MEET" onClick={() => onClickMenu("/monthSummary")} />
        <DashboardMenu
          src="/icon_shuffle.png"
          title="SHUFFLE"
          onClick={() => redirectToOtherPage("https://nomount-shuffle.vercel.app")}
        />
        <DashboardMenu src="/icon_team.png" title="TEAM" onClick={() => alert()} />
        <DashboardMenu
          src="/icon_list.png"
          title="コレスル"
          onClick={() => redirectToOtherPage("https://koresuru-test.vercel.app/")}
        />
      </div>
      <div className="> flex justify-center pt-8 * space-x-10">
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

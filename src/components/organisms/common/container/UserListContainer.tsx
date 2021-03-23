// import { ScrollContainer } from "src/components/atoms/common/container/ScrollContainer";
import { useState } from "react";
import { ChangeMode } from "src/components/molecules/common/ChangeMode";
import { Member } from "src/components/organisms/common/Member";
import type { Member as TMember } from "src/types/member";

type Props = {
  title: string;
  userList: TMember[];
  onReload: () => void;
};

export const UserListContainer = (props: Props) => {
  const { title, userList, onReload } = props;
  const [isCancelMode, setCancelMode] = useState(true);

  const onClickCancelMode = () => {
    setCancelMode(!isCancelMode);
  };

  return (
    <>
      <div className="mb-20">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="text-5xl">{title}</h1>
          <div className="flex flex-row items-end">
            <h1 className="mr-3 text-lg">TOTAL</h1>
            <h1 className="text-5xl">{userList.length}</h1>
          </div>
        </div>

        {/* <ScrollContainer height={"460px"}> 一時的にスクロール非表示*/}
        <ul className="grid gap-5 grid-cols-3 p-4 bg-gray-50 lg:grid-cols-5 xl:grid-cols-7">
          {userList.map((user) => {
            return <Member key={user.id} member={user} isCancelMode={isCancelMode} onReload={onReload}></Member>;
          })}
        </ul>
        {/* </ScrollContainer> */}

        <ChangeMode onClick={onClickCancelMode} />
      </div>
    </>
  );
};

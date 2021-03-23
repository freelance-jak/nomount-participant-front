// import { ScrollContainer } from "src/components/atoms/common/container/ScrollContainer";
import { Member } from "src/components/organisms/common/Member";
import type { Member as TMember } from "src/types/member";

type Props = {
  title: string;
  userList: TMember[];
};

export const UserListContainer = (props: Props) => {
  const { title, userList } = props;

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
          {userList.map((user, index) => {
            return <Member key={user.id} name={user.name} id={user.id} isCancel={index % 2 == 0}></Member>;
          })}
        </ul>
        {/* </ScrollContainer> */}
        <div className="flex justify-end mt-3">
          <span>キャンセルモードへ切り替える</span>
          <div className="ml-2 w-7 h-7 cursor-pointer">
            <img src="/icon_refresh.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

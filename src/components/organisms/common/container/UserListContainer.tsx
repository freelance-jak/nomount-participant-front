import { Member } from "src/components/organisms/common/Member";
import type { Member as TMember } from "src/types/member";

type Props = { userList: TMember[] };

export const UserListContainer = (props: Props) => {
  const { userList } = props;
  return (
    <>
      <ul className="grid grid-cols-7 gap-x-5 gap-y-5">
        {userList.map((user) => {
          return <Member key={user.id} name={user.name} id={user.id} isCancel={user.isCancel}></Member>;
        })}
      </ul>
    </>
  );
};

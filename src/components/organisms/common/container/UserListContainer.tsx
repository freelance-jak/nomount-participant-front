import type { Member } from "src/types/member";

type Props = { userList: Member[] };

export const UserListContainer = (props: Props) => {
  const { userList } = props;
  return (
    <>
      <ul className="grid grid-cols-7 gap-5">
        {userList.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
};

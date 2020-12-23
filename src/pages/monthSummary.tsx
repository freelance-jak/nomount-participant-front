import { EventDate } from "src/components/atoms/common/text/EventDate";
import { MonthTitle } from "src/components/atoms/common/text/MonthTitle";
import { Layout } from "src/components/layout";
import { UserListContainer } from "src/components/organisms/common/container/UserListContainer";

const MonthSummary = () => {
  const sample = Array(70).fill({
    name: "みずさん",
    id: "mizushima",
    isCancel: false,
  });

  return (
    <Layout>
      <div className="p-10 pr-28">
        <MonthTitle>2020 JANUARY</MonthTitle>
        <EventDate>開催日：2020.1.12</EventDate>
        <UserListContainer title="APPLY" userList={sample} />
        <UserListContainer title="JOINING" userList={sample} />
        <UserListContainer title="CANCEL" userList={sample} />
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default MonthSummary;

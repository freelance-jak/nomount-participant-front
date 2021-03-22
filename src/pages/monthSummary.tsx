import { EventDate } from "src/components/atoms/common/text/EventDate";
import { PageTitle } from "src/components/atoms/common/text/PageTitle";
import { Layout } from "src/components/layout";
import { UserListContainer } from "src/components/organisms/common/container/UserListContainer";

const MonthSummary = () => {
  const sample = Array(20).fill({
    name: "みずさん",
    id: "mizushima",
    isCancel: false,
  });

  return (
    <Layout>
      <div className="py-6 px-10">
        <PageTitle>2020 JANUARY</PageTitle>
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

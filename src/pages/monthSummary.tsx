import { EventDate } from "src/components/atoms/common/text/EventDate";
import { PageTitle } from "src/components/atoms/common/text/PageTitle";
import { Layout } from "src/components/layout";
import { UserListContainer } from "src/components/organisms/common/container/UserListContainer";
import { useMeets } from "src/customHooks/useMeets";

const MonthSummary = () => {
  const { meets, setMeets } = useMeets("2021", "04");
  const onReload = () => {
    meets && setMeets([...meets]);
  };

  return (
    <Layout>
      <div className="px-10 py-6">
        <PageTitle>2020 JANUARY</PageTitle>
        <EventDate>開催日：2020.1.12</EventDate>
        {meets && (
          <div>
            <UserListContainer
              title="APPLY"
              userList={meets.filter((meet) => meet.status == "wait")}
              onReload={onReload}
            />
            <UserListContainer
              title="JOINING"
              userList={meets.filter((meet) => meet.status == "participate")}
              onReload={onReload}
            />
            <UserListContainer
              title="CANCEL"
              userList={meets.filter((meet) => meet.status == "cancel")}
              onReload={onReload}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default MonthSummary;

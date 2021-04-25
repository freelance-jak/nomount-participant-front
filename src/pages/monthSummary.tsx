import { useState } from "react";
import { EventDate } from "src/components/atoms/common/text/EventDate";
import { PageTitle } from "src/components/atoms/common/text/PageTitle";
import { Layout } from "src/components/layout";
import FinishButton from "src/components/molecules/common/FinishButton";
import { UserListContainer } from "src/components/organisms/common/container/UserListContainer";
import type { Member } from "src/types/member";

const MonthSummary = () => {
  const dummy: Member[] = Array(20)
    .fill(null)
    .map((_, index) => ({
      isJoining: null,
      name: "みずさん",
      id: "mizushima" + index.toString(),
    }));

  const [sample, setSamples] = useState(dummy);
  const onReload = () => {
    setSamples([...sample]);
  };

  return (
    <Layout>
      <div className="px-10 py-6">
        <PageTitle>2020 JANUARY</PageTitle>
        <EventDate>開催日：2020.1.12</EventDate>
        <UserListContainer
          title="APPLY"
          userList={sample.filter((value) => value.isJoining == null)}
          onReload={onReload}
        />
        <UserListContainer
          title="JOINING"
          userList={sample.filter((value) => value.isJoining == true)} //他と記法を揃えるために==trueをあえて記載
          onReload={onReload}
        />
        <UserListContainer
          title="CANCEL"
          userList={sample.filter((value) => value.isJoining == false)}
          onReload={onReload}
        />
        <FinishButton />
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default MonthSummary;

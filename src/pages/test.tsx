import { SampleButton } from "src/components/atoms/common/buttons/SampleButton";
import { ScrollContainer } from "src/components/atoms/common/container/ScrollContainer";
import { Layout } from "src/components/layout";
import { UserListContainer } from "src/components/organisms/common/container/UserListContainer";
import { Member } from "src/components/organisms/common/Member";

const Test = () => {
  return (
    <>
      <Member name="みずさん" id="mizusan" isCancel={true}></Member>
      <Member name="みずさん" id="mizusan" isCancel={false}></Member>
    </>
  );

  const onClickSampleButton = () => {
    alert();
  };
  const UserList = [
    {
      name: "みずさん",
      id: "mizushima",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima1",
      isCancel: false,
    },
    {
      name: "みずさん",
      id: "mizushima2",
      isCancel: false,
    },
  ];
  return (
    <Layout>
      <p>ここにコンポーネントをテストで表示する</p>
      <SampleButton onClick={onClickSampleButton}>ボタン</SampleButton>
      <ScrollContainer height={"300px"}>
        <UserListContainer userList={UserList} />
      </ScrollContainer>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Test;

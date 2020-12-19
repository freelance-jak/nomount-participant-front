import { SampleButton } from "src/components/atoms/common/buttons/SampleButton";
import { Layout } from "src/components/layout";
import { Member } from "src/components/organisms/common/Member";

const Home = () => {
  // return (
  //   <Layout>
  //     <button
  //       className="btn-blue"
  //       onClick={() => {
  //         window.alert("Hello, World!");
  //       }}
  //     >
  //       Button
  //     </button>
  //     <SampleButton onClick={onClickSampleButton}>ボタン</SampleButton>
  //   </Layout>
  // );

  return <Member name="ここにname" id="ここにid" state="ここにステータス" />;
};

// eslint-disable-next-line import/no-default-export
export default Home;

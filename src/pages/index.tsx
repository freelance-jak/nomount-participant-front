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

  return (
    <>
      <div className="flex flex-row">
        <Member name="そるてぃ" id="solty_919" isCancel={true} />
        <Member name="みずさん" id="mizusima" isCancel={false} />
        <Member name="そるてぃ" id="solty_919" isCancel={true} />
        <Member name="みずさん" id="mizusima" isCancel={false} />
        <Member name="そるてぃ" id="solty_919" isCancel={true} />
        <Member name="みずさん" id="mizusima" isCancel={false} />
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

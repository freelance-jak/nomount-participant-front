import { SampleButton } from "src/components/atoms/common/buttons/SampleButton";
import { Layout } from "src/components/layout";

const Home = () => {
  const onClickSampleButton = () => {
    alert();
  };

  return (
    <Layout>
      <button
        className="btn-blue"
        onClick={() => {
          window.alert("Hello, World!");
        }}
      >
        Button
      </button>
      <SampleButton onClick={onClickSampleButton}>ボタン</SampleButton>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;

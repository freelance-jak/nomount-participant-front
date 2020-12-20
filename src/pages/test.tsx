import { SampleButton } from "src/components/atoms/common/buttons/SampleButton";
import { PageSubTitle } from "src/components/atoms/common/text/PageSubTitle";
import { Layout } from "src/components/layout";

const Test = () => {
  const onClickSampleButton = () => {
    alert();
  };

  return (
    <Layout>
      <p>ここにコンポーネントをテストで表示する</p>
      <SampleButton onClick={onClickSampleButton}>ボタン</SampleButton>
      <PageSubTitle>Cancel</PageSubTitle>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Test;

import { SampleButton } from "src/components/atoms/common/buttons/SampleButton";
import { PageTitle } from "src/components/atoms/common/text/PageTitle";
import { Layout } from "src/components/layout";

const Test = () => {
  const onClickSampleButton = () => {
    alert();
  };

  return (
    <>
      <Layout>
        <p>ここにコンポーネントをテストで表示する</p>
        <SampleButton onClick={onClickSampleButton}>ボタン</SampleButton>
        <PageTitle>2020 JANUARY</PageTitle>
      </Layout>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Test;

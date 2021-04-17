import ReactTooltip from "react-tooltip";
import { Layout } from "src/components/layout";

const Ranking = () => {
  return (
    <Layout>
      <button data-tip="2" className="focus:outline-none">
        aaa
        <ReactTooltip className="bg-red" place="right" />
      </button>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Ranking;

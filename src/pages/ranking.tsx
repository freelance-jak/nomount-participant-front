import ReactTooltip from "react-tooltip";
import { Layout } from "src/components/layout";

const Ranking = () => {
  return (
    <Layout>
      <br />
      <br />
      <button data-tip data-for="speechBalloon" className="focus:outline-none">
        <p>ssssssssss</p>
      </button>
      <ReactTooltip id="speechBalloon" type="dark">
        <span>comment</span>
      </ReactTooltip>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Ranking;

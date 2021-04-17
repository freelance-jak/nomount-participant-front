import ReactTooltip from "react-tooltip";

export const Footer = () => {
  return (
    <footer className="flex justify-end mr-3">
      <small>&copy; Nomount Meet</small>
      <div>
        <button data-tip="2" className="focus:outline-none">
          aaa
          <ReactTooltip className="bg-red" place="right" />
        </button>
      </div>
    </footer>
  );
};

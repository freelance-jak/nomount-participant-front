import type { VFC } from "react";

type Props = {
  onClick: (text: string) => void;
};

const ApplyButton: VFC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button
      onClick={() => onClick("wait")}
      className="focus:shadow-outline px-6 py-1.5 text-red-500 text-xs font-bold border border-red-500 rounded-full focus:outline-none"
    >
      APPLY
    </button>
  );
};

// eslint-disable-next-line import/no-default-export
export default ApplyButton;

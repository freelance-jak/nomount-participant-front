import type { VFC } from "react";

type Props = {
  onClick: (text: string) => void;
};

const JoinButton: VFC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button
      onClick={() => onClick("participate")}
      className="focus:shadow-outline px-8 py-1.5 text-white text-xs font-bold bg-active rounded-full focus:outline-none"
    >
      JOIN
    </button>
  );
};

// eslint-disable-next-line import/no-default-export
export default JoinButton;

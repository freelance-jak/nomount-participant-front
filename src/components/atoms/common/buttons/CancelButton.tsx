import type { VFC } from "react";

type Props = {
  onClick: (text: string) => void;
};

const CancelButton: VFC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button
      onClick={() => onClick("cancel")}
      className="focus:shadow-outline px-6 py-1.5 text-white text-xs font-bold bg-negative rounded-full focus:outline-none"
    >
      CANCEL
    </button>
  );
};

// eslint-disable-next-line import/no-default-export
export default CancelButton;

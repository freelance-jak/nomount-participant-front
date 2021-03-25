type Props = {
  isJoining?: boolean;
  isCancelMode: boolean;
  onClick: (value: boolean | null) => void;
};

const ReceptionButton = (props: Props) => {
  const { isJoining, isCancelMode, onClick } = props;
  return (
    <div className="my-2">
      {isCancelMode ? (
        isJoining || isJoining == null ? (
          <button
            onClick={() => onClick(false)}
            className="focus:shadow-outline px-6 py-1.5 text-white text-xs font-bold bg-negative rounded-full focus:outline-none"
          >
            CANCEL
          </button>
        ) : (
          <button
            onClick={() => onClick(null)}
            className="focus:shadow-outline px-6 py-1.5 text-red-500 text-xs font-bold border border-red-500 rounded-full focus:outline-none"
          >
            APPLY
          </button>
        )
      ) : isJoining ? (
        <button
          onClick={() => onClick(null)}
          className="focus:shadow-outline px-6 py-1.5 text-red-500 text-xs font-bold border border-red-500 rounded-full focus:outline-none"
        >
          APPLY
        </button>
      ) : (
        <button
          onClick={() => onClick(true)}
          className="focus:shadow-outline px-8 py-1.5 text-white text-xs font-bold bg-active rounded-full focus:outline-none"
        >
          JOIN
        </button>
      )}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default ReceptionButton;

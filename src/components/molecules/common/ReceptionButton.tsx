import ApplyButton from "src/components/atoms/common/buttons/ApplyButton";
import CancelButton from "src/components/atoms/common/buttons/CancelButton";
import JoinButton from "src/components/atoms/common/buttons/JoinButton";

type Props = {
  status: string;
  isCancelMode: boolean;
  onClick: (join: string) => void;
};

const ReceptionButton = (props: Props) => {
  const { status, isCancelMode, onClick } = props;

  return (
    <div className="my-2">
      {(() => {
        switch (status) {
          case "wait":
            return isCancelMode ? <CancelButton onClick={onClick} /> : <JoinButton onClick={onClick} />;
          case "participate":
            return isCancelMode ? <CancelButton onClick={onClick} /> : <ApplyButton onClick={onClick} />;
          case "cancel":
            return isCancelMode ? <ApplyButton onClick={onClick} /> : <JoinButton onClick={onClick} />;
          default:
            break;
        }
      })()}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default ReceptionButton;

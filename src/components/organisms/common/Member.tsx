import ReceptionButton from "src/components/molecules/common/ReceptionButton";
import { SpeechBalloon } from "src/components/molecules/common/SpeechBalloon";
import type { Meet } from "src/types/meet";

type Props = {
  meet: Meet;
  isCancelMode: boolean;
  onReload: () => void;
};

export const Member = (props: Props) => {
  const { meet, isCancelMode, onReload } = props;
  const onClick = (join: string) => {
    meet.status = join;
    onReload();
  };

  return (
    <div className="flex flex-col flex-wrap content-center justify-center px-4 py-3 text-center text-primary">
      <div className="relative flex flex-wrap content-center justify-center w-24 h-24 border-2 border-solid border-primary rounded-full">
        <div className="absolute -right-0 -top-2">
          <SpeechBalloon message={meet.message} />
        </div>
        <span className="text-primary text-3xl">{meet.member.connpassAccount.toUpperCase().charAt(0)}</span>
      </div>

      <p className="mt-1 text-primary">{meet.member.name}</p>
      <p className="text-negative text-xs">{meet.member.connpassAccount}</p>

      <ReceptionButton isJoining={meet.status} isCancelMode={isCancelMode} onClick={onClick} />
    </div>
  );
};

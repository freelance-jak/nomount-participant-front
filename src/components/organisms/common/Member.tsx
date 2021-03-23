import { SpeechBalloon } from "src/components/molecules/common/SpeechBalloon";
import type { Member as TMember } from "src/types/member";

type Props = {
  member: TMember;
  isCancelMode: boolean;
  onReload: () => void;
};

export const Member = (props: Props) => {
  const { member, isCancelMode, onReload } = props;
  const onClick = (join: boolean) => {
    member.isJoining = join;
    onReload();
  };

  return (
    <div className="flex flex-col flex-wrap content-center justify-center px-4 py-3 text-center text-primary">
      <div className="relative flex flex-wrap content-center justify-center w-24 h-24 border-2 border-solid border-primary rounded-full">
        <div className="absolute -right-0 -top-2">
          <SpeechBalloon
            onClick={() => {
              return alert();
            }}
          />
        </div>
        <span className="text-primary text-3xl">{member.id.toUpperCase().charAt(0)}</span>
      </div>

      <p className="mt-1 text-primary">{member.name}</p>
      <p className="text-negative text-xs">{member.id}</p>

      <div className="my-2">
        {isCancelMode ? (
          <button
            onClick={() => onClick(true)}
            className="focus:shadow-outline px-8 py-1.5 text-white text-xs font-bold bg-active rounded-full focus:outline-none"
          >
            JOIN
          </button>
        ) : (
          <button
            onClick={() => onClick(false)}
            className="focus:shadow-outline px-6 py-1.5 text-white text-xs font-bold bg-negative rounded-full focus:outline-none"
          >
            CANCEL
          </button>
        )}
      </div>
    </div>
  );
};

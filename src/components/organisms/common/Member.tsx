import { SpeechBalloon } from "src/components/molecules/common/SpeechBalloon";

type Props = {
  name: string;
  id: string;
  isCancel: boolean;
};

export const Member = (props: Props) => {
  const { name, id, isCancel } = props;
  return (
    <div className="flex flex-col flex-wrap content-center justify-center px-4 py-3 text-center text-primary">
      <div className="relative flex flex-wrap content-center justify-center w-24 h-24 border-2 border-solid border-primary rounded-full">
        <div className="absolute -right-0 -top-2">
          <SpeechBalloon comment="今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ今日は楽しみだなあ" />
        </div>
        <span className="text-primary text-3xl">{id.toUpperCase().charAt(0)}</span>
      </div>

      <p className="mt-1 text-primary">{name}</p>
      <p className="text-negative text-xs">{id}</p>

      <div className="my-2">
        {isCancel ? (
          <button className="focus:shadow-outline px-8 py-1.5 text-white text-xs font-bold bg-active rounded-full focus:outline-none">
            JOIN
          </button>
        ) : (
          <button className="focus:shadow-outline px-6 py-1.5 text-white text-xs font-bold bg-negative rounded-full focus:outline-none">
            CANCEL
          </button>
        )}
      </div>
    </div>
  );
};

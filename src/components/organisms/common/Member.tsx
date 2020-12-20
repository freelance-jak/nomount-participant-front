import { SpeechBalloon } from "src/components/molecules/common/SpeechBalloon";

type Props = {
  name: string;
  id: string;
  isCancel: boolean;
};

export const Member = (props: Props) => {
  const { name, id, isCancel } = props;
  return (
    <div className="flex flex-wrap justify-center content-center flex-col py-3 px-4 text-primary text-center relative">
      <div className="absolute right-2 top-2">
        <SpeechBalloon
          onClick={() => {
            return alert();
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center content-center h-24 w-24 border-primary border-solid rounded-full border-2">
        <span className="text-3xl text-primary">M</span>
      </div>

      <p className="text-primary mt-1">{name}</p>
      <p className="text-xs text-negative">{id}</p>

      <div className="my-2">
        {isCancel ? (
          <button className="text-xs bg-active text-white font-bold py-1.5 px-8 rounded-full">JOIN</button>
        ) : (
          <button className="text-xs bg-negative text-white font-bold py-1.5 px-6 rounded-full">CANCEL</button>
        )}
      </div>
    </div>
  );
};

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
      <p className="text-xs text-primary">{id}</p>

      <div className="mx-3 my-2">
        {isCancel ? (
          <button className="text-xs bg-green-400 hover:bg-green-900 text-white font-bold py-1.5 px-4 rounded">
            Join
          </button>
        ) : (
          <button className="text-xs bg-gray-500 hover:bg-gray-700 text-white font-bold py-1.5 px-4 rounded">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

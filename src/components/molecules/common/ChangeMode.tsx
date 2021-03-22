type Props = {
  onClick: () => void;
};

export const ChangeMode = (props: Props) => {
  const { onClick } = props;
  return (
    <div className="flex justify-end">
      <button className="focus:outline-none" onClick={() => onClick()}>
        <div className="flex mt-3">
          <span>キャンセルモードへ切り替える</span>
          <div className="ml-2 w-7 h-7">
            <img src="/icon_refresh.png" alt="" />
          </div>
        </div>
      </button>
    </div>
  );
};

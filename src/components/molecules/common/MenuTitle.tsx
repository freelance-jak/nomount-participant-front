type Props = {
  onClickTitle: () => void;
};

export const MenuTitle = (props: Props) => {
  const { onClickTitle } = props;
  return (
    <button onClick={onClickTitle}>
      <div className="flex items-center">
        <div>
          <img
            src="/icon_meet.png"
            alt=""
            className="transition duration-1000 transform hover:rotate-180 h-12 w-12 sm:h-20 sm:w-20"
          />
        </div>

        <div className="flex sm:flex-col justify-center text-center ml-3">
          <p className="text-lg  mr-1 sm:text-xl sm:mr-0">No-Mount</p>
          <p className="text-lg sm:text-4xl">MEET</p>
        </div>
      </div>
    </button>
  );
};

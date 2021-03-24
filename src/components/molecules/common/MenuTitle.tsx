type Props = {
  onClickTitle: () => void;
};

export const MenuTitle = (props: Props) => {
  const { onClickTitle } = props;
  return (
    <button onClick={onClickTitle} className="focus:outline-none">
      <div className="flex items-center">
        <div>
          <img
            src="/icon_meet.png"
            alt=""
            className="w-12 h-12 transform hover:rotate-180 transition duration-1000 sm:w-20 sm:h-20"
          />
        </div>

        <div className="flex justify-center ml-3 text-center sm:flex-col">
          <p className="mr-1 text-lg sm:mr-0 sm:text-xl">No-Mount</p>
          <p className="text-lg sm:text-4xl">MEET</p>
        </div>
      </div>
    </button>
  );
};

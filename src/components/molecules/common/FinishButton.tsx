const FinishButton = () => {
  const onClick = () => {
    // TODO 通信処理
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="p-4 px-20 text-white text-xl tracking-widest bg-primary rounded-full focus:outline-none transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out"
      >
        FINISH
      </button>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default FinishButton;

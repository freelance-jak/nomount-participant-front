type Props = {
  totalNum: number;
};

export const TotalNum = (props: Props) => {
  const { totalNum } = props;
  return (
    <p>
      Total <span className="font-bold text-3xl">{totalNum}</span>
    </p>
  );
};

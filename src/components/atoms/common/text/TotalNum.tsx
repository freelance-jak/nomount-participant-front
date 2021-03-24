type Props = {
  totalNum: number;
};

export const TotalNum = (props: Props) => {
  const { totalNum } = props;
  return (
    <p>
      Total <span className="text-3xl font-bold">{totalNum}</span>
    </p>
  );
};

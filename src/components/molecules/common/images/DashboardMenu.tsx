import Image from "next/image";

type Props = {
  src: string;
  title: string;
  onClick: () => void;
};

export const DashboardMenu = (props: Props) => {
  const { src, title, onClick } = props;
  return (
    <div>
      <Image className="hover:opacity-90 cursor-pointer" src={src} width={80} height={80} onClick={onClick} />
      <p>{title}</p>
    </div>
  );
};

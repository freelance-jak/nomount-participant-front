type Props = {
  name: string;
  id: string;
  state: string;
};

export const Member = (props: Props) => {
  return <h1>{props.name}</h1>;
};

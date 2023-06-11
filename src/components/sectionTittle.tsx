type Props = {
  tittle: string;
};

export const Tittle: React.FC<Props> = ({ tittle }: Props) => {
  return (
    <h1 className="my-5 text-center font-unna text-5xl text-tittle-black">
      {tittle}
    </h1>
  );
};

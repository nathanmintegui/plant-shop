type Props = {
  tittle: string;
};

export const Tittle: React.FC<Props> = ({ tittle }: Props) => {
  return (
    <h1 className="inline border-b-black text-center font-unna text-5xl text-tittle-black">
      {tittle}
    </h1>
  );
};

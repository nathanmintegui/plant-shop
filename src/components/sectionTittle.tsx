type Props = {
  tittle: string;
  position: "center" | "right" | "left";
};

export const Tittle: React.FC<Props> = ({ tittle, position }: Props) => {
  return (
    <h1
      className={`mb-9 mt-20 text-${position} font-unna text-5xl text-tittle-black`}
    >
      {tittle}
    </h1>
  );
};

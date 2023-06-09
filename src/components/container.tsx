interface Props {
  children: React.ReactNode;
  className: string;
}

export const Container: React.FC<Props> = ({ children, className }: Props) => {
  return <div className={`${className} px-28`}>{children}</div>;
};

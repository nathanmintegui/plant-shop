import Image from "next/image";

import { magnifierGlass, papLogo } from "~/assets";
import { Container } from "./container";

interface IProps {
  name: string;
}

export const Header = () => {
  const HeaderSection: React.FC<IProps> = ({ name }: IProps) => {
    return (
      <div className="mx-10 flex items-center">
        <h1 className="text-lg">{name}</h1>
        <div className="arrow ml-2"></div>
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className="flex w-52 items-center rounded-md border border-black p-3">
        <Image src={magnifierGlass} alt="magnifier class" className="mr-3" />
        <p className="font-sans text-gray-500">Search</p>
      </div>
    );
  };
  return (
    <Container className="flex h-20 items-center justify-between">
      <Image src={papLogo} alt="Plan a plant" />

      <div className="flex">
        {<HeaderSection name="Home" />}
        {<HeaderSection name="Plants" />}
        {<HeaderSection name="Planter" />}
        {<HeaderSection name="Essentials" />}
        {<HeaderSection name="Services" />}
      </div>

      {<SearchBar />}
    </Container>
  );
};

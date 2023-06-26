import Image from "next/image";

import { Tittle } from "./sectionTittle";

import { blogs } from "~/constants";

import type { IProps } from "~/constants";

import { Container } from "./container";

const BlogCard: React.FC<IProps> = ({ image, name, alt }: IProps) => {
  return (
    <div className="relative">
      <Image src={image} alt={alt} className="w-screen" />
      <h1 className="text-red absolute left-1/3 top-1/3 max-w-xs text-center font-sans text-3xl text-white">
        {name}
      </h1>
      <button className="absolute bottom-20 left-36 h-16 w-8/12 rounded-lg bg-button-green text-center font-sans text-xl font-bold text-white">
        Read
      </button>
    </div>
  );
};

export const Blogs: React.FC = () => {
  return (
    <Container className="flex flex-col">
      <Tittle tittle="Blogs" position="center" />
      <div className="flex">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </Container>
  );
};

import React from "react";
import Image from "next/image";

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const Card = ({ imgUrl, title, description }: CardProps) => {

  return (
    <div className="group w-full h-full rounded-xl overflow-hidden grid grid-rows-2 transition-shadow duration-300 hover:shadow-[0_0_5px_white]">

      <div className="relative row-span-1 h-full w-full overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 duration-300 transition-transform h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-0.5 lg:gap-3 p-1 lg:p-4 flex-1 font-black">
        <h3 className="text-lg lg:text-3xl">
          {title}
        </h3>
        <p className="text-base lg:text-2xl leading-tight text-white hidden lg:block lg:line-clamp-4">
          {description}
        </p>
      </div>

    </div>
  );
};

export default Card;

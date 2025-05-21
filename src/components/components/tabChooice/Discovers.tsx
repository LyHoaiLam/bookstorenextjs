"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import AppImage from "@/components/components/common/Image";
import { memo } from "react";
import { dataDiscover } from "./data";

interface Props {
  className?: string;
  title: string;
}

const Discover = ({ title, className }: Props) => {

  return (
    <div className={cn("mt-10", className)}>
      <h1 className="text-white neon-text text-2xl text-center">{title}</h1>
      <div className="mt-10">
        <div className="grid sm:grid-cols-4 grid-rows-3 gap-4">
          <Link key={dataDiscover[0].label} className="col-span-2 row-span-2 relative rounded-2xl cursor-pointer group overflow-hidden animate-fade-in"
            href={{
              pathname: `/country/${encodeURIComponent(dataDiscover[0].label)}`,
              query: { img: dataDiscover[0].src },
            }}
          >
            <AppImage width={500} height={500} quality={100} src={dataDiscover[0].src} alt={dataDiscover[0].label}
              className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:blur-xs"
            />
            <div className="absolute inset-0 flex items-end p-2 z-10">
              <span className="text-white font-bold neon-text text-xl">{dataDiscover[0].label}</span>
            </div>
            <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              {dataDiscover[0].description}
            </p>
          </Link>

          {dataDiscover.slice(1).map((img, i) => (
            <Link key={i} className="relative cursor-pointer group overflow-hidden animate-bounce-updown"
              href={{
                pathname: `/country/${encodeURIComponent(img.label)}`,
                query: { img: img.src },
              }}
            >
              <AppImage width={500} height={500} quality={100} src={img.src} alt={img.label}
                className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:blur-xs"
              />
              <div className="absolute inset-0 flex items-end p-2">
                <span className="text-white font-bold neon-text text-xl">{img.label}</span>
              </div>
              <p className="p-4 text-center absolute inset-0 flex items-center justify-center text-white font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                {img.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Discover);

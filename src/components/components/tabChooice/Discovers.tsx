"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { dataDiscover as initialData } from "./data";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Props {
  className?: string;
  title: string;
  autoRotate?: boolean;
}

export default function Discover({ title, className, autoRotate = false }: Props) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (!autoRotate) return
    
    const interval = setInterval(() => {
      setData((prev) => {
        const rotated = [...prev.slice(1), prev[0]];
        return rotated;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <div className={cn("mt-10", className)}>
      <h1 className="text-white neon-text text-2xl text-center">{title}</h1>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {data.map((img, i) => (
            <Link key={i} href={`/country/${encodeURIComponent(img.label)}`} className="relative h-64">
              <Image src={img.src} alt={img.label} fill className="object-cover rounded-2xl animate-blink" />
              <div className="absolute inset-0 flex items-end p-2">
                <span className="text-white font-bold text-sm">{img.label}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-4 grid-rows-3 gap-4">
          <Link key={data[0].label} className="col-span-2 row-span-2 relative rounded-2xl cursor-pointer group overflow-hidden animate-fade-in"
            href={{
              pathname: `/country/${encodeURIComponent(data[0].label)}`,
              query: { img: data[0].src },
            }}
          >
            <Image width={500} height={500} quality={100} src={data[0].src} alt={data[0].label}
              className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:blur-xs"
            />
            <div className="absolute inset-0 flex items-end p-2 z-10">
              <span className="text-white font-bold neon-text text-xl">{data[0].label}</span>
            </div>
            <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              {data[0].description}
            </p>
            </Link>
            
          {data.slice(1).map((img, i) => (
            <Link key={i} className="relative cursor-pointer group overflow-hidden animate-bounce-updown"
              href={{
                pathname: `/country/${encodeURIComponent(img.label)}`,
                query: { img: img.src },
              }}
            >
              <Image width={500} height={500} quality={100} src={img.src} alt={img.label}
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

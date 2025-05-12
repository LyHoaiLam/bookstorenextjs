import { cn } from "@/lib/utils";
import Image from "next/image";
import { dataDiscover } from "./data";
import Link from "next/link";

interface Props {
    className?: string;
    title: string;
}

export default function Discover({title, className}: Props) {
    
   return (
    <div className={cn("mt-10", className)}>
      <h1 className="text-white neon-text text-2xl text-center">{title}</h1>
      <div className="mt-10">
        {/* Mobile layout: Hiển thị ảnh theo chiều dọc */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {dataDiscover.map((img, i) => (
          <Link
            key={i}
            href={`/country/${encodeURIComponent(img.label)}`}
            className="relative h-64">
              <Image src={img.src} alt={img.label} fill
                className="object-cover rounded-2xl animate-blink"
              />
              <div className="absolute inset-0 flex items-end p-2">
                <span className="text-white font-bold text-sm">{img.label}</span>
              </div>
          </Link>
          ))}
        </div>
        {/* Desktop layout */}
        <div className="hidden sm:grid sm:grid-cols-4 grid-rows-3 gap-4">
          <Link
            href={`/country/${encodeURIComponent(dataDiscover[0].label)}`}
            className="col-span-2 row-span-2 relative rounded-2xl cursor-pointer group overflow-hidden">
              <Image width={1000} height={1000} quality={100}
                src={dataDiscover[0].src}
                alt={dataDiscover[0].label}
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
            <Link
              key={i}
              href={`/country/${encodeURIComponent(img.label)}`}
              className="relative cursor-pointer group overflow-hidden">
                <Image width={1000} height={1000} quality={100}
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:blur-xs"
                />
                <div className="absolute inset-0 flex items-end p-2">
                  <span className="text-white font-bold neon-text text-xl">{img.label}</span>
                </div>
                <p className="p-4 text-center absolute inset-0 flex items-center justify-center text-white font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  {dataDiscover[i + 1].description}
                </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
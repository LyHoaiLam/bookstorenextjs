import { cn } from "@/lib/utils";
import Link from "next/link";
import AppImage from "@/components/components/common/Image";


interface Props {
  className?: string;
  id?: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export default function CarouselIemBook({ id, title, description, image, price, className }: Props) {

  return (
    <Link href={`/tour/${id}`}>
      <div className={cn("bg-white p-4 border border-amber-400 rounded-2xl overflow-hidden cursor-pointer", className )}>
            <div>
              <AppImage src={image} width={1000} height={1000} quality={100} alt="Not Found" className="w-full max-w-[400px] h-full min-h-[180px] max-h-[180px] object-cover rounded-2xl"
              />
              <div className="mt-5">
                <h2 className="text-black text-2xl leading-6 text-center">
                  {title}
                </h2>
                <p className="mt-2 text-black text-base leading-6 line-clamp-3 overflow-hidden">
                  {description}
                </p>
                <span className="text-xl text-[red]">
                  {new Intl.NumberFormat("vi-VN").format(price)} VNĐ
                </span>
              </div>
            </div>
          
      </div>
    </Link>
  );
}

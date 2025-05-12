import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export default function CarouselIemBook({
  title,
  description,
  image,
  price,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "bg-white p-4 border border-amber-400 rounded-2xl overflow-hidden cursor-pointer",
        className
      )}
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div>
            <Image
              src={image}
              alt="Not Found"
              width={1000}
              height={1000}
              quality={100}
              className="w-full max-w-[400px] h-full min-h-[180px] max-h-[180px] object-cover rounded-2xl"
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
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription className="text-black dark:text-white">
                
              
              
              {price} VNĐ
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Buy now</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

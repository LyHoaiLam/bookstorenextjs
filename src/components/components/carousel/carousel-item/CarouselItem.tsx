import {
AlertDialog,
AlertDialogAction,
AlertDialogCancel,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
AlertDialogTrigger } from "@/components/ui/alert-dialog"
import Image from "next/image"

interface Props {
    title: string,
    author: string,
    description: string,
    image: string,
    price: number
}

export default function CarouselIemBook({ title, description, author, image, price }: Props) {
    return (
        <div className="p-5 border border-amber-400 rounded-2xl cursor-pointer">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <div>
                        <Image
                            src={image}
                            alt="Not Found"
                            width={1000}
                            height={1000}
                            quality={100}
                            className="w-full h-full object-contain rounded-2xl"
                        />
                        <div className="mt-12">
                            <h4
                                className="text-white text-2xl leading-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                {author}
                            </h4>
                            <p className="mt-6 text-white text-base leading-6">{description}</p>
                        </div>
                                
                    </div>

                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription className="text-[#fff]">
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
    )
}
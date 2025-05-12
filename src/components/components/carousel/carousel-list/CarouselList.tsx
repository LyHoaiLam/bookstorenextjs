'use client'
import {useState, useEffect} from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from "@/components/ui/carousel"
import { cn } from '@/lib/utils';
import CarouselIemBook from "../carousel-item/CarouselItem"

interface Props {
  className?: string;
  title: string;
  data: ItemData[];
}

interface ItemData {
  title: string;
  description: string;
  image: string;
  price: number;
}

export function CarouselList({title, data, className } : Props) {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <div className={cn("", className)}>
        <div className="neon-container">
          <h1 className="text-white neon-text text-2xl">{title}</h1>
        </div>
      <Carousel className="w-full mt-5"
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
      >
        <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 hover-item">
              <CarouselIemBook className="z-1"
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
          </CarouselItem>
        ))}

        </CarouselContent>
        <CarouselPrevious className="cursor-pointer hidden lg:block" />
        <CarouselNext className="cursor-pointer hidden lg:block" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>

    </div>
  )
}

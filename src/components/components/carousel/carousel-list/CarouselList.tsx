import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from "@/components/ui/carousel"
import { data } from "../carousel-item/data"
import CarouselIemBook from "../carousel-item/CarouselItem"

export function CarouselList() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
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
    <div>
      <Carousel
          className="w-full"
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
      
      >
        <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <CarouselIemBook
                title={item.title}
                author={item.author}
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

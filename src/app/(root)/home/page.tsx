'use client'
import { CarouselList } from "@/components/components/carousel/carousel-list/CarouselList"
import AppContainer from "@/components/layouts/Container"
import Link from "next/link"

export default function Home() {

    return (
        <div className="mt-36 h-[2000px]">
            <AppContainer containerClassName="bg-[#1D3A52]" className="bg-transparent">
            <p className="text-amber-400">sorry i am currently creating a new website to use this domain, you can find its source code here: <Link href={"https://github.com/LyHoaiLam/bookstorenextjs"}>https://github.com/LyHoaiLam/bookstorenextjs</Link></p>
            <CarouselList />
          </AppContainer>
        </div>
    )
}
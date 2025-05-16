// app/page.tsx — SERVER COMPONENT
import { dataNgoaiNuoc, dataTrongNuoc } from "@/components/components/carousel/carousel-item/data";
import { CarouselList } from "@/components/components/carousel/carousel-list/CarouselList";
import AppContainer from "@/components/layouts/Container";
import Link from "next/link";
import LazyComponentWrapper from "@/components/components/LazyDiscoverWrapper";
import Discover from "@/components/components/tabChooice/Discovers";

export default function Home() {
  return (
    <div>
      <AppContainer containerClassName="bg-[#F0F8FF] py-10" className="bg-transparent">
        <div className="text-amber-400">
          sorry i am currently creating a new website to use this domain, you can find its source code here:{" "}
          <Link href={"https://github.com/LyHoaiLam/bookstorenextjs"}>https://github.com/LyHoaiLam/bookstorenextjs</Link>
        </div>
        <CarouselList title="Du lịch nội địa" data={dataTrongNuoc} />
        <CarouselList title="Du lịch quốc tế" data={dataNgoaiNuoc} direction="backward" timeAnimation={4000} />
        <LazyComponentWrapper
          Component={Discover} 
          componentProps={{ title: "Khám phá thêm", autoRotate: true }} 
          className="mt-10"
        />

      </AppContainer>
    </div>
  );
}

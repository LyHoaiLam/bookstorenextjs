import { dataNgoaiNuoc, dataTrongNuoc } from "@/components/components/carousel/carousel-item/data";
import AppContainer from "@/components/layouts/Container";
import Link from "next/link";
import Discover from "@/components/components/tabChooice/Discovers";
import Test from "@/components/components/Test";
import CarouselList from "@/components/components/carousel/carousel-list/CarouselList";

export default function Home() {
  return (
    <div>
      <AppContainer containerClassName="bg-[#F0F8FF] py-10" className="bg-transparent">
        <div className="text-amber-400">
          sorry i am currently creating a new website to use this domain, you can find its source code here:{" "}
          <Link href={"https://github.com/LyHoaiLam/bookstorenextjs"}>https://github.com/LyHoaiLam/bookstorenextjs</Link>
        </div>
        <CarouselList title="Du lịch nội địa" data={dataTrongNuoc} />
        <CarouselList title="Du lịch quốc tế" data={dataNgoaiNuoc} />
        <Discover
          title="Khám phá các quốc gia"
          className="mt-10"
        />
        <Test />
      </AppContainer>
    </div>
  );
}

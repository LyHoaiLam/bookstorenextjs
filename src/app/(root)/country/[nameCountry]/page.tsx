'use client'
import IconFacebook from "@/assets/icons/logo/IconFacebook";
import IconLinkedin from "@/assets/icons/logo/IconLinkedin";
import IconTikTok from "@/assets/icons/logo/IconTikTok";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import IconYoutube from "@/assets/icons/logo/IconYoutube";
import AppContainer from "@/components/layouts/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { countryDataMap } from "@/components/components/travelDetail";

export default function CountryPage() {
  const date = '20/12/2024'
  const params = useParams()
  const nameCountry = params?.nameCountry as string
  const decodedName = decodeURIComponent(nameCountry)
  const countryInfo = countryDataMap[decodedName];
  const [selectedImage, setSelectedImage] = useState(countryInfo?.images[0]?.image || "");

  useEffect(() => {
    if (countryInfo?.images?.[0]?.image) {
      setSelectedImage(countryInfo.images[0].image);
    }
  }, [decodedName, countryInfo.images]);

  if (!countryInfo) {
    return <div className="text-center mt-10 text-red-500 text-xl">Không tìm thấy dữ liệu cho quốc gia: {decodedName}</div>;
  }

  const { data, images } = countryInfo;

  return (
    <AppContainer>
      <div className="w-full">
        <div className="relative w-full h-[200px] sm:h-[400px]">
          <div style={{ backgroundImage: `url(${selectedImage})` }} className="absolute inset-0 bg-cover bg-center transition-all duration-300"></div>
          <div className="absolute inset-0 bg-opacity-20 z-4"></div>
        </div>
        <div className="z-5 mt-2 flex justify-center">
          <Carousel className="w-full max-w-[800px] px-4" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem key={idx} className="basis-1/3 md:basis-1/7">
                  <Image width={200} height={200} src={img.image} alt="Thumbnail"
                    onClick={() => setSelectedImage(img.image)}
                    className={`w-20 h-14 object-contain cursor-pointer border-4 rounded ${
                      selectedImage === img.image ? 'border-blue-500' : 'border-transparent'
                    }`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer hidden lg:block" />
            <CarouselNext className="cursor-pointer hidden lg:block" />
          </Carousel>
        </div>
      </div>

      <h1 className="text-2xl font-bold">Quốc gia: {decodedName}</h1>
      <div>Page chi tiết về chuyến khám phá <span className="text-2xl">{decodedName.toUpperCase()}!</span></div>
      <div>
        <h1>{data.title}</h1>
        <div className="flex justify-between flex-wrap">
          <div className="mt-6 flex sm:items-center gap-6 flex-col sm:flex-row">
            <p>{date}</p>
            <Avatar className="">
              <AvatarImage src="/images/avatar/avatar.jpeg" alt="@shadcn" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
            <p>Hoài Lâm</p>
          </div>
          <ul className="mt-6 sm:mt-0 flex gap-6 justify-end">
            <li>
              <Link href={'https://www.facebook.com/hoai.lam.754656/'}>
                <IconFacebook height={40} width={40} />
              </Link>
            </li>

            <li>
              <Link href={'https://www.youtube.com/@LyHoaiLam3999'}>
                <IconYoutube height={40} width={40} />
              </Link>
            </li>

            <li>
              <Link href={'https://www.tiktok.com/@hoailam03999'}>
                <IconTikTok height={40} width={40} />
              </Link>
            </li>

             <li>
              <Link href={'https://www.linkedin.com/in/l%C3%A2m-ho%C3%A0i-70326b309/'}>
                <IconLinkedin height={40} width={40} />
              </Link>
            </li>
          </ul>
        </div>

        <div>
  <div>
    <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{data.title1}</h2>
    <div className="mt-3 flex flex-col gap-4">
      {data.des1.map((text, index) => (
        <p key={index}>
          {text}
          <br />
        </p>
      ))}
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{data.title2}</h2>
    <div className="mt-3 flex flex-col gap-4">
      {data.des2.map((text, index) => (
        <p key={index}>
          {text}
          <br />
        </p>
      ))}
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{data.title3}</h2>
    <div className="mt-3 flex flex-col gap-4">
      {data.des3.map((text, index) => (
        <p key={index}>
          {text}
          <br />
        </p>
      ))}
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{data.title4}</h2>
    <div className="mt-3 flex flex-col gap-4">
      {data.des4.map((text, index) => (
        <p key={index}>
          {text}
          <br />
        </p>
      ))}
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{data.title5}</h2>
    <div className="mt-4 flex flex-col gap-4">
      {data.des5.map((text, index) => (
        <p key={index}>
          {text}
          <br />
        </p>
      ))}
    </div>
  </div>
</div>


      </div>
    </AppContainer>
  );
}

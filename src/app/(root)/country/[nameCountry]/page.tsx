'use client'
import IconFacebook from "@/assets/icons/logo/IconFacebook";
import IconLinkedin from "@/assets/icons/logo/IconLinkedin";
import IconTikTok from "@/assets/icons/logo/IconTikTok";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import IconYoutube from "@/assets/icons/logo/IconYoutube";
import { dataJapanDetail } from "@/components/components/travelDetail/japan";
import AppContainer from "@/components/layouts/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from 'next/navigation'

 const images = [
    '/images/products/Japan/Japan1.png',
    '/images/products/Japan/Japan2.png',
    '/images/products/Japan/Japan3.png',
    '/images/products/Japan/Japan4.png',
    '/images/products/Japan/Japan5.png',
    '/images/products/Japan/Japan6.png',
    '/images/products/Japan/Japan7.png',    
  ]

export default function CountryPage() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const params = useParams()
  const nameCountry = params?.nameCountry as string
  const decodedName = decodeURIComponent(nameCountry)
  const date = '20/12/2024'

  return (
    <AppContainer>
      <div className="relative w-full h-[500px]">
      <div
        style={{ backgroundImage: `url(${selectedImage})` }}
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 h-[200px] sm:h-auto"
      ></div>

      <div className="absolute inset-0 bg-opacity-20 z-4"></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-5 flex gap-2 flex-wrap-">

        <Carousel className="w-full mt-5" opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {images.map((img, idx) => (
                    <CarouselItem key={idx} className="basis-1/3 md:basis-1/7 lg:basis-1/7 xl:basis-1/7 hover-item">
                      <Image width={200} height={200} alt="Not Found Image"
                        src={img}
                        onClick={() => setSelectedImage(img)}
                        className={`w-20 h-14 object-contain cursor-pointer border-4 rounded ${
                          selectedImage === img ? 'border-blue-500' : 'border-transparent'
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
      <h1 className="text-2xl font-bold">Country: {decodedName}</h1>
      <div>Welcome to {decodedName.toUpperCase()}!</div>
      <div>
        <h1>
          Nhật Bản, xứ sở hoa anh đào, vẫn luôn là nơi thu hút rất nhiều khách du lịch trên thế giới. Đến Nhật Bản, bạn có thể ghé thăm những thành phố hiện đại, sầm uất như Tokyo, Yokohama hay tham quan những vùng đất đậm nét truyền thống, cổ kính như Kyoto, Nagoya; hoặc đắm mình giữa cảnh sắc thiên nhiên xinh đẹp của núi Phú Sĩ và các suối nước nóng ở Noboribetsu…
        </h1>
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
            <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{dataJapanDetail.title1}</h2>
            <div className="mt-3 flex flex-col gap-4">
              {dataJapanDetail.des1.map((text, index) => (
                <p key={index}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{dataJapanDetail.title2}</h2>
            <div className="mt-3 flex flex-col gap-4">
              {dataJapanDetail.des2.map((text, index) => (
                <p key={index}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
          </div>
   
          <div>
            <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{dataJapanDetail.title3}</h2>
            <div className="mt-3 flex flex-col gap-4">
              {dataJapanDetail.des3.map((text, index) => (
                <p key={index}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{dataJapanDetail.title4}</h2>
            <div className="mt-3 flex flex-col gap-4">
              {dataJapanDetail.des4.map((text, index) => (
                <p key={index}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-[#1E90FF] mt-10">{dataJapanDetail.title5}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {dataJapanDetail.des5.map((text, index) => (
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

'use client';
import { useParams } from 'next/navigation';
import AppContainer from "@/components/layouts/Container";
import FormTour from "./FormTour/FormTour";
import { dataJapanDetail, imagesJapan } from "../travelDetail/japan";
import { dataKoreanDetail, imagesKorean } from "../travelDetail/korean";
import AppImage from "@/components/components/common/Image";

export default function TourItem() {

    const params = useParams()
    const id = Number(params.id)

    let dataDetail;
    let imageDetail;

    if (id === 1) {
        dataDetail = dataJapanDetail
        imageDetail = imagesJapan
    } else if (id === 7) {
        dataDetail = dataKoreanDetail
        imageDetail = imagesKorean
    } else {
        return (
            <AppContainer>
                <h1 className="text-2xl mt-12">Không tìm thấy thông tin tour này</h1>
            </AppContainer>
        )
    }

    return (
        <AppContainer>
            <div className="grid grid-rows-2 sm:grid-cols-5 gap-10">

                <div className="sm:col-span-3 grid-rows-1">

                    <div>
                        <h2 className="mt-12 text-3xl">{dataDetail.title1}</h2>
                        <AppImage
                            width={500}
                            height={500}
                            src={imageDetail[1].image}
                            alt="Tour Image"
                            className="mt-6 w-full h-auto object-cover"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            {dataDetail.des1.map((item: string, index: number) => (
                                <p key={index} className="text-base">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="mt-12 text-3xl">{dataDetail.title2}</h2>
                        <AppImage
                            width={500}
                            height={500}
                            src={imageDetail[2].image}
                            alt="Tour Image"
                            className="mt-6 w-full h-auto object-cover"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            {dataDetail.des2.map((item: string, index: number) => (
                                <p key={index} className="text-base">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="mt-12 text-3xl">{dataDetail.title3}</h2>
                        <AppImage
                            width={500}
                            height={500}
                            src={imageDetail[3].image}
                            alt="Tour Image"
                            className="mt-6 w-full h-auto object-cover"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            {dataDetail.des3.map((item: string, index: number) => (
                                <p key={index} className="text-base">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="mt-12 text-3xl">{dataDetail.title4}</h2>
                        <AppImage
                            width={500}
                            height={500}
                            src={imageDetail[4].image}
                            alt="Tour Image"
                            className="mt-6 w-full h-auto object-cover"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            {dataDetail.des4.map((item: string, index: number) => (
                                <p key={index} className="text-base">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="mt-12 text-3xl">{dataDetail.title5}</h2>
                        <AppImage
                            width={500}
                            height={500}
                            src={imageDetail[5].image}
                            alt="Tour Image"
                            className="mt-6 w-full h-auto object-cover"
                        />
                        <div className="flex flex-col gap-4 mt-4">
                            {dataDetail.des5.map((item: string, index: number) => (
                                <p key={index} className="text-base">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="grid-rows-1 max-h-[450px] sm:max-h-[400px]  sm:col-span-2 shadow-xl p-6">
                    <FormTour />
                </div>
            </div>
        </AppContainer>
    );
}

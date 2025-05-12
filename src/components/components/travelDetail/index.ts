import { dataAmericanDetail, imagesAmerican } from "./american";
import { dataJapanDetail, imagesJapan } from "./japan";
import { dataTurkyDetail, imagesTurky } from "./turkey";

export const countryDataMap: Record<string, { data: any; images: { image: string }[] }> = {
  "Nhật Bản": {
    data: dataJapanDetail,
    images: imagesJapan,
  },
  "Thổ Nhĩ Kỳ": {
    data: dataTurkyDetail,
    images: imagesTurky,
  },
  "Hoa kỳ": {
    data: dataAmericanDetail,
    images: imagesAmerican,
  },

};

import { dataAmericanDetail, imagesAmerican } from "./american";
import { dataJapanDetail, imagesJapan } from "./japan";
import { dataTurkyDetail, imagesTurky } from "./turkey";


type CountryDetail = {
  title: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  des1: string[];
  des2: string[];
  des3: string[];
  des4: string[];
  des5: string[];
};



export const countryDataMap: Record<string, { data: CountryDetail; images: { image: string }[] }> = {
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

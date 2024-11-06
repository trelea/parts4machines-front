export interface Service {
  documentId: string;
  title_en: string;
  title_ru: string;
  title_ua: string;
  title_es: string;
  description_en: string | null | undefined;
  description_ru: string | null | undefined;
  description_ua: string | null | undefined;
  description_es: string | null | undefined;
  price: number;
  image: {
    formats: {
      large: { url: string; name: string };
      small: { url: string; name: string };
      medium: { url: string; name: string };
      thumbnail: { url: string; name: string };
    };
  };
}

export interface getServices {
  data: Service[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

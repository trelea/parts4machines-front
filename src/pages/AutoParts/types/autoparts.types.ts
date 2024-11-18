export interface AutoPart {
  documentId: string;
  name: string;
  oem: string;
  cars: string;
  price: number;
  stock: number;
  images: {
    formats: {
      large: { url: string; name: string };
      small: { url: string; name: string };
      medium: { url: string; name: string };
      thumbnail: { url: string; name: string };
    };
  }[];
}

export interface getAutoParts {
  data: AutoPart[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface getAutoPart {
  data: AutoPart & {
    id: number;
    tags: string;
    part_status: number;
    description: string;
  };
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Vehicle {
  id: number;
  documentId: string;
  mark: string;
  model: string;
  vin: string | null;
  description: string | null;
  price: number;
  year: number;
  engine_capacity: number;
  horse_power: number;
  seats: number;
  stock: boolean;
  tags: string;
  odometer: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  location: string;
  images: {
    formats: {
      large: { url: string; name: string };
      small: { url: string; name: string };
      medium: { url: string; name: string };
      thumbnail: { url: string; name: string };
    };
  }[];
}

export interface getVehicles {
  data: Vehicle[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface locales {
  en: string;
  ua: string;
  ru: string;
  es: string;
}
export interface getVehicle extends Vehicle {
  data: Vehicle & {
    fuel: locales;
    wheel: locales;
    body: locales;
    color: locales;
    traction: locales;
    transmission: locales;
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

export interface PostVehicleOrder {
  data: {
    client: string;
    email: string;
    contact: string;
    car: string;
    negotiate?: number | undefined | null;
  };
}

export interface PostVehicleOrderRes {
  id: number;
  documentId: string;
  client: string;
  negotiate: number | null;
  contact: string;
}

export interface AdditionalForm {
  data: { client: string; contact: string; car: string };
}

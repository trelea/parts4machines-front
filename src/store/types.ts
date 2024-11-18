export interface CartState {
  created_at: Date | null;
  expires_at: Date | null;
  // vehicles: { documentId: string }[] | [];
  services:
    | {
        documentId: string;
        quantity: number;
        price: number;
        title: {
          title_en: string;
          title_ru: string;
          title_ua: string;
          title_es: string;
        };
      }[]
    | [];
  parts:
    | { documentId: string; quantity: number; price: number; name: string }[]
    | [];

  // Vehicle Functions
  // addVehicle: ({ documentId }: { documentId: string }) => void;
  // removeVehicle: ({ documentId }: { documentId: string }) => void;

  // Service Functions
  addService: ({
    documentId,
    price,
    title,
  }: {
    documentId: string;
    price: number;
    title: {
      title_en: string;
      title_ru: string;
      title_ua: string;
      title_es: string;
    };
  }) => void;
  removeService: ({ documentId }: { documentId: string }) => void;
  increaseServiceQuantity: ({ documentId }: { documentId: string }) => void;
  decreaseServiceQuantity: ({ documentId }: { documentId: string }) => void;

  // Parts Functions
  addPart: ({
    documentId,
    price,
    name,
  }: {
    documentId: string;
    price: number;
    name: string;
  }) => void;
  removePart: ({ documentId }: { documentId: string }) => void;
  increasePartQuantity: ({ documentId }: { documentId: string }) => void;
  decreasePartQuantity: ({ documentId }: { documentId: string }) => void;

  // Clear all
  resetCart: () => void;
}

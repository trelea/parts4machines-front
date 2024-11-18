import { create } from 'zustand';
import { CartState } from './types';
import { setExpirationDate } from './utils';
import { persist } from 'zustand/middleware';

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set) => ({
      created_at: null,
      expires_at: null,
      services: [],
      parts: [],

      // Services Functions
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
      }) =>
        set((state: CartState) => {
          setExpirationDate(state);
          return {
            services: [
              ...(state.services as []),
              { documentId, quantity: 1, price, title },
            ],
          };
        }),
      removeService: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          return {
            services: state.services?.filter(
              (v) => v.documentId !== documentId
            ),
          };
        }),
      increaseServiceQuantity: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          return {
            services: state.services.map((service) => {
              return service.documentId === documentId
                ? { ...service, quantity: service.quantity + 1 }
                : service;
            }),
          };
        }),
      decreaseServiceQuantity: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          return {
            services: state.services.map((service) => {
              return service.documentId === documentId
                ? { ...service, quantity: service.quantity - 1 }
                : service;
            }),
          };
        }),

      // Parts Functions
      addPart: ({
        documentId,
        price,
        name,
      }: {
        documentId: string;
        price: number;
        name: string;
      }) =>
        set((state: CartState) => {
          setExpirationDate(state);
          return {
            parts: [
              ...(state.parts as []),
              { documentId, quantity: 1, price, name },
            ],
          };
        }),
      removePart: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          return {
            parts: state.parts?.filter((v) => v.documentId !== documentId),
          };
        }),
      increasePartQuantity: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          return {
            parts: state.parts.map((part) => {
              return part.documentId === documentId
                ? { ...part, quantity: part.quantity + 1 }
                : part;
            }),
          };
        }),
      decreasePartQuantity: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          return {
            parts: state.parts.map((part) => {
              return part.documentId === documentId
                ? { ...part, quantity: part.quantity - 1 }
                : part;
            }),
          };
        }),

      // Reste Cart
      resetCart: () =>
        set({
          created_at: null,
          expires_at: null,
          parts: [],
          services: [],
        }),
    }),
    { name: 'cart-storage' }
  )
);

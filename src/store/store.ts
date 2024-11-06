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
      addService: ({ documentId }: { documentId: string }) =>
        set((state: CartState) => {
          setExpirationDate(state);
          return {
            services: [...(state.services as []), { documentId, quantity: 1 }],
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

export interface CartState {
  created_at: Date | null;
  expires_at: Date | null;
  // vehicles: { documentId: string }[] | [];
  services: { documentId: string; quantity: number }[] | [];
  parts: { documentId: string; quantity: number }[] | [];

  // Vehicle Functions
  // addVehicle: ({ documentId }: { documentId: string }) => void;
  // removeVehicle: ({ documentId }: { documentId: string }) => void;

  // Service Functions
  addService: ({ documentId }: { documentId: string }) => void;
  removeService: ({ documentId }: { documentId: string }) => void;
  increaseServiceQuantity: ({ documentId }: { documentId: string }) => void;
  decreaseServiceQuantity: ({ documentId }: { documentId: string }) => void;

  // Clear all
  resetCart: () => void;
}

export interface CheckOut {
  parts?: { documentId: string; quantity: number; name: string }[];
  services?: { documentId: string; quantity: number; title: string }[];
}

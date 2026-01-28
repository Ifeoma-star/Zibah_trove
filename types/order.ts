import { CartItem } from "./cart";

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface DeliveryDetails {
  date: string;
  time: string;
  instructions?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  deliveryDetails: DeliveryDetails;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  createdAt: Date;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export type PaymentMethod =
  | "card"
  | "bank_transfer"
  | "cash_on_delivery";

export interface CheckoutFormData {
  shipping: ShippingAddress;
  delivery: DeliveryDetails;
  paymentMethod: PaymentMethod;
}

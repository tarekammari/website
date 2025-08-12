import { Suspense } from "react";
import CartClient from "../../components/CartClient";

export const metadata = {
  title: "Cart — TAREK AMMARI",
};

export default function CartPage() {
  return (
    <Suspense>
      <CartClient />
    </Suspense>
  );
}



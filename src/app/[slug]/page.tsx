import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";

import ConsumptionMethodOptionProps from "./components/consumption-methods-option";
import ConsumptionMethodOption from "./components/consumption-methods-option";

// Interface que define quais props vai receber
interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

//componente async (serve-component)
const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug: slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center"></div>
      <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
      <p className="opacity-55">
        Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer
        praticidade e sabor em cada detalhe!
      </p>

      <div className="grid grid-cols-2 gap4 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          buttonText="Para Comer Aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in.png"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          buttonText="Para Levar"
          imageAlt="Comer levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;

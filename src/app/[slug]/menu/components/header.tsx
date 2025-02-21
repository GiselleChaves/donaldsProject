"use client"; //para tranformar um component em clien-component

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface ReataurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

const RestaurantHeader = ({ restaurant }: ReataurantHeaderProps) => {
    const router = useRouter()
  return (

    <div className="relative h-[250px] w-full">
    <Button
      variant="secondary"
      size="icon"
      className="absolute left-4 top-4 z-50 rounded-full"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon />
    </Button>
    
    <Image
      src={restaurant.coverImageUrl}
      alt={restaurant.name}
      className="object-cover"
      fill
    />
    <Button
      variant="secondary"
      size="icon"
      className="absolute right-4 top-4 rounded-full z-50"
    >
      <ScrollTextIcon />
    </Button>
  </div>
  );
};

export default RestaurantHeader;

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface BarbershoItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershoItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1">
        <div className="px-1 w-full h-[159px] relative">
          <Image
            height={0}
            width={0}
            sizes="100vw"
            className="rounded-2xl"
            fill
            src={barbershop.imageUrl}
            alt={barbershop.name}
            style={
                {objectFit: "cover"}
            }
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button className="w-full mt-3" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
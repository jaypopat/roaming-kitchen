import Image from "next/image";
import { Card } from "./ui/card";
export default function Founder({ role, photo, name }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[300px] h-[400px] overflow-hidden rounded-md">
        <div className="relative w-full h-full">
          <Image
            alt={name}
            src={photo}
            width={300}
            height={400}
            objectFit="cover"
            sizes="300px"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
}

import Image from "next/image";
import { Card } from "./ui/card";
export default function Founder({ role, photo, name }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Card>
        <Image
          alt={name}
          src={photo}
          width={400}
          height={500}
          className="aspect-video object-cover rounded-md"
        />
      </Card>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
}

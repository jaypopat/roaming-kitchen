import { Card, CardContent } from "@/components/ui/card";

export default function Award({ title, description }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

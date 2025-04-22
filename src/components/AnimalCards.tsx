
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Animal = {
  id: string;
  name: string;
  type: "cat" | "dog";
  age: string;
  description: string;
  image: string;
};

const animals: Animal[] = [
  {
    id: "1",
    name: "Барсик",
    type: "cat",
    age: "2 года",
    description: "Ласковый и игривый котик, любит сидеть на коленях",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Рекс",
    type: "dog",
    age: "3 года",
    description: "Дружелюбный и активный пес, обожает прогулки",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Мурка",
    type: "cat",
    age: "1 год",
    description: "Спокойная кошечка, любит тишину и уют",
    image: "/placeholder.svg"
  },
];

export const AnimalCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {animals.map((animal) => (
        <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-shadow border border-accent/50">
          <div className="aspect-square relative">
            <img 
              src={animal.image} 
              alt={animal.name}
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{animal.name}</span>
              <span className="text-sm font-normal px-2 py-1 bg-accent rounded-full text-secondary">
                {animal.type === "cat" ? "Кошка" : "Собака"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{animal.age}</p>
            <p className="text-gray-700">{animal.description}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-orange-dark text-white">Узнать больше</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

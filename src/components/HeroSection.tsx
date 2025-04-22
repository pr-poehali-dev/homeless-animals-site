
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      ></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Подарите дом бездомному питомцу
          </h1>
          <p className="text-xl mb-8">
            Наш приют помогает найти любящий дом для кошек и собак. 
            Все наши питомцы ищут заботливых хозяев и готовы дарить любовь и преданность.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Смотреть питомцев
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Как помочь приюту
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

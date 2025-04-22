
import { Button } from "@/components/ui/button";
import { AnimalCards } from "@/components/AnimalCards";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowToHelp } from "@/components/HowToHelp";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Наши питомцы ищут дом</h2>
          <AnimalCards />
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Смотреть всех питомцев
            </Button>
          </div>
        </section>
        <HowToHelp />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2023 Приют для бездомных животных "Добрые лапки"</p>
          <p className="mt-2">Адрес: г. Москва, ул. Примерная, д. 123</p>
          <p className="mt-1">Телефон: +7 (999) 123-45-67</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

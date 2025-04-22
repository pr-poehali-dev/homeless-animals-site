
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AnimalCards } from "@/components/AnimalCards";
import { HowToHelp } from "@/components/HowToHelp";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Наши питомцы</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Познакомьтесь с нашими замечательными питомцами, 
                которые ждут своих новых хозяев и любящий дом.
              </p>
            </div>
            
            <AnimalCards />
            
            <div className="mt-12 text-center">
              <a 
                href="/animals" 
                className="inline-flex items-center text-primary hover:text-orange-dark font-medium"
              >
                Посмотреть всех питомцев
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        <HowToHelp />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-orange-light/20 to-green-light/20 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Готовы изменить жизнь питомца?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                Приходите к нам в приют и познакомьтесь с нашими питомцами лично. 
                Возможно, именно вы станете тем самым человеком, которого они ждут!
              </p>
              <Button className="bg-primary hover:bg-orange-dark text-white">
                Посетить приют
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Добрые лапки</h3>
              <p className="text-gray-300">
                Приют для бездомных животных, 
                помогающий найти дом для кошек и собак с 2015 года.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-gray-300 mb-2">
                г. Москва, ул. Примерная, д. 123
              </p>
              <p className="text-gray-300 mb-2">
                Телефон: +7 (123) 456-78-90
              </p>
              <p className="text-gray-300">
                Email: info@dobrie-lapki.ru
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="text-gray-300 mb-2">
                Пн-Пт: 10:00 - 19:00
              </p>
              <p className="text-gray-300">
                Сб-Вс: 10:00 - 17:00
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
            <p>© 2023 Добрые лапки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

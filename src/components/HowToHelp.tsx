
import { Button } from "@/components/ui/button";
import { HeartHandshake, PawPrint, Truck } from "lucide-react";

export const HowToHelp = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Как вы можете помочь</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наш приют существует благодаря поддержке неравнодушных людей. 
            Есть несколько способов помочь нашим подопечным.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-accent/50 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Стать волонтером</h3>
            <p className="text-gray-600 mb-4 text-center">
              Помогите ухаживать за животными, участвуйте в выгулах и социализации питомцев.
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
              Подать заявку
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-accent/50 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-secondary/10 rounded-full">
                <PawPrint className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Пожертвования</h3>
            <p className="text-gray-600 mb-4 text-center">
              Ваши финансовые пожертвования помогают нам покупать корм, 
              лекарства и оплачивать ветеринарные услуги.
            </p>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
              Сделать пожертвование
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-accent/50 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Truck className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Привезти товары</h3>
            <p className="text-gray-600 mb-4 text-center">
              Мы всегда нуждаемся в кормах, подстилках, игрушках, 
              средствах для уборки и других товарах для животных.
            </p>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
              Список необходимого
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

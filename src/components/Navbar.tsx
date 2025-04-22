
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Добрые лапки</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Главная
            </Link>
            <Link to="/animals" className="text-gray-700 hover:text-primary font-medium">
              Питомцы
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              О приюте
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-primary font-medium">
              Как помочь
            </Link>
          </nav>
          
          <div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Взять питомца
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

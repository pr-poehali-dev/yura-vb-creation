import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-montserrat font-bold text-primary">
              StyleHub
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors font-opensans"
              >
                Женщинам
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors font-opensans"
              >
                Мужчинам
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors font-opensans"
              >
                Аксессуары
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors font-opensans"
              >
                Новинки
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button className="hidden md:block font-opensans">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-4">StyleHub</h4>
            <p className="text-white/80 font-opensans mb-4">
              Стильная одежда и аксессуары для создания вашего уникального
              образа
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={20}
                className="cursor-pointer hover:text-primary transition-colors"
              />
              <Icon
                name="Facebook"
                size={20}
                className="cursor-pointer hover:text-primary transition-colors"
              />
              <Icon
                name="Twitter"
                size={20}
                className="cursor-pointer hover:text-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <h5 className="font-montserrat font-semibold mb-4">Каталог</h5>
            <ul className="space-y-2 font-opensans text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Женщинам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мужчинам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Аксессуары
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новинки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-montserrat font-semibold mb-4">Помощь</h5>
            <ul className="space-y-2 font-opensans text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Размеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-montserrat font-semibold mb-4">Контакты</h5>
            <div className="space-y-2 font-opensans text-white/80">
              <p>8 (800) 123-45-67</p>
              <p>info@stylehub.ru</p>
              <p>Работаем: 10:00 - 22:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 font-opensans">
            © 2024 StyleHub. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

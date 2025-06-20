import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Классическое пальто",
    price: "12 990",
    oldPrice: "15 990",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    badge: "Скидка",
  },
  {
    id: 2,
    name: "Стильные джинсы",
    price: "4 590",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    badge: "Хит",
  },
  {
    id: 3,
    name: "Кожаная сумка",
    price: "8 990",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    badge: "Новинка",
  },
  {
    id: 4,
    name: "Вязаный свитер",
    price: "6 490",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-montserrat font-semibold text-foreground mb-4">
            Рекомендуем для вас
          </h3>
          <p className="text-muted-foreground font-opensans max-w-2xl mx-auto">
            Специально подобранные товары, которые сейчас особенно актуальны
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-opensans font-medium px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Icon name="Heart" size={16} />
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-opensans font-medium text-foreground">
                  {product.name}
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-montserrat font-semibold text-foreground">
                    {product.price} ₽
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm font-opensans text-muted-foreground line-through">
                      {product.oldPrice} ₽
                    </span>
                  )}
                </div>
                <Button className="w-full font-opensans">В корзину</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="font-opensans">
            Посмотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Женская мода",
    description: "Элегантные платья, стильные костюмы",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=600&fit=crop",
    items: "230+ товаров",
    gradient: "from-pink-500/80 to-purple-600/80",
  },
  {
    title: "Мужской стиль",
    description: "Классические рубашки, casual wear",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    items: "180+ товаров",
    gradient: "from-blue-500/80 to-[#9b87f5]/80",
  },
  {
    title: "Аксессуары",
    description: "Сумки, украшения, часы",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
    items: "95+ товаров",
    gradient: "from-[#9b87f5]/80 to-pink-500/80",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Наши
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-purple-600">
              {" "}
              коллекции
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждая категория создана с особым вниманием к деталям и современным
            трендам
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl h-80 mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-1">
                    {category.description}
                  </p>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                    {category.items}
                  </span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#9b87f5] to-purple-600 hover:from-purple-600 hover:to-[#9b87f5] text-white font-medium py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Смотреть коллекцию
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

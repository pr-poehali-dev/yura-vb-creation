import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Женская одежда",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop",
    items: "230+ товаров",
  },
  {
    title: "Мужская одежда",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    items: "180+ товаров",
  },
  {
    title: "Аксессуары",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    items: "95+ товаров",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-montserrat font-semibold text-foreground mb-4">
            Популярные категории
          </h3>
          <p className="text-muted-foreground font-opensans max-w-2xl mx-auto">
            Выберите категорию и найдите именно то, что подчеркнет ваш стиль
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-montserrat font-semibold mb-1">
                    {category.title}
                  </h4>
                  <p className="text-sm font-opensans opacity-90">
                    {category.items}
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full font-opensans">
                Смотреть все
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

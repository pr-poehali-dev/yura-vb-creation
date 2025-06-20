import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-accent via-secondary to-primary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-foreground leading-tight">
              Новая коллекция
              <span className="text-primary block">Весна 2024</span>
            </h2>
            <p className="text-xl text-muted-foreground font-opensans max-w-lg">
              Откройте для себя стильные образы и трендовые аксессуары для
              создания идеального look'а
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="font-opensans font-medium">
                Смотреть коллекцию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-opensans font-medium"
              >
                Новинки
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-tr from-primary/20 to-accent rounded-3xl p-8 h-96 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=400&fit=crop"
                alt="Модная одежда"
                className="rounded-2xl object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

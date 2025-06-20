
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239b87f5" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#9b87f5] to-purple-500 text-white text-sm font-medium rounded-full">
                ✨ Новая коллекция 2024
              </span>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Стиль
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-purple-600">
                  который
                </span>
                вдохновляет
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Откройте для себя уникальные образы и трендовые аксессуары для создания вашего идеального стиля
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#9b87f5] to-purple-600 hover:from-purple-600 hover:to-[#9b87f5] text-white font-medium px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Смотреть коллекцию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white font-medium px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Новинки сезона
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#9b87f5]/20 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-pink-300/30 to-[#9b87f5]/20 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=700&fit=crop"
                alt="Стильная модель"
                className="rounded-2xl object-cover w-full h-96 shadow-lg"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">1.2k+ довольных клиентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

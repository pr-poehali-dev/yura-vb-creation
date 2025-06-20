
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#9b87f5] to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-6">
            Будьте в курсе новинок
          </h3>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Подпишитесь на нашу рассылку и получайте эксклюзивные предложения первыми
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 focus:border-white/50 rounded-2xl py-3 px-6"
            />
            <Button className="bg-white text-[#9b87f5] hover:bg-purple-50 font-medium px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Подписаться
            </Button>
          </div>
          
          <p className="text-sm text-purple-200 mt-4">
            Никакого спама, только стильные новости ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import { Button } from "@/components/ui/button";

const Delivery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Доставка</h1>
      <div className="max-w-md mx-auto">
        <p className="text-muted-foreground mb-6">Информация о доставке</p>
        <Button className="w-full">Выбрать способ доставки</Button>
      </div>
    </div>
  );
};

export default Delivery;

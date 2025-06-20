import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Product = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square bg-muted rounded-lg"></div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Название товара</h1>
          <p className="text-xl font-semibold mb-4">₽ 2,990</p>
          <p className="text-muted-foreground mb-6">Описание товара</p>
          <Button className="w-full">Добавить в корзину</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;

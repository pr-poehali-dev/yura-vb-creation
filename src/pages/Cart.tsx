import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Корзина</h1>
      <div className="text-center py-12">
        <Icon
          name="ShoppingCart"
          size={48}
          className="mx-auto mb-4 text-muted-foreground"
        />
        <p className="text-muted-foreground mb-4">Ваша корзина пуста</p>
        <Button>Продолжить покупки</Button>
      </div>
    </div>
  );
};

export default Cart;

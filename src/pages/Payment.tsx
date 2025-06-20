import { Button } from "@/components/ui/button";

const Payment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Оплата</h1>
      <div className="max-w-md mx-auto">
        <p className="text-muted-foreground mb-6">Выберите способ оплаты</p>
        <Button className="w-full">Оплатить</Button>
      </div>
    </div>
  );
};

export default Payment;

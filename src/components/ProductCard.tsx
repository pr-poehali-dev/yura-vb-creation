import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  category,
  isFavorite = false,
  onFavoriteToggle,
  onAddToCart,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    onAddToCart?.(id);
    setIsLoading(false);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            -{discount}%
          </Badge>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
          onClick={() => onFavoriteToggle?.(id)}
        >
          <Icon
            name={isFavorite ? "Heart" : "Heart"}
            size={16}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }
          />
        </Button>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{price}₽</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}₽
              </span>
            )}
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={isLoading}
            className="ml-2"
          >
            {isLoading ? (
              <Icon name="Loader2" size={16} className="animate-spin" />
            ) : (
              <Icon name="ShoppingCart" size={16} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

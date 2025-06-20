import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";

const mockProducts = [
  {
    id: "1",
    title: "Классическая белая рубашка",
    price: 3990,
    originalPrice: 4990,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    category: "Рубашки",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "blue"],
  },
  {
    id: "2",
    title: "Джинсы прямого кроя",
    price: 5990,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    category: "Джинсы",
    sizes: ["30", "32", "34", "36"],
    colors: ["blue", "black"],
  },
  {
    id: "3",
    title: "Кожаная куртка",
    price: 12990,
    originalPrice: 15990,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "Куртки",
    sizes: ["S", "M", "L"],
    colors: ["black", "brown"],
  },
];

const categories = ["Все", "Рубашки", "Джинсы", "Куртки", "Аксессуары"];
const sizes = ["XS", "S", "M", "L", "XL", "30", "32", "34", "36"];
const colors = [
  { name: "black", label: "Черный" },
  { name: "white", label: "Белый" },
  { name: "blue", label: "Синий" },
  { name: "brown", label: "Коричневый" },
];

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleFavoriteToggle = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const handleAddToCart = (productId: string) => {
    console.log("Добавлен в корзину:", productId);
  };

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    const matchesSize =
      selectedSizes.length === 0 ||
      selectedSizes.some((size) => product.sizes.includes(size));
    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.some((color) => product.colors.includes(color));

    return matchesSearch && matchesCategory && matchesSize && matchesColor;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Каталог</h1>
          <Button
            variant="outline"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="md:hidden"
          >
            <Icon name="Filter" size={16} className="mr-2" />
            Фильтры
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div
            className={`space-y-6 ${isFiltersOpen ? "block" : "hidden"} md:block`}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Поиск</h3>
              <Input
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Категории</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Размеры</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={
                      selectedSizes.includes(size) ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => {
                      setSelectedSizes((prev) =>
                        prev.includes(size)
                          ? prev.filter((s) => s !== size)
                          : [...prev, size],
                      );
                    }}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Цвета</h3>
              <div className="space-y-3">
                {colors.map((color) => (
                  <div key={color.name} className="flex items-center space-x-2">
                    <Checkbox
                      id={color.name}
                      checked={selectedColors.includes(color.name)}
                      onCheckedChange={(checked) => {
                        setSelectedColors((prev) =>
                          checked
                            ? [...prev, color.name]
                            : prev.filter((c) => c !== color.name),
                        );
                      }}
                    />
                    <label htmlFor={color.name} className="text-sm">
                      {color.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Товары */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Найдено: {filteredProducts.length} товаров
                </span>
                {(selectedSizes.length > 0 ||
                  selectedColors.length > 0 ||
                  selectedCategory !== "Все") && (
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "Все" && (
                      <Badge variant="secondary">
                        {selectedCategory}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => setSelectedCategory("Все")}
                        >
                          <Icon name="X" size={12} />
                        </Button>
                      </Badge>
                    )}
                    {selectedSizes.map((size) => (
                      <Badge key={size} variant="secondary">
                        {size}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() =>
                            setSelectedSizes((prev) =>
                              prev.filter((s) => s !== size),
                            )
                          }
                        >
                          <Icon name="X" size={12} />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">
                    Цена: по возрастанию
                  </SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="newest">Новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={product.category}
                  isFavorite={favorites.includes(product.id)}
                  onFavoriteToggle={handleFavoriteToggle}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

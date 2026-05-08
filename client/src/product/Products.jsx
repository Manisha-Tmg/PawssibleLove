import { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";

export default function PetFoodProducts() {
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 1,
      name: "CHICKEN & RICE",
      price: 40.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=400&fit=crop",
      backgroundColor: "bg-yellow-100",
    },
    {
      id: 2,
      name: "FISH & POTATO",
      price: 50.0,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=400&fit=crop",
      backgroundColor: "bg-blue-100",
    },
    {
      id: 3,
      name: "KANGAROO & LAMB",
      price: 60.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=300&h=400&fit=crop",
      backgroundColor: "bg-red-100",
    },
  ];

  const handleFavoriteClick = (productId) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }

      return [...prev, productId];
    });
  };

  const showStarRating = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />,
      );
    }

    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product box */}
              <div
                className={`relative ${product.backgroundColor} rounded-3xl p-8 mb-6`}
              >
                {/* Image */}
                <div className="aspect-[3/4] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => handleFavoriteClick(product.id)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-600" />

                  {/* Red dot for favorite */}
                  {favorites.includes(product.id) && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                    </div>
                  )}
                </button>
              </div>

              {/* Product details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-center">
                  {showStarRating(product.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button at bottom */}
        <div className="mt-16 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

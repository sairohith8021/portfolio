import React from 'react';
import { Star } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-medium text-lg mb-2 flex-grow">{product.title}</h3>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < product.rating ? 'fill-[#febd69] text-[#febd69]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-[#febd69] text-black px-4 py-2 rounded-md hover:bg-[#f3a847] transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}